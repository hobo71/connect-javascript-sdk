/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var V1Money = require('./V1Money');




/**
 * The V1ModifierOption model module.
 * @module model/V1ModifierOption
 */

/**
 * Constructs a new <code>V1ModifierOption</code>.
 * V1ModifierOption
 * @alias module:model/V1ModifierOption
 * @class
 */
var exports = function() {
  var _this = this;








};

/**
 * Constructs a <code>V1ModifierOption</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1ModifierOption} obj Optional instance to populate.
 * @return {module:model/V1ModifierOption} The populated <code>V1ModifierOption</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('price_money')) {
      obj['price_money'] = V1Money.constructFromObject(data['price_money']);
    }
      if (data.hasOwnProperty('on_by_default')) {
      obj['on_by_default'] = ApiClient.convertToType(data['on_by_default'], 'Boolean');
    }
      if (data.hasOwnProperty('ordinal')) {
      obj['ordinal'] = ApiClient.convertToType(data['ordinal'], 'Number');
    }
      if (data.hasOwnProperty('modifier_list_id')) {
      obj['modifier_list_id'] = ApiClient.convertToType(data['modifier_list_id'], 'String');
    }
      if (data.hasOwnProperty('v2_id')) {
      obj['v2_id'] = ApiClient.convertToType(data['v2_id'], 'String');
    }
    }
  return obj;
}

/**
 * The modifier option's unique ID.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The modifier option's name.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The modifier option's price.
 * @member {module:model/V1Money} price_money
 */
exports.prototype['price_money'] = undefined;
/**
 * If true, the modifier option is the default option in a modifier list for which selection_type is SINGLE.
 * @member {Boolean} on_by_default
 */
exports.prototype['on_by_default'] = undefined;
/**
 * Indicates the modifier option's list position when displayed in Square Register and the merchant dashboard. If more than one modifier option in the same modifier list has the same ordinal value, those options are displayed in alphabetical order.
 * @member {Number} ordinal
 */
exports.prototype['ordinal'] = undefined;
/**
 * The ID of the modifier list the option belongs to.
 * @member {String} modifier_list_id
 */
exports.prototype['modifier_list_id'] = undefined;
/**
 * The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID.
 * @member {String} v2_id
 */
exports.prototype['v2_id'] = undefined;



module.exports = exports;



