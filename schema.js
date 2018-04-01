import {
    GraphQLSchema,
    GraphQLObjecType,
    GraphQLString,
    
  } from 'graphql';
import { resolve } from 'path';

const QueryType = new GraphQLObjecType({
    name: 'Query',
    description: '...',

    fields = () => {
       person: {
           type: PersonType,
           args: {
               id: {type: GraphQLString}
           }
           resolve = () => {
             // todo : Promise smth
           }
           
       }
    }
    
})

  export default new GraphQLSchema({
      query: QueryType
  })