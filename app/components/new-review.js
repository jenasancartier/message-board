import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },

    cancelReview() {
      this.set('addNewReview', false);
    },

    saveReview() {
      var params = {
        user: this.get('user'),
        rating: this.get('rating'),
        comment: this.get('comment'),
        question: this.get('question')
      }
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
      this.set('user', "");
      this.set('rating', "");
      this.set('comment', "");
    }
  }
});
