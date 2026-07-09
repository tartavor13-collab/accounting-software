'use client';

import React, { useState } from 'react';
import { Card, Table, Button, Badge, Modal, Input } from '@/components';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import { Plus, Edit, Trash2, Mail } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalSpent: number;
  orders: number;
  status: 'active' | 'inactive';
}

const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    totalSpent: 5600,
    orders: 12,
    status: 'active',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543211',
    totalSpent: 3400,
    orders: 8,
    status: 'active',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    phone: '9876543212',
    totalSpent: 2100,
    orders: 5,
    status: 'inactive',
  },
  {
    id: '4',
    name: 'Alice Williams',
    email: 'alice@example.com',
    phone: '9876543213',
    totalSpent: 7800,
    orders: 15,
    status: 'active',
  },
];

const CustomersPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = mockCustomers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { header: 'Name', accessor: 'name' },
    {
      header: 'Email',
      accessor: 'email',
      render: (value: string) => (
        <a href={`mailto:${value}`} className="text-primary-500 hover:text-primary-600">
          {value}
        </a>
      ),
    },
    { header: 'Phone', accessor: 'phone' },
    {
      header: 'Total Spent',
      accessor: 'totalSpent',
      render: (value: number) => formatCurrency(value),
    },
    {
      header: 'Orders',
      accessor: 'orders',
      render: (value: number) => <span className="font-semibold">{value}</span>,
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (value: string) => (
        <Badge variant={value === 'active' ? 'success' : 'warning'}>
          {value === 'active' ? 'Active' : 'Inactive'}
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
              Customers
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage and track your customer relationships
            </p>
          </div>
          <Button onClick={() => setIsModalOpen(true)} size="lg">
            <Plus size={18} />
            Add Customer
          </Button>
        </div>

        {/* Search Bar */}
        <Card className="p-4">
          <Input
            type="text"
            placeholder="Search customers by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Card>

        {/* Customers Table */}
        <Card className="p-6">
          <Table columns={columns} data={filteredCustomers} />
        </Card>

        {/* Add Customer Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Customer"
          description="Add a new customer to your database"
          size="lg"
          footer={
            <div className="flex gap-3 justify-end">
              <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsModalOpen(false)}>
                Add Customer
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            <Input type="text" label="Full Name" placeholder="Enter customer name" />
            <Input type="email" label="Email" placeholder="Enter email address" />
            <Input type="tel" label="Phone" placeholder="Enter phone number" />
            <Input type="text" label="Address" placeholder="Enter address" />
          </div>
        </Modal>
      </div>
    </ProtectedRoute>
  );
};

export default CustomersPage;
