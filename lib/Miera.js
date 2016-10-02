"use strict";
var http = require("http");
var Miera = (function () {
    function Miera() {
    }
    Miera.wget = function (url, cb) {
        http.get(url, function (rsp) {
            var body = "";
            if (rsp.statusCode !== 200) {
                cb("Bad status code: " + rsp.statusCode, undefined);
                return;
            }
            rsp.on("data", function (chunk) { body += chunk; });
            rsp.on("end", function () { cb(undefined, body); });
            rsp.on("close", function () { cb(undefined, body); });
            rsp.on("error", function (err) { cb("Stream error: " + err, undefined); });
        })
            .on("error", function (err) {
            console.error("Failed to make http request: " + err);
            cb("Connection error: " + err, undefined);
        });
    };
    Miera.jget = function (url, cb) {
        Miera.wget(url, function (err, body) {
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
    return Miera;
}());
exports.Miera = Miera;
