import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  },
  actions: {
    createTodo: function(newTitle) {
      // Create the new todo model
      var todo = this.store.createRecord('todo', {
        title: newTitle,
        isCompleted: false
      });

      // Clear the "New Todo" text field
      this.controllerFor('todos').set('newTitle', '');

      // Save the new model
      todo.save();
    }
  },
  actions: {
    acceptChanges: function(todo) {
      if (Ember.isEmpty(todo.get('title'))) {
        this.send('deleteTodo', todo);
      } else {
        todo.save();
      }
    },
    deleteTodo: function (todo) {
      todo.deleteRecord();
    }
  }
});
