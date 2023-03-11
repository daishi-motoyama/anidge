import {
  INestApplication,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common'
import { Prisma, PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, Prisma.LogLevel>
  implements OnModuleInit
{
  private readonly logger = new Logger(PrismaService.name)

  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
    })
  }

  async onModuleInit() {
    this.$on('query', (e) => {
      this.logger.log(
        `Query: ${e.query}`,
        `Params: ${e.params}`,
        `Duration: ${e.duration}ms`
      )
    })
    this.$on('info', (e) => {
      this.logger.log(`message : ${e.message}`)
    })
    this.$on('error', (e) => {
      this.logger.log(`message : ${e.message}`)
    })
    this.$on('warn', (e) => {
      this.logger.log(`message : ${e.message}`)
    })
    await this.$connect()
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close()
    })
  }
}
