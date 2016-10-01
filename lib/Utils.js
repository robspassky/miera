"use strict";
var http = require("http");
var Utils = (function () {
    function Utils() {
    }
    Utils.wget = function (url, cb) {
        http.get(url, function (rsp) {
            var body = "";
            if (rsp.statusCode !== 200) {
                cb(true, undefined);
                return;
            }
            rsp.on("data", function (chunk) { body += chunk; });
            rsp.on("end", function () { cb(undefined, body); });
            rsp.on("close", function () { cb(undefined, body); });
            rsp.on("error", function (err) { cb(true, undefined); });
        })
            .on("error", function (err) {
            console.error("Failed to make http request: " + err);
            cb(true, undefined);
        });
    };
    Utils.jget = function (url, cb) {
        Utils.wget(url, function (err, body) {
            if (err) {
                cb(err, undefined);
                return;
            }
            try {
                cb(undefined, JSON.parse(body));
            }
            catch (err) {
                cb(err, undefined);
            }
        });
    };
    return Utils;
}());
exports.Utils = Utils;
