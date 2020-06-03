
'use strict';

import mongoose, {Schema} from 'mongoose';

const UserSchema = mongoose.Schema({
  name: { type: String },
  moves: { type: Number },

});

export default mongoose.model('user', UserSchema);