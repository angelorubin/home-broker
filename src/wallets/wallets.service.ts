import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { WalletAsset } from './entities/wallet-asset.entity';
import { Wallet } from './entities/wallet.entity';

@Injectable()
export class WalletsService {
  constructor(
    @InjectModel(Wallet.name) private walletSchema: Model<Wallet>,
    @InjectModel(WalletAsset.name) private walletAssetSchema: Model<WalletAsset>
  ) { }

  create(createWalletDto: CreateWalletDto) {
    return this.walletSchema.create(createWalletDto)
  }

  findAll() {
    return this.walletSchema.find()
  }

  findById(id: string) {
    return this.walletSchema.findById({ _id: id })
  }

  createWalletAsset(
    data: {
      walletId: string,
      assetId: string,
      shares: number
    }
  ) {
    return this.walletAssetSchema.create({
      wallet: data.walletId,
      assetId: data.assetId,
      shares: data.shares
    })
  }

  update(id: number, updateWalletDto: UpdateWalletDto) {
    return `This action updates a #${id} wallet`;
  }

  remove(id: number) {
    return `This action removes a #${id} wallet`;
  }
}
