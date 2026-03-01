import mongoose, { Schema, models, model, Model } from "mongoose";

const ProductSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        price: { type: Number, required: true, min: 0 },
        image: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true, index: true },
        stock: { type: Number, required: true, min: 0 },
        featured: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export const Product: Model<any> = models.Product || model("Product", ProductSchema);