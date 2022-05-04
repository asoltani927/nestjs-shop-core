import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class ProductsEntity extends Document {
  @Prop({ required: true, index: true })
  name: string;

  @Prop({ required: true, index: true })
  product_code: string;
}

export const ProductsSchema = SchemaFactory.createForClass(ProductsEntity);
