export interface IOrder {
    id: number;
    dayOrder: string;
    status: boolean;
    totalPrice: number;
    product: [];
    orderer: string;
    phone: number;
    address: string;
}