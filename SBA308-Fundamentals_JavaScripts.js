
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
    const leanerIds = LearnerSubmissions.map(submission => submission.learner_id);
    console.log('1. Learner Ids:', leanerIds);

    // 2.the learner’s total, weighted average, in which assignments
    // A) turn each submission into an array
    const submissionArray = LearnerSubmissions.map(item => [ //.map function to turn each submission into an array. Ordered values. 
        item.learner_id,
        item.assignment_id,
        item.submission.submitted_at,
        item.submission.score
    ]);
    console.log('2. Submission Array:', submissionArray);

    // B) Learner's total score 
    const sumScores = {}; // Create empty object to store the sum of scores for each learner
    LearnerSubmissions.forEach(item => { // .forEach loop function to calculate the sum of scores for each learner.
        const id = item.learner_id; // gets each learner's ID.  
        const score = item.submission.score; // get each learner's assignments score.
        if (!sumScores[id]) { // verifies if leaners exists in object, if not, it initializes the score to 0.
            sumScores[id] = 0;
        }
        sumScores[id] += score; // adds new score to the learners existing score in the sumScores object.
    });  // This loop iterates through each submission, checks if the learner's ID already exists in the sumScores object, and if not, initializes it to 0. Then add new score to total score for that learner in the sumScores object.
    
    console.log('2. Learner Sum of Total Scores:', sumScores);



    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
    // "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    // <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores

// If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, 
// letting the user know that the input was invalid. Similar data validation should occur elsewhere within the program.

// You should also account for potential errors in the data that your program receives. What if points_possible is 0? You cannot divide by zero.
//  What if a value that you are expecting to be a number is instead a string?

// Use try/catch and other logic to handle these types of errors gracefully.
// If an assignment is not yet due, do not include it in the results or the average. Additionally, if the learner’s submission is late 
// (submitted_at is past due_at), deduct 10 percent of the total points possible from their score for that assignment.

// Create a function named getLearnerData() that accepts these values as parameters, in the order listed:
//  (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above.