# Social Networking API

## Overview
This project implements a RESTful API for a basic social networking application using Node.js and MongoDB. The application supports user profiles, posts (text-based), and the ability to follow other users. The API is secured using JWT-based authentication and focuses on efficient data retrieval and management using MongoDB.

## Features
- **User Profiles:** Create, update, view, and delete user profiles with details like username, bio, and profile picture URL. Each user is assigned a unique UUID.
- **Authentication:** JWT-based authentication to secure the API, supporting user sign up and log in functionalities.
- **Posts:** Allow users to create, view, update, and delete their posts. Each post includes text content, a timestamp, and the ID of the user who created it.
- **Following Mechanism:** Enable users to follow and unfollow other users. Retrieve the list of users a given user is following and who is following them.
- **Efficient Data Retrieval:** Utilize MongoDB's aggregation framework to implement efficient queries for the social feed, showing posts from people they follow, sorted by the most recent.
- **Security and Validation:** Implement input validation to prevent injection attacks and other common security vulnerabilities. Rate limiting is also implemented to protect against brute force attacks.
- **Testing:** Integration tests are written for API endpoints to ensure they work as expected and handle errors gracefully.
- **Documentation:** Comprehensive API documentation is provided, including endpoint descriptions, request/response formats, and example use cases.

## Getting Started
1. Clone this repository:

git clone https://github.com/ansadmk/social-media-network-api.git



2. Install dependencies:

cd social-network-api
npm install



3. Set up environment variables:
Create a `.env` file in the root directory and add the following variables:

PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>

markdown

4. Start the server:

npm start

shell




## Testing
Run integration tests:

npm test


## Technologies Used
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Supertest for testing

## Contributing
Contributions are welcome! Please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License
This project is licensed under the [MIT License](LICENSE).
