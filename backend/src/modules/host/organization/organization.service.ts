import { BadRequestException, Injectable } from '@nestjs/common'
import { Organization, User } from '@prisma/client'

import { CreateOrganizationInput } from '@src/modules/host/organization/dtos/createOrganization.input'
import { UpdateOrganizationInput } from '@src/modules/host/organization/dtos/updateOrganization.input'
import { PrismaService } from '@src/modules/shared/prisma/prisma.service'

@Injectable()
export class OrganizationService {
  constructor(private readonly prismaService: PrismaService) {}

  async organizations(authUser: User): Promise<Organization[]> {
    return this.prismaService.organization.findMany({
      where: {
        owner: {
          id: authUser.id,
        },
      },
    })
  }

  async createOrganization(
    creteOrganizationInput: CreateOrganizationInput,
    authUser: User
  ): Promise<Organization> {
    return this.prismaService.organization.create({
      data: {
        entityType: creteOrganizationInput.entityType,
        name: creteOrganizationInput.name,
        owner: {
          connect: {
            id: authUser.id,
          },
        },
      },
    })
  }

  async updateOrganization(
    updateOrganizationInput: UpdateOrganizationInput,
    authUser: User
  ): Promise<Organization> {
    const organization = await this.prismaService.organization.findUnique({
      include: {
        owner: true,
      },
      where: {
        id: updateOrganizationInput.id,
      },
    })
    if (organization.owner.id !== authUser.id)
      throw new BadRequestException(
        '組織のオーナーではないため更新ができません'
      )
    return this.prismaService.organization.update({
      data: {
        entityType: updateOrganizationInput.entityType,
        name: updateOrganizationInput.name,
      },
      where: {
        id: updateOrganizationInput.id,
      },
    })
  }
}
