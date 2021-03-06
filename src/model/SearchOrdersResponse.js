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
var Order = require('./Order');
var OrderEntry = require('./OrderEntry');




/**
 * The SearchOrdersResponse model module.
 * @module model/SearchOrdersResponse
 */

/**
 * Constructs a new <code>SearchOrdersResponse</code>.
 * Only one of &#x60;order_entries&#x60; or &#x60;orders&#x60; fields will be set, depending on whether &#x60;return_entries&#x60; was set on the [SearchOrdersRequest](#type-searchorderrequest).
 * @alias module:model/SearchOrdersResponse
 * @class
 */
var exports = function() {
  var _this = this;






};

/**
 * Constructs a <code>SearchOrdersResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchOrdersResponse} obj Optional instance to populate.
 * @return {module:model/SearchOrdersResponse} The populated <code>SearchOrdersResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('order_entries')) {
      obj['order_entries'] = ApiClient.convertToType(data['order_entries'], [OrderEntry]);
    }
      if (data.hasOwnProperty('orders')) {
      obj['orders'] = ApiClient.convertToType(data['orders'], [Order]);
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('unconvertible_transaction_ids')) {
      obj['unconvertible_transaction_ids'] = ApiClient.convertToType(data['unconvertible_transaction_ids'], ['String']);
    }
    }
  return obj;
}

/**
 * List of [OrderEntries](#type-orderentry) that fit the query conditions.  Populated only if `order_entries` was set to `true` in the request.
 * @member {Array.<module:model/OrderEntry>} order_entries
 */
exports.prototype['order_entries'] = undefined;
/**
 * List of [Orders](#type-order) that match query conditions. Populated only if `return_entries` in the request is set to `false`.
 * @member {Array.<module:model/Order>} orders
 */
exports.prototype['orders'] = undefined;
/**
 * The pagination cursor to be used in a subsequent request. If unset, this is the final response. See [Pagination](/basics/api101/pagination) for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;
/**
 * [Errors](#type-error) encountered during the search.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * List of transaction IDs identifying transactions that could not be converted to an `Order`. Empty if `return_entries` is true, however, attempts to retrieve those orders may encounter subsequent `unconvertible_transcation_ids` Note that this field will not be present after SearchOrders moves from BETA to GA.
 * @member {Array.<String>} unconvertible_transaction_ids
 */
exports.prototype['unconvertible_transaction_ids'] = undefined;



module.exports = exports;



