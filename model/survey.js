
var disease = require('../model/disease.js');

var Survey = function(questions) {
  this.questions = questions;
}

Survey.prototype.toDisease = function() {
  var newDisease = new disease.diseaseSchema();
  if (this.questions.rectalBleeding) {
	  newDisease.name = "LUPUS";
    newDisease.timeToLive = 0;
  }

  return newDisease;
}

Survey.test = "test";

module.exports = Survey;
