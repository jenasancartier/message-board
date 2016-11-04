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
        rating: parseInt(this.get('rating')),
        comment: this.get('comment'),
        question: this.get('question')
      };
      if(params.user && params.rating && params.comment) {
        this.set('addNewReview', false);
        this.sendAction('saveReview', params);
        this.set('user', "");
        this.set('rating', "");
        this.set('comment', "");
      } else {
        alert("Hey, fill out the form completely.")
      }
    }
  }
});
