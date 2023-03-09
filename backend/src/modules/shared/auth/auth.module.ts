import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { AuthResolver } from '@src/modules/shared/auth/auth.resolver'
import { AuthService } from '@src/modules/shared/auth/auth.service'
import { JwtStrategy } from '@src/modules/shared/auth/strategies/jwt.strategy'
import { LocalStrategy } from '@src/modules/shared/auth/strategies/local.strategy'
import { UserModule } from '@src/modules/shared/user/user.module'

@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '12h' },
    }),
  ],
  providers: [AuthResolver, AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
