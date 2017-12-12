# Starting with graphQL

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine.

### Prerequisites

* Node
* Yarn

### Installing

A step by step serie to start project

```
npm install

OR

yarn install
```

To run project:

```
yarn start
```

Json server endpoints

```
  http://localhost:3000/users
  http://localhost:3000/news
  http://localhost:3000/comments
```

Go to www.localhost:4000/graphql and add this to display user.

Find user by id.

```
{
  user(id: "5a2fa8df2e4e75cf2d514264"){
    id
    email
    password
    admin
  }
}
```

Add user example.

```
  mutation {
    addUser(email: "test@mail.com", password: "password", admin: false) {
      id
      firstname
      lastname
    }
  }
```

Delete user example.

```
mutation {
  deleteUser(id: "5a2fa8df2e4e75cf2d514264") {
    id
    email
    password
  }
}
```

## Built With

* [GraphQL](http://graphql.org/) - A query language for API's.
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the
  browser and node.js.
* [Node](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8
  JavaScript engine.
* [Typescript](https://www.typescriptlang.org/) - Programming language.
* [MongoDB](https://www.mongodb.com/) - Document database with the scalability and flexibility .
* [Mongoose](http://mongoosejs.com/) - Elegant mongodb object modeling for node.js.

## Authors

* **Samuel Gustafsson** - _Initial work_ -

## License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details
