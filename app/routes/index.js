import Ember from 'ember';

var questions = [{
  content: "What is a black hole?",
  author: "Olivia Cranberry",
  notes: "I just want to know."
},{
  content: "Why is ginger good for you?",
  author: "Nick Tarno",
  notes: "My grandma is obsessed with it."
},{
  content: "How much sleep does the average adult really need?",
  author: "Vanessa Blanc",
  notes: "Because I swear I need more than 8 hours."
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
