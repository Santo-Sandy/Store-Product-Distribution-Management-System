import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Suppliers {
  id: string;
  name: string;
  location: string;
  contact: string;
  email: string;
  capacity: string;
  currentProduction: number;
  rating: number;
  established: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  description: string;
  unitPrice: number;
  productionCapacity: number;
  currentStock: number;
  monthlyProduction: number;
}

interface Hub {
  id: string;
  name: string;
  location: string;
  distance: string;
  capacity: number;
}

interface ProductDistribution {
  id: string;
  productId: string;
  productName: string;
  hubId: string;
  hubName: string;
  quantitySent: number;
  date: string;
  status: 'pending' | 'in-transit' | 'delivered';
}

interface MonthlyProductionRecord {
  month: string;
  year: number;
  productId: string;
  productName: string;
  produced: number;
  distributed: number;
  remaining: number;
}


@Component({
  selector: 'app-supplier',
  imports: [FormsModule,CommonModule],
  templateUrl: './supplier.html',
  styleUrl: './supplier.css',
})
export class Supplier {

  supplier: Suppliers = {
    id: 'SUP-001',
    name: 'Global Electronics Supplier Ltd.',
    location: 'Shanghai, China',
    contact: '+86 21 1234 5678',
    email: 'contact@globalsupplier.com',
    capacity: '100,000 units/month',
    currentProduction: 78500,
    rating: 4.8,
    established: '2010'
  };

  products: Product[] = [
    {
      id: 'PRD-001',
      name: 'Premium Laptop',
      category: 'Electronics',
      sku: 'LAP-PRE-001',
      description: 'High-performance laptop with latest processor',
      unitPrice: 1299.99,
      productionCapacity: 5000,
      currentStock: 3450,
      monthlyProduction: 4850
    },
    {
      id: 'PRD-002',
      name: 'Wireless Mouse',
      category: 'Accessories',
      sku: 'ACC-MOU-002',
      description: 'Ergonomic wireless mouse',
      unitPrice: 29.99,
      productionCapacity: 15000,
      currentStock: 12300,
      monthlyProduction: 14200
    },
    {
      id: 'PRD-003',
      name: 'USB-C Cable',
      category: 'Accessories',
      sku: 'ACC-CAB-003',
      description: 'Fast charging USB-C cable',
      unitPrice: 15.99,
      productionCapacity: 20000,
      currentStock: 18700,
      monthlyProduction: 19500
    },
    {
      id: 'PRD-004',
      name: 'Mechanical Keyboard',
      category: 'Accessories',
      sku: 'ACC-KEY-004',
      description: 'RGB mechanical keyboard',
      unitPrice: 89.99,
      productionCapacity: 8000,
      currentStock: 6200,
      monthlyProduction: 7500
    },
    {
      id: 'PRD-005',
      name: '27" Monitor',
      category: 'Electronics',
      sku: 'MON-27-005',
      description: '4K display with HDR',
      unitPrice: 349.99,
      productionCapacity: 3000,
      currentStock: 2150,
      monthlyProduction: 2800
    },
    {
      id: 'PRD-006',
      name: 'Webcam HD',
      category: 'Electronics',
      sku: 'WEB-HD-006',
      description: '1080p webcam',
      unitPrice: 59.99,
      productionCapacity: 10000,
      currentStock: 8900,
      monthlyProduction: 9600
    }
  ];

  hubs: Hub[] = [
    {
      id: 'HUB-001',
      name: 'Asia Pacific Distribution Hub',
      location: 'Singapore',
      distance: '4,200 km',
      capacity: 500000
    },
    {
      id: 'HUB-002',
      name: 'Central Logistics Hub',
      location: 'Hong Kong',
      distance: '3,800 km',
      capacity: 400000
    },
    {
      id: 'HUB-003',
      name: 'Southeast Regional Hub',
      location: 'Bangkok, Thailand',
      distance: '3,500 km',
      capacity: 350000
    }
  ];

  distributions: ProductDistribution[] = [
    {
      id: 'DIST-001',
      productId: 'PRD-001',
      productName: 'Premium Laptop',
      hubId: 'HUB-001',
      hubName: 'Asia Pacific Distribution Hub',
      quantitySent: 1200,
      date: '2025-01-02',
      status: 'delivered'
    },
    {
      id: 'DIST-002',
      productId: 'PRD-002',
      productName: 'Wireless Mouse',
      hubId: 'HUB-001',
      hubName: 'Asia Pacific Distribution Hub',
      quantitySent: 3500,
      date: '2025-01-02',
      status: 'in-transit'
    },
    {
      id: 'DIST-003',
      productId: 'PRD-003',
      productName: 'USB-C Cable',
      hubId: 'HUB-002',
      hubName: 'Central Logistics Hub',
      quantitySent: 5000,
      date: '2025-01-01',
      status: 'delivered'
    },
    {
      id: 'DIST-004',
      productId: 'PRD-004',
      productName: 'Mechanical Keyboard',
      hubId: 'HUB-003',
      hubName: 'Southeast Regional Hub',
      quantitySent: 800,
      date: '2025-01-02',
      status: 'pending'
    }
  ];

  productionRecords: MonthlyProductionRecord[] = [
    {
      month: 'December',
      year: 2024,
      productId: 'PRD-001',
      productName: 'Premium Laptop',
      produced: 4850,
      distributed: 4200,
      remaining: 650
    },
    {
      month: 'December',
      year: 2024,
      productId: 'PRD-002',
      productName: 'Wireless Mouse',
      produced: 14200,
      distributed: 13500,
      remaining: 700
    },
    {
      month: 'December',
      year: 2024,
      productId: 'PRD-003',
      productName: 'USB-C Cable',
      produced: 19500,
      distributed: 18800,
      remaining: 700
    },
    {
      month: 'November',
      year: 2024,
      productId: 'PRD-001',
      productName: 'Premium Laptop',
      produced: 4700,
      distributed: 4500,
      remaining: 200
    },
    {
      month: 'November',
      year: 2024,
      productId: 'PRD-002',
      productName: 'Wireless Mouse',
      produced: 13800,
      distributed: 13200,
      remaining: 600
    }
  ];

  selectedProduct: Product | null = null;
  selectedView: 'products' | 'distributions' | 'production' = 'products';
  selectedMonth: string = 'December';
  selectedYear: number = 2024;

  ngOnInit(): void {}

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  closeProductModal(): void {
    this.selectedProduct = null;
  }

  getStatusClass(status: string): string {
    return {
      pending: 'status-pending',
      'in-transit': 'status-transit',
      delivered: 'status-delivered'
    }[status] || '';
  }

  getProductionPercentage(produced: number, capacity: number): number {
    return (produced / capacity) * 100;
  }

  getTotalMonthlyProduction(): number {
    return this.products.reduce((sum, p) => sum + p.monthlyProduction, 0);
  }

  getTotalCurrentStock(): number {
    return this.products.reduce((sum, p) => sum + p.currentStock, 0);
  }

  getDistributionStatus() {
    return {
      pending: this.distributions.filter(d => d.status === 'pending').length,
      transit: this.distributions.filter(d => d.status === 'in-transit').length,
      delivered: this.distributions.filter(d => d.status === 'delivered').length
    };
  }

  getHubLocation(hubId: string): string {
    return this.hubs.find(h => h.id === hubId)?.location || '';
  }

  getDistributionsByHub(hubId: string): ProductDistribution[] {
    return this.distributions.filter(d => d.hubId === hubId);
  }

  getFilteredProductionRecords(): MonthlyProductionRecord[] {
    return this.productionRecords.filter(
      r => r.month === this.selectedMonth && r.year === this.selectedYear
    );
  }

  getMonths(): string[] {
    return ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
  }

  getYears(): number[] {
    return [2024, 2023, 2022];
  }

  getProductDistributions(productId: string): ProductDistribution[] {
    return this.distributions.filter(d => d.productId === productId);
  }
}