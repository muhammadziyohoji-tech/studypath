import { ScoringFactors } from '@/types/comparison';

interface ComparisonTableProps {
  country1Name: string;
  country2Name: string;
  scores1: ScoringFactors;
  scores2: ScoringFactors;
}

export default function ComparisonTable({
  country1Name,
  country2Name,
  scores1,
  scores2,
}: ComparisonTableProps) {
  const factors = [
    { key: 'education', label: 'Education Quality', weight: '40%', icon: '🎓' },
    { key: 'cost', label: 'Affordability', weight: '30%', icon: '💰' },
    { key: 'language', label: 'Language Environment', weight: '20%', icon: '💬' },
    { key: 'visa', label: 'Visa Accessibility', weight: '10%', icon: '✈️' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
              Factor
            </th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
              Weight
            </th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">
              {country1Name}
            </th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">
              {country2Name}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {factors.map((factor) => {
            const score1 = scores1[factor.key as keyof ScoringFactors] as number;
            const score2 = scores2[factor.key as keyof ScoringFactors] as number;
            const isScore1Higher = score1 > score2;

            return (
              <tr key={factor.key} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">
                  <span className="mr-2">{factor.icon}</span>
                  {factor.label}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-600">
                  {factor.weight}
                </td>
                <td className="px-6 py-4 text-center">
                  <span
                    className={`text-lg font-bold ${
                      isScore1Higher ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    {score1}
                    {isScore1Higher && ' ✓'}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span
                    className={`text-lg font-bold ${
                      !isScore1Higher ? 'text-green-600' : 'text-gray-600'
                    }`}
                  >
                    {score2}
                    {!isScore1Higher && ' ✓'}
                  </span>
                </td>
              </tr>
            );
          })}
          {/* Total Row */}
          <tr className="bg-gray-50 font-bold">
            <td className="px-6 py-4 text-sm text-gray-900">Total Score</td>
            <td className="px-6 py-4 text-center text-sm text-gray-600">100%</td>
            <td className="px-6 py-4 text-center">
              <span className="text-xl text-blue-600">{scores1.total}</span>
            </td>
            <td className="px-6 py-4 text-center">
              <span className="text-xl text-green-600">{scores2.total}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
