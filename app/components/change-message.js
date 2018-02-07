import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  message: "",
  init() {
    this._super(...arguments);
    this.get('store').findAll('queue').then((response) => {
      var queue = response.get('firstObject');
      this.set('message', queue.get('message'));
    })
  },
  actions: {
    saveMessage: function() {
      this.get('store').findAll('queue').then((response) => {
        var queue = response.get('firstObject');
        queue.set('message', this.get('message'));
        queue.save();
      })
    }
  }
});
