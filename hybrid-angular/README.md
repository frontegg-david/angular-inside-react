

# Actions:

1. change app.component.ts selector to the application name
2. inside the main.ts wrap bootstrap action with callable function so hosted app will use it to render the application
3. export unmount function to destroy application from host app
4. add APP_BASE_HREF with the application id to prefix it
5. connect host app routing with ng router
6. connect store with ngrx
