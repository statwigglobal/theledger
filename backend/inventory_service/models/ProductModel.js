var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    externalId: {
      type: String,
      required: true,
      unique: true,
      default: 'ex12345',
    },
    name: {
      type: String,
      required: true,
      default: 'Samsung Galaxy S22 FE',
    },
    shortName: {
      type: String,
      required: false,
      default: 'S22 FE',
    },
    type: {
      type: String,
      required: false,
      default: 'Mobile Phone',
    },
    manufacturer: {
      type: String,
      required: false,
      default: 'organization_id 1',
    },
    unitofMeasure: {
      type: Array,
          items: {type: Object,
            properties: {
              id: {type:String},
              name: {
                type:String
              }    
          }
        }   
      },
    characteristicSet: {
      type: Object,
      default:
        {
          temperature_max: 97.8,
          temperature_min: -4.5,
          humidity_max: 56.3,
          humidity_min: 23.1,
          pressure_max: 2,
          pressure_min: 1,
        },
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model('Product', ProductSchema);
