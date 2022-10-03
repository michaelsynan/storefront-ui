import type { TagOrComponent } from '../../utils/types';

export type VsfLinkType = {
  label: string;
  linkTag?: TagOrComponent;
  bindings?: Record<string, unknown>;
};
export type VsfCategoriesType = {
  label: string;
  subcategories: VsfLinkType[];
};
export type VsfContactOptionsType = {
  label: string;
  details: string[];
  linkTag?: TagOrComponent;
  bindings?: Record<string, unknown>;
};
export interface VsfFooterProps {
  categories: VsfCategoriesType[];
  socialMedia: VsfLinkType[];
  companyName: string;
  contactOptions: VsfContactOptionsType[];
  bottomLinks: VsfLinkType[];
}
