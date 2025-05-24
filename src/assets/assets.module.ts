import { Module } from '@nestjs/common'
import { AssetsService } from './assets.service'
import { AssetsController } from './assets.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { AssetSchema, Asset } from './entities/asset.entity'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Asset.name,
        schema: AssetSchema
      }
    ])
  ],
  controllers: [AssetsController],
  providers: [AssetsService],
})

export class AssetsModule { }
