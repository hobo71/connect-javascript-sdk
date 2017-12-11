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
 * The V1MerchantLocationDetails model module.
 * @module model/V1MerchantLocationDetails
 * @version 2.5.1
 */

/**
 * Constructs a new <code>V1MerchantLocationDetails</code>.
 * Additional information for a single-location account specified by its associated business account, if it has one.
 * @alias module:model/V1MerchantLocationDetails
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>V1MerchantLocationDetails</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1MerchantLocationDetails} obj Optional instance to populate.
 * @return {module:model/V1MerchantLocationDetails} The populated <code>V1MerchantLocationDetails</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('nickname')) {
      obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
    }
    }
  return obj;
}

/**
 * The nickname assigned to the single-location account by the parent business. This value appears in the parent business's multi-location dashboard.
 * @member {String} nickname
 */
exports.prototype['nickname'] = undefined;



module.exports = exports;



