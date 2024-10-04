import AnalysisBar from "./AnalysisBar";
import invoiceSummary from "../../invoice_summary.json";
import productsToAvoidData from "../../products_to_avoid.json";
import FeedbackParas from "./FeedbackParas";
const AnalysisScreen = () => {
  return (
    <div className="text-gray-100 p-[16px]">
      <h3 className="text-lg">Monthly Nutritional Performance Breakdown</h3>
      <div className="pb-4 mt-2 overflow-x-auto">
        <AnalysisBar />
      </div>
      {invoiceSummary?.purchasing_trend_suggestions && (
        <div className="mt-[16px]">
          <h3 className="text-lg">Personalized Feedback</h3>
          <div className="mt-2 pb-4 bg-[rgb(30,30,30)] rounded py-1 px-2 flex flex-col space-y-4">
            <FeedbackParas
              paragraphs={invoiceSummary.purchasing_trend_suggestions}
            />
          </div>
        </div>
      )}
      {productsToAvoidData?.products_to_avoid && (
        <div className="mt-[16px]">
          <h3 className="text-lg">Products To Avoid</h3>
          <div className="pb-4 mt-2 bg-[rgb(30,30,30)] rounded py-1 px-2 flex flex-col space-y-4">
            <ul>
              {productsToAvoidData.products_to_avoid.map((prod) => (
                <li key={prod.product_name}>{prod.product_name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalysisScreen;
