import Ember from 'ember';

const { $ } = Ember;

export default Ember.Component.extend({
  tagName: 'tito-widget',
  attributeBindings: ['event', 'releases'],
  event: 'wicked-good/soember-2017',

  didInsertElement() {
    $.getScript('https://js.tito.io/v1');
  },

  willDestroyElement() {
    $('script[src*="https://js.tito.io/v1"]').remove();
  }
});
