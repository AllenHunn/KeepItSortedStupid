"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var SortedArray = /** @class */ (function () {
    function SortedArray(items) {
        this.contents = [];
        if (items) {
            this.bulkInsert(items);
        }
    }
    Object.defineProperty(SortedArray.prototype, "count", {
        get: function () {
            return this.contents.length;
        },
        enumerable: true,
        configurable: true
    });
    SortedArray.prototype.bulkInsert = function (items) {
        this.contents = this.contents.concat(items);
        this.sort();
    };
    SortedArray.prototype.findIndex = function (value) {
        var last = this.contents.length - 1;
        var first = 0;
        while (last >= first) {
            // tslint:disable-next-line:no-bitwise
            var mid = Math.floor((first + last) >> 1);
            var item = this.contents[mid];
            if (item === value) {
                return mid;
            }
            if (item > value) {
                last = mid - 1;
            }
            else {
                first = mid + 1;
            }
        }
        return null;
    };
    SortedArray.prototype.find = function (value) {
        var index = this.findIndex(value);
        return index === null ? null : this.contents[index];
    };
    SortedArray.prototype.contains = function (value) {
        return this.findIndex(value) !== null;
    };
    SortedArray.prototype.insert = function (value) {
        this.contents.push(value);
        this.sort();
    };
    SortedArray.prototype.delete = function (value) {
        var index = this.findIndex(value);
        if (index !== null) {
            _.pullAt(this.contents, index);
        }
    };
    SortedArray.prototype.forEach = function (func) {
        _.forEach(this.contents, function (value) { return func(value); });
    };
    SortedArray.prototype.map = function (func) {
        return _.map(this.contents, function (value) { return func(value); });
    };
    SortedArray.prototype.sort = function () {
        this.contents = _.sortBy(this.contents, function (value) { return value; });
    };
    return SortedArray;
}());
exports.SortedArray = SortedArray;
