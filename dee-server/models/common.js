const { YES_NO, YES, NO } = require('../constants');
const moment = require('moment-timezone');
const commonModel = {
  isActive: {
    type: String, enum: YES_NO, default: YES, index: true,
  },
  isDeleted: {
    type: String, enum: YES_NO, default: NO, index: true,
  },
  createdAt: { type: String, required: true, default: moment().toISOString() },
  updatedAt: { type: String, default: moment().toISOString() },
};

module.exports = {
  commonModel,
};
