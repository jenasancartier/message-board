import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer'),
      reviews: this.store.findAll('review')
    });
  },

  actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.set('content', '');
      this.set('author', '');
      this.set('notes', '');
      this.transitionTo('index');
    },
  }
});
