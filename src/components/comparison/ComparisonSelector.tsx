import { Country } from '@/types/country';

interface ComparisonSelectorProps {
  countries: Country[];
  selectedCode: string;
  onSelect: (code: string) => void;
  label: string;
  disabledCode?: string;
}

export default function ComparisonSelector({
  countries,
  selectedCode,
  onSelect,
  label,
  disabledCode,
}: ComparisonSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <select
        value={selectedCode}
        onChange={(e) => onSelect(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option
            key={country.code}
            value={country.code}
            disabled={country.code === disabledCode}
          >
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}