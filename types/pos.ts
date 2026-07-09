export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

export interface POSTransaction {
  id: string;
  billNumber: string;
  date: Date;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  paymentMethod: 'cash' | 'card' | 'upi';
  status: 'completed' | 'pending' | 'cancelled';
}

export interface PaymentMethod {
  id: string;
  name: string;
  code: 'cash' | 'card' | 'upi' | 'cheque';
  enabled: boolean;
}
