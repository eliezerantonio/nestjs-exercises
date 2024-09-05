import { Controller, Get } from '@nestjs/common';

import { SeedService } from './seed.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Seeds')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  // @Auth(ValidRoles.admin)
  executeSeed() {
    return this.seedService.runSeed();
  }
}
