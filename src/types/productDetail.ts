export type ProductDetail = {
    id: string | undefined;
    title: string | undefined;
    price: {
        currency: string | undefined;
        amount: number | undefined;
    };
    picture: string | undefined;
    condition: string | undefined;
    free_shiping: boolean | undefined;
    sold_quantity: number | undefined;
    description: string | undefined;
};