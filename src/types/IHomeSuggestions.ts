export interface IHomeSuggestions {
    image: string,
    title: string,
    price: number,
    Location: string,
    features: IHomeSuggestionsFeature[]
}

export interface IHomeSuggestionsFeature {
    icon: string,
    value: number
}