## 0 Type

`object` ([BlockMonitor](definitions-definitions-blockmonitor.md))

## 0 Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# 0 Properties

| Property                              | Type      | Required | Nullable       | Defined by                                                                                                                                        |
| :------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| [name](#name)                         | `string`  | Required | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-name.md "#/definitions/blockMonitor/properties/name")                      |
| [type](#type)                         | `string`  | Required | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-type.md "#/definitions/blockMonitor/properties/type")                      |
| [network](#network)                   | `string`  | Required | cannot be null | [Definitions](definitions-definitions-network.md "#/definitions/blockMonitor/properties/network")                                        |
| [addresses](#addresses)               | `array`   | Required | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-addresses.md "#/definitions/blockMonitor/properties/addresses")            |
| [abi](#abi)                           | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-abitype.md "#/definitions/blockMonitor/properties/abi")                                            |
| [alert-threshold](#alert-threshold)   | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-alertthreshold.md "#/definitions/blockMonitor/properties/alert-threshold") |
| [paused](#paused)                     | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-paused.md "#/definitions/blockMonitor/properties/paused")                  |
| [action-condition](#action-condition) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-action.md "#/definitions/blockMonitor/properties/action-condition")                                |
| [action-trigger](#action-trigger)     | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-action.md "#/definitions/blockMonitor/properties/action-trigger")                                  |
| [confirm-level](#confirm-level)       | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-confirm-level.md "#/definitions/blockMonitor/properties/confirm-level")    |
| [notify-config](#notify-config)       | `object`  | Required | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig.md "#/definitions/blockMonitor/properties/notify-config")     |
| [conditions](#conditions)             | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-conditions.md "#/definitions/blockMonitor/properties/conditions")          |
| [risk-category](#risk-category)       | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-riskcategory.md "#/definitions/blockMonitor/properties/risk-category")                             |

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-name.md "#/definitions/blockMonitor/properties/name")

### name Type

`string`

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-type.md "#/definitions/blockMonitor/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"BLOCK"` |             |

## network



`network`

*   is required

*   Type: `string` ([Network](definitions-definitions-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-network.md "#/definitions/blockMonitor/properties/network")

### network Type

`string` ([Network](definitions-definitions-network.md))

### network Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"mainnet"`               |             |
| `"sepolia"`               |             |
| `"rinkeby"`               |             |
| `"ropsten"`               |             |
| `"kovan"`                 |             |
| `"goerli"`                |             |
| `"xdai"`                  |             |
| `"sokol"`                 |             |
| `"fuse"`                  |             |
| `"bsc"`                   |             |
| `"bsctest"`               |             |
| `"fantom"`                |             |
| `"fantomtest"`            |             |
| `"moonbase"`              |             |
| `"moonriver"`             |             |
| `"moonbeam"`              |             |
| `"matic"`                 |             |
| `"mumbai"`                |             |
| `"avalanche"`             |             |
| `"fuji"`                  |             |
| `"optimism"`              |             |
| `"optimism-kovan"`        |             |
| `"optimism-goerli"`       |             |
| `"arbitrum"`              |             |
| `"arbitrum-nova"`         |             |
| `"arbitrum-rinkeby"`      |             |
| `"arbitrum-goerli"`       |             |
| `"celo"`                  |             |
| `"alfajores"`             |             |
| `"harmony-s0"`            |             |
| `"harmony-test-s0"`       |             |
| `"aurora"`                |             |
| `"auroratest"`            |             |
| `"hedera"`                |             |
| `"hederatest"`            |             |
| `"x-dfk-avax-chain"`      |             |
| `"x-dfk-avax-chain-test"` |             |
| `"zksync"`                |             |
| `"zksync-goerli"`         |             |
| `"base-goerli"`           |             |
| `"linea-goerli"`          |             |

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## addresses



`addresses`

*   is required

*   Type: `string[]` ([Address](definitions-definitions-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-addresses.md "#/definitions/blockMonitor/properties/addresses")

### addresses Type

`string[]` ([Address](definitions-definitions-address.md))

## abi



`abi`

*   is optional

*   Type: merged type ([AbiType](definitions-definitions-abitype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-abitype.md "#/definitions/blockMonitor/properties/abi")

### abi Type

merged type ([AbiType](definitions-definitions-abitype.md))

any of

*   [StringABI](definitions-definitions-abitype-anyof-stringabi.md "check type definition")

*   [ArrayABI](definitions-definitions-abitype-anyof-arrayabi.md "check type definition")

## alert-threshold



`alert-threshold`

*   is optional

*   Type: `object` ([AlertThreshold](definitions-definitions-blockmonitor-properties-alertthreshold.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-alertthreshold.md "#/definitions/blockMonitor/properties/alert-threshold")

### alert-threshold Type

`object` ([AlertThreshold](definitions-definitions-blockmonitor-properties-alertthreshold.md))

## paused



`paused`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-paused.md "#/definitions/blockMonitor/properties/paused")

### paused Type

`boolean`

## action-condition



`action-condition`

*   is optional

*   Type: `object` ([Action](definitions-definitions-action.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action.md "#/definitions/blockMonitor/properties/action-condition")

### action-condition Type

`object` ([Action](definitions-definitions-action.md))

### action-condition Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## action-trigger



`action-trigger`

*   is optional

*   Type: `object` ([Action](definitions-definitions-action.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action.md "#/definitions/blockMonitor/properties/action-trigger")

### action-trigger Type

`object` ([Action](definitions-definitions-action.md))

### action-trigger Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## confirm-level



`confirm-level`

*   is optional

*   Type: merged type ([Details](definitions-definitions-blockmonitor-properties-confirm-level.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-confirm-level.md "#/definitions/blockMonitor/properties/confirm-level")

### confirm-level Type

merged type ([Details](definitions-definitions-blockmonitor-properties-confirm-level.md))

one (and only one) of

*   [Untitled string in Definitions](definitions-definitions-blockmonitor-properties-confirm-level-oneof-0.md "check type definition")

*   [Untitled integer in Definitions](definitions-definitions-blockmonitor-properties-confirm-level-oneof-1.md "check type definition")

## notify-config



`notify-config`

*   is required

*   Type: `object` ([NotifyConfig](definitions-definitions-blockmonitor-properties-notifyconfig.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig.md "#/definitions/blockMonitor/properties/notify-config")

### notify-config Type

`object` ([NotifyConfig](definitions-definitions-blockmonitor-properties-notifyconfig.md))

## conditions



`conditions`

*   is optional

*   Type: `object` ([Conditions](definitions-definitions-blockmonitor-properties-conditions.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-conditions.md "#/definitions/blockMonitor/properties/conditions")

### conditions Type

`object` ([Conditions](definitions-definitions-blockmonitor-properties-conditions.md))

## risk-category



`risk-category`

*   is optional

*   Type: `string` ([RiskCategory](definitions-definitions-riskcategory.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-riskcategory.md "#/definitions/blockMonitor/properties/risk-category")

### risk-category Type

`string` ([RiskCategory](definitions-definitions-riskcategory.md))

### risk-category Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"NONE"`           |             |
| `"GOVERNANCE"`     |             |
| `"ACCESS-CONTROL"` |             |
| `"SUSPICIOUS"`     |             |
| `"FINANCIAL"`      |             |
| `"TECHNICAL"`      |             |