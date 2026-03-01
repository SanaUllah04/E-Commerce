import mongoose, { Schema, models, model, Model } from "mongoose";

const OrderSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        items: [
            {
                product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
                qty: { type: Number, required: true, min: 1 },
            },
        ],
        total: { type: Number, required: true },
        status: { type: String, enum: ["pending", "completed"], default: "pending" },
    },
    { timestamps: true }
);

export const Order: Model<any> = models.Order || model("Order", OrderSchema);
export default Order;
