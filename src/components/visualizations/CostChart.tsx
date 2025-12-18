// src/components/visualizations/CostChart.tsx

/**
 * Cost of Living Comparison Chart
 * 
 * Uses Recharts for professional, responsive data visualization
 * Shows comparative monthly expenses across countries
 */

'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface CostData {
  country: string;
  accommodation: number;
  food: number;
  transport: number;
  utilities: number;
}

interface CostChartProps {
  data: CostData[];
}

export default function CostChart({ data }: CostChartProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">
        Average Monthly Expenses (USD)
      </h3>
      
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="country" 
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis 
            label={{ value: 'USD', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            formatter={(value: number) => `$${value}`}
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
          />
          <Legend />
          
          <Bar dataKey="accommodation" stackId="a" fill="#3b82f6" name="Accommodation" />
          <Bar dataKey="food" stackId="a" fill="#10b981" name="Food" />
          <Bar dataKey="transport" stackId="a" fill="#f59e0b" name="Transport" />
          <Bar dataKey="utilities" stackId="a" fill="#8b5cf6" name="Utilities" />
        </BarChart>
      </ResponsiveContainer>

      {/* Summary Statistics */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((country) => {
          const total = 
            country.accommodation + 
            country.food + 
            country.transport + 
            country.utilities;
          
          return (
            <div key={country.country} className="text-center p-3 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">{country.country}</p>
              <p className="text-xl font-bold text-gray-900">${total}</p>
              <p className="text-xs text-gray-500">Total/month</p>
            </div>
          );
        })}
      </div>

      {/* Explanation for portfolio reviewers */}
      <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 text-sm text-gray-700">
        <p className="font-medium mb-1">📊 Data Visualization Strategy:</p>
        <p>
          Stacked bar charts effectively show how different expense categories 
          contribute to total cost. This helps students understand budget breakdowns 
          and make informed decisions about affordable destinations.
        </p>
      </div>
    </div>
  );
}

/**
 * Example usage in a page:
 * 
 * const costData: CostData[] = [
 *   { 
 *     country: 'USA', 
 *     accommodation: 1200, 
 *     food: 400, 
 *     transport: 100, 
 *     utilities: 150 
 *   },
 *   { 
 *     country: 'Germany', 
 *     accommodation: 700, 
 *     food: 300, 
 *     transport: 80, 
 *     utilities: 100 
 *   },
 *   // ... more countries
 * ];
 * 
 * <CostChart data={costData} />
 */