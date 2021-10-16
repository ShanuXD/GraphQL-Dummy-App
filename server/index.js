const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

// context:()=>{return UserModal} or context:()=>{ return {name:"shanu"} }
//  context:({req})=>{}  access request

const server = new ApolloServer({ typeDefs, resolvers, context:({req})=>{ return {req} } });

server.listen().then(({ url }) => {
  console.log(`YOUR API IS RUNNING AT: ${url} :)`);
});