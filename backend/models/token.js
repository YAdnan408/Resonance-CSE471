import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema({
    // Reference to the user who owns this token
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    // The actual token string
    token: {
      type: String,
      required: true
    },
    // The type of token (either access or refresh)
    type: {
      type: String,
      enum: ['access', 'refresh'],
      required: true
    },
    // Whether the token has been blacklisted (e.g., after logout or revocation)
    blacklisted: {
      type: Boolean,
      default: false
    },
    // Expiration timestamp for the token
    expiresAt: {
      type: Date,
      required: true
    }
  });

const Token = mongoose.model('Token', TokenSchema);
export default Token;