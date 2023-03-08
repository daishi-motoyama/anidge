import { Module } from '@nestjs/common'

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
