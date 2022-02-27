const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const graphql = require('graphql');

const ALevelDB = require('./src/ALevel');

const ALevelType = new graphql.GraphQLObjectType({
    name: 'A Level',
    fields: {
        id: {type: graphql.GraphQLID}
    }
})

const queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields : {
        ALevelDB: {
            type: ALevelType,
        }
    }
})

const schema = new graphql.GraphQLSchema({query: queryType})

const app = express();
app.use('/gradesapi', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));
app.listen(4000);
console.log('Running Grade API server');
