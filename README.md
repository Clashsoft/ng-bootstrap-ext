# NgBootstrapExt

Helpful additional components for [ng-bootstrap](https://ng-bootstrap.github.io).

## Installation

1. [Install ng-bootstrap](https://ng-bootstrap.github.io/#/getting-started#installation) first.
2. `npm install ng-bootstrap-ext`

## Compatibility

| ng-bootstrap-ext | Angular | ng-bootstrap | bootstrap |
|------------------|---------|--------------|-----------|
| 0.1.0            | ^12.2   | ^10          | ^4        |
| 0.2.0            | ^13     | ^12          | ^5        |

## Usage

### Toasts

1. Import the `ToastModule`, e.g. in `AppModule`.
2. Add `<ngbx-toast-list></ngbx-toast-list>` somewhere (e.g. at the end of app component).
3. Use `ToastService` to display toasts:

```typescript
this.toastService.add({
  title: 'Important', // optional
  body: 'Hello world', // optional
  class: 'bg-primary text-white', // optional, can also be object or array
  delay: 1500, // in ms, defaults to 5000
  actions: [ // optional
    {
      name: 'Click me',
      link: ['/home'], // optional, acts as routerLink
      run: () => {}, // optional, do anything you want
    },
  ],
});
this.toastService.success('Account', 'Successfully created account');
this.toastService.warning('Account', 'Successfully deleted account');
this.toastService.error('Account', 'Failed to delete account', error);
```
