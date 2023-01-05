import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const frustrationSchema = new Schema({
  ranking: [],
  name: String,
});

const Frustration = mongoose.model('Frustration', frustrationSchema);

export {
  Frustration
}