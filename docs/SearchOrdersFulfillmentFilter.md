# SquareConnect.SearchOrdersFulfillmentFilter

### Description

Filter based on [Order Fulfillment](#type-orderfulfillment) information.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fulfillment_types** | **[String]** | List of [fulfillment types](#type-orderfulfillmenttype) to filter for. Will return orders if any of its fulfillments match any of the fulfillment types listed in this field. See [OrderFulfillmentType](#type-orderfulfillmenttype) for possible values | 
**fulfillment_states** | **[String]** | List of [fulfillment states](#type-orderfulfillmentstate) to filter for. Will return orders if any of its fulfillments match any of the fulfillment states listed in this field. See [OrderFulfillmentState](#type-orderfulfillmentstate) for possible values | [optional] 


<a name="[FulfillmentTypesEnum]"></a>
## Enum: [FulfillmentTypesEnum]


* `PICKUP` (value: `"PICKUP"`)




<a name="[FulfillmentStatesEnum]"></a>
## Enum: [FulfillmentStatesEnum]


* `PROPOSED` (value: `"PROPOSED"`)

* `RESERVED` (value: `"RESERVED"`)

* `PREPARED` (value: `"PREPARED"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `CANCELED` (value: `"CANCELED"`)

* `FAILED` (value: `"FAILED"`)




