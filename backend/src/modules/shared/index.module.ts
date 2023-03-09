import { Module } from '@nestjs/common'

import { AuthModule } from '@src/modules/shared/auth/auth.module'
import { PrismaModule } from '@src/modules/shared/prisma/prisma.module'
import { UserModule } from '@src/modules/shared/user/user.module'

@Module({
  imports: [UserModule, PrismaModule, AuthModule],
})
export class SharedModule {}
