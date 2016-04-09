'use strict';

import * as moment from 'moment';
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { LoginController } from './components/login/login.controller';
import { NavDirective as mpNav } from './components/nav/nav.directive';
import { ToolbarDirective as mpToolbar } from './components/toolbar/toolbar.directive';
import { ToolbarDirective as mpCustomerToolbar } from './components/customer-toolbar/toolbar.directive';
import './utils';

angular.module('materialPg', [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'ui.router',
    'ngMaterial',
    'firebase',
    'ngmUtils'
  ])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('LoginController', LoginController)
  .directive('mpNav', mpNav)
  .directive('mpToolbar', mpToolbar)
  .directive('mpCustomerToolbar', mpCustomerToolbar)
;

