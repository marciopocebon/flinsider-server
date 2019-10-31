import { model, Schema } from 'mongoose';

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  startDate: Date,
  endDate: Date,
  launch: {
    type: Schema.Types.ObjectId,
    ref: 'Launch',
  }
}, {
  timestamps: true,
});

export default model('Event', EventSchema);