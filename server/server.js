const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const {
    GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require("graphql")

const {books, authors} = require("./data")
const PORT = 5000;
const app = express();



const BookType = new GraphQLObjectType({
    name:"Book",
    description:"This represents a book written by an author",
    fields:()=>({
        id:{type:GraphQLNonNull(GraphQLInt)},
        name:{type:GraphQLNonNull(GraphQLString)},
        authorId:{type:GraphQLNonNull(GraphQLInt)},
        author:{
            type: AuthorType,
            resolve:(book)=>{
                return authors.find(author=> author.id===book.authorId)
            }
        }
    })
})
const AuthorType = new GraphQLObjectType({
    name:"Author",
    description:"This represents a author of a book",
    fields:()=>({
        id:{type:GraphQLNonNull(GraphQLInt)},
        name:{type:GraphQLNonNull(GraphQLString)},
        books: {type: GraphQLList(BookType),
        resolve:(author)=>{
            return books.filter(book=> book.authorId===author.id)
        }
    }
    })
})

const RootQueryType = new GraphQLObjectType({
    name:"Query",
    description:"Root Query",
    fields:()=>({

        book:{
            type: BookType,
            description: "single Book",
            args:{
               id:{type: GraphQLInt} 
            },
            resolve: (parent, args)=> books.find(book=>book.id===args.id)
        },
        books:{
            type: new GraphQLList(BookType),
            description:"List Of All Books",
            resolve:()=>books
        },
        author:{
            type:AuthorType,
            description: "Single Author",
            args: {
                id: {type:GraphQLInt}
            },
            resolve:(parent, args)=> authors.find(author=>author.id===args.id)
        },
        authors:{
            type: new GraphQLList(AuthorType),
            description:"List Of All Authors",
            resolve:()=> authors
        },
    })
})

const RootMutationType = new GraphQLObjectType({
    name: "Mutation",
    description: "Root Mutation",
    fields:()=>({
        addBook:{
            type: BookType,
            description: "Add a book",
            args:{
                name:{type:GraphQLNonNull(GraphQLString)},
                authorId:{type:GraphQLNonNull(GraphQLInt)},
            },
            resolve:(parent, args)=>{
                const book = {
                    id: books.length+1, 
                    name: args.name, 
                    authorId: args.authorId
                }
                books.push(book)
                return book
            }
        },
        addAuthor:{
            type: AuthorType,
            description: "Add a author",
            args:{
                name:{type:GraphQLNonNull(GraphQLString)},

            },
            resolve:(parent, args)=>{
                const author = {
                    id: authors.length+1, 
                    name: args.name, 
                }
                authors.push(author)
                return author
            }
        }
    })
})

const Schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
  })


app.use("/graphql", expressGraphQL({
    schema:Schema,
    graphiql:true
}));

app.listen(PORT, () => console.log(`sever runnig on port:${PORT}`));



// const Schema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name:"helloWorld",
//         fields:()=>({
//             message:{
//                 type:GraphQLString,
//                 resolve:()=>"hi!!!!"
//             }
//         })
//     })
// })