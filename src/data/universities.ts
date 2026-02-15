// src/data/universities.ts

export interface University {
  id: number;
  rank: number;
  name: string;
  country: string;
  flag: string;
  tuition: string;      // Display string
  tuitionVal: number;   // Number for filtering
  acceptance: string;
  majors: string[];
  sat: string;
  minSat: number;       // 0 if optional
  ielts: string;
  minIelts: number;     // Number for filtering
  gpa: string;
  minGpa: number;       // Number for filtering (4.0 scale)
  link: string;
  description: string;
  location: string;
  image: string;
}

// 1. ANIQ ISHLAYDIGAN RASMLAR TO'PLAMI (Placeholder o'rniga)
const campusImages = [
  "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
];

// 2. UNIVERSITETLAR NOMLARI (KENGAYTIRILGAN RO'YXAT)
const extraUniNames = [
  "King's College London", "University of Sydney", "Technical University of Munich", "Seoul National University", "University of British Columbia",
  "Paris Sciences et Lettres", "UCLA", "Kyoto University", "University of Washington", "New York University (NYU)",
  "Duke University", "Zhejiang University", "University of Queensland", "Monash University", "London School of Economics (LSE)",
  "University of Amsterdam", "Shanghai Jiao Tong University", "University of Bristol", "Delft University of Technology", "UNSW Sydney",
  "KAIST", "Brown University", "University of Warwick", "University of Wisconsin-Madison", "University of Texas at Austin",
  "City University of Hong Kong", "Tokyo Institute of Technology", "Sorbonne University", "University of Glasgow", "Pohang University (POSTECH)",
  "University of Southampton", "University of Leeds", "Boston University", "University of Illinois Urbana-Champaign", "University of Birmingham",
  "University of Sheffield", "Rice University", "Osaka University", "University of Copenhagen", "KTH Royal Institute of Technology",
  "Lund University", "University of Zurich", "University of St Andrews", "University of Nottingham", "University of Western Australia",
  "University of Helsinki", "University of Durham", "University of Geneva", "Yonsei University", "University of Alberta",
  "Trinity College Dublin", "Auckland University", "Humboldt University Berlin", "Heidelberg University", "KU Leuven",
  "McMaster University", "University of Oslo", "University of Basel", "University of Montreal", "Aarhus University",
  "Technical University of Denmark", "University of Groningen", "Leiden University", "Erasmus University Rotterdam", "Uppsala University",
  "Stockholm University", "Freie Universitat Berlin", "RWTH Aachen University", "University of Tubingen", "University of Freiburg",
  "Nanyang Technological University", "Sungkyunkwan University", "Korea University", "Nagoya University", "Tohoku University",
  "Kyushu University", "Hokkaido University", "National Taiwan University", "University of Malaya", "Indian Institute of Science",
  "University of Cape Town", "University of Sao Paulo", "Pontificia Universidad Catolica de Chile", "Tecnologico de Monterrey", "University of Buenos Aires"
];

export const universitiesData: University[] = [
  // --- 1 dan 30 gacha bo'lgan statik ma'lumotlar (o'zgarishsiz qoldi) ---
  { 
    id: 1, rank: 1, name: "Massachusetts Institute of Technology (MIT)", country: "United States", flag: "🇺🇸",
    tuition: "$57,980 / year", tuitionVal: 57980, acceptance: "<4%",
    majors: ["Engineering", "Computer Science", "Physics"], sat: "1500+", minSat: 1500,
    ielts: "7.5+", minIelts: 7.5, gpa: "3.9+", minGpa: 3.9,
    link: "https://mit.edu",
    description: "The world's top university for technology and engineering.", location: "Cambridge, MA",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 2, rank: 2, name: "Imperial College London", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£34,000 / year", tuitionVal: 42000, acceptance: "15%",
    majors: ["Medicine", "Science", "Engineering"], sat: "A-Levels", minSat: 0,
    ielts: "7.0", minIelts: 7.0, gpa: "3.8+", minGpa: 3.8,
    link: "https://www.imperial.ac.uk",
    description: "A world-class university focusing on science, engineering, medicine, and business.", location: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 3, rank: 3, name: "Stanford University", country: "United States", flag: "🇺🇸",
    tuition: "$62,000 / year", tuitionVal: 62000, acceptance: "4%",
    majors: ["Computer Science", "Business", "Biology"], sat: "Test Optional", minSat: 1450,
    ielts: "7.0+", minIelts: 7.0, gpa: "3.9+", minGpa: 3.9,
    link: "https://stanford.edu",
    description: "Located in Silicon Valley, known for its entrepreneurial spirit.", location: "Stanford, CA",
    image: "https://images.unsplash.com/photo-1629814484968-3e47083049b4?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 4, rank: 4, name: "University of Oxford", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£39,000 / year", tuitionVal: 48000, acceptance: "17%",
    majors: ["Humanities", "Law", "Medicine"], sat: "1480+", minSat: 1480,
    ielts: "7.5", minIelts: 7.5, gpa: "3.8+", minGpa: 3.8,
    link: "https://ox.ac.uk",
    description: "The oldest university in the English-speaking world.", location: "Oxford",
    image: "https://images.unsplash.com/photo-1559065360-15339655518f?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 5, rank: 5, name: "Harvard University", country: "United States", flag: "🇺🇸",
    tuition: "$54,000 / year", tuitionVal: 54000, acceptance: "3.5%",
    majors: ["Law", "Business", "Political Science"], sat: "Test Optional", minSat: 1500,
    ielts: "7.5", minIelts: 7.5, gpa: "4.0", minGpa: 3.95,
    link: "https://harvard.edu",
    description: "The oldest institution of higher learning in the United States.", location: "Cambridge, MA",
    image: "https://images.unsplash.com/photo-1589886326841-382a466d333a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 6, rank: 6, name: "University of Cambridge", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£35,000 / year", tuitionVal: 43000, acceptance: "21%",
    majors: ["Mathematics", "Science", "Engineering"], sat: "1500+", minSat: 1500,
    ielts: "7.5", minIelts: 7.5, gpa: "3.9+", minGpa: 3.9,
    link: "https://cam.ac.uk",
    description: "Renowned for its collegiate system and history of academic excellence.", location: "Cambridge",
    image: "https://images.unsplash.com/photo-1563273941-86a02b6df5e7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 7, rank: 7, name: "ETH Zurich", country: "Switzerland", flag: "🇨🇭",
    tuition: "CHF 1,500 / year", tuitionVal: 1600, acceptance: "Competitive",
    majors: ["Engineering", "Architecture", "Physics"], sat: "Entrance Exam", minSat: 0,
    ielts: "7.0", minIelts: 7.0, gpa: "3.5+", minGpa: 3.5,
    link: "https://ethz.ch",
    description: "A leading university for science and technology in Europe.", location: "Zurich",
    image: "https://plus.unsplash.com/premium_photo-1697729930776-80f089851680?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 8, rank: 8, name: "National University of Singapore (NUS)", country: "Singapore", flag: "🇸🇬",
    tuition: "SGD 30,000 / year", tuitionVal: 22000, acceptance: "Competitive",
    majors: ["Engineering", "Computing", "Business"], sat: "1450+", minSat: 1450,
    ielts: "6.5", minIelts: 6.5, gpa: "3.7+", minGpa: 3.7,
    link: "https://nus.edu.sg",
    description: "Singapore's flagship university, offering a global approach to education.", location: "Singapore",
    image: "https://images.unsplash.com/photo-1565611096733-85b244799018?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 9, rank: 9, name: "UCL (University College London)", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£29,000 / year", tuitionVal: 36000, acceptance: "30%",
    majors: ["Architecture", "Psychology", "Education"], sat: "1380+", minSat: 1380,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://ucl.ac.uk",
    description: "London's leading multidisciplinary university.", location: "London",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 10, rank: 10, name: "California Institute of Technology (Caltech)", country: "United States", flag: "🇺🇸",
    tuition: "$60,000 / year", tuitionVal: 60000, acceptance: "3%",
    majors: ["Physics", "Astronomy", "Chemistry"], sat: "Test Blind", minSat: 0,
    ielts: "7.0", minIelts: 7.0, gpa: "4.0", minGpa: 4.0,
    link: "https://caltech.edu",
    description: "A world-renowned science and engineering research and education institution.", location: "Pasadena, CA",
    image: "https://images.unsplash.com/photo-1590402494587-44b71d87e5b6?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 11, rank: 11, name: "University of Pennsylvania", country: "United States", flag: "🇺🇸",
    tuition: "$66,000 / year", tuitionVal: 66000, acceptance: "6%",
    majors: ["Business (Wharton)", "Nursing", "Medicine"], sat: "1500+", minSat: 1500,
    ielts: "7.0", minIelts: 7.0, gpa: "3.9+", minGpa: 3.9,
    link: "https://upenn.edu",
    description: "Home to the famous Wharton School of Business.", location: "Philadelphia, PA",
    image: "https://images.unsplash.com/photo-1551043047-1d2fd00c6603?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 12, rank: 12, name: "University of California, Berkeley", country: "United States", flag: "🇺🇸",
    tuition: "$44,000 / year", tuitionVal: 44000, acceptance: "11%",
    majors: ["Computer Science", "Engineering", "Economics"], sat: "Test Blind", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.8+", minGpa: 3.8,
    link: "https://berkeley.edu",
    description: "The top public university in the US.", location: "Berkeley, CA",
    image: "https://images.unsplash.com/photo-1605333614271-e092672721a3?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 13, rank: 13, name: "University of Melbourne", country: "Australia", flag: "🇦🇺",
    tuition: "AUD 45,000 / year", tuitionVal: 30000, acceptance: "40%",
    majors: ["Law", "Education", "Medicine"], sat: "1300+", minSat: 1300,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://unimelb.edu.au",
    description: "Australia's leading university located in the cultural capital.", location: "Melbourne",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 14, rank: 14, name: "Peking University", country: "China", flag: "🇨🇳",
    tuition: "CNY 30,000 / year", tuitionVal: 4500, acceptance: "Competitive",
    majors: ["Humanities", "Science", "Management"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.5+", minGpa: 3.5,
    link: "https://english.pku.edu.cn",
    description: "A major Chinese research university located in Beijing.", location: "Beijing",
    image: "https://images.unsplash.com/photo-1545646193-27038165158a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 15, rank: 15, name: "Tsinghua University", country: "China", flag: "🇨🇳",
    tuition: "CNY 30,000 / year", tuitionVal: 4500, acceptance: "Competitive",
    majors: ["Engineering", "Computer Science", "Architecture"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.5+", minGpa: 3.5,
    link: "https://www.tsinghua.edu.cn",
    description: "Often ranked as the best university in China for engineering.", location: "Beijing",
    image: "https://images.unsplash.com/photo-1598967990422-945763264639?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 16, rank: 16, name: "Cornell University", country: "United States", flag: "🇺🇸",
    tuition: "$65,000 / year", tuitionVal: 65000, acceptance: "7%",
    majors: ["Agriculture", "Engineering", "Hotel Management"], sat: "1450+", minSat: 1450,
    ielts: "7.5", minIelts: 7.5, gpa: "3.8+", minGpa: 3.8,
    link: "https://cornell.edu",
    description: "An Ivy League university with a wide range of top-tier programs.", location: "Ithaca, NY",
    image: "https://images.unsplash.com/photo-1627998632644-245c55a9094e?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 17, rank: 17, name: "Yale University", country: "United States", flag: "🇺🇸",
    tuition: "$64,000 / year", tuitionVal: 64000, acceptance: "5%",
    majors: ["Law", "Drama", "History"], sat: "Test Optional", minSat: 1500,
    ielts: "7.5", minIelts: 7.5, gpa: "3.9+", minGpa: 3.9,
    link: "https://yale.edu",
    description: "Famous for its law school and drama programs.", location: "New Haven, CT",
    image: "https://images.unsplash.com/photo-1579124653629-4d830b561c20?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 18, rank: 18, name: "Princeton University", country: "United States", flag: "🇺🇸",
    tuition: "$59,000 / year", tuitionVal: 59000, acceptance: "4%",
    majors: ["Mathematics", "Physics", "Humanities"], sat: "Test Optional", minSat: 1500,
    ielts: "7.0", minIelts: 7.0, gpa: "3.9+", minGpa: 3.9,
    link: "https://princeton.edu",
    description: "Known for its beautiful campus and undergraduate focus.", location: "Princeton, NJ",
    image: "https://images.unsplash.com/photo-1602148740550-03681432f4e4?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 19, rank: 19, name: "Columbia University", country: "United States", flag: "🇺🇸",
    tuition: "$68,000 / year", tuitionVal: 68000, acceptance: "3.9%",
    majors: ["Journalism", "Economics", "Law"], sat: "1500+", minSat: 1500,
    ielts: "7.5", minIelts: 7.5, gpa: "3.9+", minGpa: 3.9,
    link: "https://columbia.edu",
    description: "An Ivy League research university in Upper Manhattan.", location: "New York, NY",
    image: "https://images.unsplash.com/photo-1603565257922-d227b2159074?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 20, rank: 20, name: "University of Edinburgh", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£28,000 / year", tuitionVal: 35000, acceptance: "40%",
    majors: ["Informatics", "Medicine", "Arts"], sat: "1300+", minSat: 1300,
    ielts: "6.5", minIelts: 6.5, gpa: "3.3+", minGpa: 3.3,
    link: "https://ed.ac.uk",
    description: "Scotland's most prestigious university.", location: "Edinburgh",
    image: "https://images.unsplash.com/photo-1548325841-9467771727c6?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 21, rank: 21, name: "University of Michigan-Ann Arbor", country: "United States", flag: "🇺🇸",
    tuition: "$55,000 / year", tuitionVal: 55000, acceptance: "18%",
    majors: ["Business", "Engineering", "Sports Management"], sat: "1400+", minSat: 1400,
    ielts: "7.0", minIelts: 7.0, gpa: "3.8+", minGpa: 3.8,
    link: "https://umich.edu",
    description: "Top public research university with massive alumni network.", location: "Ann Arbor, MI",
    image: "https://images.unsplash.com/photo-1563203405-b0f3404c0587?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 22, rank: 22, name: "University of Hong Kong (HKU)", country: "Hong Kong", flag: "🇭🇰",
    tuition: "HKD 182,000 / year", tuitionVal: 23000, acceptance: "Competitive",
    majors: ["Dentistry", "Education", "Linguistics"], sat: "1350+", minSat: 1350,
    ielts: "6.5", minIelts: 6.5, gpa: "3.6+", minGpa: 3.6,
    link: "https://hku.hk",
    description: "Hong Kong's oldest tertiary institution.", location: "Hong Kong",
    image: "https://images.unsplash.com/photo-1577452815755-667746979603?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 23, rank: 23, name: "University of Tokyo", country: "Japan", flag: "🇯🇵",
    tuition: "¥535,800 / year", tuitionVal: 3500, acceptance: "Selective",
    majors: ["Physics", "Chemistry", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://u-tokyo.ac.jp",
    description: "Japan's most prestigious university.", location: "Tokyo",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 24, rank: 24, name: "Johns Hopkins University", country: "United States", flag: "🇺🇸",
    tuition: "$62,000 / year", tuitionVal: 62000, acceptance: "7%",
    majors: ["Medicine", "Public Health", "Biomedical Engineering"], sat: "1500+", minSat: 1500,
    ielts: "7.0", minIelts: 7.0, gpa: "3.9+", minGpa: 3.9,
    link: "https://jhu.edu",
    description: "America's first research university, leader in medicine.", location: "Baltimore, MD",
    image: "https://images.unsplash.com/photo-1623945239962-d2906b834316?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 25, rank: 25, name: "University of Toronto", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 60,000 / year", tuitionVal: 44000, acceptance: "43%",
    majors: ["Computer Science", "Engineering", "Commerce"], sat: "Optional", minSat: 1300,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://utoronto.ca",
    description: "Canada's top university located in a vibrant city.", location: "Toronto",
    image: "https://images.unsplash.com/photo-1557425493-6f90ae4659fc?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 26, rank: 26, name: "McGill University", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 55,000 / year", tuitionVal: 40000, acceptance: "46%",
    majors: ["Medicine", "Law", "Music"], sat: "Optional", minSat: 1300,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://mcgill.ca",
    description: "Montreal's most prestigious English-language university.", location: "Montreal",
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 27, rank: 27, name: "Australian National University (ANU)", country: "Australia", flag: "🇦🇺",
    tuition: "AUD 48,000 / year", tuitionVal: 32000, acceptance: "35%",
    majors: ["Politics", "Sociology", "Earth Science"], sat: "Optional", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://anu.edu.au",
    description: "Located in the capital, Canberra, with strong political science programs.", location: "Canberra",
    image: "https://images.unsplash.com/photo-1506459964175-6e54f9188414?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 28, rank: 28, name: "University of Manchester", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£27,000 / year", tuitionVal: 34000, acceptance: "56%",
    majors: ["Development Studies", "Nursing", "Business"], sat: "Optional", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://manchester.ac.uk",
    description: "A historic red brick university with a massive student body.", location: "Manchester",
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 29, rank: 29, name: "Northwestern University", country: "United States", flag: "🇺🇸",
    tuition: "$63,000 / year", tuitionVal: 63000, acceptance: "7%",
    majors: ["Journalism", "Communication", "Economics"], sat: "1480+", minSat: 1480,
    ielts: "7.5", minIelts: 7.5, gpa: "3.9+", minGpa: 3.9,
    link: "https://northwestern.edu",
    description: "Famous for the Medill School of Journalism.", location: "Evanston, IL",
    image: "https://images.unsplash.com/photo-1616003294382-7e9b0485925a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 30, rank: 30, name: "Fudan University", country: "China", flag: "🇨🇳",
    tuition: "CNY 30,000 / year", tuitionVal: 4500, acceptance: "Competitive",
    majors: ["Business", "International Relations", "Mathematics"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.4+", minGpa: 3.4,
    link: "https://fudan.edu.cn",
    description: "One of China's most prestigious and selective universities.", location: "Shanghai",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
  },

  // --- 31 dan 115 gacha generatsiya (Endi aniq nomlar va rasmlar bilan) ---
  ...Array.from({ length: extraUniNames.length }, (_, i) => {
    const id = i + 31;
    const rank = id;
    
    // Davlatlarni avtomatik belgilash (tahminiy)
    let country = "United States";
    let flag = "🇺🇸";
    let tuitionStr = "$50,000 / year";
    let tuitionVal = 50000;
    
    if (i % 6 === 0) { country = "United Kingdom"; flag = "🇬🇧"; tuitionStr = "£25,000 / year"; tuitionVal = 32000; }
    else if (i % 6 === 1) { country = "Australia"; flag = "🇦🇺"; tuitionStr = "AUD 40,000 / year"; tuitionVal = 27000; }
    else if (i % 6 === 2) { country = "Germany"; flag = "🇩🇪"; tuitionStr = "€3,000 / year"; tuitionVal = 3200; }
    else if (i % 6 === 3) { country = "South Korea"; flag = "🇰🇷"; tuitionStr = "₩8,000,000 / year"; tuitionVal = 6000; }
    else if (i % 6 === 4) { country = "Canada"; flag = "🇨🇦"; tuitionStr = "CAD 45,000 / year"; tuitionVal = 35000; }
    
    // Rasmni ro'yxatdan olish (aylanib yuradi)
    const selectedImage = campusImages[i % campusImages.length];

    return {
      id,
      rank,
      name: extraUniNames[i] || `University Rank #${rank}`,
      country,
      flag,
      tuition: tuitionStr,
      tuitionVal,
      acceptance: "Competitive",
      majors: ["Engineering", "Arts", "Sciences"],
      sat: "Optional",
      minSat: 1300,
      ielts: "6.5",
      minIelts: 6.5,
      gpa: "3.4+",
      minGpa: 3.4,
      link: "https://google.com/search?q=" + (extraUniNames[i] || `University Rank #${rank}`),
      description: `A top-ranked global university located in ${country}, known for excellence in research and education.`,
      location: "City Campus",
      image: selectedImage // <-- MANA SHU QATOR ENDI ISHLAYDI
    };
  })
];