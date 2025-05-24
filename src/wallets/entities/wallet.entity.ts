import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type WalletDocument = HydratedDocument<Wallet>

@Schema({ timestamps: true })
export class Wallet {
    @Prop({ unique: true, index: true })
    name: string

    @Prop()
    symbol: string

    @Prop()
    image: string

    @Prop()
    price: number

    createdAt!: Date
    updatedAt!: Date
}

export const WalletSchema = SchemaFactory.createForClass(Wallet)
