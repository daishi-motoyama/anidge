import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'

import { SignInResponse } from '@src/modules/shared/auth/dtos/signIn.response'
import { UserService } from '@src/modules/shared/user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.getUserByEmail(email)
    if (user && (await bcrypt.compare(password, user.password))) return user
    return null
  }

  async signIn(user): Promise<SignInResponse> {
    const payload = { email: user.email, sub: user.id }
    return {
      accessToken: this.jwtService.sign(payload),
      user,
    }
  }
}
