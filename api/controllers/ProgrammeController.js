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
        }).populate('programmes');

        return res.view('programme/list', { programmes: programmes });
    },

    // action - whole Analysis
    wholeAnalysis: async function (req, res) {




        return res.view('programme/wholeAnalysis');
    },

    // action - read
    read: async function (req, res) {

        var thatProgramme = await Programme.findOne(req.params.id);

        if (!thatProgramme) return res.notFound();

        return res.view('programme/read', { programme: thatProgramme });
    },


    // action - read
    feedback: async function (req, res) {

        var thatProgramme = await Programme.findOne(req.params.id);

        if (!thatProgramme) return res.notFound();

        return res.view('programme/feedback', { programme: thatProgramme });
    },


    // action - visualization
    visualAnalysis: async function (req, res) {

        // var thatProgramme = await Programme.findOne(req.params.id);

        // if (!thatProgramme) return res.notFound();

        return res.view('programme/visualAnalysis');
    },

   
    worldcloud: async function (req, res) {

        // var thatProgramme = await Programme.findOne(req.params.id);

        // if (!thatProgramme) return res.notFound();

        return res.view('programme/worldcloud');
    },

    worldcloudApi: async function (req, res) {

        var thatProgramme = await Programme.findOne(req.params.id).populate("programmes");

        var string = ""

        thatProgramme.programmes.forEach(function(feedback) {

            string = string + feedback.feel + " " + feedback.share + " " + feedback.comment

        })

        

        // if (!thatProgramme) return res.notFound();

        return res.send(string)

        // return res.view('programme/worldcloud');
    },
    // action - visualization
    visualAnalysisPerProg: async function (req, res) {

        // var thatProgramme = await Programme.findOne(req.params.id);

        // if (!thatProgramme) return res.notFound();

        return res.view('programme/visualAnalysisPerProg');
    },

    feelingBarChart: async function (req, res) {

        // var thatProgramme = await Programme.findOne(req.params.id);

        // if (!thatProgramme) return res.notFound();

        return res.view('programme/feelingBarChart');
    },

    curriculumBarChart: async function (req, res) {

        // var thatProgramme = await Programme.findOne(req.params.id);

        // if (!thatProgramme) return res.notFound();

        return res.view('programme/curriculumBarChart');
    },

    careerBarChart: async function (req, res) {

        // var thatProgramme = await Programme.findOne(req.params.id);

        // if (!thatProgramme) return res.notFound();

        return res.view('programme/careerBarChart');
    },

    // action - read
    populate: async function (req, res) {

        var thatProgramme = await Programme.findOne(req.params.id).populate("programmes");

        if (!thatProgramme) return res.notFound();

        // res.json(thatProgramme.programmes)

        return res.view('programme/view', { feedbacks: thatProgramme.programmes });
    },


    // action - analysis
    analysis: async function (req, res) {

        var thatProgramme = await Programme.findOne(req.params.id);

        if (!thatProgramme) return res.notFound();

        return res.view('programme/analysis', { programme: thatProgramme });
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

    chartdata: async function (req, res) {
        var thoseProgrammes = await Programme.find({

        });

        console.log(thoseProgrammes);

        var result = [

        ];

        var array = ["Faculty of Arts", "School of Business", "School of Chinese Medicine", "School of Communication", "School of Creative Arts"
            , "Faculty of Science", "Faculty of Social Science"]



        for (faculty of array) {

            var filteredResults = thoseProgrammes.filter(function (prog) {

                // return prog.facultyname == faculty
                return prog.facultyname == faculty
            })

            if (filteredResults.length != 0) {
                result.push({ country: faculty, value: filteredResults.length })
            }
        }



        // return res.json([{ "country": "egg", value: 12 }, { "country": "bread", value: 13 }]);
        return res.json(result);

    },
    charforsnsd: async function(req, res){
        var thoseProgrammes = await Programme.find({

        });

        var result = [

        ];

        var array = ["Faculty of Arts", "School of Business", "School of Chinese Medicine", "School of Communication", "School of Creative Arts"
            , "Faculty of Science", "Faculty of Social Science"]



        for (faculty of array) {

            var filteredResults = thoseProgrammes.filter(function (prog) {

                // return prog.facultyname == faculty
                return prog.facultyname == faculty
            })

            if (filteredResults.length != 0) {
                result.push({ value: filteredResults.length, category: faculty })
            }
        }

        // { value: 1, category: "Seven" }
        return res.json(result); 
    },
    chartdataPerProgramme: async function (req, res) {

        var whereClause = { id: req.params.id }


        var thatProgramme = await Programme.findOne({
            // limit: limit,
            // skip: offset,
            where: whereClause,
            // sort: 'programmename'
        }).populate("programmes");

        console.log(thatProgramme.programmes);

        var result = [

        ];


        var array = ["q1love", "q2progress", "q3instructions", "q4reallife", "q5enjoy", "q6pressured"
            , "q7curriculum", "q8difficulty", "q9structure", "q10overall"]


        for (question of array) {

            var filteredResults = thoseProgrammes.filter(function (prog) {

                // return prog.facultyname == faculty
                return prog.f == question
            })

            if (filteredResults.length != 0) {
                result.push({ country: question, value: filteredResults.length })
            }
            // return res.json([{ "country": "egg", value: 12 }, { "country": "bread", value: 13 }]);
            return res.json(result);
        }
    },
    partitionedBarChart: async function (req, res) {
    

        var allFacultyofArts = ["Bachelor of Arts (Hons) in Chinese Language and Literature", "Bachelor of Arts (Hons) in Creative and Professional Writing", "Bachelor of Arts (Hons) in English Language and Literature", "Bachelor of Arts (Hons) in Humanities",
            "Bachelor of Arts (Hons) in Translation", "Bachelor of Arts (Hons) in Religion, Philosophy and Ethics", "Bachelor of Music (Hons) in Creative Industries", "Bachelor of Arts (Hons) in Music"]

        for (eachprogramme of allFacultyofArts) {

            var filteredResults = eachprogramme.filter(function (prog) {

                // return prog.facultyname == faculty
                return prog.programmename == eachprogramme
            })

            if (filteredResults.length != 0) {
                result.push({ country: faculty, value: filteredResults.length })
            }

            
            result.push({ region: prog.facultyname, state: eachprogramme })
        }

        // return res.json([{ "country": "egg", value: 12 }, { "country": "bread", value: 13 }]);
        return res.json(result);
    },


    newChart: async function (req, res) {

        var array = []

        var programmes = await Programme.find({ facultyname: "Faculty of Arts" }).populate("programmes")

        programmes.forEach(function (program) {
            var total = 0
            var feeling = 0
            var curriculum = 0
            var career = 0
            var count = 0

            program.programmes.forEach(function (feedback) {

             
                 total = total + feedback.q1love + feedback.q2related + feedback.q3catchup +feedback.q4progress+ feedback.q5enjoy +  feedback.q6pressured + feedback.q7recommend + feedback.q8wholeperson+  feedback.q9choose + feedback.q10joyful + feedback.q11instructions+ feedback.q12difficulty+ feedback.q13adapt + feedback.q14wellstructured  + feedback.q15resources  + feedback.q16support + feedback.q17facilities  + feedback.q18overall  + feedback.q19connect  + feedback.q20internship  + feedback.q21help + feedback.q22knowledge + feedback.q23career + feedback.q24useful
                 feeling = feeling + feedback.q1love + feedback.q2related + feedback.q3catchup +feedback.q4progress+ feedback.q5enjoy +  feedback.q6pressured + feedback.q7recommend + feedback.q8wholeperson+  feedback.q9choose + feedback.q10joyful
                 curriculum = curriculum + feedback.q11instructions+ feedback.q12difficulty+ feedback.q13adapt + feedback.q14wellstructured  + feedback.q15resources  + feedback.q16support + feedback.q17facilities  + feedback.q18overall
                 career = career + feedback.q19connect  + feedback.q20internship  + feedback.q21help + feedback.q22knowledge + feedback.q23career + feedback.q24useful
                 count++
                // console.log(q1)

            })

            if (count != 0) {
                array.push(
                    {
                        region: program.programmename,
                        state: program.programmename + ": Total",
                        sales: total / (count*24)

                    },
                    {
                        region: program.programmename,
                        state: program.programmename + ": Feeling",
                        sales: feeling / (count *10)
                    },
                    {

                        region: program.programmename,
                        state: program.programmename +  ": Curriculum",
                        sales: curriculum / (count *8)
                    },
                    {
                        region: program.programmename,
                        state: program.programmename + ": Career",
                        sales: career / (count*6)
                    },

                    )
            }
        })
        return res.json(array)
    },


    newChartBusiness: async function (req, res) {

        var array = []

        var programmes = await Programme.find({ facultyname: "School of Business" }).populate("programmes")

        programmes.forEach(function (program) {
            var total = 0
            var feeling = 0
            var curriculum = 0
            var career = 0
            var count = 0

            program.programmes.forEach(function (feedback) {

             
                 total = total + feedback.q1love + feedback.q2related + feedback.q3catchup +feedback.q4progress+ feedback.q5enjoy +  feedback.q6pressured + feedback.q7recommend + feedback.q8wholeperson+  feedback.q9choose + feedback.q10joyful + feedback.q11instructions+ feedback.q12difficulty+ feedback.q13adapt + feedback.q14wellstructured  + feedback.q15resources  + feedback.q16support + feedback.q17facilities  + feedback.q18overall  + feedback.q19connect  + feedback.q20internship  + feedback.q21help + feedback.q22knowledge + feedback.q23career + feedback.q24useful
                 feeling = feeling + feedback.q1love + feedback.q2related + feedback.q3catchup +feedback.q4progress+ feedback.q5enjoy +  feedback.q6pressured + feedback.q7recommend + feedback.q8wholeperson+  feedback.q9choose + feedback.q10joyful
                 curriculum = curriculum + feedback.q11instructions+ feedback.q12difficulty+ feedback.q13adapt + feedback.q14wellstructured  + feedback.q15resources  + feedback.q16support + feedback.q17facilities  + feedback.q18overall
                 career = career + feedback.q19connect  + feedback.q20internship  + feedback.q21help + feedback.q22knowledge + feedback.q23career + feedback.q24useful
                 count++
                // console.log(q1)

            })

            if (count != 0) {
                array.push(
                    {
                        region: program.programmename,
                        state: program.programmename + ": Total",
                        sales: total / (count*24)

                    },
                    {
                        region: program.programmename,
                        state: program.programmename + ": Feeling",
                        sales: feeling / (count *10)
                    },
                    {

                        region: program.programmename,
                        state: program.programmename +  ": Curriculum",
                        sales: curriculum / (count *8)
                    },
                    {
                        region: program.programmename,
                        state: program.programmename + ": Career",
                        sales: career / (count*6)
                    },

                    )
            }
        })
        return res.json(array)
    },

    partitionedBarChart: async function (req, res) {

        return res.view('programme/partitionedBarChart')
    },

    partitionedBarChartBusiness: async function (req, res) {

        return res.view('programme/partitionedBarChartBusiness')
    }
}
