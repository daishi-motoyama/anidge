import { UseGuards } from '@nestjs/common'
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'

import { AuthService } from '@src/modules/shared/auth/auth.service'
import { SignInInput } from '@src/modules/shared/auth/dtos/signIn.input'
import { SignInResponse } from '@src/modules/shared/auth/dtos/signIn.response'
import { GqlAuthGuard } from '@src/modules/shared/auth/guards/gql-auth.guard'

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => SignInResponse, { description: 'サインイン' })
  @UseGuards(GqlAuthGuard)
  async signIn(
    @Args('signInInput') signInInput: SignInInput,
    @Context() context
  ) {
    return this.authService.signIn(context.user)
  }
}
