OVERVIEW:

For the SBA 308 - Fundamentals of JavaScript, the project analyzes data, assignment groups, and learner submissions data to calculate the following:
- Total Scores Per learner
- Total Weighted Averages Per learner
- Per Assignment Avearages
- Identifying Valid Due Dates and submissions
- Late Submission Penalties 
- Calculating Total New Scores with Penalties
- Error-handling for grading results

The code demonstrates use of:

- Arrays and objects
- Loops (for, forEach, for...of)
- Higher-order functions (map, find)
- Try/catch error handling
- Data validation
- Conditional logic
- Late penalty rules

1. Course Information
- Metadata provided by instructors is defined 
- Data is used to validate assignment group belonging to the correct course(s)

2. Assignment group
- Contains all assignments for the course with specific properties
- Provides due dates used for filtering valid/invalid submissions
- Possible points that can be attained which are used to calculated weighted Averages

3. Leaner submissions
- Array of submissions where each submission contains specific data for referencing 


Understanding the Code:
A) Extracting Learners IDs: Used for grouping and aggreagation 
B) Submission transformatino of data: converts objects into structured arrays for inspect data 
c) Loop functions: Loops through submissions, finds exact scores, add scores to leaner's Total
D) Continue Loop Control: Skips invalid values, logs data without interrupting process
E) Calculating Weighted Average Scores: Uses .find() function to match assignments and falls back to value of zero (0) if missing assignment
F) Showing detailed breakdown per assignment per learner: Total Points Earned, Total Points Possible, and Averages. 
G) Filters: Including only assingments whose due date passed. Ignores future assignments and only counts past submissions. 
H) Result Objects: Set() used for unique leaner IDs and Object(...LearnerAssignmentAverages, LearnerAssignmentPointsEarned, etc)
I) If/else statements: Prevent incorrect logic/calculations and logs errors when they occur without interrupting process
J) Try/Catch Error Handling: Hanldes invalid data 

KEY CONCEPTS DEMONSTRATED
Array mapping (map)
Searching for values in array data (find)
Looping functions (for, forEach,etc)
Object accumulation 
Conditional filtering
Date comparison
Error Handling (try/catch)
Late penalty logic 
Weighted Averages
New Scores after penalties logic
