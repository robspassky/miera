import * as chai from "chai";
const assert = chai.assert;

import { Utils } from "../src/Utils";

const TEST_WGET_URL = "http://catalog.data.gov/api/3"
const TEST_WGET_BODY = "{\"version\": 3}"
const TEST_JGET_URL = "http://catalog.data.gov/api/3"
const TEST_WGET_BADHOST = "http://nothing.nowhere.null/"
const TEST_WGET_BADURL = "http://catalog.data.gov/fjsdklfjsdklfjs"

describe("test wget", function() {

  this.timeout = function() { return 10000; }

  it("should exist", function() {
    assert(Utils.wget, "wget should exist");
  });

  it("should return response body", function(done) {
    Utils.wget(TEST_WGET_URL, (err, body) => {
      assert(!err, `error: ${err}`);
      assert(body === TEST_WGET_BODY, "should have the body response");
      done();
    });
  });

  it("should handle a non-existent host", function (done) {
    Utils.wget(TEST_WGET_BADHOST, (err, body) => {
      assert(err, "should have failed but didn't");
      done();
    });
  });

  it("should handle a 404", function (done) {
    Utils.wget(TEST_WGET_BADURL, (err, body) => {
      assert(err, "should have failed but didn't");
      done();
    });
  });

});

describe("test jget", function() {

  it("should exist", function() {
    assert(Utils.jget, "jget should exist");
  });

  it("should return a json object", function(done) {
    Utils.jget(TEST_JGET_URL, (err, obj) => {
      assert(!err, `error: ${err}`);
      assert(obj.version === 3, "should parse json");
      done();
    });
  });

});

