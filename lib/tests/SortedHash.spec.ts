import { SortedHash } from "../SortedHash";
import { expect } from "chai";
import "mocha";

describe("SortedHash", () => {
    const kiss: SortedHash<number, string> = new SortedHash<number, string>();

    describe("bulk insert", () => {
        it("should insert values", () => {
            const testData: any[] = [];
            for(let i:number = 1; i <= 100000; i++) {
                testData.push([i, `Item ${i}`]);
            }

            expect(kiss.count).equals(0, "Nothing should be added yet");
            kiss.bulkInsert(testData);
            expect(kiss.count).equals(100000, "Should have 100000 items");
        });
    });

    describe("insert", () => {
        it("should be able to insert a value", () => {
            kiss.insert(100001, "Item 100001");
            expect(kiss.count).equals(100001);
            const result: number = kiss.findIndex(100001);
            expect(result).equals(100000);
        });
    });

    describe("delete", () => {
        it("should be able to delete a value", () => {
            kiss.delete(100001);
            expect(kiss.count).equals(100000);
            const result: number = kiss.findIndex(100001);
            expect(result).equals(null);
        });
    });

    describe("findIndex", () => {
        it("should be able to find an index for a value", () => {
            const result: number = kiss.findIndex(90);
            expect(result).equals(89);
        });

        it("should return null when not found", () => {
            const result: number = kiss.findIndex(-10);
            expect(result).equals(null);
        });
    });

    describe("find", () => {
        it("should be able to find a value", () => {
            const result: string = kiss.find(90);
            expect(result).equals("Item 90");
        });

        it("should return null when not found", () => {
            const result: string = kiss.find(-10);
            expect(result).equals(null);
        });
    });

    describe("contains", () => {
        it("should be able to find a value", () => {
            const result: boolean = kiss.contains(90);
            expect(result).equals(true);
        });

        it("should return false when not found", () => {
            const result: boolean = kiss.contains(-10);
            expect(result).equals(false);
        });
    });

    describe("forEach", () => {
        it("should execute a function on each instance", () => {
            const testData: any[] = [];
            for(let i:number = 1; i <= 10; i++) {
                testData.push([i, i]);
            }
            const ki: SortedHash<number, number> = new SortedHash<number, number>(testData);

            expect(ki.count).equals(10, "Should have 10 items");

            let counter: Function = (function(): Function {
                let count: number = 0;
                return function(num?: number): number {
                    if (num) {
                        count++;
                    }
                    return count;
                };
            })();

            ki.forEach((num: number) => counter(num));

            expect(counter()).equals(10);
        });
    });

    describe("map", () => {
        it("should execute a function on each instance and return a new array of values", () => {
            const testData: any[] = [];
            for(let i:number = 1; i <= 10; i++) {
                testData.push([i, i]);
            }
            const ki: SortedHash<number, number> = new SortedHash<number, number>(testData);

            expect(ki.count).equals(10, "Should have 10 items");


            let modded: number[] = ki.map((num: number) => num * 2);

            expect(modded).eqls([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
        });
    });

    describe("mapWithKey", () => {
        it("should execute a function on each instance and return a new array of values", () => {
            const testData: any[] = [];
            for(let i:number = 1; i <= 10; i++) {
                testData.push([i, i]);
            }
            const ki: SortedHash<number, number> = new SortedHash<number, number>(testData);

            expect(ki.count).equals(10, "Should have 10 items");


            let modded: number[] = ki.mapWithKey((key: number, value: number) => value * 2);

            expect(modded).eqls([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
        });
    });

    describe("large collections", () => {
        it("should be able to handle large collections being bulk inserted", () => {
            const testData: any[] = [];
            for(let i:number = 1; i <= 1000000; i++) {
                testData.push([i, i]);
            }
            const ki: SortedHash<number, number> = new SortedHash<number, number>(testData);

            expect(ki.count).equals(testData.length);
            expect(ki.find(109394)).equals(109394);
        });
    });
});