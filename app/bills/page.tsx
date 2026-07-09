'use client';

import React, { useState } from 'react';
import { Card, Button, Badge, Input, Modal, Textarea } from '@/components';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import { Receipt, MoreVertical, Download, Printer, ChevronDown } from 'lucide-react';
import { formatCurrency, formatDatetime } from '@/utils/formatters';

interface BillItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  total: number;
}

interface Bill {
  id: string;
  billNumber: string;
  date: Date;
  items: BillItem[];
  subtotal: number;
  tax: number;
  total: number;
  paymentMethod: string;
  status: 'completed' | 'pending' | 'cancelled';
}

const mockBills: Bill[] = [
  {
    id: '1',
    billNumber: 'BILL-001',
    date: new Date('2024-06-09'),
    items: [
      { productId: '1', productName: 'Laptop', quantity: 1, price: 1299, total: 1299 },
      { productId: '2', productName: 'Mouse', quantity: 2, price: 29.99, total: 59.98 },
    ],
    subtotal: 1358.98,
    tax: 244.62,
    total: 1603.60,
    paymentMethod: 'Card',
    status: 'completed',
  },
  {
    id: '2',
    billNumber: 'BILL-002',
    date: new Date('2024-06-08'),
    items: [
      { productId: '3', productName: 'Keyboard', quantity: 1, price: 79.99, total: 79.99 },
    ],
    subtotal: 79.99,
    tax: 14.40,
    total: 94.39,
    paymentMethod: 'Cash',
    status: 'completed',
  },
];

const BillHistoryPage: React.FC = () => {
  const [bills, setBills] = useState<Bill[]>(mockBills);
  const [selectedBill, setSelectedBill] = useState<Bill | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedBill, setExpandedBill] = useState<string | null>(null);

  const filteredBills = bills.filter((bill) =>
    bill.billNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (bill: Bill) => {
    setSelectedBill(bill);
    setIsDetailOpen(true);
  };

  const handlePrint = (bill: Bill) => {
    alert(`Printing bill ${bill.billNumber}`);
  };

  const handleDownload = (bill: Bill) => {
    alert(`Downloading bill ${bill.billNumber}`);
  };

  return (
    <ProtectedRoute>
      <div className="p-6 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <Receipt size={32} className="text-primary-500" />
            Bill History
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            View and manage all billing records
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card hover className="p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Bills</p>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{bills.length}</h3>
          </Card>
          <Card hover className="p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Revenue</p>
            <h3 className="text-3xl font-bold text-primary-600">
              {formatCurrency(bills.reduce((sum, bill) => sum + bill.total, 0))}
            </h3>
          </Card>
          <Card hover className="p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Completed</p>
            <h3 className="text-3xl font-bold text-green-600">
              {bills.filter((b) => b.status === 'completed').length}
            </h3>
          </Card>
          <Card hover className="p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Average Bill</p>
            <h3 className="text-3xl font-bold text-secondary-600">
              {formatCurrency(bills.reduce((sum, bill) => sum + bill.total, 0) / bills.length)}
            </h3>
          </Card>
        </div>

        {/* Search */}
        <Card className="p-4">
          <Input
            type="text"
            placeholder="Search by bill number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Card>

        {/* Bills List */}
        <div className="space-y-4">
          {filteredBills.map((bill) => (
            <Card key={bill.id} hover className="overflow-hidden">
              <div
                className="p-6 cursor-pointer"
                onClick={() => setExpandedBill(expandedBill === bill.id ? null : bill.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {bill.billNumber}
                      </h3>
                      <Badge
                        variant={bill.status === 'completed' ? 'success' : 'warning'}
                        size="sm"
                      >
                        {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Date</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {formatDatetime(bill.date)}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Items</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {bill.items.reduce((sum, item) => sum + item.quantity, 0)} items
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Payment</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {bill.paymentMethod}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Total</p>
                        <p className="font-bold text-primary-600">
                          {formatCurrency(bill.total)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform ${
                      expandedBill === bill.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Expanded Details */}
              {expandedBill === bill.id && (
                <div className="border-t border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-800/50">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4">Items</h4>
                  <div className="space-y-2 mb-4">
                    {bill.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between text-sm text-gray-700 dark:text-gray-300"
                      >
                        <span>
                          {item.productName} x {item.quantity}
                        </span>
                        <span className="font-medium">{formatCurrency(item.total)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-3 space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
                      <span>{formatCurrency(bill.subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Tax (18%):</span>
                      <span>{formatCurrency(bill.tax)}</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span className="text-primary-600">{formatCurrency(bill.total)}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleViewDetails(bill)}
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      View Full
                    </Button>
                    <Button
                      onClick={() => handlePrint(bill)}
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Printer size={16} />
                      Print
                    </Button>
                    <Button
                      onClick={() => handleDownload(bill)}
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Download size={16} />
                      Download
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Bill Details Modal */}
        {selectedBill && (
          <Modal
            isOpen={isDetailOpen}
            onClose={() => setIsDetailOpen(false)}
            title={`Bill ${selectedBill.billNumber}`}
            size="lg"
            footer={
              <div className="flex gap-3 justify-end">
                <Button variant="ghost" onClick={() => setIsDetailOpen(false)}>
                  Close
                </Button>
                <Button onClick={() => handlePrint(selectedBill)}>
                  <Printer size={18} />
                  Print
                </Button>
              </div>
            }
          >
            <div className="space-y-4">
              {/* Bill Header */}
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Bill Number</p>
                <p className="font-bold text-lg text-gray-900 dark:text-white">
                  {selectedBill.billNumber}
                </p>
              </div>

              {/* Bill Items Table */}
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 font-medium text-gray-600 dark:text-gray-400">
                      Item
                    </th>
                    <th className="text-right py-2 font-medium text-gray-600 dark:text-gray-400">
                      Qty
                    </th>
                    <th className="text-right py-2 font-medium text-gray-600 dark:text-gray-400">
                      Price
                    </th>
                    <th className="text-right py-2 font-medium text-gray-600 dark:text-gray-400">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedBill.items.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 text-gray-900 dark:text-white">{item.productName}</td>
                      <td className="text-right text-gray-900 dark:text-white">{item.quantity}</td>
                      <td className="text-right text-gray-900 dark:text-white">
                        {formatCurrency(item.price)}
                      </td>
                      <td className="text-right font-medium text-gray-900 dark:text-white">
                        {formatCurrency(item.total)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Totals */}
              <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
                  <span className="font-medium">{formatCurrency(selectedBill.subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax (18%):</span>
                  <span className="font-medium">{formatCurrency(selectedBill.tax)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2">
                  <span>Total:</span>
                  <span className="text-primary-600">{formatCurrency(selectedBill.total)}</span>
                </div>
              </div>

              {/* Payment Details */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Payment Method:</strong> {selectedBill.paymentMethod}
                </p>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Date:</strong> {formatDatetime(selectedBill.date)}
                </p>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default BillHistoryPage;
