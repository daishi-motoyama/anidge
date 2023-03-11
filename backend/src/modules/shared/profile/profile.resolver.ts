import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { Profile, User } from '@prisma/client'

import { JwtAuthGuard } from '@src/modules/shared/auth/guards/jwt-auth.guard'
import { CreateProfileInput } from '@src/modules/shared/profile/dtos/createProfile.input'
import { UpdateProfileInput } from '@src/modules/shared/profile/dtos/updateProfile.input'
import { ProfileService } from '@src/modules/shared/profile/profile.service'
import { Profile as ProfileType } from '@src/modules/shared/profile/types/profile.type'
import { CurrentUser } from '@src/modules/shared/user/decorators/currentUser.decorators'

@Resolver()
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Mutation(() => ProfileType, { description: 'プロフィール作成' })
  @UseGuards(JwtAuthGuard)
  async createProfile(
    @Args('createProfileInput') createProfileInput: CreateProfileInput,
    @CurrentUser() user: User
  ): Promise<Profile> {
    return await this.profileService.createProfile(createProfileInput, user)
  }

  @Mutation(() => ProfileType, { description: 'プロフィール更新' })
  @UseGuards(JwtAuthGuard)
  async updateProfile(
    @Args('updateProfileInput') updateProfileInput: UpdateProfileInput,
    @CurrentUser() user: User
  ): Promise<Profile> {
    return await this.profileService.updateProfile(updateProfileInput, user)
  }
}
