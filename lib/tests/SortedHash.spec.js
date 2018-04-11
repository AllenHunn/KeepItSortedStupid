"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SortedHash_1 = require("../SortedHash");
var chai_1 = require("chai");
require("mocha");
describe("SortedHash", function () {
    var kiss = new SortedHash_1.SortedHash();
    describe("bulk insert", function () {
        it("should insert values", function () {
            var testData = [];
            for (var i = 1; i <= 100000; i++) {
                testData.push([i, "Item " + i]);
            }
            chai_1.expect(kiss.count).equals(0, "Nothing should be added yet");
            kiss.bulkInsert(testData);
            chai_1.expect(kiss.count).equals(100000, "Should have 100000 items");
        });
    });
    describe("insert", function () {
        it("should be able to insert a value", function () {
            kiss.insert(100001, "Item 100001");
            chai_1.expect(kiss.count).equals(100001);
            var result = kiss.findIndex(100001);
            chai_1.expect(result).equals(100000);
        });
    });
    describe("delete", function () {
        it("should be able to delete a value", function () {
            kiss.delete(100001);
            chai_1.expect(kiss.count).equals(100000);
            var result = kiss.findIndex(100001);
            chai_1.expect(result).equals(null);
        });
    });
    describe("findIndex", function () {
        it("should be able to find an index for a value", function () {
            var result = kiss.findIndex(90);
            chai_1.expect(result).equals(89);
        });
        it("should return null when not found", function () {
            var result = kiss.findIndex(-10);
            chai_1.expect(result).equals(null);
        });
    });
    describe("find", function () {
        it("should be able to find a value", function () {
            var result = kiss.find(90);
            chai_1.expect(result).equals("Item 90");
        });
        it("should return null when not found", function () {
            var result = kiss.find(-10);
            chai_1.expect(result).equals(null);
        });
    });
    describe("contains", function () {
        it("should be able to find a value", function () {
            var result = kiss.contains(90);
            chai_1.expect(result).equals(true);
        });
        it("should return false when not found", function () {
            var result = kiss.contains(-10);
            chai_1.expect(result).equals(false);
        });
    });
    describe("forEach", function () {
        it("should execute a function on each instance", function () {
            var testData = [];
            for (var i = 1; i <= 10; i++) {
                testData.push([i, i]);
            }
            var ki = new SortedHash_1.SortedHash(testData);
            chai_1.expect(ki.count).equals(10, "Should have 10 items");
            var counter = (function () {
                var count = 0;
                return function (num) {
                    if (num) {
                        count++;
                    }
                    return count;
                };
            })();
            ki.forEach(function (num) { return counter(num); });
            chai_1.expect(counter()).equals(10);
        });
    });
    describe("map", function () {
        it("should execute a function on each instance and return a new array of values", function () {
            var testData = [];
            for (var i = 1; i <= 10; i++) {
                testData.push([i, i]);
            }
            var ki = new SortedHash_1.SortedHash(testData);
            chai_1.expect(ki.count).equals(10, "Should have 10 items");
            var modded = ki.map(function (num) { return num * 2; });
            chai_1.expect(modded).eqls([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
        });
    });
    describe("large collections", function () {
        it("should be able to handle large collections being bulk inserted", function () {
            var testData = [];
            for (var i = 1; i <= 1000000; i++) {
                testData.push([i, i]);
            }
            var ki = new SortedHash_1.SortedHash(testData);
            chai_1.expect(ki.count).equals(testData.length);
            chai_1.expect(ki.find(109394)).equals(109394);
        });
    });
});
