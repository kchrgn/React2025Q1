export interface ISearchTermContext {
  searchTerm: string;
  searchFieldValue: string;
  setSearchFieldValue: React.Dispatch<React.SetStateAction<string>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
