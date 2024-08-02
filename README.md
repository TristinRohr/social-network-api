# Social Network API

## Description

This project is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. The application uses Express.js for routing, a MongoDB database, and the Mongoose ODM. This project demonstrates CRUD operations for users, thoughts, reactions, and friend lists.

## Table of Contents

- Installation
- Usage
- API Routes
- Testing
- License
- Contributing
- Questions

## Installation

1. Clone the repository:
   `git clone https://github.com/TristinRohr/social-network-api.git`

2. Navigate to the project directory:
   `cd social-network-api`

3. Install dependencies:
   `npm install`

4. Start MongoDB:
   Ensure MongoDB is installed and running on your local machine. You can start MongoDB using:
   `mongod`

5. Run the application:
   `npm start`

## Usage

The server will start on port 3001. You can interact with the API using Insomnia or any other API client.

## API Routes

### User Routes

- Create a new user:
  - Method: POST
  - URL: /api/users
  - Body: { "username": "john_doe", "email": "john.doe@example.com" }

- Get all users:
  - Method: GET
  - URL: /api/users

- Get a single user by ID:
  - Method: GET
  - URL: /api/users/:id

- Update a user by ID:
  - Method: PUT
  - URL: /api/users/:id
  - Body: { "username": "john_updated", "email": "john.updated@example.com" }

- Delete a user by ID:
  - Method: DELETE
  - URL: /api/users/:id

- Add a friend to a user's friend list:
  - Method: POST
  - URL: /api/users/:userId/friends/:friendId

- Remove a friend from a user's friend list:
  - Method: DELETE
  - URL: /api/users/:userId/friends/:friendId

### Thought Routes

- Create a new thought:
  - Method: POST
  - URL: /api/thoughts
  - Body: { "thoughtText": "Here's a cool thought...", "username": "john_doe", "userId": "USER_ID_HERE" }

- Get all thoughts:
  - Method: GET
  - URL: /api/thoughts

- Get a single thought by ID:
  - Method: GET
  - URL: /api/thoughts/:id

- Update a thought by ID:
  - Method: PUT
  - URL: /api/thoughts/:id
  - Body: { "thoughtText": "Here's an updated thought..." }

- Delete a thought by ID:
  - Method: DELETE
  - URL: /api/thoughts/:id

- Add a reaction to a thought:
  - Method: POST
  - URL: /api/thoughts/:thoughtId/reactions
  - Body: { "reactionBody": "Nice thought!", "username": "jane_doe" }

- Remove a reaction from a thought:
  - Method: DELETE
  - URL: /api/thoughts/:thoughtId/reactions/:reactionId

## Testing

You can test the API using Insomnia or any other API client. Use the provided endpoints and request bodies to perform CRUD operations on users, thoughts, reactions, and friend lists.

### Example Workflow

1. Create a User:
   - Method: POST
   - URL: http://localhost:3001/api/users
   - Body: { "username": "john_doe", "email": "john.doe@example.com" }

2. Get All Users:
   - Method: GET
   - URL: http://localhost:3001/api/users

3. Get Single User:
   - Method: GET
   - URL: http://localhost:3001/api/users/USER_ID_HERE

4. Update a User:
   - Method: PUT
   - URL: http://localhost:3001/api/users/USER_ID_HERE
   - Body: { "username": "john_updated", "email": "john.updated@example.com" }

5. Delete a User:
   - Method: DELETE
   - URL: http://localhost:3001/api/users/USER_ID_HERE

6. Create a Thought:
   - Method: POST
   - URL: http://localhost:3001/api/thoughts
   - Body: { "thoughtText": "Here's a cool thought...", "username": "john_doe", "userId": "USER_ID_HERE" }

7. Get All Thoughts:
   - Method: GET
   - URL: http://localhost:3001/api/thoughts

8. Get Single Thought:
   - Method: GET
   - URL: http://localhost:3001/api/thoughts/THOUGHT_ID_HERE

9. Update a Thought:
   - Method: PUT
   - URL: http://localhost:3001/api/thoughts/THOUGHT_ID_HERE
   - Body: { "thoughtText": "Here's an updated thought..." }

10. Delete a Thought:
    - Method: DELETE
    - URL: http://localhost:3001/api/thoughts/THOUGHT_ID_HERE

11. Add a Reaction to a Thought:
    - Method: POST
    - URL: http://localhost:3001/api/thoughts/THOUGHT_ID_HERE/reactions
    - Body: { "reactionBody": "Nice thought!", "username": "jane_doe" }

12. Remove a Reaction from a Thought:
    - Method: DELETE
    - URL: http://localhost:3001/api/thoughts/THOUGHT_ID_HERE/reactions/REACTION_ID_HERE

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please create a pull request or submit an issue for any changes.

## Questions

If you have any questions, please contact me at [tristist@gmail.com](mailto:tristist@gmail.com). You can also find more of my work on [GitHub](https://github.com/TristinRohr).

## Video
[Video showing Insomnia tests](<Screen Recording 2024-08-01 at 8.50.50 PM.mov>)

## Link

[GitHub](https://github.com/TristinRohr/social-network-api)