import { Module } from '@nestjs/common';

import { RecipesResolver } from './resolver';
import { RecipesService } from './service';

@Module({
  providers: [RecipesResolver, RecipesService],
})
export class RecipesModule {}
