'use client';

import React, { useState } from 'react';
import { Card, Table, Button, Badge, Modal, Input, Textarea } from '@/components';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import { Plus, Edit, Trash2, DollarSign } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

interface Invoice {
  id: string;
  invoiceNumber: string;
  customer: string;
  amount: number;
  date: string;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
}

const mockInvoices: Invoice[] = [
  {
    id: '1',
    invoiceNumber: 'INV-001',
    customer: 'John Doe',
    amount: 2500,
    date: '2024-06-01',
    dueDate: '2024-06-15',
    status: 'paid',
  },
  {
    id: '2',
    invoiceNumber: 'INV-002',
    customer: 'Jane Smith',
    amount: 1800,
    date: '2024-06-05',
    dueDate: '2024-06-19',
    status: 'pending',
  },
  {
    id: '3',
    invoiceNumber: 'INV-003',
    customer: 'Bob Johnson',
    amount: 3200,
    date: '2024-05-20',
    dueDate: '2024-06-03',
    status: 'overdue',
  },
];

const InvoicesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { header: 'Invoice #', accessor: 'invoiceNumber' },
    { header: 'Customer', accessor: 'customer' },
    {
      header: 'Amount',
      accessor: 'amount',
      render: (value: number) => formatCurrency(value),
    },
    { header: 'Date', accessor: 'date' },
    { header: 'Due Date', accessor: 'dueDate' },
    {
      header: 'Status',
      accessor: 'status',
      render: (value: string) => (
        <Badge
          variant={
            value === 'paid' ? 'success' : value === 'pending' ? 'info' : 'danger'
          }
        >
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </Badge>
      ),
    },
  ];

  return (
    <ProtectedRoute>
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Invoices
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Create and manage customer invoices
            </p>
          </div>
          <Button onClick={() => setIsModalOpen(true)} size="lg">
            <Plus size={18} />
            Create Invoice
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hover className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Invoices</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3</h3>
              </div>
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900">
                <DollarSign size={24} className="text-primary-600 dark:text-primary-300" />
              </div>
            </div>
          </Card>

          <Card hover className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Paid</p>
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">$2,500</h3>
              </div>
              <Badge variant="success">1</Badge>
            </div>
          </Card>

          <Card hover className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Outstanding</p>
                <h3 className="text-2xl font-bold text-red-600 dark:text-red-400">$5,000</h3>
              </div>
              <Badge variant="danger">2</Badge>
            </div>
          </Card>
        </div>

        {/* Invoices Table */}
        <Card className="p-6">
          <Table columns={columns} data={mockInvoices} />
        </Card>

        {/* Create Invoice Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Create New Invoice"
          description="Create a new invoice for your customer"
          size="lg"
          footer={
            <div className="flex gap-3 justify-end">
              <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsModalOpen(false)}>
                Create Invoice
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            <Input type="text" label="Customer Name" placeholder="Enter customer name" />
            <Input type="email" label="Customer Email" placeholder="Enter email" />
            <Input type="number" label="Amount" placeholder="Enter amount" />
            <Input type="date" label="Due Date" />
            <Textarea label="Notes" placeholder="Add notes or terms" />
          </div>
        </Modal>
      </div>
    </ProtectedRoute>
  );
};

export default InvoicesPage;
