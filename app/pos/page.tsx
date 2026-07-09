'use client';

import React, { useState } from 'react';
import { Card, Button, Input, Badge, Modal } from '@/components';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import { Plus, Minus, Trash2, Search, DollarSign, ShoppingCart } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
}

const mockProducts: Product[] = [
  { id: '1', name: 'Laptop', price: 1299, category: 'Electronics', stock: 15 },
  { id: '2', name: 'Mouse', price: 29.99, category: 'Electronics', stock: 50 },
  { id: '3', name: 'Keyboard', price: 79.99, category: 'Electronics', stock: 30 },
  { id: '4', name: 'Monitor', price: 399, category: 'Electronics', stock: 10 },
  { id: '5', name: 'Desk Chair', price: 299, category: 'Furniture', stock: 8 },
  { id: '6', name: 'Desk Lamp', price: 49.99, category: 'Furniture', stock: 25 },
  { id: '7', name: 'USB Cable', price: 12.99, category: 'Accessories', stock: 100 },
  { id: '8', name: 'HDMI Cable', price: 19.99, category: 'Accessories', stock: 80 },
];

const POSPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card' | 'upi'>('cash');

  const filteredProducts = mockProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
              : item
          )
        );
      }
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          total: product.price,
        },
      ]);
    }
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      const product = mockProducts.find((p) => p.id === id);
      if (product && quantity <= product.stock) {
        setCart(
          cart.map((item) =>
            item.id === id
              ? { ...item, quantity, total: quantity * item.price }
              : item
          )
        );
      }
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + tax;

  const handleCheckout = () => {
    setShowPaymentModal(true);
  };

  const handlePayment = () => {
    alert(`Payment of ${formatCurrency(total)} processed via ${paymentMethod.toUpperCase()}`);
    setCart([]);
    setShowPaymentModal(false);
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <ShoppingCart size={32} className="text-primary-500" />
              Point of Sale (POS)
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Fast and efficient billing system
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Products Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Search Bar */}
              <Card className="p-4">
                <Input
                  type="text"
                  placeholder="Search products..."
                  icon={<Search size={18} />}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Card>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    hover
                    className="p-4 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {product.category}
                      </p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-primary-500">
                          {formatCurrency(product.price)}
                        </span>
                        <Badge variant={product.stock > 5 ? 'success' : 'warning'} size="sm">
                          {product.stock} left
                        </Badge>
                      </div>
                    </div>
                    <Button
                      onClick={() => addToCart(product)}
                      disabled={product.stock === 0}
                      className="w-full"
                      size="sm"
                    >
                      <Plus size={16} />
                      Add
                    </Button>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cart Section */}
            <div className="lg:col-span-1">
              <Card className="p-6 h-fit sticky top-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Shopping Cart
                </h2>

                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart size={32} className="mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-500 dark:text-gray-400">Cart is empty</p>
                  </div>
                ) : (
                  <>
                    {/* Cart Items */}
                    <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                        >
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 dark:text-white text-sm">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {formatCurrency(item.price)} x {item.quantity}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 text-primary-500 hover:bg-primary-100 dark:hover:bg-primary-900 rounded"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-6 text-center text-sm font-bold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 text-primary-500 hover:bg-primary-100 dark:hover:bg-primary-900 rounded"
                            >
                              <Plus size={16} />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-1 text-red-500 hover:bg-red-100 dark:hover:bg-red-900 rounded"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Totals */}
                    <div className="space-y-2 border-t border-gray-200 dark:border-gray-700 pt-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
                        <span className="font-medium">{formatCurrency(subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Tax (18%):</span>
                        <span className="font-medium">{formatCurrency(tax)}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg mt-3">
                        <span>Total:</span>
                        <span className="text-primary-600 dark:text-primary-400">
                          {formatCurrency(total)}
                        </span>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <Button
                      onClick={handleCheckout}
                      className="w-full mt-4"
                      size="lg"
                    >
                      <DollarSign size={18} />
                      Checkout
                    </Button>
                  </>
                )}
              </Card>
            </div>
          </div>
        </div>

        {/* Payment Modal */}
        <Modal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          title="Payment"
          description={`Total Amount: ${formatCurrency(total)}`}
          size="lg"
          footer={
            <div className="flex gap-3 justify-end">
              <Button variant="ghost" onClick={() => setShowPaymentModal(false)}>
                Cancel
              </Button>
              <Button onClick={handlePayment}>
                Confirm Payment
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Select payment method and proceed
              </p>
            </div>
            <div className="space-y-3">
              {(['cash', 'card', 'upi'] as const).map((method) => (
                <label
                  key={method}
                  className="flex items-center p-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:border-primary-500 transition-colors"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={(e) => setPaymentMethod(e.target.value as typeof method)}
                    className="w-4 h-4"
                  />
                  <span className="ml-3 font-medium text-gray-900 dark:text-white capitalize">
                    {method === 'upi' ? 'UPI' : method.charAt(0).toUpperCase() + method.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </Modal>
      </div>
    </ProtectedRoute>
  );
};

export default POSPage;
