import * as _ from "lodash";

class Node<TKey, TValue> {
    key: TKey;
    value: TValue;

    constructor(key: TKey, value: TValue) {
        this.key = key;
        this.value = value;
    }
}

export class SortedHash<TKey, TValue> {
    private contents: Node<TKey, TValue>[];

    get count(): number {
        return this.contents.length;
    }

    constructor(items?: [TKey, TValue][]) {
        this.contents = [];
        if (items) {
            this.bulkInsert(items);
        }
    }

    bulkInsert(items: [TKey, TValue][]): void {
        _.forEach(items, (item: any) => this.contents.push(new Node(item[0], item[1])));
        this.sort();
    }

    findIndex(key: TKey): number {
        let last: number = this.contents.length - 1;
        let first: number = 0;

        while (last >= first) {
            // tslint:disable-next-line:no-bitwise
            let mid: number = Math.floor((first + last) >> 1);

            let item: Node<TKey, TValue> = this.contents[mid];

            if (item.key === key) {
                return mid;
            }

            if (item.key > key) {
                last = mid - 1;
            } else {
                first = mid + 1;
            }
        }

        return null;
    }

    find(key: TKey): TValue {
        let index:number = this.findIndex(key);
        return index === null ?  null : this.contents[index].value;
    }

    contains(key: TKey): boolean {
        return this.findIndex(key) !== null;
    }

    insert(key: TKey, value: TValue): void {
        this.contents.push(new Node(key, value));
        this.sort();
    }

    delete(key: TKey): void {
        let index: number = this.findIndex(key);
        if (index !== null) {
            _.pullAt(this.contents, index);
        }
    }

    forEach(func: Function): void {
        _.forEach(this.contents, (node) => func(node.value));
    }

    map(func: Function): TValue[] {
        return _.map(this.contents, (node) => func(node.value));
    }

    private sort(): void {
        this.contents = _.sortBy<Node<TKey, TValue>>(this.contents, (node) => node.key);
    }
}