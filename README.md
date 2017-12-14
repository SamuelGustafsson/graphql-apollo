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

## GraphQL

Go to www.localhost:4000/graphql and add this to display user.

### User querys.

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

### User mutations.

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

### News querys

Display all news.

```
{
  newsAll{
    id
    title
    image
    content
    author
  }
}
```

### News mutations

Add news.

```
mutation {
  addNews(userId: "5a2fdd24bc3f4defdfed8c03", title: "This is the first news!", content:"This is the first content") {
    id
    title
    image
    content
    author
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

* **Samuel Gustafsson**

## License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details
