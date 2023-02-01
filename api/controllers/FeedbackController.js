/**
 * FeedbackController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const Feedback = require("../models/Feedback");

// const { feedback} = require("grunt");
module.exports = {

    create: async function (req, res) {

        if (req.method == "GET") return res.view('feedback/create');

        console.log("in feedback create")

        var feedback = await Feedback.create(req.body).fetch();
        await Programme.addToCollection(req.params.id, 'programmes').members(feedback.id);
        return res.redirect("/");
    },

    json: async function (req, res) {

        var feedbacks = await Feedback.find();

        return res.json(feedbacks);
    },

    // action - read
    read: async function (req, res) {

        

        
        var thatFeedback = await Feedback.findOne(req.params.id).populate("feedback");

        if (!thatFeedback) return res.notFound();

        // var thatProgramme = await Programme.findOne(req.params.id);

        // if (!thatProgramme) return res.notFound();

        console.log(thatFeedback)

        return res.view('programme/result', { programme: thatFeedback.feedback, feedback: thatFeedback });
    },



}