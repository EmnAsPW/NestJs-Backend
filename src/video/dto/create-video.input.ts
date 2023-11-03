import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { InputType, Field, ID, Int } from '@nestjs/graphql';
import mongoose, { Types } from 'mongoose';

@InputType()
export class CreateVideoDto {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => GraphQLUpload, { nullable: true })
  videoUrl?: FileUpload;

  @Field(() => String)
  filename: string;

  @Field(() => [String])
  tags: string[];
}

@InputType()
export class UpdateVideoDto {
  static id(id: any, updateVideoInput: UpdateVideoDto) {
    throw new Error('Method not implemented.');
  }
  @Field(() => ID)
  _id: mongoose.Schema.Types.ObjectId;

  @Field(() => [String])
  title?: string;

  @Field(() => [String])
  description?: string;

  @Field(() => [String])
  tags?: string[];
}
