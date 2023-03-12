import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

import { HostModule } from '@src/modules/host/index.module'
import { SharedModule } from '@src/modules/shared/index.module'

@Module({
  imports: [
    SharedModule,
    HostModule,
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
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/host.schema.gql'),
      cors: {
        origin: '*',
      },
      driver: ApolloDriver,
      include: [SharedModule, HostModule],
      path: '/graphql/host',
      sortSchema: true,
    }),
  ],
})
export class AppModule {}
