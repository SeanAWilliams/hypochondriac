/**
 * Created by william  and Adrien Thebo (that cunt) on 12/1/2015.
 */

var express = require('express');
var router = express.Router();
var model = require('../model/disease');
var surveyModel = require('../model/survey');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


/** Root endpoint.
 * what happens if someone does `GET /api` ?
 */

/*
 {
 "routes": {
 "ANY /": "you're here",
 "GET /diagnosis": "make up a disease"

 "POST /questionnaire": params: {"questions": []}
 }
 }
 */

router.get('/diagnosis', function (req, res) {
    disease = new model.diseaseSchema();
    disease.name = "death";
    disease.timeToLive = "none";
    res.send(disease);
});

router.post('/questionnaire', jsonParser, function (req, res) {

    var disease = new model.diseaseSchema();
    disease.name = "death";
    disease.timeToLive = "none";
    disease.integer = 1234567890;
    disease.boolean = true;

    var questions = req.body;
    var survey = new surveyModel(questions);

    console.log("are are posting shit, here is the  JSON.stringified questions: " + JSON.stringify(questions));
    console.log(req.body);
    console.log("questions 1 is: "+ questions.q1);

    var disease = survey.toDisease();
    console.log(survey.questions);
    if (questions.rectalBleeding) // questions.rectalBleeding
        res.send(disease);
    else
        res.send(questions);

});

router.get('/diagnosis/:name', function (req, res) {
    var diseaseName = req.params.name;
    console.log("we got variable with name " + diseaseName);
    //TODO: change this to actually return info about the disease based on name
    res.send(diseaseName);
});

// define diagnosis endpoint

module.exports = router;
