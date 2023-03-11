import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql'

import { Gender } from '@src/common/enums/gender'
import { User } from '@src/modules/shared/user/types/user.type'

@ObjectType()
export class Profile {
  @Field(() => Int, { description: 'プロフィールID' })
  id: number

  @Field({ description: '名前' })
  firstName: string

  @Field({ description: '苗字' })
  lastName: string

  @Field({ description: '名前(フリガナ)' })
  firstNameKana: string

  @Field({ description: '苗字(フリガナ)' })
  lastNameKana: string

  @Field(() => Gender, { description: '性別' })
  gender: Gender

  @Field(() => GraphQLISODateTime, { description: '生年月日' })
  birthday: string

  @Field({ description: '電話番号' })
  phoneNumber: string

  @Field({ description: '作成日時' })
  createdAt: Date

  @Field({ description: '更新日時' })
  updatedAt: Date

  @Field(() => User, { description: 'ユーザー' })
  user: User
}
