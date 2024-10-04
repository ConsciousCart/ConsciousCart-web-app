// exportProductsData.ts

import { ProductType } from './types';
import data from './grocery_analysis_results_21Products.json';

export const productData: ProductType[] = data.products as ProductType[];
export const nutrientDensityDistribution = data.nutrient_density_distribution;