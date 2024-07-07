export const typeDefs = `#graphql

        type Game {
            id: ID!
            title:string!
            platform:[string!]!
        }

        type Review {
            id:ID!
            rating:int!
            content:string!
        }

        type Author {
            id:ID!
            name:string!
            verified:Boolean!
        }

        type Query {
            reviews:[Review]
            games:[Game]
            authors:[Author]
        }

`