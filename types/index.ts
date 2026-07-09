// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "cashier" | "accountant";
  avatar?: string;
  phone?: string;
}

// Product Types
export interface Product {
  id: string;
  name: string;
  sku: string;
  barcode: string;
  category: string;
  price: number;
  cost: number;
  gstRate: number;
  stock: number;
  minStock: number;
  image?: string;
  description?: string;
  createdAt: Date;
}

// Customer Types
export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  gstNumber?: string;
  creditLimit: number;
  outstandingDue: number;
  totalPurchases: number;
}

// Supplier Types
export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  gstNumber: string;
  paymentTerms: string;
  outstandingDue: number;
  totalPurchases: number;
}

// Sale Types
export interface Sale {
  id: string;
  billNumber: string;
  customerId?: string;
  items: SaleItem[];
  subtotal: number;
  discount: number;
  gstAmount: number;
  total: number;
  paymentMethod: "cash" | "card" | "upi" | "check";
  status: "completed" | "pending" | "cancelled";
  createdAt: Date;
}

export interface SaleItem {
  productId: string;
  quantity: number;
  price: number;
  gstRate: number;
  discount: number;
}

// Purchase Types
export interface Purchase {
  id: string;
  billNumber: string;
  supplierId: string;
  items: PurchaseItem[];
  subtotal: number;
  gstAmount: number;
  total: number;
  status: "pending" | "received" | "cancelled";
  createdAt: Date;
}

export interface PurchaseItem {
  productId: string;
  quantity: number;
  price: number;
  gstRate: number;
}

// Invoice Types
export interface Invoice {
  id: string;
  billNumber: string;
  type: "sale" | "purchase";
  date: Date;
  amount: number;
  gstAmount: number;
  status: "paid" | "pending" | "overdue";
}

// Accounting Types
export interface LedgerEntry {
  id: string;
  date: Date;
  description: string;
  debit: number;
  credit: number;
  balance: number;
  category: string;
}

// GST Types
export interface GSTSummary {
  period: string;
  gstCollected: number;
  gstPaid: number;
  gstPayable: number;
}

// Dashboard Types
export interface DashboardStats {
  todaysSales: number;
  monthlySales: number;
  revenue: number;
  profit: number;
  expenses: number;
  gstCollected: number;
  outstandingDue: number;
  lowStockCount: number;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
