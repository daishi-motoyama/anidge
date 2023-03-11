import { BadRequestException, Injectable } from '@nestjs/common'
import { Args } from '@nestjs/graphql'
import { Profile, User } from '@prisma/client'

import { PrismaService } from '@src/modules/shared/prisma/prisma.service'
import { CreateProfileInput } from '@src/modules/shared/profile/dtos/createProfile.input'

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
}
