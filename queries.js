// 1. Find all the topics and tasks which are taught/given in the month of October
db.topics.find({
    taughtDate: {
      $gte: ISODate("2020-10-01T00:00:00Z"),
      $lt: ISODate("2020-11-01T00:00:00Z")
    }
  }).forEach(printjson);
  
  db.tasks.find({
    dueDate: {
      $gte: ISODate("2020-10-01T00:00:00Z"),
      $lt: ISODate("2020-11-01T00:00:00Z")
    }
  }).forEach(printjson);
  
  // 2. Find all the company drives which appeared between 15 Oct 2020 and 31 Oct 2020
  db.company_drives.find({
    driveDate: {
      $gte: ISODate("2020-10-15T00:00:00Z"),
      $lte: ISODate("2020-10-31T00:00:00Z")
    }
  }).forEach(printjson);
  
  // 3. Find all the company drives and students who appeared for the placement
  db.company_drives.find({}, { companyName: 1, usersAppeared: 1 }).forEach(printjson);
  
  // 4. Find the number of problems solved by the user in codekata
  db.codekata.countDocuments({ userId: 1 }); // For a specific user (e.g., userId 1)
  
  db.codekata.aggregate([
    { $group: { _id: "$userId", problemsSolved: { $sum: 1 } } }
  ]).forEach(printjson); // For all users (using aggregation)
  
  // 5. Find all the mentors with who has the mentee's count more than 15
  db.mentors.find({ "mentees.15": { $exists: true } }).forEach(printjson); // Check if the 16th element (index 15) exists
  
  // 6. Find the number of users who are absent and task is not submitted between 15 Oct 2020 and 31 Oct 2020
  db.attendance.aggregate([
    {
      $match: {
        date: {
          $gte: ISODate("2020-10-15T00:00:00Z"),
          $lte: ISODate("2020-10-31T00:00:00Z")
        },
        present: false
      }
    },
    {
      $lookup: {
        from: "tasks",
        localField: "userId",
        foreignField: "userId",
        as: "userTasks"
      }
    },
    {
      $match: {
        "userTasks.submittedDate": null
      }
    },
    {
      $count: "absentAndTaskNotSubmitted"
    }
  ]).forEach(printjson);