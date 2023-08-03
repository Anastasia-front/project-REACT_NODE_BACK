const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);

const addBoardSchema = Joi.object({
  title: Joi.string().required(),
  icon: Joi.string().valid(
    'icon-colors',
    'icon-container',
    'icon-hexagon',
    'icon-lightning',
    'icon-loading',
    'icon-project',
    'icon-star',
    'icon-puzzle-piece',
  ),
  background: Joi.objectId().allow(null),  
});

const editBoardSchema = Joi.object({
  //
});

const boardSchemas = { addBoardSchema, editBoardSchema };

module.exports = boardSchemas;
