import { Module } from '@nestjs/common'

import { OrganizationModule } from '@src/modules/host/organization/organization.module'

@Module({
  imports: [OrganizationModule],
})
export class HostModule {}
