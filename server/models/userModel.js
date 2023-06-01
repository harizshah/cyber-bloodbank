const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    // common for all
    userType: {
        type: String,
        required: true,
        enum: ['donor', 'organization', 'hospital', 'admin'],
    },

    // is required if userType is donor or admin

    name: {
        type: String,
        required: function() {
            return this.userType === 'admin' || this.userType === 'donor';

        },
    },

    // is required if userType is hospitalName
    hospitalName: {
        type: String,
        required: function () {
            return this.userType === "hospital";
        }
    },

    // is required if userType is hospitalName
    organizationName: {
        type: String,
        required: function () {
            return this.userType === 'organization';

        }
    },

    // is required if userType is organization or hospital
    website: {
      type: String,
      required: function () {
          return this.userType === 'organization' || this.userType === 'hospital';

      }
    },
    address : {
        type: String,
        required: function () {
            return this.userType === 'organization' || this.userType === 'hospital';

        }
    },


    // common  for all
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("users", userSchema);