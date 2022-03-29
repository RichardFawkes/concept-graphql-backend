import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/Models";
import crypto from 'crypto';
// query: buscar dados
// mutation: criar, alterar ou deletar

@Resolver()
export class UserResolver {
    private data: User[] = [];

   @Query(() => [User])
    async users() {
     return this.data
 }
@Mutation(()=> User)
 async createUser(
     @Arg('name') name: string
 ) {
     const user = {id: crypto.randomUUID(), name: name}

     this.data.push(user)

     return user
 }
}