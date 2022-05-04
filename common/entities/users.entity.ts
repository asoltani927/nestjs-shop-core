import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class UsersEntity extends Document {
  @Prop({ default: null, index: true })
  name: string;

  @Prop({ default: null, index: true })
  family: string;

  @Prop({ required: true, unique: true, index: true })
  email_address: string;

  @Prop({ required: true, unique: true, index: true })
  phone: string;

  @Prop({ default: null })
  status: string;
}

export const UsersSchema = SchemaFactory.createForClass(UsersEntity);
