import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class Video {
  @Field(() => ID)
  _id: mongoose.Schema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  @Prop({ type: String })
  title: string;

  @Field(() => String)
  @Prop()
  description: string;

  @Field(() => [String])
  @Prop()
  tags: string[];

  @Field()
  @Prop()
  filename: string;

  @Field()
  @Prop()
  videoUrl: string;
}
export type VideoDocument = Video & Document;
export const VideoSchema = SchemaFactory.createForClass(Video);
