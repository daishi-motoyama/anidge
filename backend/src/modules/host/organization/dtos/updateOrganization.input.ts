import { Field, InputType, Int } from '@nestjs/graphql'
import { IsEnum, IsNotEmpty, IsOptional, Length } from 'class-validator'

import { OrganizationEntityType } from '@src/common/enums/organizationEntityType'

@InputType()
export class UpdateOrganizationInput {
  @Field(() => Int, { description: '組織ID' })
  @IsNotEmpty({ message: '組織IDは必須です' })
  id: number

  @Field({ description: '組織名', nullable: true })
  @IsOptional()
  @Length(1, 255, { message: '組織名は1文字以上255文字以下で入力してください' })
  name?: string

  @Field(() => OrganizationEntityType, {
    description: '組織の種類',
    nullable: true,
  })
  @IsOptional()
  @IsEnum(OrganizationEntityType)
  entityType?: OrganizationEntityType
}
