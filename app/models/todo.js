import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')

}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Complete Ember.js Tutorial",
      isCompleted: false
    },
    {
      id: 2,
      title: "Do Rails backend ember front-end app tutorial",
      isCompleted: false
    },
    {
      id: 3,
      title: "Re-do Michael Hartl's Rails tutorial and create a project creation social app.",
      isCompleted: false
    }
  ]
});
