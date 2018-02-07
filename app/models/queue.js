import DS from 'ember-data';

export default DS.Model.extend({
  currentPosition: DS.attr('number'),
  message: DS.attr('string')
});
