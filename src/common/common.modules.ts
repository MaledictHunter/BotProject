import { Module } from '@nestjs/common';
import { CommonController } from './common.controller';
import { CommonService } from './common.services';

@Module({
  imports: [],
  controllers: [CommonController],
  providers: [CommonService],
})
export class CommonModule {}
