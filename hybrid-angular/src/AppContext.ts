import { NgModuleRef, Type } from '@angular/core';
import { APPLICATION_ID } from './helpers';
import { Store } from 'redux';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HostedAppState, HostedRouter } from './types';

declare global {
  interface Window {
    Apps: Record<string, AppConfig>;
  }
}

interface AppConfig {
  id: string;
  mount: (container: Element, router: HostedRouter, store: Store<HostedAppState>) => Promise<void>;
  unmount: () => void;
}

class AppContext {

  /**
   * Holding the mounted application instance
   */
  app?: NgModuleRef<any>;
  /**
   * Holding application HTML element reference
   */
  element?: Element;
  /**
   * Holding hosted app's store for syncing states between applications
   */
  store?: Store<any, any>;
  /**
   * Holding hosted app's router for syncing states between applications
   */
  router?: HostedRouter;


  /**
   * Adds new application config to Apps global variable
   * to provide the ability to render the application with
   * mount function window.Apps.[ApplicationId].mount(...)
   * @param appModule
   */
  init = (appModule: Type<any>) => {
    window.Apps = {
      ...window.Apps,
      [APPLICATION_ID]: {
        id: APPLICATION_ID,
        mount: this.createMountFunction(appModule),
        unmount: this.destroy
      }
    };
  }

  /**
   * Create mount function to be stored on window.Apps array.
   * Calling the generated function with element, store will
   * build and render the angular application inside passed element
   * @param appModule
   */
  private createMountFunction = (appModule: Type<any>) => {
    return async (container: Element, router: HostedRouter, store: Store<HostedAppState>) => {
      this.element = this.createRenderElement(container);
      this.store = store;
      this.app = await platformBrowserDynamic().bootstrapModule(appModule);
    }
  }

  /**
   * get HTML element reference and append new child
   * element with full width/height to host the bootstrapped angular
   * @param container HTML element provided by hosted application
   */
  private createRenderElement = (container: Element) => {
    const appEl = document.createElement(APPLICATION_ID)
    appEl.style.position = 'relative'
    appEl.style.height = '100%';
    appEl.style.width = '100%';
    appEl.style.overflow = 'auto';
    container.appendChild(appEl);
    return appEl;
  }

  /**
   * Destroy and unmount bootstrapped angular application from
   * DOM and remove the appended child
   */
  destroy = () => {
    if (this.app != null) {
      this.app.destroy();
    }

    this.app = undefined;

    if (this.element != null) {
      this.element.parentElement?.removeChild(this.element)
    }
    this.element = undefined;
  }
}


/**
 * exported instance of class for singleton use
 * across application modules
 */
export default new AppContext()
