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
var Error = require('./Error');
var Location = require('./Location');




/**
 * The ListLocationsResponse model module.
 * @module model/ListLocationsResponse
 * @version 2.5.1
 */

/**
 * Constructs a new <code>ListLocationsResponse</code>.
 * Defines the fields that are included in the response body of a request to the [ListLocations](#endpoint-listlocations) endpoint.  One of &#x60;errors&#x60; or &#x60;locations&#x60; is present in a given response (never both).
 * @alias module:model/ListLocationsResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>ListLocationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ListLocationsResponse} obj Optional instance to populate.
 * @return {module:model/ListLocationsResponse} The populated <code>ListLocationsResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('locations')) {
      obj['locations'] = ApiClient.convertToType(data['locations'], [Location]);
    }
    }
  return obj;
}

/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The business's locations.
 * @member {Array.<module:model/Location>} locations
 */
exports.prototype['locations'] = undefined;



module.exports = exports;



