export interface IChangePriceModal{
    isVisible: boolean
    setIsVisible: (isVisible: boolean) => void
    productPrice: number | null
    bargainPrice: number | null
}