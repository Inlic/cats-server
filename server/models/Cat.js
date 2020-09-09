import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Cat = new Schema(
  {
    name: { type: String, required: true},
    color: { type: String},
    disposition: {type: String},
    favfood: {type: String},
    imgUrl: {type: String, required: true, default: "https://placehold.it/200x200"},
    description: {type:String}
  },
  { timestamps: true, toJSON: { virtuals: true}}
);

export default Cat