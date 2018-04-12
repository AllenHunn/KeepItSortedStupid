"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Node = /** @class */ (function () {
    function Node(key, value) {
        this.key = key;
        this.value = value;
    }
    return Node;
}());
var SortedHash = /** @class */ (function () {
    function SortedHash(items) {
        this.contents = [];
        if (items) {
            this.bulkInsert(items);
        }
    }
    Object.defineProperty(SortedHash.prototype, "count", {
        get: function () {
            return this.contents.length;
        },
        enumerable: true,
        configurable: true
    });
    SortedHash.prototype.bulkInsert = function (items) {
        var _this = this;
        _.forEach(items, function (item) { return _this.contents.push(new Node(item[0], item[1])); });
        this.sort();
    };
    SortedHash.prototype.findIndex = function (key) {
        var last = this.contents.length - 1;
        var first = 0;
        while (last >= first) {
            // tslint:disable-next-line:no-bitwise
            var mid = (first + last) >> 1;
            var item = this.contents[mid];
            if (item.key === key) {
                return mid;
            }
            if (item.key > key) {
                last = mid - 1;
            }
            else {
                first = mid + 1;
            }
        }
        return null;
    };
    SortedHash.prototype.find = function (key) {
        var index = this.findIndex(key);
        return index === null ? null : this.contents[index].value;
    };
    SortedHash.prototype.contains = function (key) {
        return this.findIndex(key) !== null;
    };
    SortedHash.prototype.insert = function (key, value) {
        this.contents.push(new Node(key, value));
        this.sort();
    };
    SortedHash.prototype.delete = function (key) {
        var index = this.findIndex(key);
        if (index !== null) {
            _.pullAt(this.contents, index);
        }
    };
    SortedHash.prototype.forEach = function (func) {
        _.forEach(this.contents, function (node) { return func(node.value); });
    };
    SortedHash.prototype.map = function (func) {
        return _.map(this.contents, function (node) { return func(node.value); });
    };
    SortedHash.prototype.sort = function () {
        this.contents = _.sortBy(this.contents, function (node) { return node.key; });
    };
    return SortedHash;
}());
exports.SortedHash = SortedHash;
