/**
 * ProgrammeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const { programme } = require("grunt");
module.exports = {
    // action - create
    create: async function (req, res) {

        if (req.method == "GET") return res.view('programme/create');

        var programme = await Programme.create(req.body).fetch();

        return res.redirect("/");
    },

    // action - evaluation
    evaluation: async function (req, res) {

        if (req.method == "GET") {

            var thatProgramme = await Programme.findOne(req.params.id);

            if (!thatProgramme) return res.notFound();

            return res.view('programme/evaluation', { programme: thatProgramme });

        } else {

            var updatedProgramme = await Programme.updateOne(req.params.id).set(req.body);

            if (!updatedProgramme) return res.notFound();

            var allprogramme = await Programme.find();

            return res.view('programme/read', { programmes: allprogramme });
        }
    },

    // action -admin
    adminlist: async function (req, res) {
        var theProgramme = await Programme.find();

        return res.view('programme/admin', { programmes: theProgramme });
    },

    // action - jsjson function
    json: async function (req, res) {

        var programmes = await Programme.find();

        return res.json(programmes);
    },

    // action - list
    list: async function (req, res) {

        var programmes = await Programme.find({
            sort: "id DESC",
            limit: 4
        });

        return res.view('programme/list', { programmes: programmes });
    },

    // action - read
    read: async function (req, res) {

        var thatProgramme = await Programme.findOne(req.params.id);

        if (!thatProgramme) return res.notFound();

        return res.view('programme/read', { programme: thatProgramme });
    },

    // search function
    search: async function (req, res) {

        var whereClause = {};
        var limit = Math.max(req.query.limit, 2) || 2;
        var offset = Math.max(req.query.offset, 0) || 0;
        if (req.query.programmename) whereClause.programmename = { contains: req.query.programmename };
        if (req.query.facultyname) whereClause.facultyname = { contains: req.query.facultyname };

        var thoseProgrammes = await Programme.find({
            limit: limit,
            skip: offset,
            where: whereClause,
            sort: 'programmename'
        });


        var count = await Programme.count({ where: whereClause });

        return res.view('programme/search', { programmes: thoseProgrammes, total: count });

    },
    // action - delete 
    delete: async function (req, res) {

        var deletedProgramme = await Programme.destroyOne(req.params.id);

        if (!deletedProgramme) return res.notFound();

        var allprogramme = await Programme.find();


        if (req.wantsJSON) {
            return res.status(204).send();	    // for ajax request
        } else {
            return res.redirect('/');			// for normal request
        }
    },
    // action - update
    update: async function (req, res) {

        if (req.method == "GET") {

            var thatProgramme = await Programme.findOne(req.params.id);

            if (!thatProgramme) return res.notFound();

            return res.view('programme/update', { programme: thatProgramme });

        } else {

            var updatedProgramme = await Programme.updateOne(req.params.id).set(req.body);

            if (!updatedProgramme) return res.notFound();

            var allprogramme = await Programme.find();

            return res.view('programme/admin', { programmes: allprogramme });
        }
    },
    // action - paginate
    paginate: async function (req, res) {

        var perPage = Math.max(req.query.perPage, 2) || 2;

        var someProgrammes = await Programme.find({
            limit: perPage,
            skip: perPage * (Math.max(req.query.current - 1, 0) || 0)
        });

        var count = await Programme.count();

        return res.view('programme/paginate', { programmes: someProgrammes, total: count });
    },
}
