import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    // Full name of the user
    name: {
      type: String,
      required: true,
      trim: true
    },
    // Unique email address used for login and notifications
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    // Hashed password for security
    password: {
      type: String,
      required: true
    },
    // User role determining access levels (standard, admin, or artist)
    role: {
      type: String,
      enum: ['standard', 'admin', 'artist'],
      default: 'standard'
    },
    // Whether the user account is active
    isActive: {
      type: Boolean,
      default: true
    },
    // Whether the user's email has been verified
    isEmailVerified: {
      type: Boolean,
      default: false
    },
    // Token for email verification process
    emailVerificationToken: String,
    // Token for password reset process
    resetPasswordToken: String,
    // Expiration date for the password reset token
    resetPasswordExpires: Date,
    // Points system fields for user rewards and loyalty
    points: {
      // Current total points balance
      total: {
        type: Number,
        default: 0
      },
      // History of points-related activities
      history: [{
        // Amount of points added or removed
        amount: Number,
        // Type of activity that generated the points
        activity: {
          type: String,
          enum: ['booking', 'purchase', 'rental', 'referral', 'other'],
          required: true
        },
        // Detailed description of the activity
        description: String,
        // Reference to the related object (booking, purchase, etc.)
        referenceId: mongoose.Schema.Types.ObjectId,
        // When the points were added
        createdAt: {
          type: Date,
          default: Date.now
        },
        // When the points expire
        expiresAt: Date
      }]
    },
    // User loyalty tier based on points or activity
    tier: {
      type: String,
      enum: ['Bronze', 'Silver', 'Gold', 'Platinum'],
      default: 'Bronze'
    },
    // Timestamp when the user record was created
    createdAt: {
      type: Date,
      default: Date.now
    },
    // Timestamp when the user record was last updated
    updatedAt: {
      type: Date,
      default: Date.now
    }
  });

const User = mongoose.model('User', UserSchema);
export default User;
