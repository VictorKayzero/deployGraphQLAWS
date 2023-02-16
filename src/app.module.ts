import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { Md1Module } from './md1/md1.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,

      //playground:false,
      autoSchemaFile:join(process.cwd(),'../../tmp/schema.gql')
    }),
    Md1Module,
  ],
})
export class AppModule {}
