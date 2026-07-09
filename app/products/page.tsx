'use client';

import React, { useState } from 'react';
import { Card, Table, Button, Badge, Modal, Input } from '@/components';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
}

const mockProducts: Product[] = [
  { id: '1', name: 'Laptop Pro', category: 'Electronics', price: 1299, stock: 45, status: 'in-stock' },
  { id: '2', name: 'Wireless Mouse', category: 'Electronics', price: 29.99, stock: 156, status: 'in-stock' },
  { id: '3', name: 'USB-C Cable', category: 'Electronics', price: 12.99, stock: 8, status: 'low-stock' },
  { id: '4', name: 'Office Chair', category: 'Furniture', price: 299, stock: 12, status: 'in-stock' },
  { id: '5', name: 'Desk Lamp', category: 'Furniture', price: 49.99, stock: 0, status: 'out-of-stock' },
  { id: '6', name: 'T-Shirt', category: 'Clothing', price: 19.99, stock: 234, status: 'in-stock' },
];

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = mockProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { header: 'Product Name', accessor: 'name' },
    { header: 'Category', accessor: 'category' },
    {
      header: 'Price',
      accessor: 'price',
      render: (value: number) => `$${value.toFixed(2)}`,
    },
    {
      header: 'Stock',
      accessor: 'stock',
      render: (value: number) => (
        <span className="font-semibold text-gray-900 dark:text-white">{value} units</span>
      ),
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (value: string) => (
        <Badge
          variant={
            value === 'in-stock'
              ? 'success'
              : value === 'low-stock'
              ? 'warning'
              : 'danger'
          }
        >
          {value === 'in-stock' && 'In Stock'}
          {value === 'low-stock' && 'Low Stock'}
          {value === 'out-of-stock' && 'Out of Stock'}
        </Badge>
      ),
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: (value: string) => (
        <div className="flex gap-2">
          <button className="p-1 text-blue-500 hover:text-blue-600">
            <Edit size={18} />
          </button>
          <button className="p-1 text-red-500 hover:text-red-600">
            <Trash2 size={18} />
          </button>
        </div>
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
              Products
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your product inventory and catalog
            </p>
          </div>
          <Button onClick={() => setIsModalOpen(true)} size="lg">
            <Plus size={18} />
            Add Product
          </Button>
        </div>

        {/* Search Bar */}
        <Card className="p-4">
          <Input
            type="text"
            placeholder="Search products by name or category..."
            icon={<Search size={18} />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Card>

        {/* Products Table */}
        <Card className="p-6">
          <Table columns={columns} data={filteredProducts} />
        </Card>

        {/* Add Product Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Product"
          description="Add a new product to your inventory"
          size="lg"
          footer={
            <div className="flex gap-3 justify-end">
              <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsModalOpen(false)}>
                Add Product
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            <Input type="text" label="Product Name" placeholder="Enter product name" />
            <Input type="text" label="Category" placeholder="Enter category" />
            <Input type="number" label="Price" placeholder="Enter price" />
            <Input type="number" label="Stock Quantity" placeholder="Enter stock quantity" />
          </div>
        </Modal>
      </div>
    </ProtectedRoute>
  );
};

export default ProductsPage;
