import { Module } from '@nestjs/common'

import { PrismaModule } from '@src/modules/shared/prisma/prisma.module'
import { UserResolver } from '@src/modules/shared/user/user.resolver'
import { UserService } from '@src/modules/shared/user/user.service'

@Module({
  imports: [PrismaModule],
  providers: [UserService, UserResolver],
})
export class UserModule {}
