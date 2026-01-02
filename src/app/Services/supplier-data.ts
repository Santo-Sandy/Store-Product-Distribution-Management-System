import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Supplier {
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

export interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  description: string;
  unitPrice: number;
  productionCapacity: number;
  currentStock: number;
  monthlyProduction: number;
  imageUrl?: string;
}

export interface Hub {
  id: string;
  name: string;
  location: string;
  distance: string;
  capacity: number;
}

export interface ProductDistribution {
  id: string;
  productId: string;
  productName: string;
  hubId: string;
  hubName: string;
  quantitySent: number;
  date: string;
  status: 'pending' | 'in-transit' | 'delivered';
}

export interface MonthlyProductionRecord {
  month: string;
  year: number;
  productId: string;
  productName: string;
  produced: number;
  distributed: number;
  remaining: number;
}

@Injectable({
  providedIn: 'root',
})
export class SupplierData {

  private supplierSubject = new BehaviorSubject<Supplier | null>(null);
  private productsSubject = new BehaviorSubject<Product[]>([]);
  private hubsSubject = new BehaviorSubject<Hub[]>([]);
  private distributionsSubject = new BehaviorSubject<ProductDistribution[]>([]);
  private productionRecordsSubject = new BehaviorSubject<MonthlyProductionRecord[]>([]);

  supplier$ = this.supplierSubject.asObservable();
  products$ = this.productsSubject.asObservable();
  hubs$ = this.hubsSubject.asObservable();
  distributions$ = this.distributionsSubject.asObservable();
  productionRecords$ = this.productionRecordsSubject.asObservable();

  constructor() {
    this.initializeSampleData();
  }

  private initializeSampleData(): void {
    // Sample Supplier
    const supplier: Supplier = {
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

    // Sample Products
    const products: Product[] = [
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
        description: 'Ergonomic wireless mouse with precision tracking',
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
        description: 'Fast charging USB-C cable, 2 meters',
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
        description: 'RGB mechanical keyboard with custom switches',
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
        description: '4K display with HDR support',
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
        description: '1080p webcam with built-in microphone',
        unitPrice: 59.99,
        productionCapacity: 10000,
        currentStock: 8900,
        monthlyProduction: 9600
      }
    ];

    // Sample Hubs
    const hubs: Hub[] = [
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

    // Sample Distributions
    const distributions: ProductDistribution[] = [
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
      },
      {
        id: 'DIST-005',
        productId: 'PRD-005',
        productName: '27" Monitor',
        hubId: 'HUB-001',
        hubName: 'Asia Pacific Distribution Hub',
        quantitySent: 450,
        date: '2024-12-31',
        status: 'delivered'
      }
    ];

    // Sample Monthly Production Records
    const productionRecords: MonthlyProductionRecord[] = [
      // December 2024
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
      // November 2024
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
      },
      // October 2024
      {
        month: 'October',
        year: 2024,
        productId: 'PRD-001',
        productName: 'Premium Laptop',
        produced: 4900,
        distributed: 4800,
        remaining: 100
      },
      {
        month: 'October',
        year: 2024,
        productId: 'PRD-002',
        productName: 'Wireless Mouse',
        produced: 14500,
        distributed: 14000,
        remaining: 500
      }
    ];

    this.supplierSubject.next(supplier);
    this.productsSubject.next(products);
    this.hubsSubject.next(hubs);
    this.distributionsSubject.next(distributions);
    this.productionRecordsSubject.next(productionRecords);
  }

  getProductionRecordsByProduct(productId: string): MonthlyProductionRecord[] {
    return this.productionRecordsSubject.value.filter(r => r.productId === productId);
  }

  getDistributionsByProduct(productId: string): ProductDistribution[] {
    return this.distributionsSubject.value.filter(d => d.productId === productId);
  }

  getDistributionsByHub(hubId: string): ProductDistribution[] {
    return this.distributionsSubject.value.filter(d => d.hubId === hubId);
  }

  addDistribution(distribution: ProductDistribution): void {
    const distributions = [...this.distributionsSubject.value, distribution];
    this.distributionsSubject.next(distributions);
  }
  
}
