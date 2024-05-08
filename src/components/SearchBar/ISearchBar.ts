export interface ISearchBar{
    className?: string;
    onSearch: (query: string, index: number) => void
    // onSearch: (query: string) => void
    placeholder?: string
    isChat?: boolean
}