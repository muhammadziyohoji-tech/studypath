// src/components/visualizations/PopulationChart.tsx

/**
 * Population Comparison Chart
 * 
 * Displays population data using line/area charts
 * Shows population trends and comparisons between countries
 */

'use client';

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface PopulationData {
  country: string;
  population: number;
  color: string;
}

interface PopulationChartProps {
  data: PopulationData[];
  type?: 'line' | 'area' | 'bar';
}

export default function PopulationChart({ 
  data, 
  type = 'area' 
}: PopulationChartProps) {
  // Format population numbers
  const formatPopulation = (value: number) => {
    if (value >= 1_000_000_000) {
      return `${(value / 1_000_000_000).toFixed(1)}B`;
    }
    if (value >= 1_000_000) {
      return `${(value / 1_000_000).toFixed(1)}M`;
    }
    if (value >= 1_000) {
      return `${(value / 1_000).toFixed(1)}K`;
    }
    return value.toString();
  };

  // Sort data by population for better visualization
  const sortedData = [...data].sort((a, b) => b.population - a.population);

  // Prepare data for chart
  const chartData = sortedData.map((item, index) => ({
    name: item.country,
    population: item.population,
    index: index + 1,
  }));

  if (type === 'area') {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">Population Distribution</h3>
        
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              angle={-45}
              textAnchor="end"
              height={100}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              tickFormatter={formatPopulation}
              label={{ value: 'Population', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              formatter={(value: number) => formatPopulation(value)}
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
            />
            <Area
              type="monotone"
              dataKey="population"
              stroke="#3b82f6"
              fill="#93c5fd"
              fillOpacity={0.6}
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Summary Statistics */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-blue-50 rounded">
            <p className="text-sm text-gray-600">Total Population</p>
            <p className="text-xl font-bold text-blue-600">
              {formatPopulation(
                sortedData.reduce((sum, item) => sum + item.population, 0)
              )}
            </p>
          </div>
          <div className="text-center p-3 bg-green-50 rounded">
            <p className="text-sm text-gray-600">Largest</p>
            <p className="text-xl font-bold text-green-600">
              {sortedData[0]?.country}
            </p>
            <p className="text-xs text-gray-500">
              {formatPopulation(sortedData[0]?.population || 0)}
            </p>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded">
            <p className="text-sm text-gray-600">Smallest</p>
            <p className="text-xl font-bold text-purple-600">
              {sortedData[sortedData.length - 1]?.country}
            </p>
            <p className="text-xs text-gray-500">
              {formatPopulation(sortedData[sortedData.length - 1]?.population || 0)}
            </p>
          </div>
          <div className="text-center p-3 bg-orange-50 rounded">
            <p className="text-sm text-gray-600">Average</p>
            <p className="text-xl font-bold text-orange-600">
              {formatPopulation(
                sortedData.reduce((sum, item) => sum + item.population, 0) /
                  sortedData.length
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Line chart variant
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Population Comparison</h3>
      
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            angle={-45}
            textAnchor="end"
            height={100}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            tickFormatter={formatPopulation}
            label={{ value: 'Population', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            formatter={(value: number) => formatPopulation(value)}
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="population"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ fill: '#3b82f6', r: 6 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Insights */}
      <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 text-sm">
        <p className="font-medium mb-2 text-blue-900">📊 Population Insights:</p>
        <ul className="space-y-1 text-blue-800">
          <li>
            • The largest country has{' '}
            {(
              (sortedData[0]?.population || 0) /
              (sortedData[sortedData.length - 1]?.population || 1)
            ).toFixed(0)}
            x more people than the smallest
          </li>
          <li>
            • Combined population:{' '}
            {formatPopulation(
              sortedData.reduce((sum, item) => sum + item.population, 0)
            )}
          </li>
          <li>
            • Population affects education system scale, cultural diversity, and
            student community size
          </li>
        </ul>
      </div>
    </div>
  );
}

/**
 * Example usage in a page:
 * 
 * const populationData: PopulationData[] = [
 *   { country: 'USA', population: 331900000, color: '#3b82f6' },
 *   { country: 'Germany', population: 83200000, color: '#10b981' },
 *   { country: 'Canada', population: 38000000, color: '#f59e0b' },
 *   { country: 'Australia', population: 25700000, color: '#8b5cf6' },
 * ];
 * 
 * <PopulationChart data={populationData} type="area" />
 */