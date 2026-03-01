import mongoose, { Schema, model, models, Model } from "mongoose";

export type UserRole = "admin" | "partner" | "customer";

export interface IUser {
    name?: string;
    email: string;
    password: string;
    role: UserRole;
    createdAt?: Date;
    updatedAt?: Date;
}

const UserSchema = new Schema<IUser>(
    {
        name: { type: String, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["admin", "partner", "customer"], default: "customer" },
    },
    { timestamps: true }
);

/**
 * Prevent model overwrite error in dev/hot reload:
 * "OverwriteModelError: Cannot overwrite `User` model once compiled."
 */
export const User: Model<any> = models.User || model("User", UserSchema);
export default User;