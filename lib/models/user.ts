import mongoose, { InferSchemaType, model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  name: { type: String },
  bio: { type: String },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, default: 'https://cdn-icons-png.flaticon.com/128/10542/10542486.png' },
  password: { type: String, required: true },
  role: { type: String, enum: ['Creator', 'Brand', 'Agency', 'admin'], default: 'Creator' },
  handle: { type: String, required: true, unique: true },
  links: [{
    url: { type: String },
    title: { type: String },
    icon: { type: String },
  }],
  socialMedia: {
    facebook: { type: String },
    instagram: { type: String },
    twitter: { type: String },
    youtube: { type: String },
    linkedin: { type: String },
    github: { type: String },
    pinterest: { type: String },
  }
}, { collection: 'user-data-linktree' });

export type UserData = InferSchemaType<typeof UserSchema>;

const User = models["userData"] || model("userData", UserSchema);

export default User;