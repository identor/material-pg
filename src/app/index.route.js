export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/components/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    })
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .state('accounts', {
      url: '/accounts',
      templateUrl: 'app/accounts/accounts.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .state('account', {
      url: '/accounts/1',
      templateUrl: 'app/accounts/account.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .state('customerPortal', {
      url: '/portals/customer',
      templateUrl: 'app/portals/customer.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .state('logs', {
      url: '/logs',
      templateUrl: 'app/accounts/logs.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
  ;

  $urlRouterProvider.otherwise('/');
}
