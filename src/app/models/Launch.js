import { model, Schema } from 'mongoose';

const LaunchSchema = new Schema({
  investment: Number,
  listSize: Number,
  revenue: Number,
  links: [String],
}, {
  timestamps: true,
});

export default model('Launch', LaunchSchema);