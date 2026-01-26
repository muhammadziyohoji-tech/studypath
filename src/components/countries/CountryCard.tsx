import Link from 'next/link';
import { Country } from '@/types/country';

interface CountryCardProps {
  country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <Link
      href={`/countries/${country.code}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group block"
    >
      {/* Flag Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={country.flag}
          alt={`Flag of ${country.name}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Region Badge */}
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
          {country.region}
        </div>
      </div>

      {/* Country Info */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
          {country.name}
        </h3>
        
        <div className="space-y-1 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <span className="text-gray-400">📍</span>
            <span>{country.capital}</span>
          </p>
          
          <p className="flex items-center gap-2">
            <span className="text-gray-400">👥</span>
            <span>{country.population.toLocaleString()}</span>
          </p>
          
          <p className="flex items-center gap-2">
            <span className="text-gray-400">💬</span>
            <span className="truncate">
              {country.languages.slice(0, 2).join(', ')}
              {country.languages.length > 2 && '...'}
            </span>
          </p>
        </div>

        {/* View Details Button */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-blue-600 text-sm font-medium group-hover:underline">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}