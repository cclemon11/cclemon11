/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

// const { programme } = require("grunt");
// const Feedback = require("../api/models/Feedback");

module.exports.bootstrap = async function () {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```




  // if (await Progr.count() == 0) {
  //   await Feedback.createEach([
  //     {

  //     }

  //   ])
  // }


  if (await Programme.count() == 0) {

    await Programme.createEach([
      {
        facultyname: "School of Business",
        programmename: "Bachelor of Business Administration (Hons) in Accounting Concentration",
        enrollment: 100,
        programmeobjectives: "The Bachelor of Business Administration (Hons) Programme is an integrated combination of general education and high quality business studies",
        programmewebsite: "https://admissions.hkbu.edu.hk/en/programme-detail.html?id=13",
        credits: 244,
        duration: 4,
        imageurl: "https://presspay.ng/news/wp-content/uploads/2022/08/Business-la-gi-e1623418238104.jpeg",

      },
      {
        facultyname: "School of Chinese Medicine",
        programmename: "Bachelor of Pharmacy (Hons) in Chinese Medicine",
        enrollment: 80,
        programmeobjectives: "Cultivate and enhance students’ competence in applying Chinese medicine theories and methods in clinical practice as well as in the research and development of Chinese medicine",
        programmewebsite: "https://admissions.hkbu.edu.hk/en/programme-detail.html?id=243",
        credits: 244,
        duration: 6,
        imageurl: "https://images.chinahighlights.com/allpicture/2020/02/a85b1cd2578e48a8b46b6ef5_cut_800x500_61.jpg"

      },
      {
        facultyname: "Faculty of Science",
        programmename: "Bachelor of Science(Hons) in Business Computing and Data Analytics",
        enrollment: 15,
        programmeobjectives: "Provide good data-driven problem-solving skills and an analytical and creative mind for data analytics solution design, management and planning in business organizations",
        programmewebsite: "https://bcda.comp.hkbu.edu.hk/",
        credits: 128,
        duration: 4,
        imageurl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg"

      },
      {
        facultyname: "Faculty of Arts",
        programmename: "Bachelor of Arts (Hons) in Music",
        enrollment: 43,
        programmeobjectives: "Nurture aspiring musicians who will acquire the general knowledge and practical skills needed for a variety of careers, and to provide students with opportunities to personal and intellectual development",
        programmewebsite: "https://mus.hkbu.edu.hk/web/",
        credits: 128,
        duration: 4,
        imageurl: "https://www.hkco.org/uploads/images/source/55e003ff34d841.jpg"

      },
      {
        facultyname: "Faculty of Arts",
        programmename: "Bachelor of Arts (Hons) in Creative and Professional Writing",
        enrollment: 35,
        programmeobjectives: "To provide students with a vigorous curriculum to develop creative and professional writing skills in Chinese and English",
        programmewebsite: "https://artsbu.hkbu.edu.hk/study/prospective/scholarships/faculty-wide",
        credits: 128,
        duration: 4,
        imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoKKajccYnR4Bib0Nb0I3R_7jm-uNdOwZYQ&usqp=CAU"

      },
      {
        facultyname: "School of Business",
        programmename: "Bachelor of Business Administration (Hons) in Applied Economics",
        enrollment: 40,
        programmeobjectives: "Apply economic theories in analysing individual markets, macroeconomics, international economies, games and strategies, public policies, and digital markets",
        programmewebsite: "https://handbook.ar.hkbu.edu.hk/2019-2020/academic-programmes/undergraduate-programmes/school-of-business-1/bachelor-of-business-administration-honours/applied-economics-concentration",
        credits: 128,
        duration: 4,
        imageurl: "https://busrpg.hkbu.edu.hk/wp-content/uploads/2021/09/ECON.jpg"

      }
    ]);
  }

  if (await Feedback.count() == 0) {
    await Feedback.createEach([{
      "name": "Pang Ka Man",
      "studentID": "19232195",
      "email": "carmen22454@gmail.com",
      "q1love": 4,
      "q2related": 3,
      "q3catchup": 1,
      "q4progress": 3,
      "q5enjoy": 4,
      "q6pressured": 2,
      "q7recommend": 4,
      "q8wholeperson": 3,
      "q9choose": 4,
      "q10joyful": 4,
      "q11instructions": 5,
      "q12difficulty": 4,
      "q13adapt": 3,
      "q14wellstructured": 3,
      "q15resources": 3,
      "q16support": 5,
      "q17facilities": 2,
      "q18overall": 4,
      "q19connect": 3,
      "q20internship": 3,
      "q21help": 4,
      "q22knowledge": 4,
      "q23career": 3,
      "q24useful": 4,
      "feel": "I enjoy studying the program and courses",
      "share": "I think program can add more facilities",
      "comments": "I recommend others to study this program",
      // "createdAt": 1678242378642,
      // "updatedAt": 1678242378683,
    }, {
      "name": "Liu On Yin",
      "studentID": "19363583",
      "email": "onyin@gmail.com",
      "q1love": 5,
      "q2related": 4,
      "q3catchup": 2,
      "q4progress": 3,
      "q5enjoy": 3,
      "q6pressured": 1,
      "q7recommend": 5,
      "q8wholeperson": 3,
      "q9choose": 4,
      "q10joyful": 5,
      "q11instructions": 5,
      "q12difficulty":2,
      "q13adapt": 4,
      "q14wellstructured": 3,
      "q15resources": 3,
      "q16support": 4,
      "q17facilities": 4,
      "q18overall": 4,
      "q19connect": 5,
      "q20internship": 4,
      "q21help": 4,
      "q22knowledge": 4,
      "q23career": 4,
      "q24useful": 4,
      "feel": "I believe program curriculum interesting",
      "share": "I think program detail and curriculum good",
      "comments": "I recommend others to study this program",
      // "createdAt": 1678242378642,
      // "updatedAt": 1678242378683,
    },{
      "name": "Ho Tak Ting",
      "studentID": "21365785",
      "email": "takting@gmail.com",
      "q1love": 5,
      "q2related": 4,
      "q3catchup": 3,
      "q4progress": 3,
      "q5enjoy": 3,
      "q6pressured": 5,
      "q7recommend": 4,
      "q8wholeperson": 3,
      "q9choose": 4,
      "q10joyful": 5,
      "q11instructions": 3,
      "q12difficulty":2,
      "q13adapt": 4,
      "q14wellstructured": 3,
      "q15resources": 3,
      "q16support": 4,
      "q17facilities": 4,
      "q18overall": 4,
      "q19connect": 5,
      "q20internship": 4,
      "q21help": 3,
      "q22knowledge": 4,
      "q23career": 2,
      "q24useful": 3,
      "feel": "I believe program curriculum interesting",
      "share": "I think program detail and curriculum good",
      "comments": "I recommend others to study this program",
      // "createdAt": 1678242378642,
      // "updatedAt": 1678242378683,
    }
    ]);
  }

  let p1 = await Programme.findOne({ programmename: "Bachelor of Arts (Hons) in Creative and Professional Writing" })
  let p2 = await Programme.findOne({ programmename: "Bachelor of Business Administration (Hons) in Applied Economics" })
  let f1 = await Feedback.findOne({ studentID: "19232195" })
  let f2 = await Feedback.findOne({ studentID: "19363583" })
  let f3 = await Feedback.findOne({ studentID: "21365785" })
  await Programme.addToCollection(p1.id, 'programmes').members([f1.id, f2.id]);
  await Programme.addToCollection(p2.id, 'programmes').members([f3.id, f2.id]);

  return generateUsers();

  async function generateUsers() {

    if (await User.count() > 0) {
      return;
    }

    var hashedPassword = await sails.helpers.passwords.hashPassword('123456');

    await User.createEach([
      { username: "admin", password: hashedPassword, role: "admin" },
      { username: "admin2", password: hashedPassword, role: "admin" },
      { username: "facutlymember", password: hashedPassword, role: "facultymember" },
      { username: "facutlymember2", password: hashedPassword, role: "facultymember" },
      { username: "executivemanager", password: hashedPassword, role: "executivemanager" },
      { username: "student1", password: hashedPassword, role: "student" },
      { username: "student2", password: hashedPassword, role: "student" },
      { username: "non-member", password: hashedPassword, role: "nonMember" },
      // etc.
    ]);


  }
};
