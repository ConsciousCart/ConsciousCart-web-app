import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import groceryData from "../grocery_analysis_results_21Products.json";

type NutritionItem = {
  product_name: string;
  cost_nutrient_ratio: {
    category: string;
  };
  glycemic_index: {
    category: string;
  };
  environmental_impact: {
    carbon_footprint: {
      category: string;
    };
  };
  versatility_score: {
    category: string;
  };
};

type NestedObject = {
  [key: string]: string | number | NestedObject | undefined;
  category?: string;
};

const getCategory = (obj: NestedObject | undefined, path: string[]): string => {
  try {
    return (
      path.reduce(
        (acc, curr) => (acc as NestedObject)?.[curr] as NestedObject,
        obj
      )?.category || "--"
    );
  } catch {
    return "--";
  }
};

export default function NutritionDataTable() {
  return (
    <div className="rounded-md bg-[rgb(30,30,30)] border mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] text-gray-100">S.No</TableHead>
            <TableHead className="w-[250px] text-gray-100">
              Product Name
            </TableHead>
            <TableHead className="text-gray-100">
              Cost to Nutrient Ratio
            </TableHead>
            <TableHead className="text-gray-100">Glycemic Index</TableHead>
            <TableHead className="text-gray-100">Carbon Footprint</TableHead>
            <TableHead className="text-gray-100">Versatility Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(groceryData.products as NutritionItem[]).map((item, index) => (
            <TableRow key={index}>
              <TableCell className="text-gray-100">{index + 1}</TableCell>
              <TableCell className="font-medium text-gray-100">
                {item.product_name || "--"}
              </TableCell>
              <TableCell className="text-gray-100">
                {getCategory(item, ["cost_nutrient_ratio"])}
              </TableCell>
              <TableCell className="text-gray-100">
                {getCategory(item, ["glycemic_index"])}
              </TableCell>
              <TableCell className="text-gray-100">
                {getCategory(item, [
                  "environmental_impact",
                  "carbon_footprint",
                ])}
              </TableCell>
              <TableCell className="text-gray-100">
                {getCategory(item, ["versatility_score"])}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
