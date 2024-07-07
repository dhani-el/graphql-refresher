import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import db from './_db.js';

const PORT = 4000;

const resolvers = {
    Query:{
        games(){
            return db.games
        },
        authors(){
            return db.authors
        },
        reviews(){
            return db.reviews
        },
    }
}

const server  = new ApolloServer({
    typeDefs:typeDefs,
    resolvers:resolvers
})

const {url} = await startStandaloneServer(server,{
    listen:{port:PORT}
})

console.log("servr live at:",PORT)