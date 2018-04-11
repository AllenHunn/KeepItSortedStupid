export declare class SortedArray<T> {
    private contents;
    readonly count: number;
    constructor(items?: T[]);
    bulkInsert(items: T[]): void;
    findIndex(value: T): number;
    find(value: T): T;
    contains(value: T): boolean;
    insert(value: any): void;
    delete(value: T): void;
    forEach(func: Function): void;
    map(func: Function): T[];
    private sort();
}
