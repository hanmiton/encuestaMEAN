var mongoose = require('mongoose');

// Subdocument schema for votes
var voteSchema = new mongoose.Schema({ ip: 'String' });

// Subdocument schema for poll choices
var choiceSchema = new mongoose.Schema({ 
	text: String,
	desc: String,
	votes: [voteSchema]
});


//subAsk
var askSchema = new mongoose.Schema({ 
	question: { type: String, required: true },
	choices: [choiceSchema]
});

// Document schema for polls
exports.PollSchema = new mongoose.Schema({
	question: { type: String, required: true },
	sub : [askSchema],
	choices: [choiceSchema]
});