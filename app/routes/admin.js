import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    signOut: function() {
      this.get('session').close();
      this.transitionTo("queue");
    }
  }
});
