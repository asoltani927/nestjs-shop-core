import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class UsersCollection extends Document {
  @Prop({ required: true, unique: true, index: true })
  wallet_address: string;

  @Prop({ default: null })
  assets_synced: Date;

  @Prop({ default: null })
  opensea_synced_at: Date;

  @Prop({ default: null })
  status: string;
}

export const UsersSchema = SchemaFactory.createForClass(UsersCollection);
