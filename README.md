# Keep It Sorted Stupid (KISS)
Open source sorted array and sorted hash optimized for binary search.

It's based loosely on the SortedArray and SortedDictionary classes found in the .Net framework.

The collections are kept sorted, so insertion is a bit slow. That being the case, BulkInsert should be used for inserting multiple values at once. The flip side of this is that search is *very* fast.

It's built in Typescript, and offers generic support for optimal type safety. It will work equally well in Javascript, but you're on your own for typing!

## Planned Improvements: 
* Async versions of both structures using Promises or callbacks
* Improve testing

## Usage Examples:

### TypeScript

```typescript
// Import
import { SortedArray } from "keepitsortedstupid";
// initialize
var sortedArray:SortedArray<number> = new SortedArray<number>();
// BulkInsert
sortedArray.bulkInsert([3, 4, 9, 10, 2, 3, 8]);
// Insert
sortedArray.insert(6);
// Contains
console.log(`Contains 9? ${sortedArray.contains(9)}`);
// FindIndex
console.log(`Index for 4: ${sortedArray.findIndex(4)}`);
// ForEach
sortedArray.forEach((item) => console.log(`Item: ${item}`));
// Map
console.log(sortedArray.map((item) => item * 2));

// import
import { SortedHash } from "keepitsortedstupid";
// initialize
var sortedHash:SortedHash<number, string> = new SortedHash<number, string>();
// BulkInsert
sortedHash.bulkInsert([[3, "Three"], [4, "Four"], [9, "Nine"], [10, "Ten"], [2, "Two"], [3, "Three"], [8, "Eight"]]);
// Insert
sortedHash.insert(6, "Six");
// Contains
console.log(`Contains 9? ${sortedHash.contains(9)}`);
// FindIndex
console.log(`Index for 4: ${sortedHash.findIndex(4)}`);
// ForEach
sortedHash.forEach((item) => console.log(`Value: ${item}`));
// ForEachWithKey
sortedHash.forEachWithKey((key, value) => console.log(`Key: ${key} Value: ${value}`));
// Map
console.log(sortedHash.map((item) => item * 2));
// MapWithKey
console.log(sortedHash.map((key, value) => value * 2));
```

### Javascript

```javascript
// import
const kiss = require('keepitsortedstupid');
// initialize
var sortedArray = new kiss.SortedArray();
// BulkInsert
sortedArray.bulkInsert([3, 4, 9, 10, 2, 3, 8]);
// Insert
sortedArray.insert(6);
// Contains
console.log(`Contains 9? ${sortedArray.contains(9)}`);
// FindIndex
console.log(`Index for 4: ${sortedArray.findIndex(4)}`);
// ForEach
sortedArray.forEach((item) => console.log(`Item: ${item}`));
// Map
console.log(sortedArray.map((item) => item * 2));

// import
const kiss = require('keepitsortedstupid');
// initialize
var sortedHash = new kiss.SortedHash();
// BulkInsert
sortedHash.bulkInsert([[3, "Three"], [4, "Four"], [9, "Nine"], [10, "Ten"], [2, "Two"], [3, "Three"], [8, "Eight"]]);
// Insert
sortedHash.insert(6, "Six");
// Contains
console.log(`Contains 9? ${sortedHash.contains(9)}`);
// FindIndex
console.log(`Index for 4: ${sortedHash.findIndex(4)}`);
// ForEach
sortedHash.forEach((item) => console.log(`Value: ${item}`));
// ForEachWithKey
sortedHash.forEachWithKey((key, value) => console.log(`Key: ${key} Value: ${value}`));
// Map
console.log(sortedHash.map((item) => item * 2));
// MapWithKey
console.log(sortedHash.map((key, value) => value * 2));
```