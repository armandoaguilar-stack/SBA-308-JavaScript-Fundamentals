
    // The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

// function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];

//   return result;
// }

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);


    // 1. the ID of the learner for which this data has been collected. Use of .map function to get the learner IDs from the LearnerSubmissions array.
    const learnerIds = LearnerSubmissions.map(submission => submission.learner_id); // use arrow f(x) extracts ID and creates new array of learner IDs.
    console.log('1. Learner Ids:', learnerIds);

    // checks for learner ID in the array (make sure they are unique).

        const submissionArray = LearnerSubmissions.map(item => [ //.map function to turn each submission into an array. Ordered values. 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        item.learner_id,
        item.assignment_id,
        item.submission.submitted_at,
        item.submission.score
  
    ]);
    console.log('2. Submission Array:', submissionArray);
    if (learnerIds.includes(submissionArray.learner_id) !== true) {
      learnerIds.push(submissionArray.learner_id); // if the learner ID is not already in the array, it adds it to the array.
    }

    // 2.the learner’s total, weighted average, in which assignments
    // A) turn each submission into an array
    const learnersTotalScores = {}; // Create empty object to store the total scores for ea/learner.

    LearnerSubmissions.forEach(submission => { // .forEach loop function to iterate through each submission in the LearnerSubmissions array.
        const id = submission.learner_id; // gets each learner's ID from array data submissions.learner_id.
        const score = submission.submission.score; // get each learner's assignments score.
        if (!learnersTotalScores[id]) { // verifies learners if ID already exists in the learnerTotalScores object. If it does not exist, it initializes it to 0.
            learnersTotalScores[id] = 0;
        }

        learnersTotalScores[id] += score; // Total scores are added  for that learner. Id 125: 47+150+400 = 597. Id 132: 39+140 = 179.
    });
    console.log('3. Learners Total Scores:', learnersTotalScores);

