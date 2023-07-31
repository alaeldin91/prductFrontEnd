export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface ProductListResponse {
    current_page: number;
    data: Product[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  }
  