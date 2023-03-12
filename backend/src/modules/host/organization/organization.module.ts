import { Module } from '@nestjs/common'

import { OrganizationResolver } from '@src/modules/host/organization/organization.resolver'
import { OrganizationService } from '@src/modules/host/organization/organization.service'
import { PrismaModule } from '@src/modules/shared/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [OrganizationService, OrganizationResolver],
})
export class OrganizationModule {}
