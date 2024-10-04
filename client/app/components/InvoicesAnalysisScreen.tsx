import React from "react";
import { TypographyH2 } from "@/components/ui/Typography/TypographyH2";
import NutrientDensityAnalysisChart from "./NutrispectrumPieChart";
import { productData } from "../exportProductsData";

import NutritionDataTable from "./NutritionDataTable";

const InvoicesAnalysisScreen: React.FC = () => {
  return (
    <div>
      <TypographyH2 className="text-white">Invoice Analysis</TypographyH2>
      <div className="mt-[20px] pb-[16px]">
        <div className="pb-[16px]">
          <NutrientDensityAnalysisChart products={productData} />
        </div>

        {/* Table */}
        <NutritionDataTable />
      </div>
    </div>
  );
};

export default InvoicesAnalysisScreen;
