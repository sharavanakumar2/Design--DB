db.users.insertMany([
    { userId: 1, name: "Alice", email: "alice@example.com", mentorId: 101 },
    { userId: 2, name: "Bob", email: "bob@example.com", mentorId: 102 },
    { userId: 3, name: "Charlie", email: "charlie@example.com", mentorId: 101 },
    { userId: 4, name: "David", email: "david@example.com", mentorId: 102 }
  ]);
  
  db.codekata.insertMany([
    { userId: 1, problemId: 1001, solvedDate: ISODate("2020-10-18T10:00:00Z") },
    { userId: 1, problemId: 1002, solvedDate: ISODate("2020-10-20T14:30:00Z") },
    { userId: 2, problemId: 1001, solvedDate: ISODate("2020-10-22T09:15:00Z") },
    { userId: 3, problemId: 1003, solvedDate: ISODate("2020-10-25T16:45:00Z") },
    { userId: 4, problemId: 1001, solvedDate: ISODate("2020-11-02T12:00:00Z") }
  ]);
  
  db.attendance.insertMany([
    { userId: 1, date: ISODate("2020-10-18T00:00:00Z"), present: true },
    { userId: 2, date: ISODate("2020-10-18T00:00:00Z"), present: true },
    { userId: 3, date: ISODate("2020-10-18T00:00:00Z"), present: false },
    { userId: 4, date: ISODate("2020-10-18T00:00:00Z"), present: true },
    { userId: 3, date: ISODate("2020-10-20T00:00:00Z"), present: false },
    { userId: 3, date: ISODate("2020-10-25T00:00:00Z"), present: false }
  ]);
  
  db.topics.insertMany([
    { topicId: 201, topicName: "MongoDB Basics", taughtDate: ISODate("2020-10-16T00:00:00Z") },
    { topicId: 202, topicName: "JavaScript Fundamentals", taughtDate: ISODate("2020-10-23T00:00:00Z") },
    { topicId: 203, topicName: "React introduction", taughtDate: ISODate("2020-11-03T00:00:00Z") }
  ]);
  
  db.tasks.insertMany([
    { taskId: 301, taskName: "MongoDB Queries", topicId: 201, dueDate: ISODate("2020-10-20T00:00:00Z"), submittedDate: ISODate("2020-10-19T10:00:00Z"), userId: 1 },
    { taskId: 302, taskName: "JS Variables", topicId: 202, dueDate: ISODate("2020-10-27T00:00:00Z"), submittedDate: ISODate("2020-10-26T14:00:00Z"), userId: 2 },
    { taskId: 303, taskName: "React Components", topicId: 203, dueDate: ISODate("2020-11-07T00:00:00Z"), submittedDate: null, userId: 3 },
    { taskId: 304, taskName: "MongoDB aggregation", topicId: 201, dueDate: ISODate("2020-10-22T00:00:00Z"), submittedDate: null, userId: 3 }
  ]);
  
  db.company_drives.insertMany([
    { driveId: 401, companyName: "Google", driveDate: ISODate("2020-10-18T00:00:00Z"), usersAppeared: [1, 2] },
    { driveId: 402, companyName: "Microsoft", driveDate: ISODate("2020-10-25T00:00:00Z"), usersAppeared: [1, 3, 4] },
    { driveId: 403, companyName: "Amazon", driveDate: ISODate("2020-11-05T00:00:00Z"), usersAppeared: [2, 4] }
  ]);
  
  db.mentors.insertMany([
    { mentorId: 101, mentorName: "John Doe", mentees: [1, 3] },
    { mentorId: 102, mentorName: "Jane Smith", mentees: [2, 4] }
  ]);