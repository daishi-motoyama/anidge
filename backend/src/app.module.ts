import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

import { SharedModule } from '@src/modules/shared/index.module'

@Module({
  imports: [
    SharedModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/guest.schema.gql'),
      cors: {
        origin: '*',
      },
      driver: ApolloDriver,
      include: [SharedModule],
      path: '/graphql/guest',
      sortSchema: true,
    }),
  ],
})
export class AppModule {}
