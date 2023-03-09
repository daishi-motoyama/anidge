import { Field, HideField, Int, ObjectType } from '@nestjs/graphql'
@ObjectType()
export class User {
  @Field(() => Int, { description: 'ユーザーID' })
  id: number
  @Field({ description: '表示名' })
  displayName: string
  @Field({ description: 'メールアドレス' })
  email: string
  @HideField()
  password: string
  @Field({ description: '作成日時' })
  createdAt: Date
  @Field({ description: '更新日時' })
  updatedAt: Date
}
