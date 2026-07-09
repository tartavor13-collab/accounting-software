'use client';

import { create } from 'zustand';
import { CartItem, POSTransaction } from '@/types/pos';

interface POSState {
  cart: CartItem[];
  transactions: POSTransaction[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateCart: (items: CartItem[]) => void;
  clearCart: () => void;
  addTransaction: (transaction: POSTransaction) => void;
  getTransactions: () => POSTransaction[];
}

export const usePOSStore = create<POSState>((set, get) => ({
  cart: [],
  transactions: [],
  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i.id === item.id);
      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
          ),
        };
      }
      return { cart: [...state.cart, item] };
    }),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((i) => i.id !== id) })),
  updateCart: (items) => set({ cart: items }),
  clearCart: () => set({ cart: [] }),
  addTransaction: (transaction) =>
    set((state) => ({ transactions: [...state.transactions, transaction] })),
  getTransactions: () => get().transactions,
}));
