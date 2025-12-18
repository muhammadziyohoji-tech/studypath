interface CountryFilterProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  label?: string;
}

export default function CountryFilter({
  value,
  onChange,
  options,
  label = 'Filter',
}: CountryFilterProps) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option === 'all' ? 'All Regions' : option}
          </option>
        ))}
      </select>
    </div>
  );
}