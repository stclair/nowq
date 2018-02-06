import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  router: Ember.inject.service(),
  email: '',
  password: '',
  actions: {
    signIn: function(provider) {
      this.get('session').open('firebase', {
        provider: 'password',
        email: this.get('email'),
        password: this.get('password')
      });
      this.get('router').transitionTo("queue");
    }
  }
});
