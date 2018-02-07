import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['fullscreen', 'clickable', 'no-fullscreen'],
  click() {
    var elem = document.getElementsByClassName("main")[0];
    var req = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen;
    req.call(elem);
    this.sendAction("setFocus");
  }
});
