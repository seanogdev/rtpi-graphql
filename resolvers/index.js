import { mergeResolvers } from "merge-graphql-schemas";

//!: Resolvers
import operatorResolvers from './operators';
// import operatorResolvers from './operators';

const resolvers = [
  operatorResolvers,
  // operatorResolvers,
]

export default mergeResolvers(resolvers);