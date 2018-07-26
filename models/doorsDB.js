const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doorsSchema = new Schema({

  eventName:{
    type: String,
    required: true
  },
  location:{
    address:{
      type:String,
    },
    city:{
      type:String
    },
    state:{
      type:String
    },
    country:{
      type:String
    }
  },
  date:{
    type:Date
  },
  time:{ // roll out time. Show up an hour before
    type: String
  },
  eventDescription:{
    type: String
  },
  bikesForEvent: [{
    available: {
      type: Boolean,
      default: true
    },
    bike:{
      type: Schema.Types.ObjectId,
      ref: 'Bike'
    },
    rider:{
      type: Schema.Types.ObjectId,
      ref:'User',
      default: null
    },
    mechanicSetup: {
      type: Boolean,
      default: false
    },
    reservedForVip:{ // name of rider bike is reserved for
      type: String
    }

  }],
  published:{
    type: Boolean
  }

});

const doorsDB = mongoose.model('doorsDB', doorsSchema );

module.exports = doorsDB;