export interface IPaymentConfirmationModal {
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
    amount: number;
    handleqr: () => void;
}