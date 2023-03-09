import { BadRequestException, Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'

import { PrismaService } from '@src/modules/shared/prisma/prisma.service'
import { CreateUserInput } from '@src/modules/shared/user/dtos/createUser.input'

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUserById(id: number): Promise<User> {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
    })
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
    })
  }

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: createUserInput.email,
      },
    })

    if (user.id)
      throw new BadRequestException(
        '入力されたメールアドレスは、既に使用されています'
      )

    const hashedPassword = await bcrypt.hash(createUserInput.password, 10)
    return this.prismaService.user.create({
      data: {
        displayName: createUserInput.displayName,
        email: createUserInput.email,
        password: hashedPassword,
      },
    })
  }
}
