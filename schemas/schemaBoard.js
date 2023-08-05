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
  ).required(),
  background: Joi.objectId().allow(null),  
});

const updateBoardSchema = Joi.object({
  title: Joi.string(),
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

const boardSchemas = { addBoardSchema, updateBoardSchema };

module.exports = boardSchemas;
