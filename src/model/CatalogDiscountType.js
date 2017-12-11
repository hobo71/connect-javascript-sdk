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


/**
 * Enum class CatalogDiscountType.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "FIXED_PERCENTAGE"
   * @const
   */
  "FIXED_PERCENTAGE": "FIXED_PERCENTAGE",
  /**
   * value: "FIXED_AMOUNT"
   * @const
   */
  "FIXED_AMOUNT": "FIXED_AMOUNT",
  /**
   * value: "VARIABLE_PERCENTAGE"
   * @const
   */
  "VARIABLE_PERCENTAGE": "VARIABLE_PERCENTAGE",
  /**
   * value: "VARIABLE_AMOUNT"
   * @const
   */
  "VARIABLE_AMOUNT": "VARIABLE_AMOUNT"};

/**
 * Returns a <code>CatalogDiscountType</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/CatalogDiscountType} The enum <code>CatalogDiscountType</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


