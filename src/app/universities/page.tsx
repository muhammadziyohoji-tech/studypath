"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Search, MapPin, Award, DollarSign, BookOpen, Check, X, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import { universitiesData } from '@/data/universities';

export default function UniversitiesPage() {
  // --- STATE ---
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUnis, setSelectedUnis] = useState<number[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  
  // Smart Match Filters
  const [filters, setFilters] = useState({
    myIelts: 0,
    myGpa: 0,
    mySat: 0,
    maxTuition: 100000,
    matchMode: false // Toggle for "Show only matches"
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // --- FILTER LOGIC ---
  const filteredUnis = useMemo(() => {
    return universitiesData.filter(uni => {
      // 1. Text Search
      const matchesSearch = 
        uni.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        uni.country.toLowerCase().includes(searchTerm.toLowerCase());

      // 2. Smart Match Logic (only if enabled)
      if (filters.matchMode) {
        const matchesIelts = filters.myIelts >= uni.minIelts;
        const matchesGpa = filters.myGpa >= uni.minGpa;
        // SAT: Match if uni doesn't require it (0) OR student score is higher
        const matchesSat = uni.minSat === 0 || filters.mySat >= uni.minSat; 
        const matchesTuition = uni.tuitionVal <= filters.maxTuition;

        return matchesSearch && matchesIelts && matchesGpa && matchesSat && matchesTuition;
      }

      return matchesSearch;
    });
  }, [searchTerm, filters]);

  // --- PAGINATION LOGIC ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUnis = filteredUnis.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUnis.length / itemsPerPage);

  // Reset to page 1 when search or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filters]);

  // Handle Input Changes
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : Number(value)
    }));
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Top Universities Ranking</h1>
          <p className="text-gray-600 text-lg">Find, compare, and match with the best universities worldwide.</p>
        </div>

        {/* --- SMART FILTER & SEARCH SECTION --- */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10 border border-blue-50">
          <div className="flex items-center gap-2 mb-6 border-b pb-4">
            <GraduationCap className="text-blue-600" size={28} />
            <h2 className="text-xl font-bold text-gray-800">Smart Student Match</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">My IELTS Score</label>
              <input 
                type="number" name="myIelts" step="0.5" max="9" placeholder="e.g. 7.0"
                onChange={handleFilterChange}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">My GPA (4.0 scale)</label>
              <input 
                type="number" name="myGpa" step="0.1" max="4.0" placeholder="e.g. 3.5"
                onChange={handleFilterChange}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">SAT Score (Optional)</label>
              <input 
                type="number" name="mySat" step="10" max="1600" placeholder="e.g. 1400"
                onChange={handleFilterChange}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Max Budget (USD)</label>
              <input 
                type="number" name="maxTuition" step="1000" defaultValue={100000}
                onChange={handleFilterChange}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
            {/* Toggle Switch */}
            <div className="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-full cursor-pointer hover:bg-blue-100 transition">
              <div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
                <input 
                  type="checkbox" name="matchMode" id="toggle" 
                  onChange={handleFilterChange}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
              </div>
              <label htmlFor="toggle" className="font-bold text-gray-700 cursor-pointer select-none">
                Show matches only
              </label>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search university or country..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <p className="mb-6 text-gray-500 font-medium">Found: <span className="text-blue-600 font-bold">{filteredUnis.length}</span> universities</p>

        {/* --- GRID LIST --- */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {currentUnis.map((uni) => (
            <div key={uni.id} className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border ${selectedUnis.includes(uni.id) ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-100'}`}>
              
              {/* Image */}
              <div className="h-40 bg-gray-200 relative">
                <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-gray-800">
                  Global Rank #{uni.rank}
                </div>
                <div className="absolute bottom-[-16px] right-4 text-4xl bg-white rounded-full p-1 shadow-sm">
                  {uni.flag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-8 flex-1 flex flex-col">
                <h3 className="font-bold text-xl leading-tight text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">{uni.name}</h3>
                
                <div className="space-y-3 text-sm text-gray-600 mb-6 flex-1">
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin size={16}/> {uni.location}, {uni.country}
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2 italic">{uni.description}</p>
                  
                  {/* Mini Stats */}
                  <div className="grid grid-cols-2 gap-2 mt-3">
                     <div className="bg-gray-50 p-2 rounded text-center">
                        <span className="text-xs text-gray-400 block">Tuition</span>
                        <span className="font-semibold text-green-700 text-xs">{uni.tuition.split(' ')[0]}</span>
                     </div>
                     <div className="bg-gray-50 p-2 rounded text-center">
                        <span className="text-xs text-gray-400 block">IELTS</span>
                        <span className="font-semibold text-blue-700 text-xs">{uni.ielts}</span>
                     </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a href={uni.link} target="_blank" rel="noreferrer" className="flex-1 py-2.5 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition flex items-center justify-center gap-2 text-sm">
                    Explore <BookOpen size={16}/>
                  </a>
                  <button 
                    onClick={() => toggleCompare(uni.id)}
                    className={`flex-1 py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2 text-sm ${
                      selectedUnis.includes(uni.id) 
                      ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
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
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-300">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Search className="text-gray-400" size={30} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">No universities found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms.</p>
            </div>
        )}

        {/* PAGINATION CONTROLS */}
        {filteredUnis.length > itemsPerPage && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-3 rounded-lg border bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition"
            >
              <ChevronLeft size={20} />
            </button>
            
            <span className="font-medium text-gray-600 bg-white px-4 py-2 rounded-lg border shadow-sm">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-3 rounded-lg border bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {/* --- COMPARISON FLOATING BAR --- */}
      {selectedUnis.length > 0 && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-4xl bg-white border border-gray-200 shadow-2xl rounded-2xl p-4 z-50 animate-slide-up flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
               <div className="flex -space-x-3">
                 {comparedData.map(uni => (
                   <div key={uni.id} className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-lg shadow-sm" title={uni.name}>
                     {uni.flag}
                   </div>
                 ))}
               </div>
               <span className="font-bold text-gray-800 text-sm sm:text-base">{selectedUnis.length} / 3 selected</span>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button onClick={() => setSelectedUnis([])} className="px-5 py-2 text-gray-600 hover:bg-gray-100 rounded-xl text-sm font-bold transition">
                Clear
              </button>
              <button onClick={() => setShowCompare(true)} className="flex-1 sm:flex-none px-6 py-2 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition">
                Compare Now
              </button>
            </div>
        </div>
      )}

      {/* --- COMPARISON MODAL --- */}
      {showCompare && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-scale-in">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><Award className="text-blue-600"/> Compare Universities</h2>
              <button onClick={() => setShowCompare(false)} className="p-2 hover:bg-gray-200 rounded-full transition"><X size={24} /></button>
            </div>
            <div className="flex-1 overflow-x-auto p-0">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr className="bg-white">
                    <th className="p-6 text-gray-400 font-medium w-1/5 border-b border-r border-gray-100 sticky left-0 bg-white z-10">Features</th>
                    {comparedData.map(uni => (
                      <th key={uni.id} className="p-6 border-b border-gray-100 w-1/4 min-w-[250px] align-top">
                        <div className="text-4xl mb-3">{uni.flag}</div>
                        <div className="font-bold text-lg text-gray-900 leading-tight mb-1">{uni.name}</div>
                        <div className="text-sm text-blue-600 font-medium">Rank #{uni.rank}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition">
                    <td className="p-6 font-bold text-gray-700 border-r border-gray-100 sticky left-0 bg-white">Tuition Fee</td>
                    {comparedData.map(uni => <td key={uni.id} className="p-6 text-green-700 font-bold">{uni.tuition}</td>)}
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="p-6 font-bold text-gray-700 border-r border-gray-100 sticky left-0 bg-white">Acceptance Rate</td>
                    {comparedData.map(uni => <td key={uni.id} className="p-6">{uni.acceptance}</td>)}
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="p-6 font-bold text-gray-700 border-r border-gray-100 sticky left-0 bg-white">IELTS Req.</td>
                    {comparedData.map(uni => <td key={uni.id} className="p-6 text-blue-700 font-medium">{uni.ielts}</td>)}
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="p-6 font-bold text-gray-700 border-r border-gray-100 sticky left-0 bg-white">GPA Req.</td>
                    {comparedData.map(uni => <td key={uni.id} className="p-6 text-gray-900">{uni.gpa}</td>)}
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="p-6 font-bold text-gray-700 border-r border-gray-100 sticky left-0 bg-white">SAT Score</td>
                    {comparedData.map(uni => <td key={uni.id} className="p-6 text-gray-600">{uni.sat}</td>)}
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="p-6 font-bold text-gray-700 border-r border-gray-100 sticky left-0 bg-white">Popular Majors</td>
                    {comparedData.map(uni => (
                      <td key={uni.id} className="p-6">
                        <div className="flex flex-wrap gap-2">
                          {uni.majors.map(m => (
                            <span key={m} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">{m}</span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* --- CSS STYLES FOR TOGGLE & ANIMATIONS --- */}
      <style jsx>{`
        .toggle-checkbox:checked {
          right: 0;
          border-color: #2563EB;
        }
        .toggle-checkbox:checked + .toggle-label {
          background-color: #2563EB;
        }
        @keyframes slide-up { from { transform: translate(-50%, 100%); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }
        .animate-slide-up { animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        @keyframes scale-in { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-scale-in { animation: scale-in 0.2s ease-out; }
      `}</style>
    </div>
  );
}