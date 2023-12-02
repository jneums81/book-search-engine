const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
}
type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    Link: String
}
type Auth {
    token ID!
    user: User
}
input InputBook {
    bookId: String
    Authors: [String]
    title: String
    description: String
    image: String
    link: String
}
type Query {
    me: USer
}
Type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: InputBook!): User
    removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;