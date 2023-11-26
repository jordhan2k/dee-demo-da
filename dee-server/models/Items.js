const mongoose = require('mongoose');
const { commonModel } = require('./common');
const mongoosePaginate = require('mongoose-paginate-v2')
const Schema = mongoose.Schema;
const ITEM_MODEL = 'items';

const itemModelBase = {
  name: { type: String },
  description: { String },
  price: { type: Number, default: Math.floor(Math.random() * 10000) },
  imageUrl: { type: String }
};
const itemModel = new Schema({
  ...itemModelBase,
  ...commonModel,
});

itemModel.plugin(mongoosePaginate)

module.exports = mongoose.model(ITEM_MODEL, itemModel);
