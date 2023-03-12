import { UseGuards } from '@nestjs/common'
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from '@prisma/client'

import { JwtAuthGuard } from '@src/modules/shared/auth/guards/jwt-auth.guard'
import { CreateUserInput } from '@src/modules/shared/user/dtos/createUser.input'
import { User as UserType } from '@src/modules/shared/user/types/user.type'
import { UserService } from '@src/modules/shared/user/user.service'
@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => UserType, { description: 'ユーザー詳細', nullable: true })
  @UseGuards(JwtAuthGuard)
  async user(
    @Args('id', { description: 'ユーザーID', type: () => Int }) id: number
  ): Promise<User> {
    return await this.userService.getUserById(id)
  }
  @Mutation(() => UserType, { description: 'ユーザー作成' })
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput
  ): Promise<User> {
    return await this.userService.createUser(createUserInput)
  }
}
