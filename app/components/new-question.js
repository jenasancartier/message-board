import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    cancelQuestion() {
      this.set('addNewQuestion', false);
    },

    saveQuestion1() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      if(params.content && params.author && params.notes) {
        this.set('addNewQuestion', false);
        this.sendAction('saveQuestion2', params);
      } else {
        alert("Hey, fill out the form completely.");
      }
    }
  }
});
