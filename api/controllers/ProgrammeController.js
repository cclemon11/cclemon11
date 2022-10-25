/**
 * ProgrammeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // action - create
  create: async function (req, res) {

    if (req.method == "GET") return res.view('programme/create');
    
    var programme = await Programme.create(req.body).fetch();

    return res.status(201).json({ id: programme.id });
},

// action - jsjson function
json: async function (req, res) {

    var programmes = await Programme.find();

    return res.json(programmes);
},

// action - list
list: async function (req, res) {

    var programmes = await Programme.find();
    
    return res.view('programme/list', { programmes: programmes});
},

// action - read
read: async function (req, res) {

    var thatProgramme = await Programme.findOne(req.params.id);

    if (!thatProgramme) return res.notFound();

    return res.view('programme/read', { programme: thatProgramme });
},

};

