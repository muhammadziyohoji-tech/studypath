interface ScoreCardProps {
  title: string;
  score: number;
  color?: 'blue' | 'green' | 'purple' | 'orange';
}

export default function ScoreCard({
  title,
  score,
  color = 'blue',
}: ScoreCardProps) {
  const colors = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600',
    orange: 'bg-orange-600',
  };

  const lightColors = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
    orange: 'bg-orange-100 text-orange-800',
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Below Average';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      
      <div className="flex items-end gap-2 mb-3">
        <span className="text-5xl font-bold text-gray-900">{score}</span>
        <span className="text-2xl text-gray-500 mb-1">/100</span>
      </div>

      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${lightColors[color]}`}>
        {getScoreLabel(score)}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full bg-gray-200 rounded-full h-3">
        <div
          className={`${colors[color]} h-3 rounded-full transition-all duration-500`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

