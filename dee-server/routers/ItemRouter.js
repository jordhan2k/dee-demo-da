const { getOne, list, create, bulkCreate } = require('../controllers/ItemControllers');

const router = require('express').Router();

/**
 * @route GET api/v1/items/:id
 * @desc Get one item by id
 * @access PUBLIC
 */
router.get("/:id", getOne);
/**
 * @route GET api/v1/items
 * @desc Get items
 * @access PUBLIC
 */
router.get("/", list);
/**
 * @route POST api/v1/items
 * @desc Create an item
 * @access PUBLIC
 */
router.post("/", create);
/**
 * @route POST api/v1/items
 * @desc Create an item
 * @access PUBLIC
 */
router.post("/bulkCreate", bulkCreate);

module.exports = router;