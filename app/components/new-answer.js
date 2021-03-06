import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    cancelAnswer() {
      this.set('addNewAnswer', false);
    },

    saveAnswer() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        question: this.get('question')
      };
       if (params.content && params.author && params.question) {
         this.set('addNewAnswer', false);
         this.sendAction('saveAnswer', params);
         this.set('')
         this.set('content', "");
         this.set('author', "");
       } else {
         alert("Hey, fill out the form completely.");
       }
    }
  }
});
