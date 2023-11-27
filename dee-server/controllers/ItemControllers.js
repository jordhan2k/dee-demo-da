const { isEmpty, isArray } = require("lodash")
const Items = require("../models/Items")
const moment = require('moment-timezone');

const list = async (req, res) => {
  const { page, limit } = req.query;
  const customLabels = {
    totalDocs: "totalItems",
    docs: "items",
    page: "currentPage",
  }
  const options = {
    limit: limit && limit,
    page: page || 1,
    customLabels,
    pagination: page || 10,
    lean: true,
    sort: {
      updatedAt: -1
    }
  };
  const conditions = {}
  try {
    const data = await Items.paginate(
      conditions,
      options,
    )
    return res.json({
      success: true,
      data
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Internal server error!"
    });
  }
}

const getOne = async (req, res) => {
  try {
    const conditions = {
      _id: req.params.id
    }
    const byId = await Items.findOne(conditions)
    if (isEmpty(byId)) {
      return res.json({
        success: false,
        message: 'Item not found'
      })
    }
    return res.json({
      success: true,
      data: byId
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
}

const create = async (req, res) => {
  try {
    const {
      name, description, price
    } = req.body;
    const params = {
      name,
      description,
      // price: Math.floor(Math.random() * 10000),
      // createdAt: moment().toISOString(),
      // updatedAt: moment().toISOString(),
    }
    const result = await Items.create(params);
    if (isEmpty(result)) {
      return res.json({
        success: false,
        message: 'Failed to create a new item.',
      })
    }
    return res.json({
      success: true,
      message: 'An item has been created.',
      data: result
    })
  } catch (error) {
    return res.json({
      success: false,
      message: "Internal server error!"
    });
  }
}


const bulkCreate = async (req, res) => {
  try {
    const {
      items
    } = req.body;
    if (isEmpty(items) && !isArray(items)) {
      return res.json({
        success: false,
        message: 'Bad request',
      })
    }
    const sets = items.map((item) => ({
      name: item.name,
      description: item.description,
      price: Number(item.price),
      imageUrl: item.imageUrl
    }))
    const result = await Items.insertMany(sets);
    if (isEmpty(result)) {
      return res.json({
        success: false,
        message: 'Failed to create a new item.',
      })
    }
    return res.json({
      success: true,
      message: 'Successfully create many items',
      // data: result
    })
  } catch (error) {
    console.log(error)
    return res.json({
      success: false,
      message: "Internal server error!"
    });
  }
}

module.exports = {
  list,
  getOne,
  create,
  bulkCreate
}

