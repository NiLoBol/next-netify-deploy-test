import mongoose, { Schema } from "mongoose";

const topicSchaema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchaema);



export default Topic;
