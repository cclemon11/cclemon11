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
        facultyname: "School of Chinese Medicine",
        programmename: "Bachelor of Pharmacy (Hons) in Chinese Medicine",
        enrollment: 80,
        programmeobjectives: "Cultivate and enhance students’ competence in applying Chinese medicine theories and methods in clinical practice as well as in the research and development of Chinese medicine",
        programmewebsite: "https://admissions.hkbu.edu.hk/en/programme-detail.html?id=243",
        credits: 244,
        duration: 6,
        imageurl: "https://images.chinahighlights.com/allpicture/2020/02/a85b1cd2578e48a8b46b6ef5_cut_800x500_61.jpg"

      },   {
        facultyname: "School of Creative Arts",
        programmename: "Bachelor of Arts (Hons) in Visual Arts",
        enrollment: 30,
        programmeobjectives: "Cultivate and enhance students’ competence in applying Chinese medicine theories and methods in clinical practice as well as in the research and development of Chinese medicine",
        programmewebsite: "https://admissions.hkbu.edu.hk/en/programme-detail.html?id=3",
        credits: 128,
        duration: 4,
        imageurl: "https://admissions.hkbu.edu.hk/uploads/en/faculty/programme/inside_banner_Faculty_of_Arts.jpg"

      },{
        facultyname: "Faculty of Social Sciences",
        programmename: "Bachelor of Social Sciences (Hons) in History",
        enrollment: 45,
        programmeobjectives: "Learn from the past and apply this knowledge to the present and future in a critical and constructive fashion",
        programmewebsite: "https://scholars.hkbu.edu.hk/en/organisations/department-of-history-2",
        credits: 128,
        duration: 4,
        imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPf2beOMjN-0gfUMprU6NE4yo22b5Yh_RU5bGnsI65LlU3NJXnOBtHgFVUiB4_B15dNXA&usqp=CAU"

      },
    
      {
        facultyname: "School of Communication",
        programmename: "Bachelor of Communication (Hons) in Journalism and Digital Media",
        enrollment: 40,
        programmeobjectives: "Prepare students for a career in Chinese-language media or international media that operate in English",
        programmewebsite: "https://admissions.hkbu.edu.hk/en/programme-detail.html?id=202",
        credits: 128,
        duration: 4,
        imageurl: "https://admissions.hkbu.edu.hk/uploads/en/faculty/Programmes_on_Offer_banner_05.jpg"

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

      },,{
        facultyname: "Faculty of Arts",
        programmename: "Bachelor of Arts (Hons) in Chinese Language and Literature",
        enrollment: 25,
        programmeobjectives: "Cultivate in students a deeper knowledge of Chinese culture and broaden their vision with new perspectives to prepare them in meeting the challenges of the changing society",
        programmewebsite: "https://gs.hkbu.edu.hk/programmes/master-of-arts-ma-in-chinese-literature-language-and-culture",
        credits: 128,
        duration: 4,
        imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ixYVkfXfw7xjKTF_kD1XLssto9uegD6z9A&usqp=CAU"

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
        programmewebsite: "https://admissions.hkbu.edu.hk/en/programme-detail.html?id=1",
        credits: 128,
        duration: 4,
        imageurl: ""

      },
     
      {
        facultyname: "Faculty of Arts",
        programmename: "Bachelor of Arts (Hons) in English Language and Literature",
        enrollment: 15,
        programmeobjectives: "A rigorous and rewarding educational experience for its students",
        programmewebsite: "https://scholars.hkbu.edu.hk/en/organisations/department-of-english-language-and-literature/persons/",
        credits: 128,
        duration: 4,
        imageurl: "https://artsbu.hkbu.edu.hk/f/programme_detail/371/1220c454/ENG_English%20Poetry%20Contest%20%28Unpublished%20Work%29%202018%E8%8B%B1%E8%A9%A9%E5%89%B5%E4%BD%9C%E6%AF%94%E8%B3%BD_17%20November2018_1576489271.jpg"

      }, {
        facultyname: "Faculty of Arts",
        programmename: "Bachelor of Arts (Hons) in Humanities",
        enrollment: 20,
        programmeobjectives: "engage in all manner of interdisciplinary perspectives on culture, including cultural studies, food studies, gender studies, literary studies, media studies, and philosophy",
        programmewebsite: "https://hmw.hkbu.edu.hk/",
        credits: 128,
        duration: 4,
        imageurl: "https://admissions.hkbu.edu.hk/uploads/en/faculty/programme/inside_banner_Faculty_of_Arts_Humanities.jpg"

      },
    
      {
        facultyname: "School of Business",
        programmename: "Bachelor of Business Administration (Hons) in Economics and Data Analytics",
        enrollment: 20,
        programmeobjectives: "Allow students to apply economic reasoning to analyse individual markets, macroeconomies and international economies; to make decisions and formulate strategies for business and government",
        programmewebsite: "https://handbook.ar.hkbu.edu.hk/2021-2022/academic-programmes/undergraduate-programmes/school-of-business-1/bachelor-of-business-administration-honours/economics-and-data-analytics-concentration",
        credits: 128,
        duration: 4,
        imageurl: "https://bus.hkbu.edu.hk/eng/bus/programme/undergraduate-programmes/images/programme_bba.jpg"

      },
      {
        facultyname: "School of Business",
        programmename: "Bachelor of Business Administration (Hons) in Entrepreneurship",
        enrollment: 35,
        programmeobjectives: "Foster entrepreneurial spirit and global vision of students by using a multi-disciplinary and practical approach to provide them with entrepreneurial mindset, skills, knowledge and experience for business venturing, growth and development in local and international environment",
        programmewebsite: "https://bba.hkbu.edu.hk/academics/concentration-ebi",
        credits: 128,
        duration: 4,
        imageurl: "https://admissions.hkbu.edu.hk/uploads/en/faculty/programme/inside_banner_Asso_Year1_Bachelor_of_Business_Administration.jpg"

      },
    
      {
        facultyname: "School of Business",
        programmename: "Bachelor of Business Administration (Hons) in Human Resources Management",
        enrollment: 20,
        programmeobjectives: "Prepare for the HR profession, including recruitment and selection, human resources development, performance and reward management, labour relations and law",
        programmewebsite: "https://bba.hkbu.edu.hk/academics/concentration-hrm",
        credits: 128,
        duration: 4,
        imageurl: "https://bba.hkbu.edu.hk/f/section_banner/350/1440c400/curriculum.jpg"

      },
      {
        facultyname: "School of Business",
        programmename: "Bachelor of Business Administration (Hons) in Marketing",
        enrollment: 45,
        programmeobjectives: "Realizing your conceptual ability to resolve marketing problems and contribute to the well-being of the society",
        programmewebsite: "https://bba.hkbu.edu.hk/academics/concentration-mkt",
        credits: 128,
        duration: 4,
        imageurl: "https://www.cie.hkbu.edu.hk/main/images/programmes/cs/UG/bus/mkg/highlight.jpg"
      } ,   {
        facultyname: "School of Business",
        programmename: "Bachelor of Business Administration (Hons) in Finance",
        enrollment: 45,
        programmeobjectives: "Sharpens students’ quantitative and analytical skill to make pertinent financial and investment decisions taking into account the global environment and to develop careers in banking, finance, marketing, accounting or general management",
        programmewebsite: "https://bba.hkbu.edu.hk/academics/concentration-fine#:~:text=The%20Finance%20Concentration%20equips%20students,securities%20management%20and%20corporate%20finance.",
        credits: 128,
        duration: 4,
        imageurl: "https://admissions.hkbu.edu.hk/uploads/en/faculty/programme/inside_banner_Faculty_of_BA_Finance.jpg"

      },{
        facultyname: "School of Business",
        programmename: "Bachelor of Business Administration (Hons) in Applied Economics",
        enrollment: 40,
        programmeobjectives: "Apply economic theories in analysing individual markets, macroeconomics, international economies, games and strategies, public policies, and digital markets",
        programmewebsite: "https://handbook.ar.hkbu.edu.hk/2019-2020/academic-programmes/undergraduate-programmes/school-of-business-1/bachelor-of-business-administration-honours/applied-economics-concentration",
        credits: 128,
        duration: 4,
        imageurl: "https://busrpg.hkbu.edu.hk/wp-content/uploads/2021/09/ECON.jpg"

      }, {
        facultyname: "School of Business",
        programmename: "Bachelor of Business Administration (Hons) in Accounting Concentration",
        enrollment: 100,
        programmeobjectives: "The Bachelor of Business Administration (Hons) Programme is an integrated combination of general education and high quality business studies",
        programmewebsite: "https://admissions.hkbu.edu.hk/en/programme-detail.html?id=13",
        credits: 244,
        duration: 4,
        imageurl: "https://presspay.ng/news/wp-content/uploads/2022/08/Business-la-gi-e1623418238104.jpeg",

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
      "feel": "happy, excited, funny, like",
      "share": "satisfied",
      "comments": "enjoy",
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
      "feel": "enjoy, good, meaningful",
      "share": "excellent",
      "comments": "good",
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
      "feel": "useful, good, hard",
      "share": "satisfied",
      "comments": "enjoy"
    },{
      "name": "Cheung Wing Ki",
      "studentID": "19365385",
      "email": "wingki@gmail.com",
      "q1love": 4,
      "q2related": 4,
      "q3catchup": 3,
      "q4progress": 2,
      "q5enjoy": 3,
      "q6pressured": 5,
      "q7recommend": 3,
      "q8wholeperson": 3,
      "q9choose": 4,
      "q10joyful": 5,
      "q11instructions": 4,
      "q12difficulty":2,
      "q13adapt": 4,
      "q14wellstructured": 3,
      "q15resources": 3,
      "q16support": 4,
      "q17facilities": 4,
      "q18overall": 4,
      "q19connect": 4,
      "q20internship": 4,
      "q21help": 3,
      "q22knowledge": 3,
      "q23career": 2,
      "q24useful": 4,
      "feel": "hard, difficult, meaningful",
      "share": "satisfied",
      "comments": "meaningful"
    }
    ,{
      "name": "Lo Wai Chun",
      "studentID": "19263489",
      "email": "waichun@gmail.com",
      "q1love": 2,
      "q2related": 3,
      "q3catchup": 4,
      "q4progress": 5,
      "q5enjoy": 4,
      "q6pressured": 5,
      "q7recommend": 3,
      "q8wholeperson": 3,
      "q9choose": 4,
      "q10joyful": 5,
      "q11instructions": 4,
      "q12difficulty":2,
      "q13adapt": 4,
      "q14wellstructured": 3,
      "q15resources": 3,
      "q16support": 4,
      "q17facilities": 4,
      "q18overall": 3,
      "q19connect": 4,
      "q20internship": 4,
      "q21help": 1,
      "q22knowledge": 3,
      "q23career": 2,
      "q24useful": 4,
      "feel": "easy, understand, meaningful",
      "share": "satisfied",
      "comments": "meaningful"
    }
    ,{
      "name": "Chu King Ming",
      "studentID": "20133481",
      "email": "kingming@gmail.com",
      "q1love": 4,
      "q2related": 3,
      "q3catchup": 2,
      "q4progress": 5,
      "q5enjoy": 4,
      "q6pressured": 5,
      "q7recommend": 4,
      "q8wholeperson": 3,
      "q9choose": 3,
      "q10joyful": 5,
      "q11instructions": 4,
      "q12difficulty":2,
      "q13adapt": 4,
      "q14wellstructured": 3,
      "q15resources": 3,
      "q16support": 4,
      "q17facilities": 4,
      "q18overall": 3,
      "q19connect": 4,
      "q20internship": 4,
      "q21help": 1,
      "q22knowledge": 3,
      "q23career": 1,
      "q24useful": 4,
      "feel": "hard, useful",
      "share": "satisfied",
      "comments": "useful"
    }
    ,{
      "name": "Kwon Hyeon",
      "studentID": "21143433",
      "email": "hyeon@gmail.com",
      "q1love": 5,
      "q2related": 4,
      "q3catchup": 2,
      "q4progress": 5,
      "q5enjoy": 3,
      "q6pressured": 5,
      "q7recommend": 2,
      "q8wholeperson": 3,
      "q9choose": 3,
      "q10joyful": 2,
      "q11instructions": 4,
      "q12difficulty":2,
      "q13adapt": 4,
      "q14wellstructured": 3,
      "q15resources": 3,
      "q16support": 4,
      "q17facilities": 4,
      "q18overall": 1,
      "q19connect": 4,
      "q20internship": 5,
      "q21help": 1,
      "q22knowledge": 3,
      "q23career": 1,
      "q24useful": 4,
      "feel": "easy, understand",
      "share": "satisfied",
      "comments": "good"
    },
    ,{
      "name": "Wan Chu Ming",
      "studentID": "19173437",
      "email": "chuming@gmail.com",
      "q1love": 3,
      "q2related": 4,
      "q3catchup": 2,
      "q4progress": 5,
      "q5enjoy": 5,
      "q6pressured": 5,
      "q7recommend": 2,
      "q8wholeperson": 3,
      "q9choose": 3,
      "q10joyful": 4,
      "q11instructions": 4,
      "q12difficulty":5,
      "q13adapt": 4,
      "q14wellstructured": 3,
      "q15resources": 3,
      "q16support": 4,
      "q17facilities": 4,
      "q18overall": 1,
      "q19connect": 3,
      "q20internship": 5,
      "q21help": 1,
      "q22knowledge": 3,
      "q23career": 1,
      "q24useful": 2,
      "feel": "funny, good, understand",
      "share": "satisfied",
      "comments": "excellent"
    },
    ,{
      "name": "Yau Tai Tong",
      "studentID": "20177435",
      "email": "taitong@gmail.com",
      "q1love": 2,
      "q2related": 4,
      "q3catchup": 3,
      "q4progress": 5,
      "q5enjoy": 5,
      "q6pressured": 4,
      "q7recommend": 2,
      "q8wholeperson": 2,
      "q9choose": 4,
      "q10joyful": 4,
      "q11instructions": 4,
      "q12difficulty":5,
      "q13adapt": 4,
      "q14wellstructured": 3,
      "q15resources": 3,
      "q16support": 4,
      "q17facilities": 4,
      "q18overall": 4,
      "q19connect": 3,
      "q20internship": 5,
      "q21help": 1,
      "q22knowledge": 5,
      "q23career": 1,
      "q24useful": 2,
      "feel": "happy, good, understand",
      "share": "satisfied",
      "comments": "excellent"
    },
    ,{
      "name": "Man Hei Long",
      "studentID": "18173432",
      "email": "heilong@gmail.com",
      "q1love": 4,
      "q2related": 4,
      "q3catchup": 2,
      "q4progress": 5,
      "q5enjoy": 5,
      "q6pressured": 4,
      "q7recommend": 3,
      "q8wholeperson": 2,
      "q9choose": 4,
      "q10joyful": 4,
      "q11instructions": 4,
      "q12difficulty":5,
      "q13adapt": 3,
      "q14wellstructured": 3,
      "q15resources": 3,
      "q16support": 4,
      "q17facilities": 4,
      "q18overall": 4,
      "q19connect": 3,
      "q20internship": 5,
      "q21help": 1,
      "q22knowledge": 2,
      "q23career": 1,
      "q24useful": 5,
      "feel": "happy, good, understand",
      "share": "satisfied",
      "comments": "excellent"
    },
    ,{
      "name": "Wong Sze Yan",
      "studentID": "20171422",
      "email": "szeyan@gmail.com",
      "q1love": 1,
      "q2related": 4,
      "q3catchup": 2,
      "q4progress": 5,
      "q5enjoy": 3,
      "q6pressured": 4,
      "q7recommend": 3,
      "q8wholeperson": 2,
      "q9choose": 4,
      "q10joyful": 4,
      "q11instructions": 4,
      "q12difficulty":4,
      "q13adapt": 3,
      "q14wellstructured": 3,
      "q15resources": 3,
      "q16support": 4,
      "q17facilities": 4,
      "q18overall": 4,
      "q19connect": 5,
      "q20internship": 5,
      "q21help": 1,
      "q22knowledge": 2,
      "q23career": 1,
      "q24useful": 5,
      "feel": "happy, good, understand",
      "share": "satisfied",
      "comments": "excellent"
    },
    ,{
      "name": "Lam Suet Yan",
      "studentID": "19714322",
      "email": "suetyan@gmail.com",
      "q1love": 2,
      "q2related": 4,
      "q3catchup": 2,
      "q4progress": 5,
      "q5enjoy": 3,
      "q6pressured": 3,
      "q7recommend": 3,
      "q8wholeperson": 2,
      "q9choose": 4,
      "q10joyful": 4,
      "q11instructions": 4,
      "q12difficulty":4,
      "q13adapt": 4,
      "q14wellstructured": 3,
      "q15resources": 3,
      "q16support": 4,
      "q17facilities": 4,
      "q18overall": 4,
      "q19connect": 5,
      "q20internship": 5,
      "q21help": 1,
      "q22knowledge": 2,
      "q23career": 3,
      "q24useful": 5,
      "feel": "difficult, hard",
      "share": "satisfied, happy, good, understand",
      "comments": "excellent"
    },
    ]);
  }

  let p1 = await Programme.findOne({ programmename: "Bachelor of Arts (Hons) in Creative and Professional Writing" })
  let p2 = await Programme.findOne({ programmename: "Bachelor of Business Administration (Hons) in Applied Economics" })
  let p3 = await Programme.findOne({ programmename: "Bachelor of Business Administration (Hons) in Accounting Concentration" })
  let p4 = await Programme.findOne({ programmename: "Bachelor of Business Administration (Hons) in Entrepreneurship" })
  let p5 = await Programme.findOne({ programmename: "Bachelor of Business Administration (Hons) in Finance" })
  let p6 = await Programme.findOne({ programmename: "Bachelor of Business Administration (Hons) in Economics and Data Analytics" })
  let p7 = await Programme.findOne({ programmename: "Bachelor of Business Administration (Hons) in Human Resources Management" })
  let p8 = await Programme.findOne({ programmename: "Bachelor of Business Administration (Hons) in Marketing" })
  let p9 = await Programme.findOne({ programmename: "Bachelor of Arts (Hons) in Music" })
  let p10 = await Programme.findOne({ programmename: "Bachelor of Arts (Hons) in Chinese Language and Literature" })
  let p11 = await Programme.findOne({ programmename: "Bachelor of Arts (Hons) in English Language and Literature" })

  
  

  let f1 = await Feedback.findOne({ studentID: "19232195" })
  let f2 = await Feedback.findOne({ studentID: "19363583" })
  let f3 = await Feedback.findOne({ studentID: "21365785" })
  let f4 = await Feedback.findOne({ studentID: "19365385" })
  let f5 = await Feedback.findOne({ studentID: "19263489" })
  let f6 = await Feedback.findOne({ studentID: "20133481" })
  let f7 = await Feedback.findOne({ studentID: "21143433" })
  let f8 = await Feedback.findOne({ studentID: "19173437" })
  let f9 = await Feedback.findOne({ studentID: "20177435" })
  let f10 = await Feedback.findOne({ studentID: "18173432" })
  let f11 = await Feedback.findOne({ studentID: "20171422" })
  let f12 = await Feedback.findOne({ studentID: "19714322" })

  await Programme.addToCollection(p1.id, 'programmes').members([f1.id]);
  await Programme.addToCollection(p2.id, 'programmes').members([f3.id]);
  await Programme.addToCollection(p3.id, 'programmes').members([f2.id, f12.id]);
  await Programme.addToCollection(p4.id, 'programmes').members([f4.id]);
  await Programme.addToCollection(p5.id, 'programmes').members([f5.id]);
  await Programme.addToCollection(p6.id, 'programmes').members([f6.id]);
  await Programme.addToCollection(p7.id, 'programmes').members([f7.id]);
  await Programme.addToCollection(p8.id, 'programmes').members([f8.id]);
  await Programme.addToCollection(p9.id, 'programmes').members([f9.id]);
  await Programme.addToCollection(p10.id, 'programmes').members([f10.id]);
  await Programme.addToCollection(p11.id, 'programmes').members([f11.id]);


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
