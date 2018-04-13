export declare class SortedHash<TKey, TValue> {
    private contents;
    readonly count: number;
    constructor(items?: [TKey, TValue][]);
    bulkInsert(items: [TKey, TValue][]): void;
    findIndex(key: TKey): number;
    find(key: TKey): TValue;
    contains(key: TKey): boolean;
    insert(key: TKey, value: TValue): void;
    delete(key: TKey): void;
    forEach(func: Function): void;
    forEachWithKey(func: Function): void;
    map(func: Function): TValue[];
    mapWithKey(func: Function): TValue[];
    private sort();
}
