interface WinnerCardProps {
  winnerName: string;
  winnerScore: number;
  loserScore: number;
  recommendation: string;
}

export default function WinnerCard({
  winnerName,
  winnerScore,
  loserScore,
  recommendation,
}: WinnerCardProps) {
  const difference = winnerScore - loserScore;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-8 text-white text-center">
      <div className="text-6xl mb-4">🏆</div>
      
      <h2 className="text-3xl font-bold mb-3">
        {winnerName} is the Better Choice
      </h2>
      
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="text-center">
          <div className="text-5xl font-bold">{winnerScore}</div>
          <div className="text-blue-200 text-sm">Winner Score</div>
        </div>
        
        <div className="text-4xl opacity-50">vs</div>
        
        <div className="text-center">
          <div className="text-3xl font-bold opacity-80">{loserScore}</div>
          <div className="text-blue-200 text-sm">Runner-up Score</div>
        </div>
      </div>

      <div className="bg-white/10 rounded-lg p-4 mb-4">
        <p className="text-lg">
          <span className="font-semibold">{winnerName}</span> leads by{' '}
          <span className="font-bold">{difference} points</span>
        </p>
      </div>

      <p className="text-blue-100 text-lg">
        {recommendation}
      </p>
    </div>
  );
}