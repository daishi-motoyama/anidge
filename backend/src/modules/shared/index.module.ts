import { Module } from '@nestjs/common'

import { PrismaModule } from '@src/modules/shared/prisma/prisma.module'
import { UserModule } from '@src/modules/shared/user/user.module'

@Module({
  imports: [UserModule, PrismaModule],
})
export class SharedModule {}
