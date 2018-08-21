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
 * The ObtainTokenResponse model module.
 * @module model/ObtainTokenResponse
 */

/**
 * Constructs a new <code>ObtainTokenResponse</code>.
 * 
 * @alias module:model/ObtainTokenResponse
 * @class
 */
var exports = function() {
  var _this = this;








};

/**
 * Constructs a <code>ObtainTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ObtainTokenResponse} obj Optional instance to populate.
 * @return {module:model/ObtainTokenResponse} The populated <code>ObtainTokenResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('access_token')) {
      obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
    }
      if (data.hasOwnProperty('token_type')) {
      obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
    }
      if (data.hasOwnProperty('expires_at')) {
      obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'String');
    }
      if (data.hasOwnProperty('merchant_id')) {
      obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
    }
      if (data.hasOwnProperty('subscription_id')) {
      obj['subscription_id'] = ApiClient.convertToType(data['subscription_id'], 'String');
    }
      if (data.hasOwnProperty('plan_id')) {
      obj['plan_id'] = ApiClient.convertToType(data['plan_id'], 'String');
    }
      if (data.hasOwnProperty('id_token')) {
      obj['id_token'] = ApiClient.convertToType(data['id_token'], 'String');
    }
    }
  return obj;
}

/**
 * Your application's access token. You provide this token in a header with every request to Connect API endpoints. See [Request and response headers](https://docs.connect.squareup.com/api/connect/v2/#requestandresponseheaders) for the format of this header.
 * @member {String} access_token
 */
exports.prototype['access_token'] = undefined;
/**
 * This value is always _bearer_.
 * @member {String} token_type
 */
exports.prototype['token_type'] = undefined;
/**
 * The date when access_token expires, in [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format.
 * @member {String} expires_at
 */
exports.prototype['expires_at'] = undefined;
/**
 * The ID of the authorizing merchant's business.
 * @member {String} merchant_id
 */
exports.prototype['merchant_id'] = undefined;
/**
 * The ID of the merchant [subscription](https://docs.connect.squareup.com/api/connect/v1/#navsection-subscriptionmanagement) associated with the authorization. Only present if the merchant signed up for a subscription during authorization.
 * @member {String} subscription_id
 */
exports.prototype['subscription_id'] = undefined;
/**
 * The ID of the [subscription](https://docs.connect.squareup.com/api/connect/v1/#navsection-subscriptionmanagement) plan the merchant signed up for. Only present if the merchant signed up for a subscription during authorization.
 * @member {String} plan_id
 */
exports.prototype['plan_id'] = undefined;
/**
 * Then OpenID token belonging to this this person. Only present if the OPENID scope is included in the authorize request.
 * @member {String} id_token
 */
exports.prototype['id_token'] = undefined;



module.exports = exports;



