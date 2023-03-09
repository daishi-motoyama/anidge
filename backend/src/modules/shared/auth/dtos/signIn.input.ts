import { Field, InputType } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty } from 'class-validator'

@InputType()
export class SignInInput {
  @Field({ description: 'メールアドレス' })
  @IsEmail()
  @IsNotEmpty()
  email: string

  @Field({ description: 'パスワード' })
  @IsNotEmpty()
  password: string
}
