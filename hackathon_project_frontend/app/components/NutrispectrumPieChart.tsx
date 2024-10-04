import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { ProductType } from "../types";
import { chartTheme } from "@/chartTheme";

type Props = {
  products: ProductType[];
};

const categorizeProducts = (
  products: ProductType[]
): Record<string, number> => {
  const categories: Record<string, number> = {
    "Indulgence zone": 0,
    "Mindful munchies": 0,
    "Balanced boosters": 0,
    "Nutrient powerhouse": 0,
  };

  products.forEach((product) => {
    const category = product.nutrient_density_score.category;
    switch (category) {
      case "Very Low":
        categories["Indulgence zone"]++;
        break;
      case "Low":
        categories["Mindful munchies"]++;
        break;
      case "Medium":
        categories["Balanced boosters"]++;
        break;
      case "High":
        categories["Nutrient powerhouse"]++;
        break;
    }
  });

  return categories;
};

type PieData = {
  id: string;
  label: string;
  value: number;
  color: string;
};

const categoryColors = {
  "Indulgence zone": "#FF6B6B",
  "Mindful munchies": "#4ECDC4",
  "Balanced boosters": "#E7FC00",
  "Nutrient powerhouse": "#9B59B6",
};

const getPieChartData = (categories: Record<string, number>): PieData[] => {
  return Object.entries(categories).map(([category, count]) => ({
    id: category,
    label: category,
    value: count,
    color: categoryColors[category as keyof typeof categoryColors],
  }));
};

const NutrientDensityAnalysisChart: React.FC<Props> = ({ products }) => {
  const categories = categorizeProducts(products);
  const pieChartData = getPieChartData(categories);

  return (
    <div className="w-full max-w-[800px] mx-auto rounded-lg shadow-md">
      <h3 className="text-xl text-gray-100 mb-4 font-semibold">
        Nutrient Density Distribution
      </h3>
      <div className="h-[450px]">
        <ResponsivePie
          theme={chartTheme}
          data={pieChartData}
          colors={{ datum: "data.color" }}
          margin={{ top: 20, right: 5, bottom: 20, left: 5 }}
          innerRadius={0.8}
          padAngle={0.5}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          legends={[
            {
              anchor: "bottom",
              direction: "column",
              justify: false,
              translateY: -120, // Increased translateY to move legend further down
              translateX: 30,
              itemsSpacing: 15, // Increased spacing between legend items
              itemWidth: 200,
              itemHeight: 30, // Increased item height for more vertical spacing
              itemTextColor: "#ffffff",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#999",
                  },
                },
              ],
              data: pieChartData.map((d) => ({
                id: d.id,
                label: `${d.label} (${d.value})`,
                color: d.color,
              })),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default NutrientDensityAnalysisChart;
