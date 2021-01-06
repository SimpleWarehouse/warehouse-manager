import { Module } from '@nestjs/common';
import { ProduseController } from './produse.controller';
import { ProduseService } from './produse.service';
import { produseProviders } from './produse.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProduseController],
  providers: [
    ProduseService,
    ...produseProviders,
  ],
})
export class ProduseModule {}