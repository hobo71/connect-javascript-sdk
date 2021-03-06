# SquareConnect.OrderFulfillmentPickupDetails

### Description

Contains details necessary to fulfill a pickup order.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipient** | [**OrderFulfillmentRecipient**](OrderFulfillmentRecipient.md) | The recipient of this pickup fulfillment. | [optional] 
**expires_at** | **String** | The expiry [timestamp](#workingwithdates) in RFC 3339 format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;. This timestamp indicates when the pickup fulfillment will expire if it is not accepted by the merchant. Expiration time can only be set up to 7 days in the future. If not set, this pickup fulfillment will be automatically accepted when placed. | [optional] 
**auto_complete_duration** | **String** | The auto completion duration in RFC3339 duration format, e.g., \&quot;P1W3D\&quot;. If set, an open and accepted pickup fulfillment will automatically move to the &#x60;COMPLETED&#x60; state after this period of time. If not set, this pickup fulfillment will remain accepted until it is canceled or completed. | [optional] 
**schedule_type** | **String** | The schedule type of the pickup fulfillment. Defaults to &#x60;SCHEDULED&#x60;. See [OrderFulfillmentPickupDetailsScheduleType](#type-orderfulfillmentpickupdetailsscheduletype) for possible values | [optional] 
**pickup_at** | **String** | The pickup [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;. For fulfillments with the schedule type &#x60;ASAP&#x60;, this is automatically set to the current time plus the expected duration to prepare the fulfillment. This represents the start of the pickup window. | [optional] 
**pickup_window_duration** | **String** | The pickup window duration in RFC3339 duration format, e.g., \&quot;P1W3D\&quot;. This duration represents the window of time for which the order should be picked up after the &#x60;pickup_at&#x60; time. Can be used as an informational guideline for merchants. | [optional] 
**prep_time_duration** | **String** | The preparation time duration in RFC3339 duration format, e.g., \&quot;P1W3D\&quot;. This duration indicates how long it takes the merchant to prepare this fulfillment. | [optional] 
**note** | **String** | A general note about the pickup fulfillment.  Notes are useful for providing additional instructions and are displayed in Square apps. | [optional] 
**placed_at** | **String** | The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;, indicating when the fulfillment was placed. | [optional] 
**accepted_at** | **String** | The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;, indicating when the fulfillment was accepted by the merchant. | [optional] 
**rejected_at** | **String** | The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;, indicating when the fulfillment was rejected. | [optional] 
**ready_at** | **String** | The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;, indicating when the merchant set the fulfillment as ready for pickup. | [optional] 
**expired_at** | **String** | The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;, indicating when the fulfillment expired. | [optional] 
**picked_up_at** | **String** | The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;, indicating when the fulfillment was picked up by the recipient. | [optional] 
**canceled_at** | **String** | The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;, indicating when the fulfillment was canceled by the merchant or buyer. | [optional] 
**cancel_reason** | **String** | A description of why the pickup was canceled. Max length is 100 characters. | [optional] 


<a name="ScheduleTypeEnum"></a>
## Enum: ScheduleTypeEnum


* `SCHEDULED` (value: `"SCHEDULED"`)

* `ASAP` (value: `"ASAP"`)




