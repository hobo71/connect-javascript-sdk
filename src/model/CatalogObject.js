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
var CatalogCategory = require('./CatalogCategory');
var CatalogDiscount = require('./CatalogDiscount');
var CatalogItem = require('./CatalogItem');
var CatalogItemVariation = require('./CatalogItemVariation');
var CatalogModifier = require('./CatalogModifier');
var CatalogModifierList = require('./CatalogModifierList');
var CatalogTax = require('./CatalogTax');
var CatalogV1Id = require('./CatalogV1Id');




/**
 * The CatalogObject model module.
 * @module model/CatalogObject
 */

/**
 * Constructs a new <code>CatalogObject</code>.
 * The wrapper object for object types in the Catalog data model. The type of a particular &#x60;CatalogObject&#x60; is determined by the value of &#x60;type&#x60; and only the corresponding data field may be set.  - if type &#x3D; &#x60;ITEM&#x60;, only &#x60;item_data&#x60; will be populated and it will contain a valid [CatalogItem](#type-catalogitem) object. - if type &#x3D; &#x60;ITEM_VARIATION&#x60;, only &#x60;item_variation_data&#x60; will be populated and it will contain a valid [CatalogItemVariation](#type-catalogitemvariation) object. - if type &#x3D; &#x60;MODIFIER&#x60;, only &#x60;modifier_data&#x60; will be populated and it will contain a valid [CatalogModifier](#type-catalogmodifier) object. - if type &#x3D; &#x60;MODIFIER_LIST&#x60;, only &#x60;modifier_list_data&#x60; will be populated and it will contain a valid [CatalogModifierList](#type-catalogmodifierlist) object. - if type &#x3D; &#x60;CATEGORY&#x60;, only &#x60;category_data&#x60; will be populated and it will contain a valid [CatalogCategory](#type-catalogcategory) object. - if type &#x3D; &#x60;DISCOUNT&#x60;, only &#x60;discount_data&#x60; will be populated and it will contain a valid [CatalogDiscount](#type-catalogdiscount) object. - if type &#x3D; &#x60;TAX&#x60;, only &#x60;tax_data&#x60; will be populated and it will contain a valid [CatalogTax](#type-catalogtax) object.  For a more detailed discussion of the Catalog data model, please see the [Catalog Overview](/products/catalog/overview).
 * @alias module:model/CatalogObject
 * @class
 * @param type {module:model/CatalogObject.TypeEnum} The type of this object. Each object type has expected properties expressed in a structured format within its corresponding `*_data` field below.  See [CatalogObjectType](#type-catalogobjecttype) for all possible values.
 * @param id {String} An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a `'#'` character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.  When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
 */
var exports = function(type, id) {
  var _this = this;

  _this['type'] = type;
  _this['id'] = id;














};

/**
 * Constructs a <code>CatalogObject</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogObject} obj Optional instance to populate.
 * @return {module:model/CatalogObject} The populated <code>CatalogObject</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('updated_at')) {
      obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
    }
      if (data.hasOwnProperty('version')) {
      obj['version'] = ApiClient.convertToType(data['version'], 'Number');
    }
      if (data.hasOwnProperty('is_deleted')) {
      obj['is_deleted'] = ApiClient.convertToType(data['is_deleted'], 'Boolean');
    }
      if (data.hasOwnProperty('catalog_v1_ids')) {
      obj['catalog_v1_ids'] = ApiClient.convertToType(data['catalog_v1_ids'], [CatalogV1Id]);
    }
      if (data.hasOwnProperty('present_at_all_locations')) {
      obj['present_at_all_locations'] = ApiClient.convertToType(data['present_at_all_locations'], 'Boolean');
    }
      if (data.hasOwnProperty('present_at_location_ids')) {
      obj['present_at_location_ids'] = ApiClient.convertToType(data['present_at_location_ids'], ['String']);
    }
      if (data.hasOwnProperty('absent_at_location_ids')) {
      obj['absent_at_location_ids'] = ApiClient.convertToType(data['absent_at_location_ids'], ['String']);
    }
      if (data.hasOwnProperty('item_data')) {
      obj['item_data'] = CatalogItem.constructFromObject(data['item_data']);
    }
      if (data.hasOwnProperty('category_data')) {
      obj['category_data'] = CatalogCategory.constructFromObject(data['category_data']);
    }
      if (data.hasOwnProperty('item_variation_data')) {
      obj['item_variation_data'] = CatalogItemVariation.constructFromObject(data['item_variation_data']);
    }
      if (data.hasOwnProperty('tax_data')) {
      obj['tax_data'] = CatalogTax.constructFromObject(data['tax_data']);
    }
      if (data.hasOwnProperty('discount_data')) {
      obj['discount_data'] = CatalogDiscount.constructFromObject(data['discount_data']);
    }
      if (data.hasOwnProperty('modifier_list_data')) {
      obj['modifier_list_data'] = CatalogModifierList.constructFromObject(data['modifier_list_data']);
    }
      if (data.hasOwnProperty('modifier_data')) {
      obj['modifier_data'] = CatalogModifier.constructFromObject(data['modifier_data']);
    }
    }
  return obj;
}

/**
 * The type of this object. Each object type has expected properties expressed in a structured format within its corresponding `*_data` field below.  See [CatalogObjectType](#type-catalogobjecttype) for all possible values.
 * @member {module:model/CatalogObject.TypeEnum} type
 */
exports.prototype['type'] = undefined;
/**
 * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a `'#'` character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.  When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * Last modification [timestamp](#workingwithdates) in RFC 3339 format, e.g., `\"2016-08-15T23:59:33.123Z\"` would indicate the UTC time (denoted by `Z`) of August 15, 2016 at 23:59:33 and 123 milliseconds.
 * @member {String} updated_at
 */
exports.prototype['updated_at'] = undefined;
/**
 * The version of the object. When updating an object, the version supplied must match the version in the database, otherwise the write will be rejected as conflicting.
 * @member {Number} version
 */
exports.prototype['version'] = undefined;
/**
 * If `true`, the object has been deleted from the database. Must be `false` for new objects being inserted. When deleted, the `updated_at` field will equal the deletion time.
 * @member {Boolean} is_deleted
 */
exports.prototype['is_deleted'] = undefined;
/**
 * The Connect V1 IDs for this object at each [location](#type-location) where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs.
 * @member {Array.<module:model/CatalogV1Id>} catalog_v1_ids
 */
exports.prototype['catalog_v1_ids'] = undefined;
/**
 * If `true`, this object is present at all locations (including future locations), except where specified in the `absent_at_location_ids` field. If `false`, this object is not present at any locations (including future locations), except where specified in the `present_at_location_ids` field. If not specified, defaults to `true`.
 * @member {Boolean} present_at_all_locations
 */
exports.prototype['present_at_all_locations'] = undefined;
/**
 * A list of locations where the object is present, even if `present_at_all_locations` is `false`.
 * @member {Array.<String>} present_at_location_ids
 */
exports.prototype['present_at_location_ids'] = undefined;
/**
 * A list of locations where the object is not present, even if `present_at_all_locations` is `true`.
 * @member {Array.<String>} absent_at_location_ids
 */
exports.prototype['absent_at_location_ids'] = undefined;
/**
 * Structured data for a [CatalogItem](#type-catalogitem), set for CatalogObjects of type `ITEM`.
 * @member {module:model/CatalogItem} item_data
 */
exports.prototype['item_data'] = undefined;
/**
 * Structured data for a [CatalogCategory](#type-catalogcategory), set for CatalogObjects of type `CATEGORY`.
 * @member {module:model/CatalogCategory} category_data
 */
exports.prototype['category_data'] = undefined;
/**
 * Structured data for a [CatalogItemVariation](#type-catalogitemvariation), set for CatalogObjects of type `ITEM_VARIATION`.
 * @member {module:model/CatalogItemVariation} item_variation_data
 */
exports.prototype['item_variation_data'] = undefined;
/**
 * Structured data for a [CatalogTax](#type-catalogtax), set for CatalogObjects of type `TAX`.
 * @member {module:model/CatalogTax} tax_data
 */
exports.prototype['tax_data'] = undefined;
/**
 * Structured data for a [CatalogDiscount](#type-catalogdiscount), set for CatalogObjects of type `DISCOUNT`.
 * @member {module:model/CatalogDiscount} discount_data
 */
exports.prototype['discount_data'] = undefined;
/**
 * Structured data for a [CatalogModifierList](#type-catalogmodifierlist), set for CatalogObjects of type `MODIFIER_LIST`.
 * @member {module:model/CatalogModifierList} modifier_list_data
 */
exports.prototype['modifier_list_data'] = undefined;
/**
 * Structured data for a [CatalogModifier](#type-catalogmodifier), set for CatalogObjects of type `MODIFIER`.
 * @member {module:model/CatalogModifier} modifier_data
 */
exports.prototype['modifier_data'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "ITEM"
     * @const
     */
    "ITEM": "ITEM",
    /**
     * value: "CATEGORY"
     * @const
     */
    "CATEGORY": "CATEGORY",
    /**
     * value: "ITEM_VARIATION"
     * @const
     */
    "ITEM_VARIATION": "ITEM_VARIATION",
    /**
     * value: "TAX"
     * @const
     */
    "TAX": "TAX",
    /**
     * value: "DISCOUNT"
     * @const
     */
    "DISCOUNT": "DISCOUNT",
    /**
     * value: "MODIFIER_LIST"
     * @const
     */
    "MODIFIER_LIST": "MODIFIER_LIST",
    /**
     * value: "MODIFIER"
     * @const
     */
    "MODIFIER": "MODIFIER"  };


module.exports = exports;



