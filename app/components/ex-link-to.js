import Ember from 'ember';

const {
  Component,
  get
} = Ember;

export default Component.extend({
  tagName: 'a',
  attributeBindings: ['href'],

  click() {
    let href = get(this, 'href');
    window.location.href = href;
  }
});
