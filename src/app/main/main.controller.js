export class MainController {
  constructor ($state, $mdDialog, $document, $log, $ngmUtilsDialog) {
    'ngInject';

    //this.loading = true;
    this.accounts = [
      {
        name: 'HWD Clinic',
        img: 'http://lorempixel.com/64/64/business/3'
      },
      {
        name: 'R & R Law Group Inc.',
        img: 'http://lorempixel.com/64/64/business/2'
      }
    ];

    this.customers = [
      {
        name: 'Frank Sinatra',
        img: 'http://lorempixel.com/64/64/people/2'
      },
      {
        name: 'Sam Sung',
        img: 'http://lorempixel.com/64/64/people/3'
      }
    ]

    this.callLogs = [
      {
        name: 'Sam Sung',
        img: 'http://lorempixel.com/64/64/people/3'
      },
      {
        name: 'Frank Sinatra',
        img: 'http://lorempixel.com/64/64/people/2'
      },
      {
        name: 'Sam Sung',
        img: 'http://lorempixel.com/64/64/people/3'
      },
      {
        name: 'Sam Sung',
        img: 'http://lorempixel.com/64/64/people/3'
      }
    ];

    this.$state = $state;
    this.$mdDialog = $mdDialog;
    this.$document = $document;
    this.$log = $log;
    this.$ngmUtilsDialog = $ngmUtilsDialog;
  }

  createCallLogNew(ev) {
    const $ngmUtilsDialog = this.$ngmUtilsDialog;
    const $log = this.$log;

    $ngmUtilsDialog.show({
      title: 'Hello World!',
      templateUrl: 'app/accounts/create-call-log.html',
      targetEvent: ev,
      data: { customers: this.customers }
    }).then(() => {
    }, error => {
      $log.debug(error);
    });
  }

  createCallLog(ev) {
    const $mdDialog = this.$mdDialog;
    const $document = this.$document;
    const $log = this.$log;

    $mdDialog.show({
      controller: DialogController,
      controllerAs: 'vm',
      templateUrl: 'app/accounts/create-call-log-dialog.html',
      parent: $document.body,
      targetEvent: ev,
      clickOutsideToClose: false
    }).then(() => {
    }, error => {
      $log.debug(error);
    });
  }
}

class DialogController {
  constructor($mdDialog) {
    'ngInject';

    this.customers = [
      {
        name: 'Frank Sinatra',
        img: 'http://lorempixel.com/64/64/people/2'
      },
      {
        name: 'Sam Sung',
        img: 'http://lorempixel.com/64/64/people/3'
      }
    ]


    this.obj = {};
    this.$mdDialog = $mdDialog;
  }

  cancel() {
    const $mdDialog = this.$mdDialog;

    $mdDialog.cancel();
  }

  submit() {
    const $mdDialog = this.$mdDialog;

    $mdDialog.hide(this.obj);
  }
}

