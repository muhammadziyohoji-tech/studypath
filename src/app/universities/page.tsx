"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Search, MapPin, BookOpen, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import { universitiesData } from '@/data/universities';

export default function UniversitiesPage() {
  // --- STATE ---
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUnis, setSelectedUnis] = useState<number[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  
  const [filters, setFilters] = useState({
    myIelts: 0,
    myGpa: 0,
    mySat: 0,
    maxTuition: 100000,
    matchMode: false
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // --- FILTER LOGIC ---
  const filteredUnis = useMemo(() => {
    return universitiesData.filter(uni => {
      const matchesSearch = 
        uni.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        uni.country.toLowerCase().includes(searchTerm.toLowerCase());

      if (filters.matchMode) {
        const matchesIelts = filters.myIelts >= uni.minIelts;
        const matchesGpa = filters.myGpa >= uni.minGpa;
        const matchesSat = uni.minSat === 0 || filters.mySat >= uni.minSat; 
        const matchesTuition = uni.tuitionVal <= filters.maxTuition;
        return matchesSearch && matchesIelts && matchesGpa && matchesSat && matchesTuition;
      }
      return matchesSearch;
    });
  }, [searchTerm, filters]);

  // --- PAGINATION ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUnis = filteredUnis.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUnis.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : Number(value)
    }));
  };

  const toggleCompare = (id: number) => {
    if (selectedUnis.includes(id)) {
      setSelectedUnis(selectedUnis.filter(uid => uid !== id));
    } else {
      if (selectedUnis.length < 3) {
        setSelectedUnis([...selectedUnis, id]);
      } else {
        alert("You can compare up to 3 universities at a time.");
      }
    }
  };

  const comparedData = universitiesData.filter(uni => selectedUnis.includes(uni.id));

  return (
    <div className="min-h-screen bg-gray-50 py-12 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Ko'k rangli aksentlar bilan */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Top Universities Ranking</h1>
          <p className="text-gray-600 text-lg">Find, compare, and match with the best universities worldwide.</p>
        </div>

        {/* --- SMART FILTER & SEARCH SECTION --- */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10 border border-blue-100">
          <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
            <GraduationCap className="text-blue-600" size={28} />
            <h2 className="text-xl font-bold text-gray-800">Smart Student Match</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">My IELTS Score</label>
              <input type="number" name="myIelts" step="0.5" max="9" placeholder="e.g. 7.0" onChange={handleFilterChange}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">My GPA (4.0 scale)</label>
              <input type="number" name="myGpa" step="0.1" max="4.0" placeholder="e.g. 3.5" onChange={handleFilterChange}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">SAT Score (Optional)</label>
              <input type="number" name="mySat" step="10" max="1600" placeholder="e.g. 1400" onChange={handleFilterChange}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Max Budget (USD)</label>
              <input type="number" name="maxTuition" step="1000" defaultValue={100000} onChange={handleFilterChange}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3 bg-blue-50 px-5 py-2.5 rounded-full cursor-pointer hover:bg-blue-100 transition shadow-sm">
               <input type="checkbox" name="matchMode" id="toggle" onChange={handleFilterChange} className="w-5 h-5 cursor-pointer accent-blue-600" />
               <label htmlFor="toggle" className="font-bold text-blue-800 cursor-pointer select-none">Show matches only</label>
            </div>

            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input type="text" placeholder="Search university or country..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        <p className="mb-6 text-gray-500 font-medium">Found: <span className="text-blue-600 font-bold">{filteredUnis.length}</span> universities</p>

        {/* --- GRID LIST --- */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {currentUnis.map((uni) => (
            <div key={uni.id} className={`bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border ${selectedUnis.includes(uni.id) ? 'border-blue-500 ring-4 ring-blue-50' : 'border-gray-100'}`}>
              <div className="h-44 bg-gray-200 relative group">
                <img src={uni.image} alt={uni.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur shadow-md px-3 py-1 rounded-full text-xs font-bold text-blue-700">
                  #{uni.rank} Global Rank
                </div>
                <div className="absolute bottom-[-18px] right-4 text-4xl bg-white rounded-full p-1.5 shadow-lg border-2 border-gray-50">
                  {uni.flag}
                </div>
              </div>

              <div className="p-6 pt-10 flex-1 flex flex-col">
                <h3 className="font-bold text-xl leading-tight text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">{uni.name}</h3>
                
                <div className="space-y-3 text-sm text-gray-600 mb-6 flex-1">
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin size={16} className="text-blue-500"/> {uni.location}, {uni.country}
                  </div>
                  <p className="text-xs leading-relaxed text-gray-500 line-clamp-2 italic">{uni.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mt-4">
                     <div className="bg-blue-50/50 border border-blue-100 p-2.5 rounded-xl text-center">
                        <span className="text-[10px] uppercase tracking-wider text-blue-400 block font-bold mb-1">Tuition</span>
                        <span className="font-bold text-blue-700 text-sm">{uni.tuition.split(' ')[0]}</span>
                     </div>
                     <div className="bg-indigo-50/50 border border-indigo-100 p-2.5 rounded-xl text-center">
                        <span className="text-[10px] uppercase tracking-wider text-indigo-400 block font-bold mb-1">IELTS</span>
                        <span className="font-bold text-indigo-700 text-sm">{uni.ielts}</span>
                     </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <a href={uni.link} target="_blank" rel="noreferrer" className="flex-1 py-3 rounded-xl font-bold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all flex items-center justify-center gap-2 text-sm shadow-sm">
                    Details <BookOpen size={16}/>
                  </a>
                  <button onClick={() => toggleCompare(uni.id)}
                    className={`flex-1 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm shadow-lg ${
                      selectedUnis.includes(uni.id) ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-200'
                    }`}
                  >
                    {selectedUnis.includes(uni.id) ? 'Remove' : 'Compare'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredUnis.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl shadow-inner border-2 border-dashed border-gray-200">
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Search className="text-blue-400" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No results found</h3>
              <p className="text-gray-500">We couldn't find any universities matching your criteria.</p>
            </div>
        )}

        {/* PAGINATION */}
        {filteredUnis.length > itemsPerPage && (
          <div className="flex justify-center items-center gap-6 mt-12">
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}
              className="p-4 rounded-2xl border bg-white hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed shadow-sm transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2 font-bold text-gray-700">
              <span className="text-blue-600 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100">{currentPage}</span>
              <span className="text-gray-400">/</span>
              <span>{totalPages}</span>
            </div>
            <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}
              className="p-4 rounded-2xl border bg-white hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed shadow-sm transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>

      {/* --- COMPARISON FLOATING BAR --- */}
      {selectedUnis.length > 0 && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl bg-gray-900/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] rounded-3xl p-5 z-50 flex flex-col sm:flex-row items-center justify-between gap-6 ring-1 ring-white/20">
            <div className="flex items-center gap-5">
               <div className="flex -space-x-4">
                 {comparedData.map(uni => (
                   <div key={uni.id} className="w-12 h-12 rounded-full bg-white border-4 border-gray-800 flex items-center justify-center text-2xl shadow-xl transform hover:-translate-y-2 transition-transform cursor-help" title={uni.name}>
                     {uni.flag}
                   </div>
                 ))}
               </div>
               <div>
                 <span className="block font-black text-white text-lg">{selectedUnis.length} / 3</span>
                 <span className="text-gray-400 text-xs uppercase tracking-widest font-bold">Selected</span>
               </div>
            </div>
            <div className="flex gap-4 w-full sm:w-auto">
              <button onClick={() => setSelectedUnis([])} className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-2xl text-sm font-black transition-all">
                CLEAR ALL
              </button>
              <button onClick={() => setShowCompare(true)} className="flex-1 sm:flex-none px-10 py-3 bg-blue-600 text-white rounded-2xl font-black shadow-xl shadow-blue-600/40 hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all uppercase tracking-wider text-sm">
                COMPARE NOW
              </button>
            </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up { from { transform: translate(-50%, 100%); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }
        .animate-slide-up { animation: slide-up 0.5s cubic-bezier(0.19, 1, 0.22, 1); }
      `}</style>
    </div>
  );
}