import Ember from 'ember';

export default Ember.Component.extend({
  myFavorites: Ember.inject.service(),
  updateQuestionForm: false,

  actions: {
    addToFavorites(favorite) {
      this.get('myFavorites').add(favorite);
    },
  }
});
