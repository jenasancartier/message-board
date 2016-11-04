import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if(question.get('answers').get('length') >= 5) {
    return Ember.String.htmlSafe('<img src="./../images/top-games-star.png">');
  }
}

export default Ember.Helper.helper(questionPopularity);
