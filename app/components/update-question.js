import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },

    cancelEdit() {
      this.set('updateQuestionForm', false);
    },

    update(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
      this.set('content', "");
      this.set('author', "");
      this.set('notes', "");
    }
  }
});
