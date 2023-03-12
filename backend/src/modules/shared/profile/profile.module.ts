import { Module } from '@nestjs/common'

import { PrismaModule } from '@src/modules/shared/prisma/prisma.module'
import { ProfileResolver } from '@src/modules/shared/profile/profile.resolver'
import { ProfileService } from '@src/modules/shared/profile/profile.service'

@Module({
  imports: [PrismaModule],
  providers: [ProfileService, ProfileResolver],
})
export class ProfileModule {}
