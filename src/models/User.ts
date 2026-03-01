import mongoose, { Schema, models, model, Model } from "mongoose";

const UserSchema = new Schema(
    {
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        passwordHash: { type: String, required: true },
        role: { type: String, enum: ["user", "admin"], default: "user" },
    },
    { timestamps: true }
);

export const User: Model<any> = models.User || model("User", UserSchema);