import { Field, InputType, Int } from '@nestjs/graphql'
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  Length,
  Matches,
} from 'class-validator'

import { Gender } from '@src/common/enums/gender'

@InputType()
export class UpdateProfileInput {
  @Field(() => Int, { description: 'プロフィールID' })
  @IsNotEmpty({ message: 'プロフィールIDは必須です' })
  id: number

  @Field({ description: '名前', nullable: true })
  @IsOptional()
  @Length(1, 20, { message: '名前は1文字以上20文字以下で入力してください' })
  firstName?: string

  @Field({ description: '苗字', nullable: true })
  @IsOptional()
  @Length(1, 20, { message: '苗字は1文字以上20文字以下で入力してください' })
  lastName?: string

  @Field({ description: '名前(フリガナ)', nullable: true })
  @IsOptional()
  @Matches(/^[\u30A0-\u30FF]+$/, {
    message: '名前(フリガナ)はカタカナで入力してください',
  })
  @Length(1, 20, {
    message: '名前(フリガナ)は1文字以上20文字以下で入力してください',
  })
  firstNameKana?: string

  @Field({ description: '苗字(フリガナ)', nullable: true })
  @IsOptional()
  @Matches(/^[\u30A0-\u30FF]+$/, {
    message: '苗字(フリガナ)はカタカナで入力してください',
  })
  @Length(1, 20, {
    message: '苗字(フリガナ)は1文字以上20文字以下で入力してください',
  })
  lastNameKana?: string

  @Field(() => Gender, { description: '性別', nullable: true })
  @IsOptional()
  @IsEnum(Gender, { message: '性別は正しい値で入力してください' })
  gender?: Gender

  @Field({ description: '生年月日', nullable: true })
  @IsOptional()
  @IsDateString({}, { message: '生年月日は日付形式で入力してください' })
  birthday?: string

  @Field({ description: '電話番号', nullable: true })
  @IsOptional()
  @IsPhoneNumber('JP', { message: '電話番号は正しい形式で入力してください' })
  phoneNumber?: string
}
