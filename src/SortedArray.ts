import * as _ from "lodash";

export class SortedArray<T> {
    private contents: T[];

    get count(): number {
        return this.contents.length;
    }

    constructor(items?: T[]) {
        this.contents = [];
        if (items) {
            this.bulkInsert(items);
        }
    }

    bulkInsert(items: T[]): void {
        this.contents = this.contents.concat(items);
        this.sort();
    }

    findIndex(value: T): number {
        let last: number = this.contents.length - 1;
        let first: number = 0;

        while (last >= first) {
            // tslint:disable-next-line:no-bitwise
            let mid: number = Math.floor((first + last) >> 1);
            let item: T = this.contents[mid];
            if (item === value) {
                return mid;
            }

            if (item > value) {
                last = mid - 1;
            } else {
                first = mid + 1;
            }
        }

        return null;
    }

    find(value: T): T {
        let index:number = this.findIndex(value);
        return index === null ?  null : this.contents[index];
    }

    contains(value: T): boolean {
        return this.findIndex(value) !== null;
    }

    insert(value: any): void {
        this.contents.push(value);
        this.sort();
    }

    delete(value: T): void {
        let index: number = this.findIndex(value);
        if (index !== null) {
            _.pullAt(this.contents, index);
        }
    }

    forEach(func: Function): void {
        _.forEach(this.contents, (value) => func(value));
    }

    map(func: Function): T[] {
        return _.map(this.contents, (value) => func(value));
    }

    private sort(): void {
        this.contents = _.sortBy<T>(this.contents, (value) => value);
    }
}