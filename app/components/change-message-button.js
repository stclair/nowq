import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  store: Ember.inject.service(),
  click() {
    this.sendAction("saveMessage");
  }
});
