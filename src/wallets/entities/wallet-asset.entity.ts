import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'
import { Asset, AssetDocument } from 'src/assets/entities/asset.entity'
import { Wallet, WalletDocument } from './wallet.entity'

export type WalletAssetDocument = HydratedDocument<WalletAsset>

@Schema({ timestamps: true })
export class WalletAsset {
    @Prop({ type: mongoose.Schema.Types.Int32 })
    shares: number

    @Prop({ type: String, ref: Wallet.name })
    wallet: WalletDocument | string

    @Prop({ type: String, ref: Asset.name })
    asset: AssetDocument | string

    createdAt!: Date
    updatedAt!: Date
}

export const WalletAssetSchema = SchemaFactory.createForClass(WalletAsset)


WalletAssetSchema.index({ wallet: 1, asset: 1 }, { unique: true })
