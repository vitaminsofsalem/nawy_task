import mongoose from "mongoose";
const apartmentSchema = new mongoose.Schema({
  title: String,
  location: String,
  publishDate: Date,
  price: Number,
  mainImg: String,
  extraImgs: Array,
  description: String,
  bedrooms: Number,
  bathrooms: Number,
  area: Number,
  furnished: Boolean,
});

export const ApartmentModel = mongoose.model("apartments", apartmentSchema);
