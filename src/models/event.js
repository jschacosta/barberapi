import mongoose from "mongoose";
const Schema = mongoose.Schema;
import uniqueValidator from 'mongoose-unique-validator';
import mongoosePaginate from "mongoose-paginate-v2";
import paginateConfig from "../config/paginate.js";

const eventSchema = new Schema(
  {
    isActive: {type: Boolean, default: true },
    title: {type:String, default:"new Event"},
    details: {type:String},
    hotel: {type: String, ref: "User" },
    service: {type: String, ref: "Service" },
    worker: {type: String, ref: "User" },
    client:{type:String, ref: "User"},
    creator:{ type: Boolean,ref:"User" },
    getTime:{type: Number},
    scheduled:{
      setStart: {type: Array},
      startTime: {type: String},
      setEnd:{type: Array},
      endTime: {type: String},
    },
    coverImg: {type: String, default: "",},
    status: {
      type: String,
      default: "requested",
      enum: ["requested", "matched", "canceled", "completed", "failed" ],
    },
    observations:Array({
      creator: { type: String, ref: "User" },
      observation: Array({ type: String , default: null}), 
    }),
  },
  { timestamps: true }
);

eventSchema.plugin(mongoosePaginate);
mongoosePaginate.paginate.options = paginateConfig;
const Event= mongoose.model("Event", eventSchema);
export default Event;


