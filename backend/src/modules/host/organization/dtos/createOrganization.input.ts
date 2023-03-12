import { Field, InputType } from '@nestjs/graphql'
import { IsEnum, IsNotEmpty, Length } from 'class-validator'

import { OrganizationEntityType } from '@src/common/enums/organizationEntityType'

@InputType()
export class CreateOrganizationInput {
  @Field({ description: '組織名' })
  @IsNotEmpty({ message: '組織名は必須です' })
  @Length(1, 255, { message: '組織名は1文字以上255文字以下で入力してください' })
  name: string

  @Field(() => OrganizationEntityType, { description: '組織の種類' })
  @IsEnum(OrganizationEntityType)
  @IsNotEmpty({ message: '組織の種類は必須です' })
  entityType: OrganizationEntityType
}
