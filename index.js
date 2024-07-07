import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import { typeDefs } from './schema';

const PORT = 4000;

const server  = new ApolloServer({
    typeDefs:typeDefs
})

const {url} = await startStandaloneServer(server,{
    listen:{port:PORT}
})