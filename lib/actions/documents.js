/**
 * Auto-generated action file for "Regulations.gov" API.
 *
 * Generated at: 2019-05-07T14:40:11.031Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / data-gov-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'documents'
 * Endpoint Path: '/documents.{response_format}'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "response_format",
    "countsOnly",
    "encoded",
    "s",
    "dct",
    "dktid",
    "dkt",
    "cp",
    "a",
    "rpp",
    "po",
    "cs",
    "np",
    "cmsd",
    "cmd",
    "crd",
    "rd",
    "pd",
    "cat",
    "sb",
    "so",
    "dktst",
    "dktst2",
    "docst"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "response_format": "response_format",
    "countsOnly": "countsOnly",
    "encoded": "encoded",
    "s": "s",
    "dct": "dct",
    "dktid": "dktid",
    "dkt": "dkt",
    "cp": "cp",
    "a": "a",
    "rpp": "rpp",
    "po": "po",
    "cs": "cs",
    "np": "np",
    "cmsd": "cmsd",
    "cmd": "cmd",
    "crd": "crd",
    "rd": "rd",
    "pd": "pd",
    "cat": "cat",
    "sb": "sb",
    "so": "so",
    "dktst": "dktst",
    "dktst2": "dktst2",
    "docst": "docst"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['api_key'] = cfg['api_key'];

    let callParams = {
        spec: spec,
        operationId: 'documents',
        pathName: '/documents.{response_format}',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}