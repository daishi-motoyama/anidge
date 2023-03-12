import { Field, Int, ObjectType } from '@nestjs/graphql'

import { OrganizationEntityType } from '@src/common/enums/organizationEntityType'

@ObjectType({ isAbstract: true })
export class Organization {
  @Field(() => Int, { description: '組織ID' })
  id: number

  @Field({ description: '組織名' })
  name: string

  @Field(() => OrganizationEntityType, { description: '組織の種類' })
  entityType: OrganizationEntityType

  @Field({ description: '作成日時' })
  createdAt: Date

  @Field({ description: '更新日時' })
  updatedAt: Date
}
