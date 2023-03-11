import { BadRequestException, Injectable } from '@nestjs/common'
import { Args } from '@nestjs/graphql'
import { Profile, User } from '@prisma/client'

import { PrismaService } from '@src/modules/shared/prisma/prisma.service'
import { CreateProfileInput } from '@src/modules/shared/profile/dtos/createProfile.input'
import { UpdateProfileInput } from '@src/modules/shared/profile/dtos/updateProfile.input'

@Injectable()
export class ProfileService {
  constructor(private readonly prismaService: PrismaService) {}

  async createProfile(
    @Args('createProfileInput') createProfileInput: CreateProfileInput,
    authUser: User
  ): Promise<Profile> {
    if (authUser.id !== createProfileInput.userId) {
      throw new BadRequestException('ユーザーIDと認証ユーザーIDが一致しません')
    }
    const data = {
      birthday: new Date(createProfileInput.birthday),
      firstName: createProfileInput.firstName,
      firstNameKana: createProfileInput.firstNameKana,
      gender: createProfileInput.gender,
      lastName: createProfileInput.lastName,
      lastNameKana: createProfileInput.lastNameKana,
      phoneNumber: createProfileInput.phoneNumber,
      userId: createProfileInput.userId,
    }
    return this.prismaService.profile.upsert({
      create: {
        ...data,
      },
      include: {
        user: true,
      },
      update: {
        ...data,
      },
      where: {
        userId: createProfileInput.userId,
      },
    })
  }

  async updateProfile(
    @Args('updateProfileInput') updateProfileInput: UpdateProfileInput,
    authUser: User
  ): Promise<Profile> {
    const profile = await this.prismaService.profile.findUnique({
      where: { id: updateProfileInput.id },
    })
    if (!profile) throw new BadRequestException('プロフィールが見つかりません')
    if (authUser.id !== profile.userId)
      throw new BadRequestException('ユーザーIDと認証ユーザーIDが一致しません')
    return this.prismaService.profile.update({
      data: {
        birthday: updateProfileInput.birthday
          ? new Date(updateProfileInput.birthday)
          : profile.birthday,
        firstName: updateProfileInput.firstName,
        firstNameKana: updateProfileInput.firstNameKana,
        gender: updateProfileInput.gender,
        lastName: updateProfileInput.lastName,
        lastNameKana: updateProfileInput.lastNameKana,
        phoneNumber: updateProfileInput.phoneNumber,
      },
      include: { user: true },
      where: {
        id: updateProfileInput.id,
      },
    })
  }
}
