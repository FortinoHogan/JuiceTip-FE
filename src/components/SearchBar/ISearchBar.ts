export interface ISearchBar{
    className?: string;
    onSearch: (query: string) => void
    placeholder?: string
    isChat?: boolean
}