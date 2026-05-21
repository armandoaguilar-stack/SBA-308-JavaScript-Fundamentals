
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


    // B) Calculating the weighted Avg for each learner in data array. 
    // Approach: Total points earned / points possible for all assignments. 
    const learnersWAvgScores = {}; // Create empty object to store the weighted avg scores for each learner.

    LearnerSubmissions.forEach(submission => { // .forEach loop function to iterate through each submission in the LearnerSubmissions array. Repeat as above.

        const id = submission.learner_id; // gets each learner's ID from array data submissions.learner_id.
        const score = submission.submission.score; // get each learner's assignments score.
        const possiblePts = AssignmentGroup.assignments.find(assignment => assignment.id === submission.assignment_id)?.points_possible || 0; 
        // get the points possible for the assignment.
        //.AssignmentGroup.assignments is array of assignments. 
        // .find() looks and matches the assigment ID in submissions with above array line 151. If matches, access pts possible for assignment. Otherwise, return 0 (if assignment not found).
        // Arrow f(x) checks every assigment until it finds the one with the matching ID.
        // || 0 fallback value if assigment ID not found. Prevent errors = never undefined. 

        if (!learnersWAvgScores[id]) { // verifies learners if ID already exists in the learnersWAvgScores object. If it does not exist, it initializes it to 0.
            learnersWAvgScores[id] = { totalEarned: 0, totalPossible: 0 };
        }

        learnersWAvgScores[id].totalEarned += score; // Total points earned are added for that learner. Id 125: 47+150+400 = 597. Id 132: 39+140 = 179.
        learnersWAvgScores[id].totalPossible += possiblePts; // Pts possible are shown for each assignment per learner. 
    });
    console.log("4. Learners' WeightedAvg:", learnersWAvgScores);
    console.log("Learner 125 Weighted Average Score:", learnersWAvgScores[125].totalEarned / learnersWAvgScores[125].totalPossible);
    console.log("Learner 132 Weighted Average Score:", learnersWAvgScores[132].totalEarned / learnersWAvgScores[132].totalPossible);

    // Avg for ea/assignment for each learner.
    const learnersAssignmentAvgs = {}; // Create empty object to store the average scores for each assignment for each learner.

    LearnerSubmissions.forEach(submission => { // .forEach loop function to iterate through each submission in the LearnerSubmissions array. Repeat as above.

        const id = submission.learner_id; //repeat as previously.
        const assignmentId = submission.assignment_id; // Assignment ID from submissions.

        // Find corresponnding assignment that matches ID in AssignmentGroup.assignments array. 
        const assign = AssignmentGroup.assignments.find
        (assign => assign.id === assignmentId); 

        if (!assign) {
          HTMLFormControlsCollection.log(`Assignment with ID ${assignmentId} not found.`);
          return; // Skip this submission if assignment not found.
        }

        const possiblePts = assign.points_possible; // Get points possible for each assignment.

        if (!learnersAssignmentAvgs[id]) { 
          learnersAssignmentAvgs[id] = {};
        }

        if (!learnersAssignmentAvgs[id][assignmentId]) {
          learnersAssignmentAvgs[id][assignmentId] = { totalEarned: 0, totalPossible: 0 };
        }

        //Total earned added for each learner and assignment. Total possible scores for each learner. 
        learnersAssignmentAvgs[id][assignmentId].totalEarned += submission.submission.score;
        learnersAssignmentAvgs[id][assignmentId].totalPossible += possiblePts;
        // Find avg for each assignment for each learner.
        learnersAssignmentAvgs[id][assignmentId].average = learnersAssignmentAvgs[id][assignmentId].totalEarned / learnersAssignmentAvgs[id][assignmentId].totalPossible; });
    console.log("5. Learners' Each Assignment Avgs:", learnersAssignmentAvgs);

    // If an assignment due date has not happened yet, DO NOT include assignment. 
    const currentDate = new Date(); // Get the current date.
    console.log("Current Date:", currentDate);
    
    const validSubmissions = []; // Create empty array to store valid submissions where due date has passed.
    
    // Filter submissions where due date has passed
    LearnerSubmissions.forEach(submission => {
      const assignment = AssignmentGroup.assignments.find(assign => assign.id === submission.assignment_id); // Assign.id must match submission.assignment_id.

      if (!assignment) return; // When an assignment is not found, skip this submission.
      const dueDate = new Date(assignment.due_at); // Convert the due date string to a Date object for comparison.
      if (dueDate <= currentDate) { // Add submission if due date passed. Current Date > Due Date.
        validSubmissions.push(submission);
      }
    });

    // Create final results for each learner
    const results = {}; // Create empty object to store the final results for each learner.
    
    const uniqueLearnerIds = [...new Set(LearnerSubmissions.map(sub => sub.learner_id))];
    
    for (let id of uniqueLearnerIds) { // Loop through each learner ID.
      if (learnersWAvgScores[id] && learnersWAvgScores[id].totalPossible > 0) {
        results[id] = {
          id: id,
          avg: learnersWAvgScores[id].totalEarned / learnersWAvgScores[id].totalPossible,
          ...learnersAssignmentAvgs[id]
        };
      }
    }

    console.log('6. Submissions Due Date Has Passed - Valid:', validSubmissions);
    console.log('7. Learners Results:', results); // Final results for each learner with their avg scores and assignment avgs. 

    if (AssignmentGroup.course_id !== CourseInfo.id) {
      //course_id in AssignmentGroup must match course id in CourseInfo. If not, log error message.
      console.error(`Warning - Error: AssignmentGroup course_id ${AssignmentGroup.course_id} does not match course id ${CourseInfo.id}.`);  
    }

    
