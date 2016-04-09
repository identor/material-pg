import { DialogUtilsService } from './dialog-utils.service';

angular.module('ngmUtils', [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'ui.router',
    'ngMaterial'
  ])
  .service('$ngmUtilsDialog', DialogUtilsService)
;

