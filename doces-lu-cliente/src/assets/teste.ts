export class teste {
  'checkout-doces-da-lu': object;

  constructor() {
    this['checkout-doces-da-lu'] = {
      remoteEntry: 'http://localhost:4201/remoteEntry.js',

      exposedModule: './Module',
      displayName: 'Checkout-Encomenda',
      routePath: 'checkout',
      ngModuleName: 'CheckoutModule',
    };
  }

  public get() {
    return this['checkout-doces-da-lu'];
  }
}
