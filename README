# Hypochondriac

What the hell am I?

## Synopsis

Run a user through a (possibly variable) questionnaire and guess what horrible
sickening disease you have. With the power of magic!

## Usage

This is how I run the app

## Requirements

This is what I need to run the app

## Description

You are all plagued with horrible diseases. This all uses markov chains and other fancy
linguistic bullshit to figure out what.

## Routes

### `/`

The default landing page. Will use Jade to make things. TODO.

### `/api`

The API service for this app thing.

#### `POST /api/diagnose`

Request format:

```json
{
	"symptoms": {
		"headache": true,
		"sinuses": "blocked"
	}
}
```

Response format:

```json

{
	"diagnosis": { "name": "megacancer" },
	"prognosis": {
		["Anal chemotherapy", "orphan tears", "coffee enema"],
	},
	"lifespan": "about 5 minutes"

}
```

#### `GET /api/diagnose`

Return a random disease.

adjectives: mega, anal, super, terrific

diseases: cancer, herpes, AIDS, phimosis

## Future ideas:

### CDC integration

Pull stuff from the CDC API: https://tools.cdc.gov/syndication/api.aspx


when TH user first accesses the site, they are greeted with a question, followed by N (probably 2) more questions after they answer.


router.get('/names/:name', function(req, res){
    var vcenterName = req.params.name;
    mongoDb.connect(function (databaseConnection) {
        databaseConnection.collection('vcenters', function (error, collection) {
            collection.find({name: vcenterName}).sort({$natural:1}).limit(mongoDb.max_records).toArray(function (error, results) {
                res.send(model.mapVcenterData(results));
            });
        });
    });
});
