import Ember from 'ember';

const {
  Route,
  get,
  $
} = Ember;

export default Route.extend({
  displayMobileNavClass: 'has-mobile-nav-showing',
  mobileNavClassTargetElement: 'body > div',

  actions: {
    toggleMobileNavClass() {
      let $body = $(get(this, 'mobileNavClassTargetElement'));
      let mobileNavClass = get(this, 'displayMobileNavClass');
      $body.toggleClass(mobileNavClass);
    },

    removeMobileNavClass() {
      let $body = $(get(this, 'mobileNavClassTargetElement'));
      let mobileNavClass = get(this, 'displayMobileNavClass');
      $body.removeClass(mobileNavClass);
    }
  }
});
