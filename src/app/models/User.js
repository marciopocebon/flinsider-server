import { model, Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: String,
  email: {
    type: String,
    required: true,
  },
  facebookId: {
    type: Number,
    required: true,
  },
  company: String,
  latitude: Number,
  longitude: Number,
  belt: {
    type: String,
    lowercase: true,
    enum: ['blue', 'green', 'brown', 'black'],
  },
  events: [{
    type: Schema.Types.ObjectId,
    ref: 'Event',
  }]
}, {
  timestamps: true,
});

UserSchema.methods.generateToken = function() {
  return jwt.sign({ id: this._id }, authConfig.secret);
};

export default model('User', UserSchema);