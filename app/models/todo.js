import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),       // Sets title to a string variable
  isCompleted: DS.attr('boolean') // Sets isCompleted to true or false

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
    },
    {
      id: 4,
      title: "Learn ember even more.",
      isCompleted: false
    },
    {
      id: 5,
      title: "Start learning iOS development.",
      isCompleted: true
    }
  ]
});
