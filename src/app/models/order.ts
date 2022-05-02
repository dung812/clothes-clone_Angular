export interface IOrder {
    id: number;
    dayOrder: string;
    status: boolean;
    totalPrice: number;
    products: [
        {
            id: number,
            name: string,
            image: string,
            price: number,
            quanlity: number
        }
    ];
    orderer: string;
    phone: number;
    address: string;
    email: string;
}