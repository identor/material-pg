export class DashboardService {
  constructor($mdSidenav) {
    'ngInject'

    this.$mdSidenav = $mdSidenav;

    this.fabOnClick = () => {}; // set default

    this.isHideNav = true;
    this.isHideToolbar = true;
    this.isHideFab = true;
  }

  toggleSidenav() {
    this.$mdSidenav('left').toggle();
  }

  getFabOnClick() {
    return this.fabOnClick;
  }

  showNav() {
    this.isHideNav = false;
  }

  showToolbar() {
    this.isHideToolbar = false;
  }

  showFab() {
    this.isHideFab = false;
  }

  removeNav() {
    this.isHideNav = true;
  }

  removeToolbar() {
    this.isHideToolbar = true;
  }

  removeFab() {
    this.isHideFab = true;
  }

  toggleNav() {
    this.isHideNav = !this.isHideNav;
  }

  toggleToolbar() {
    this.isHideToolbar = !this.isHideToolbar;
  }

  toggleFab() {
    this.isHideFab = !this.isHideFab;
  }
}

