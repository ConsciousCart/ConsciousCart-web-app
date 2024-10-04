import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import chartData from "../../subdivided_bar_chart.json";
import { chartTheme } from "../../chartTheme";

const customColors = {
  "Indulgence Zone": "#FF6B6B",
  "Mindful Munchies": "#4ECDC4",
  "Balanced Boosters": "#E7FC00",
  "Nutri Powerhouse": "#9B59B6"
};

const AnalysisBar = () => {
  const data = Object.entries(chartData).map(([month, categories]) => ({
    month,
    ...categories,
  }));

  return (
    <div className="h-[400px] w-[90px] min-w-full">
      <ResponsiveBar
        theme={chartTheme}
        data={data}
        keys={[
          "Indulgence Zone",
          "Mindful Munchies",
          "Balanced Boosters",
          "Nutri Powerhouse",
        ]}
        indexBy="month"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={({ id }) => customColors[id as keyof typeof customColors]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Month",
          legendPosition: "middle",
          legendOffset: 30,
          
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Count",
          legendPosition: "middle",
          legendOffset: -30,
          
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 5]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "top-right",
            direction: "column",
            justify: false,
            translateX: 110,
            translateY: 0,
            itemsSpacing: 1,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 10,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default AnalysisBar;