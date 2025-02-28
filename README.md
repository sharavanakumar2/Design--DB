# Zen Class MongoDB Project

This repository contains a MongoDB database design and sample data for a Zen Class program, along with queries to analyze the data.

## Database Design

The database consists of the following collections:

* `users`: Stores information about the students in the Zen Class program.
* `codekata`: Tracks the problems solved by each user in the Codekata platform.
* `attendance`: Records the attendance of users in the class.
* `topics`: Stores information about the topics covered in the Zen Class program.
* `tasks`: Tracks the tasks assigned to users and their submission status.
* `company_drives`: Stores information about company recruitment drives conducted for Zen Class students.
* `mentors`: Stores information about the mentors guiding the students.

## Data

The `data.js` file contains sample data for each of the collections. You can use this data to populate your MongoDB database.

## Queries

The `queries.js` file contains various MongoDB queries to analyze the data, such as:

* Find all topics and tasks taught/given in October.
* Find all company drives between specific dates.
* Find the number of problems solved by a user in Codekata.
* Find mentors with more than 15 mentees.
* Find users who were absent and didn't submit tasks between specific dates.

## Getting Started

1. Clone this repository: `git clone https://github.com/sharavanakumar2/Design--DB.git`
2. Install MongoDB and `mongosh` (MongoDB Shell).
3. Import the data: `mongosh <Design--DB> <path/to/data.js>`
4. Run the queries in `mongosh`: `mongosh <database_name> <path/to/queries.js>`

## Contributing

Feel free to contribute to this project by adding more data, queries, or improving the database design.

## License

This project is licensed under the MIT License.
