import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduseModule } from './produse/produse.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [ProduseModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware);

      //.forRoutes({path:'produse', method: RequestMethod.GET });
  }
}
