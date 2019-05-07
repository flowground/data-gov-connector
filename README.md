# ![LOGO](logo.png) Regulations.gov **flow**ground Connector

## Description

A generated **flow**ground connector for the Regulations.gov API (version 3.0).

Generated from: https://api.apis.guru/v2/specs/data.gov/3.0/swagger.json<br/>
Generated at: 2019-05-07T17:40:11+03:00

## API Description

Provides public users access to federal regulatory content.

## Authorization

Supported authorization schemes:
- API Key
## Actions

### Returns Docket information

*Tags:* `dockets`

#### Input Parameters
* `response_format` - _required_ - Format
    Possible values: json, xml.
* `docketId` - _required_ - Docket ID

### Returns Document information

*Tags:* `documents`

#### Input Parameters
* `response_format` - _required_ - Format
    Possible values: json, xml.
* `documentId` - _optional_ - FDMS Document ID
* `federalRegisterNumber` - _optional_ - Federal Register Document Number

### Search for Documents

> This API allows users to build a query based on any of the parameters below.  If you have trouble building queries, you may wish to try them through the <a href="http://www.regulations.gov/#!advancedSearch">Advanced Search</a> page on the Regulations.gov website.

*Tags:* `documents`

#### Input Parameters
* `response_format` - _required_ - Format
    Possible values: json, xml.
* `countsOnly` - _optional_ - Counts Only: <ul><li>1 (will return only the document count for a search query)</li><li>0 (will return documents as well)</li></ul>
    Possible values: 0, 1.
* `encoded` - _optional_ - Encoded: <ul><li>1 (will accept Regulations.gov style encoded parameters)</li><li>0 (will not accept such encoded parameters)</li></ul>
    Possible values: 0, 1.
* `s` - _optional_ - Keyword(s)
* `dct` - _optional_ - Document Type: <ul><li>N: Notice</li><li>PR: Proposed Rule</li><li>FR: Rule</li><li>O: Other</li><li>SR: Supporting & Related Material</li><li>PS: Public Submission</li></ul>
    Possible values: N, PR, FR, O, SR, PS.
* `dktid` - _optional_ - Valid Docket ID (ex. SEC-2012-0044)
* `dkt` - _optional_ - Docket Type: <ul><li>R: Rulemaking</li><li>N: Nonrulemaking</li></ul><p>A Docket Type is either Rulemaking or Nonrulemaking. A Rulemaking docket includes the type of regulation that establishes a rule. While a Non-Rulemaking docket does not include a rule.</p>
    Possible values: N, R.
* `cp` - _optional_ - Comment Period: <ul><li>O: Open</li><li>C: Closed</li></ul>
    Possible values: O, C.
* `a` - _optional_ - Federal Agency: List of accepted Federal Agency values. This field allows multiple values. Ex. a=FMCSA%252BEPA%252BFDA
* `rpp` - _optional_ - Results Per Page 10, 25, 100, 500, 1,000.  Results per page may not exceed 1,000.
    Possible values: 10, 25, 100, 500, 1000.
* `po` - _optional_ - Enter the page offset (always starts with 0). This is used in conjunction with results per page to provide large data sets. For example, if a search produces 82 results and the result per page is set to 25, this will generate 4 pages. 3 pages will have 25 results and the last page will have 7 results. Page offset values for each page will be: <pre>Page 1: po=0 Page 2: po=25 Page 3: po=50 Page 4: po=75</pre> The total number of pages is [total results/results per page] and page offset for page X is [X-1 * results per page]
* `cs` - _optional_ - Comment Period Closing Soon: <ul><li>0 (closing today)</li><li>3 (closing within 3 days)</li><li>15 (closing within 15 days)</li><li>30 (closing within 30 days)</li><li>90 (closing within 90 days)</li></ul>
    Possible values: 0, 3, 15, 30, 90.
* `np` - _optional_ - Newly Posted: <ul><li>0 (posted today)</li><li>3 (posted within last 3 days)</li><li>15 (posted within last 15 days)</li><li>30 (posted within last 30 days)</li><li>90 (posted within last 90 days)</li></ul>  For periods of time beyond 90-days, please use a date range with the Posted Date parameter.
    Possible values: 0, 3, 15, 30, 90.
* `cmsd` - _optional_ - Comment Period Start Date: Enter a date in the form of MM/DD/YY. Note: If the Comment Period End Date is also provided, then ensure the Comment Period Start date is earlier.
* `cmd` - _optional_ - Comment Period End Date: Enter a date in the form of MM/DD/YY. Note: If the Comment Period Start Date is also provided, then ensure the Comment Period End date is after.<br/>* Comment Period Start and End Dates are mutually exclusive with the 'closing soon' parameter. If both are provided, 'closing soon' will be ignored.
* `crd` - _optional_ - Creation Date: Enter a date in the form of MM/DD/YY. Accepts a single date or a date range. Ex. <code>crd=11/06/13-03/06/14</code>
* `rd` - _optional_ - Received Date: Enter a date in the form of MM/DD/YY. Accepts a single date or a date range. Ex. <code>rd=11/06/13-03/06/14</code>
* `pd` - _optional_ - Posted Date: Enter a date in the form of MM/DD/YY. Accepts a single date or a date range. Ex. <code>pd=11/06/13-03/06/14</code>
* `cat` - _optional_ - Document Category: <ul><li>AD (Aerospace and Transportation)</li> <li>AEP (Agriculture, Environment, and Public Lands)</li> <li>BFS (Banking and Financial)</li> <li>CT (Commerce and International)</li> <li>LES (Defense, Law Enforcement, and Security)</li> <li>EELS (Education, Labor, Presidential, and Government Services)</li> <li>EUMM (Energy, Natural Resources, and Utilities)</li> <li>HCFP (Food Safety, Health, and Pharmaceutical)</li> <li>PRE (Housing, Development, and Real Estate)</li> <li>ITT (Technology and Telecommunications)</li></ul>
    Possible values: AD, AEP, BFS, CT, LES, EELS, EUMM, HCFP, PRE, ITT.
* `sb` - _optional_ - Sort By: <ul><li>docketId (Docket ID)</li><li>docId (Document ID)</li><li>title (Title)</li><li>postedDate (Posted Date)</li><li>agency (Agency)</li><li>documentType (Document Type)</li><li>submitterName (Submitter Name)</li><li>organization (Organization)</li></ul> Sort Order is REQUIRED if this parameter is included.
    Possible values: docketId, docId, title, postedDate, agency, documentType, submitterName, organization.
* `so` - _optional_ - Sort Order: <ul><li>ASC: Ascending</li><li>DESC: Descending</li></ul>
    Possible values: ASC, DESC.
* `dktst` - _optional_ - Docket Subtype: Only one docket subtype at a time may be selected. One or more agency values must be part of the request. Only values valid for the selected agency will be returned.
* `dktst2` - _optional_ - Docket Sub-subtype: Only one docket sub-subtype at a time may be selected. One or more agency values must be part of the request. Only values valid for the selected agency will be returned.
* `docst` - _optional_ - Document Subtype: Single or multiple document subtypes may be included.  Multiple values should be passed as follows: <code>docst=%20Certificate+of+Service%252BCorrespondence</code>

## License

**flow**ground :- Telekom iPaaS / data-gov-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
