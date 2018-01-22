import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    return RSVP.hashSettled({
      queue: this.get('store').findAll('queue').then((response) => {
        return response.get('firstObject');
      })
    });
    // return this.store.findAll('queue').then((result) => {
    //   console.log(result);
    //   console.log(result.content[0].currentPosition);
    //   return result;
    // });
  }
});
