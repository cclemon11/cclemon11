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

    getQ1: async function (req, res) {

        var result = await Programme.findOne(req.params.id).populate("programmes");

        var sum1 = 0;
        var sum2 = 0;
        var sum3 = 0;
        var sum4 = 0;
        var sum5 = 0;
        var sum6 = 0;
        var sum7 = 0;
        var sum8 = 0;
        var sum9 = 0;
        var sum10 = 0;
        var sum11 = 0;
        var sum12 = 0;
        var sum13 = 0;
        var sum14 = 0;
        var sum15 = 0;
        var sum16 = 0;
        var sum17 = 0;
        var sum18 = 0;
        var sum19 = 0;
        var sum20 = 0;
        var sum21 = 0;
        var sum22 = 0;
        var sum23 = 0;
        var sum24 = 0;
        var count = 0;

        result.programmes.forEach(element => {
            sum1 = sum1 + parseInt(element.q1love)
            sum2 = sum2 + parseInt(element.q2related)
            sum3 = sum3 + parseInt(element.q3catchup)
            sum4 = sum4 + parseInt(element.q4progress)
            sum5 = sum5 + parseInt(element.q5enjoy)
            sum6 = sum6 + parseInt(element.q6pressured)
            sum7 = sum7 + parseInt(element.q7recommend)
            sum8 = sum8 + parseInt(element.q8wholeperson)
            sum9 = sum9 + parseInt(element.q9choose)
            sum10 = sum10 + parseInt(element.q10joyful)
            sum11 = sum11 + parseInt(element.q11instructions)
            sum12 = sum12 + parseInt(element.q12difficulty)
            sum13 = sum13 + parseInt(element.q13adapt)
            sum14 = sum14 + parseInt(element.q14wellstructured)
            sum15 = sum15 + parseInt(element.q15resources)
            sum16 = sum16 + parseInt(element.q16support)
            sum17 = sum17 + parseInt(element.q17facilities)
            sum18 = sum18 + parseInt(element.q18overall)
            sum19 = sum19 + parseInt(element.q19connect)
            sum20 = sum20 + parseInt(element.q20internship)
            sum21 = sum21 + parseInt(element.q21help)
            sum22 = sum22 + parseInt(element.q22knowledge)
            sum23 = sum23 + parseInt(element.q23career)
            sum24 = sum24 + parseInt(element.q24useful)


            count++
        });

        var final = [
            {country: "Q1. Love the programme", value: sum1/count},
            {country: "Q2. Studied related subjects before",  value: sum2/count},
            {country: "Q3. Catch up the programme easily",  value: sum3/count},
            {country: "Q4. Made progress than before", value: sum4/count},
            {country: "Q5. Enjoyed in the programme", value: sum5/count},
            {country: "Q6. Don't feel pressured", value: sum6/count},
            {country: "Q7. Recommend the programme to others", value: sum7/count},
            {country: "Q8. Develop my whole person development", value: sum8/count},
            {country: "Q9. Still want to study this programme", value: sum9/count},
            {country: "Q10. Overall feeling joyful", value: sum10/count},
            {country: "Q11. Programme's instructions are clear", value: sum11/count},
            {country: "Q12. Programme difficulty is moderate", value: sum12/count},
            {country: "Q13. Adapt the programme curriculum easily", value: sum13/count},
            {country: "Q14. Programme curriculum is well-structured", value: sum14/count},
            {country: "Q15. Faculty provides enough resources", value: sum15/count},
            {country: "Q16. Satisfied with faculty members support", value: sum16/count},
            {country: "Q17. Satisfied with faculty facilities", value: sum17/count},
            {country: "Q18. Overall satisfaction for the curriculum", value: sum18/count},
            {country: "Q19. Programme objectives connect to career", value: sum19/count},
            {country: "Q20. Compulsory internship is good", value: sum20/count},
            {country: "Q21. The programme can help in the career", value: sum21/count},
            {country: "Q22. Knowledge applied in the workplace", value: sum22/count},
            {country: "Q23. Continue career in this industry", value: sum23/count},
            {country: "Q24. Overall useful for career", value: sum24/count},


        ]

        return res.json(final);



    },

    getQ1Q10: async function (req, res) {

        var result = await Programme.findOne(req.params.id).populate("programmes");

        var sum1 = 0;
        var sum2 = 0;
        var sum3 = 0;
        var sum4 = 0;
        var sum5 = 0;
        var sum6 = 0;
        var sum7 = 0;
        var sum8 = 0;
        var sum9 = 0;
        var sum10 = 0;
        var count = 0;

        result.programmes.forEach(element => {
            sum1 = sum1 + parseInt(element.q1love)
            sum2 = sum2 + parseInt(element.q2related)
            sum3 = sum3 + parseInt(element.q3catchup)
            sum4 = sum4 + parseInt(element.q4progress)
            sum5 = sum5 + parseInt(element.q5enjoy)
            sum6 = sum6 + parseInt(element.q6pressured)
            sum7 = sum7 + parseInt(element.q7recommend)
            sum8 = sum8 + parseInt(element.q8wholeperson)
            sum9 = sum9 + parseInt(element.q9choose)
            sum10 = sum10 + parseInt(element.q10joyful)

            count++
        });

        var final = [
            {nerwork: "Q1. Love the programme", value: sum1/count},
            {nerwork: "Q2. Studied related subjects before",  value: sum2/count},
            {nerwork: "Q3. Catch up the programme easily",  value: sum3/count},
            {nerwork: "Q4. Made progress than before", value: sum4/count},
            {nerwork: "Q5. Enjoyed in the programme", value: sum5/count},
            {nerwork: "Q6. Don't feel pressured", value: sum6/count},
            {nerwork: "Q7. Recommend the programme to others", value: sum7/count},
            {nerwork: "Q8. Develop my whole person development", value: sum8/count},
            {nerwork: "Q9. Still want to study this programme", value: sum9/count},
            {nerwork: "Q10. Overall feeling joyful", value: sum10/count}

        ]

        return res.json(final);



    }



}