export function ToolbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/customer-toolbar/toolbar.html',
    scope: {
        creationDate: '='
    },
    controller: ToolbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class ToolbarController {
  constructor ($state) {
    'ngInject';

    this.$state = $state;
  }
}

