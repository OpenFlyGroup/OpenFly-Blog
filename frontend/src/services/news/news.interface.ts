export interface IDataFilters {
    sort?: EnumNewsSort;
    searchTerm?: string;
    page?: number | string;
    perPage?: number | string;
};

export enum EnumNewsSort {
    OLDEST = 'oldest',
    NEWEST = 'newest',
    MOSTPOPOPULAR = 'most-popular',
    LESSPOPULAR = 'less-popular',
}