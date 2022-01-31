const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');

const ALevel = require('./src/ALevel');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String,
    bye: String,
    ALevel(subject: String!, point: Int): String,
  },
`);

// The root provides a resolver function for each API endpoint
const root = {
    hello: () => {
        return 'Hello world!';
    },
    bye: () => {
        return 'Bye world!';
    },
    ALevel: ({point, subject}) => {
        return ALevel(point, subject);
    },
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running Grade API server');
