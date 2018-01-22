import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['clickable'],
  store: Ember.inject.service(),
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
  }
});
