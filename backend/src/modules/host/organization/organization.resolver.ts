import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Organization, User } from '@prisma/client'

import { CreateOrganizationInput } from '@src/modules/host/organization/dtos/createOrganization.input'
import { UpdateOrganizationInput } from '@src/modules/host/organization/dtos/updateOrganization.input'
import { OrganizationService } from '@src/modules/host/organization/organization.service'
import { Organization as OrganizationType } from '@src/modules/host/organization/types/organization.type'
import { JwtAuthGuard } from '@src/modules/shared/auth/guards/jwt-auth.guard'
import { CurrentUser } from '@src/modules/shared/user/decorators/currentUser.decorators'

@Resolver()
export class OrganizationResolver {
  constructor(private readonly organizationService: OrganizationService) {}

  @Query(() => [OrganizationType], {
    description: '組織一覧',
    nullable: 'items',
  })
  @UseGuards(JwtAuthGuard)
  async organizations(@CurrentUser() user: User): Promise<Organization[]> {
    return this.organizationService.organizations(user)
  }

  @Mutation(() => OrganizationType, { description: '組織作成' })
  @UseGuards(JwtAuthGuard)
  async createOrganization(
    @Args('createOrganizationInput')
    createOrganizationInput: CreateOrganizationInput,
    @CurrentUser() user: User
  ): Promise<Organization> {
    return this.organizationService.createOrganization(
      createOrganizationInput,
      user
    )
  }

  @Mutation(() => OrganizationType, { description: '組織更新' })
  @UseGuards(JwtAuthGuard)
  async updateOrganization(
    @Args('updateOrganizationInput')
    updateOrganizationInput: UpdateOrganizationInput,
    @CurrentUser() user: User
  ): Promise<Organization> {
    return this.organizationService.updateOrganization(
      updateOrganizationInput,
      user
    )
  }
}
