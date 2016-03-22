export class MainController {
  constructor ($state, $mdDialog, $document, $log) {
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

