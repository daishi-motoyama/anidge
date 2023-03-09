import { Field, ObjectType } from '@nestjs/graphql'

import { User } from '@src/modules/shared/user/types/user.type'

@ObjectType()
export class SignInResponse {
  @Field({ description: 'アクセストークン' })
  accessToken: string

  @Field(() => User, { description: 'ユーザー' })
  user: User
}
