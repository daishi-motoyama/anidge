import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from '@src/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors): ValidationError[] => {
        const messages = errors.flatMap((e) => {
          const res: { key: string; messages: string[] }[] = []
          const cons = e.constraints ?? {}
          const mes: string[] = []
          Object.keys(cons).forEach((key) => {
            mes.push(cons[key])
          })
          res.push({ key: e.property, messages: mes })

          return res
        })
        throw new BadRequestException(messages)
      },
    })
  )
  await app.listen(3000)
}
bootstrap()
