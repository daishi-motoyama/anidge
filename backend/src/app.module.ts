import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

@Module({
  imports: [
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: join(process.cwd(), 'src/graphql/schema/guest.schema.gql'),
    //   cors: {
    //     origin: '*',
    //   },
    //   path: '/graphql/guest',
    //   sortSchema: true,
    // }),
  ],
})
export class AppModule {}
