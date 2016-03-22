export class UserController {
  constructor ($mdDialog, $document, $firebaseAuth, $firebaseArray, Firebase, $log) {
    'ngInject';

    this.users = ['irvin@outlook.ph', 'irvin@wiwi.ninja'];
    this.ref = new Firebase('https://myscripts.firebaseio.com');

    this.authObj = $firebaseAuth(this.ref);
    this.users = $firebaseArray(this.ref.child('users'));

    this.$mdDialog = $mdDialog;
    this.$document = $document;
    this.$log = $log;
  }

  createUser(ev) {
    const $mdDialog = this.$mdDialog;
    const $document = this.$document;
    const $log = this.$log;

    $mdDialog.show({
      controller: DialogController,
      controllerAs: 'vm',
      templateUrl: 'app/admin/create-user-dialog.html',
      parent: $document.body,
      targetEvent: ev,
      clickOutsideToClose: false
    }).then(user => {
      this.authObj.$createUser(user)
        .then(userData => {
          this.users.$add({
            username: user.username,
            emails: [
              user.email
            ],
            uids: [
              userData.uid
            ]
          });
        }, error => {
          $log.debug(error);
        });
    }, error => {
      $log.debug(error);
    });
  }

  changeEmail(ev, userRef, $index) {
    const $mdDialog = this.$mdDialog;
    const $document = this.$document;
    const $log = this.$log;

    $mdDialog.show({
      controller: DialogController,
      controllerAs: 'vm',
      templateUrl: 'app/admin/change-email-dialog.html',
      parent: $document.body,
      targetEvent: ev,
      clickOutsideToClose: false
    }).then(user => {
      this.authObj.$changeEmail(user)
        .then(() => {
          userRef.emails[$index] = user.newEmail;
          this.users.$save(userRef)
            .then(() => {
            }, error => {
              // on error revert to old email
              userRef.emails[$index] = user.oldEmail;
              $log.debug(error);
            });
        }, error => {
          $log.debug(error);
        });
    }, error => {
      $log.debug(error);
    });
  }

  changePassword(ev, userRef, $index) {
    const $mdDialog = this.$mdDialog;
    const $document = this.$document;
    const $log = this.$log;

    $mdDialog.show({
      controller: DialogController,
      controllerAs: 'vm',
      templateUrl: 'app/admin/change-password-dialog.html',
      parent: $document.body,
      targetEvent: ev,
      clickOutsideToClose: false
    }).then(user => {
      this.authObj.$changePassword(user)
        .then(() => {
          $log.debug('Password change success!', userRef, $index);
        }, error => {
          $log.debug(error);
        });
    }, error => {
      $log.debug(error);
    });
  }
}

class DialogController {
  constructor($mdDialog) {
    'ngInject';

    this.user = {};
    this.$mdDialog = $mdDialog;
  }

  cancel() {
    const $mdDialog = this.$mdDialog;

    $mdDialog.cancel();
  }

  submit() {
    const $mdDialog = this.$mdDialog;

    $mdDialog.hide(this.user);
  }
}

