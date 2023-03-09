import { Field, InputType } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'

import { IsEqualTo } from '@src/common/validations/isEqualTo.decorator'

@InputType()
export class CreateUserInput {
  @Field({ description: '表示名' })
  @IsNotEmpty({ message: '表示名は必須です' })
  displayName: string
  @Field({ description: 'メールアドレス' })
  @IsNotEmpty({ message: 'メールアドレスは必須です' })
  @IsEmail({}, { message: 'メールアドレスの形式が正しくありません' })
  email: string
  @Field({ description: 'パスワード' })
  @IsNotEmpty({ message: 'パスワードは必須です' })
  @MinLength(8, { message: 'パスワードは8文字以上で入力してください' })
  password: string
  @Field({ description: 'パスワード確認用' })
  @IsNotEmpty({ message: 'パスワード確認用は必須です' })
  @IsEqualTo('password', {
    message: 'パスワードとパスワード確認用が一致しません',
  })
  passwordConfirmation: string
}
