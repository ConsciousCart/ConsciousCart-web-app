// types.ts

export interface ProductType {
    product_name: string;
    price_paid: number;
    num_items: number;
    estimated_quantity: {
      value: number;
      unit: string;
    };
    serving_size: string;
    energy: {
      per_serving: {
        value: number;
        unit: string;
      };
    };
    macronutrients: {
      total_fat: { per_serving: { value: number; unit: string } };
      carbohydrates: { per_serving: { value: number; unit: string } };
      protein: { per_serving: { value: number; unit: string } };
    };
    micronutrients: {
      sodium: { per_serving: { value: number; unit: string } };
      key_vitamins_minerals: Array<{ name: string; value: number; unit: string }>;
    };
    fiber: {
      total: { per_serving: { value: number; unit: string } };
      soluble: { per_serving: { value: number; unit: string } };
      insoluble: { per_serving: { value: number; unit: string } };
    };
    allergens: string[];
    nutrient_density_score: {
      value: number;
      category: string;
    };
    glycemic_index: {
      value: number;
      category: string;
    };
    glycemic_load: number;
    protein_quality: {
      score: number;
      method: string;
    };
    phytonutrients: Array<{ name: string; presence: string }>;
    micronutrient_density: {
      per_100_calories: Array<{ nutrient: string; value: number; unit: string }>;
      per_100_grams: Array<{ nutrient: string; value: number; unit: string }>;
    };
    satiety_index: {
      value: number;
      category: string;
    };
    environmental_impact: {
      water_usage: { value: number; unit: string };
      carbon_footprint: {
        value: number;
        unit: string;
        category: string;
      };
      land_use: { value: number; unit: string };
    };
    versatility_score: {
      value: number;
      category: string;
    };
    cost_nutrient_ratio: {
      value: number;
      category: string;
    };
    nutritional_summary: string;
  }