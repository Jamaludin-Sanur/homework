var { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String,
    name : String,
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  name: () => {
    return 'name world!';
  }
};

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ name }', root).then((response) => {
  console.log(response);
});