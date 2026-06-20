import type { ReactNode } from "react";

export interface Variant {
  id: string;
  label: string;
  color?: string;
  image?: string;
  qty: number;
}

export interface ProductVariant {
    src: string;
    alt: string;
    types: Record<string, string>;
  }

export interface Product {
  id: string;
  name: string;
  description: string;
  assets?: ProductVariant;
  image?: string;
  badge: string | null;
  comparePrice: number | null;
  price: number;
  priceSuffix?: string;
  learnMore: string;
  variants: Variant[] | null;
  activeVariant: string | null;
  qty?: number;
  maxQty?: number;
  isFree?: boolean;
}

export interface Step {
  id: StepId;
  stepNumber: number;
  title: string;
  icon: ReactNode;
  nextLabel: string | null;
  products: Product[];
}

export type StepId = "cameras" | "plan" | "sensors" | "protection";

export interface ReviewItem {
  key: string;
  stepId: StepId;
  productId: string;
  variantId: string | null;
  name: string;
  image: string;
  price: number;
  comparePrice: number | null;
  priceSuffix?: string;
  qty: number;
  category: string;
  maxQty?: number;
  isFree?: boolean;
}
