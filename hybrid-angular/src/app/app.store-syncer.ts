import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import AppContext from '../AppContext';
import { HostedAppState } from '../types';

@Injectable({
  providedIn: 'root',
})
export class StoreConnector {
  private stateSubject = new BehaviorSubject<HostedAppState>({} as HostedAppState);
  private userStateSubject = new BehaviorSubject<HostedAppState['user']>({} as HostedAppState['user']);

  get state$(): Observable<HostedAppState> {
    return this.stateSubject.asObservable();
  }

  get userState$(): Observable<HostedAppState['user']> {
    return this.userStateSubject.asObservable();
  }
  constructor() {
    if(!AppContext.store){
      return;
    }
    // Subscribe on fronteggApp store to change state subjects
    AppContext.store.subscribe(() => {
      const state = AppContext.store!.getState() as HostedAppState;

      this.stateSubject.next(state);
      this.userStateSubject.next(state.user);
    });
  }
}
