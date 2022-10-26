 /**
 *
 * Copyright (c) 2022 Aspose.PDF Cloud
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import request = require("request");
import { Configuration } from "./configuration";
import { ObjectSerializer } from "./objectSerializer";
var superagent = require("superagent");

/**
 * Invoke api method
 * @param requestOptions request parameters
 * @param confguration api configuration
 * @param notApplyAuthToRequest if setted to true, auth is not applied to request
 */
export async function invokeApiMethod(requestOptions: request.Options, confguration: Configuration, notApplyAuthToRequest?: boolean, postData?: Buffer): Promise<request.RequestResponse> {
    try {
        return await invokeApiMethodInternal(requestOptions, confguration, notApplyAuthToRequest, postData);
    } catch (e) {
        if (e instanceof NeedRepeatException) {
            return await invokeApiMethodInternal(requestOptions, confguration, notApplyAuthToRequest, postData);
        }
        throw e;
    }
}

/**
 * Add parameter to query
 * @param url url
 * @param queryParameters queryParameters
 * @param parameterName parameterName
 * @param parameterValue parameterValue
 */
export function addQueryParameterToUrl(url, queryParameters, parameterName, parameterValue) {
    if (parameterValue !== undefined) {
        if (url.indexOf("{" + parameterName + "}") >= 0) {
            url = url.replace("{" + parameterName + "}", String(parameterValue));
        } else {
            queryParameters[parameterName] = String(parameterValue);
        }
    } else {
        url = url.replace("/{" + parameterName + "}", "");
    }

    return url;
}

/**
 * Invoke api method
 * @param requestOptions request parameters
 * @param confguration api configuration
 * @param notApplyAuthToRequest if setted to true, auth is not applied to request
 */
async function invokeApiMethodInternal(requestOptions: request.Options, confguration: Configuration, notApplyAuthToRequest?: boolean, postData?: Buffer): Promise<request.RequestResponse> {

    let sa = superagent(requestOptions.method, requestOptions["uri"]);
    
    const auth = confguration.authentication;
    if (!notApplyAuthToRequest) {
        await auth.applyToRequest(requestOptions, confguration);
    } 
    
    if (requestOptions.form) {
        sa.type('form');
        sa.send(requestOptions.form);       
    } else if(postData) {
        sa.type('application/octet-stream');
        sa.set("Content-Length", postData.length);
        sa.send(postData);
    } else if (requestOptions.body) {
        sa.send(requestOptions.body);
    }
    // query params
    sa.query(requestOptions.qs);
    
    //headers
    sa.set("User-Agent", "pdf nodejs sdk");
    sa.set("x-aspose-client", "nodejs sdk");  
    sa.set("x-aspose-client-version", "22.10.0");

    if (!requestOptions.headers) {
        requestOptions.headers = {};
    } 
    
    if (!notApplyAuthToRequest) {
        sa.set("Authorization", requestOptions.headers.Authorization);
    }
    
    if (requestOptions.json){
        sa.accept('json');
    } else {
        sa.responseType('blob')
    }

    
    return new Promise<request.RequestResponse>((resolve, reject) => {
        sa.catch(async err => {
            if (err.status === 401 && !notApplyAuthToRequest) {
                await auth.handle401response(confguration);
                reject(new NeedRepeatException());
            } else {
                reject(err);
            }
            
         });
        
        sa.then(async (response) => {
            if (response.status >= 200 && response.status <= 299) {
                resolve(response);
            } else {
                try {
                    let bodyContent = response.body;
                    if (bodyContent instanceof Buffer) {
                        bodyContent = JSON.parse(bodyContent.toString("utf8"));
                    }

                    const result = ObjectSerializer.deserialize(bodyContent, "SaaSposeResponse");
                    reject({ message: result.message, code: response.status });
                } catch (error) {
                    reject({ message: "Error while parse server error: " + error });
                }
            } 
        }); 
    });
}

/**
 * Exception, indicating necessity of request repeat
 */
class NeedRepeatException extends Error {
}
