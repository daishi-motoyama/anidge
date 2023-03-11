import { Module } from '@nestjs/common'

import { PrismaModule } from '@src/modules/shared/prisma/prisma.module'

import { ProfileResolver } from './profile.resolver'
import { ProfileService } from './profile.service'

@Module({
  imports: [PrismaModule],
  providers: [ProfileService, ProfileResolver],
})
export class ProfileModule {}
