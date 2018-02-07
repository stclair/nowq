import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signOut: function() {
      this.get('session').close();
    },
    setFocus: function() {
      console.log(Ember.$('.add').focus());
    }
  },

  model() {
    return RSVP.hashSettled({
      queue: this.get('store').findAll('queue').then((response) => {
        return response.get('firstObject');
      })
    });
  }
});
