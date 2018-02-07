import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['clickable'],
  classNameBindings: ['type'],
  store: Ember.inject.service(),
  didInsertElement: function() {
    this._super(...arguments);
    this.$().focus();
  },
  click() {
    this.get('store').findAll('queue').then((response) => {
      var queue = response.get('firstObject');
      if (this.get('type') === 'subtract') {
        if (queue.get('currentPosition') > 0) {
          queue.set('currentPosition', queue.get('currentPosition') - 1);
        }
      } else {
        queue.set('currentPosition', queue.get('currentPosition') + 1);
      }
      queue.save();
    })
  },
  keyDown(event) {
    if (event.key === 'ArrowRight') {
      this.get('store').findAll('queue').then((response) => {
        var queue = response.get('firstObject');
        queue.set('currentPosition', queue.get('currentPosition') + 1);
        queue.save();
      });
    }
    if (event.key === 'ArrowLeft') {
      this.get('store').findAll('queue').then((response) => {
        var queue = response.get('firstObject');
        if (queue.get('currentPosition') > 0) {
          queue.set('currentPosition', queue.get('currentPosition') - 1);
          queue.save();
        }
      });
    }
  }
});
