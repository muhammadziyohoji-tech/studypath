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

export const universitiesData: University[] = [
  { 
    id: 1, rank: 1, name: "Massachusetts Institute of Technology (MIT)", country: "United States", flag: "🇺🇸",
    tuition: "$57,980 / year", tuitionVal: 57980, acceptance: "4%",
    majors: ["Computer Science", "Engineering", "Mathematics"], sat: "1520+", minSat: 1520,
    ielts: "7.5+", minIelts: 7.5, gpa: "3.9+", minGpa: 3.9,
    link: "https://mit.edu",
    description: "The world's top university for technology, engineering, and artificial intelligence.", location: "Cambridge, MA",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 2, rank: 2, name: "Stanford University", country: "United States", flag: "🇺🇸",
    tuition: "$62,000 / year", tuitionVal: 62000, acceptance: "4%",
    majors: ["Computer Science", "Business", "Engineering"], sat: "1500+", minSat: 1500,
    ielts: "7.0+", minIelts: 7.0, gpa: "3.9+", minGpa: 3.9,
    link: "https://stanford.edu",
    description: "Located in Silicon Valley, known for its entrepreneurial spirit and tech innovation.", location: "Stanford, CA",
    image: "https://images.unsplash.com/photo-1629814484968-3e47083049b4?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 3, rank: 3, name: "University of Oxford", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£39,000 / year", tuitionVal: 48000, acceptance: "17%",
    majors: ["Humanities", "Law", "Medicine"], sat: "1480+", minSat: 1480,
    ielts: "7.5", minIelts: 7.5, gpa: "3.8+", minGpa: 3.8,
    link: "https://ox.ac.uk",
    description: "The oldest university in the English-speaking world with a unique collegiate system.", location: "Oxford",
    image: "https://images.unsplash.com/photo-1559065360-15339655518f?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 4, rank: 4, name: "Harvard University", country: "United States", flag: "🇺🇸",
    tuition: "$54,000 / year", tuitionVal: 54000, acceptance: "3.5%",
    majors: ["Law", "Business", "Political Science"], sat: "Test Optional", minSat: 1500,
    ielts: "7.5", minIelts: 7.5, gpa: "4.0", minGpa: 3.95,
    link: "https://harvard.edu",
    description: "The oldest and one of the most prestigious institutions of higher learning in the US.", location: "Cambridge, MA",
    image: "https://images.unsplash.com/photo-1589886326841-382a466d333a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 5, rank: 5, name: "University of Cambridge", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£35,000 / year", tuitionVal: 43000, acceptance: "21%",
    majors: ["Mathematics", "Science", "Engineering"], sat: "1500+", minSat: 1500,
    ielts: "7.5", minIelts: 7.5, gpa: "3.9+", minGpa: 3.9,
    link: "https://cam.ac.uk",
    description: "Renowned for its collegiate system, history of academic excellence, and scientific discoveries.", location: "Cambridge",
    image: "https://images.unsplash.com/photo-1563273941-86a02b6df5e7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 6, rank: 6, name: "ETH Zurich", country: "Switzerland", flag: "🇨🇭",
    tuition: "CHF 1,500 / year", tuitionVal: 1600, acceptance: "27%",
    majors: ["Computer Science", "Engineering", "Physics"], sat: "Entrance Exam", minSat: 0,
    ielts: "7.0", minIelts: 7.0, gpa: "3.5+", minGpa: 3.5,
    link: "https://ethz.ch",
    description: "A leading global university for science and technology, known for its cutting-edge research.", location: "Zurich",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 7, rank: 7, name: "Imperial College London", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£34,000 / year", tuitionVal: 42000, acceptance: "15%",
    majors: ["Medicine", "Science", "Engineering"], sat: "A-Levels", minSat: 0,
    ielts: "7.0", minIelts: 7.0, gpa: "3.8+", minGpa: 3.8,
    link: "https://www.imperial.ac.uk",
    description: "A world-class university focusing entirely on science, engineering, medicine, and business.", location: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 8, rank: 8, name: "National University of Singapore (NUS)", country: "Singapore", flag: "🇸🇬",
    tuition: "SGD 30,000 / year", tuitionVal: 22000, acceptance: "16%",
    majors: ["Engineering", "Computing", "Business"], sat: "1450+", minSat: 1450,
    ielts: "6.5", minIelts: 6.5, gpa: "3.7+", minGpa: 3.7,
    link: "https://nus.edu.sg",
    description: "Singapore's flagship university, offering a global approach to education and research.", location: "Singapore",
    image: "https://images.unsplash.com/photo-1565611096733-85b244799018?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 9, rank: 9, name: "UCL (University College London)", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£29,000 / year", tuitionVal: 36000, acceptance: "30%",
    majors: ["Architecture", "Psychology", "Computer Science"], sat: "1380+", minSat: 1380,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://ucl.ac.uk",
    description: "London's leading multidisciplinary university with a strong focus on research.", location: "London",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 10, rank: 10, name: "California Institute of Technology (Caltech)", country: "United States", flag: "🇺🇸",
    tuition: "$60,000 / year", tuitionVal: 60000, acceptance: "3%",
    majors: ["Physics", "Astronomy", "Computer Science"], sat: "Test Blind", minSat: 0,
    ielts: "7.0", minIelts: 7.0, gpa: "4.0", minGpa: 4.0,
    link: "https://caltech.edu",
    description: "A world-renowned science and engineering research and education institution.", location: "Pasadena, CA",
    image: "https://images.unsplash.com/photo-1590402494587-44b71d87e5b6?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 11, rank: 11, name: "EPFL (École Polytechnique Fédérale de Lausanne)", country: "Switzerland", flag: "🇨🇭",
    tuition: "CHF 1,500 / year", tuitionVal: 1600, acceptance: "20%",
    majors: ["Microengineering", "Computer Science", "Life Sciences"], sat: "Optional", minSat: 0,
    ielts: "7.0", minIelts: 7.0, gpa: "3.5+", minGpa: 3.5,
    link: "https://epfl.ch",
    description: "One of Europe's most famous science and technology institutions, alongside ETH Zurich.", location: "Lausanne",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 12, rank: 12, name: "Carnegie Mellon University", country: "United States", flag: "🇺🇸",
    tuition: "$62,260 / year", tuitionVal: 62260, acceptance: "11%",
    majors: ["Artificial Intelligence", "Computer Science", "Robotics"], sat: "1500+", minSat: 1500,
    ielts: "7.5", minIelts: 7.5, gpa: "3.9+", minGpa: 3.9,
    link: "https://cmu.edu",
    description: "A global leader in Computer Science, AI, and cutting-edge software engineering.", location: "Pittsburgh, PA",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 13, rank: 13, name: "University of Pennsylvania", country: "United States", flag: "🇺🇸",
    tuition: "$66,000 / year", tuitionVal: 66000, acceptance: "6%",
    majors: ["Business (Wharton)", "Nursing", "Economics"], sat: "1500+", minSat: 1500,
    ielts: "7.0", minIelts: 7.0, gpa: "3.9+", minGpa: 3.9,
    link: "https://upenn.edu",
    description: "Home to the famous Wharton School of Business and strong Ivy League academics.", location: "Philadelphia, PA",
    image: "https://images.unsplash.com/photo-1551043047-1d2fd00c6603?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 14, rank: 14, name: "University of California, Berkeley (UCB)", country: "United States", flag: "🇺🇸",
    tuition: "$44,000 / year", tuitionVal: 44000, acceptance: "11%",
    majors: ["Computer Science", "Engineering", "Data Science"], sat: "Test Blind", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.8+", minGpa: 3.8,
    link: "https://berkeley.edu",
    description: "The top public university in the US, known for intense engineering and tech programs.", location: "Berkeley, CA",
    image: "https://images.unsplash.com/photo-1605333614271-e092672721a3?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 15, rank: 15, name: "Technical University of Munich (TUM)", country: "Germany", flag: "🇩🇪",
    tuition: "€3,000 / year", tuitionVal: 3200, acceptance: "25%",
    majors: ["Mechanical Engineering", "Informatics", "Physics"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.3+", minGpa: 3.3,
    link: "https://tum.de",
    description: "Germany's top university for engineering, technology, and applied sciences.", location: "Munich",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 16, rank: 16, name: "University of Toronto", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 60,000 / year", tuitionVal: 44000, acceptance: "43%",
    majors: ["Computer Science", "Engineering", "Commerce"], sat: "Optional", minSat: 1300,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://utoronto.ca",
    description: "Canada's top university, highly recognized for its AI research and development.", location: "Toronto",
    image: "https://images.unsplash.com/photo-1557425493-6f90ae4659fc?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 17, rank: 17, name: "University of Melbourne", country: "Australia", flag: "🇦🇺",
    tuition: "AUD 45,000 / year", tuitionVal: 30000, acceptance: "40%",
    majors: ["Law", "Education", "Computer Science"], sat: "1300+", minSat: 1300,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://unimelb.edu.au",
    description: "Australia's leading university located in the cultural and tech capital.", location: "Melbourne",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 18, rank: 18, name: "Peking University", country: "China", flag: "🇨🇳",
    tuition: "CNY 30,000 / year", tuitionVal: 4500, acceptance: "10%",
    majors: ["Humanities", "Science", "Management"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.5+", minGpa: 3.5,
    link: "https://english.pku.edu.cn",
    description: "A major Chinese research university with rigorous academic standards.", location: "Beijing",
    image: "https://images.unsplash.com/photo-1545646193-27038165158a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 19, rank: 19, name: "Tsinghua University", country: "China", flag: "🇨🇳",
    tuition: "CNY 30,000 / year", tuitionVal: 4500, acceptance: "8%",
    majors: ["Engineering", "Computer Science", "Architecture"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.5+", minGpa: 3.5,
    link: "https://www.tsinghua.edu.cn",
    description: "Often ranked as the best university in Asia for engineering and computer science.", location: "Beijing",
    image: "https://images.unsplash.com/photo-1598967990422-945763264639?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 20, rank: 20, name: "Cornell University", country: "United States", flag: "🇺🇸",
    tuition: "$65,000 / year", tuitionVal: 65000, acceptance: "7%",
    majors: ["Engineering", "Computer Science", "Agriculture"], sat: "1450+", minSat: 1450,
    ielts: "7.5", minIelts: 7.5, gpa: "3.8+", minGpa: 3.8,
    link: "https://cornell.edu",
    description: "An Ivy League university with a wide range of top-tier STEM and arts programs.", location: "Ithaca, NY",
    image: "https://images.unsplash.com/photo-1627998632644-245c55a9094e?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 21, rank: 21, name: "Yale University", country: "United States", flag: "🇺🇸",
    tuition: "$64,000 / year", tuitionVal: 64000, acceptance: "5%",
    majors: ["Law", "Drama", "History"], sat: "Test Optional", minSat: 1500,
    ielts: "7.5", minIelts: 7.5, gpa: "3.9+", minGpa: 3.9,
    link: "https://yale.edu",
    description: "Famous for its law school, dramatic arts, and historic campus.", location: "New Haven, CT",
    image: "https://images.unsplash.com/photo-1579124653629-4d830b561c20?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 22, rank: 22, name: "Princeton University", country: "United States", flag: "🇺🇸",
    tuition: "$59,000 / year", tuitionVal: 59000, acceptance: "4%",
    majors: ["Mathematics", "Physics", "Computer Science"], sat: "Test Optional", minSat: 1500,
    ielts: "7.0", minIelts: 7.0, gpa: "3.9+", minGpa: 3.9,
    link: "https://princeton.edu",
    description: "Known for its beautiful campus, undergraduate focus, and pure mathematics.", location: "Princeton, NJ",
    image: "https://images.unsplash.com/photo-1602148740550-03681432f4e4?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 23, rank: 23, name: "Columbia University", country: "United States", flag: "🇺🇸",
    tuition: "$68,000 / year", tuitionVal: 68000, acceptance: "3.9%",
    majors: ["Data Science", "Economics", "Law"], sat: "1500+", minSat: 1500,
    ielts: "7.5", minIelts: 7.5, gpa: "3.9+", minGpa: 3.9,
    link: "https://columbia.edu",
    description: "An Ivy League research university in the heart of New York City.", location: "New York, NY",
    image: "https://images.unsplash.com/photo-1603565257922-d227b2159074?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 24, rank: 24, name: "University of Edinburgh", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£28,000 / year", tuitionVal: 35000, acceptance: "40%",
    majors: ["Informatics", "AI", "Arts"], sat: "1300+", minSat: 1300,
    ielts: "6.5", minIelts: 6.5, gpa: "3.3+", minGpa: 3.3,
    link: "https://ed.ac.uk",
    description: "Scotland's most prestigious university with a pioneering Informatics department.", location: "Edinburgh",
    image: "https://images.unsplash.com/photo-1548325841-9467771727c6?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 25, rank: 25, name: "University of Michigan-Ann Arbor", country: "United States", flag: "🇺🇸",
    tuition: "$55,000 / year", tuitionVal: 55000, acceptance: "18%",
    majors: ["Business", "Engineering", "Computer Science"], sat: "1400+", minSat: 1400,
    ielts: "7.0", minIelts: 7.0, gpa: "3.8+", minGpa: 3.8,
    link: "https://umich.edu",
    description: "Top public research university with a massive alumni network and tech focus.", location: "Ann Arbor, MI",
    image: "https://images.unsplash.com/photo-1563203405-b0f3404c0587?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 26, rank: 26, name: "Georgia Institute of Technology (Georgia Tech)", country: "United States", flag: "🇺🇸",
    tuition: "$33,000 / year", tuitionVal: 33000, acceptance: "16%",
    majors: ["Cybersecurity", "Computer Engineering", "Aerospace"], sat: "1450+", minSat: 1450,
    ielts: "7.0", minIelts: 7.0, gpa: "3.8+", minGpa: 3.8,
    link: "https://gatech.edu",
    description: "One of the top technological institutes in the US, known for ROI and tech startups.", location: "Atlanta, GA",
    image: "https://images.unsplash.com/photo-1574958269340-fa927503f3da?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 27, rank: 27, name: "University of Waterloo", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 50,000 / year", tuitionVal: 37000, acceptance: "53%",
    majors: ["Software Engineering", "Mathematics", "Computer Science"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.6+", minGpa: 3.6,
    link: "https://uwaterloo.ca",
    description: "Famous for its co-op programs and producing top software engineers.", location: "Waterloo, ON",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 28, rank: 28, name: "Delft University of Technology (TU Delft)", country: "Netherlands", flag: "🇳🇱",
    tuition: "€16,000 / year", tuitionVal: 18000, acceptance: "35%",
    majors: ["Aerospace Engineering", "Computer Science", "Architecture"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://tudelft.nl",
    description: "The oldest and largest Dutch public technical university.", location: "Delft",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 29, rank: 29, name: "University of Tokyo", country: "Japan", flag: "🇯🇵",
    tuition: "¥535,800 / year", tuitionVal: 3500, acceptance: "15%",
    majors: ["Physics", "Chemistry", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://u-tokyo.ac.jp",
    description: "Japan's most prestigious university with heavy focus on science and tech.", location: "Tokyo",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 30, rank: 30, name: "Johns Hopkins University", country: "United States", flag: "🇺🇸",
    tuition: "$62,000 / year", tuitionVal: 62000, acceptance: "7%",
    majors: ["Medicine", "Public Health", "Biomedical Engineering"], sat: "1500+", minSat: 1500,
    ielts: "7.0", minIelts: 7.0, gpa: "3.9+", minGpa: 3.9,
    link: "https://jhu.edu",
    description: "America's first research university, global leader in medical tech.", location: "Baltimore, MD",
    image: "https://images.unsplash.com/photo-1623945239962-d2906b834316?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 31, rank: 31, name: "Nanyang Technological University (NTU)", country: "Singapore", flag: "🇸🇬",
    tuition: "SGD 31,000 / year", tuitionVal: 23000, acceptance: "25%",
    majors: ["Materials Science", "Computer Science", "Engineering"], sat: "1400+", minSat: 1400,
    ielts: "6.5", minIelts: 6.5, gpa: "3.6+", minGpa: 3.6,
    link: "https://ntu.edu.sg",
    description: "Known for its beautiful smart campus and rapid rise in global tech rankings.", location: "Singapore",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 32, rank: 32, name: "KTH Royal Institute of Technology", country: "Sweden", flag: "🇸🇪",
    tuition: "SEK 155,000 / year", tuitionVal: 15000, acceptance: "35%",
    majors: ["Information Technology", "Energy", "Materials"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://kth.se",
    description: "Sweden's largest and most respected technical university.", location: "Stockholm",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 33, rank: 33, name: "University of Washington", country: "United States", flag: "🇺🇸",
    tuition: "$41,000 / year", tuitionVal: 41000, acceptance: "48%",
    majors: ["Computer Science", "Informatics", "Medicine"], sat: "Test Optional", minSat: 1350,
    ielts: "6.5", minIelts: 6.5, gpa: "3.7+", minGpa: 3.7,
    link: "https://washington.edu",
    description: "Located near Amazon and Microsoft, offering unmatched tech opportunities.", location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 34, rank: 34, name: "University of Amsterdam", country: "Netherlands", flag: "🇳🇱",
    tuition: "€12,000 / year", tuitionVal: 13000, acceptance: "40%",
    majors: ["Communication", "Data Science", "Psychology"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://uva.nl",
    description: "The largest university in the Netherlands with strong English-taught programs.", location: "Amsterdam",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 35, rank: 35, name: "Seoul National University (SNU)", country: "South Korea", flag: "🇰🇷",
    tuition: "KRW 6,000,000 / year", tuitionVal: 4500, acceptance: "15%",
    majors: ["Engineering", "Business", "Natural Sciences"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.6+", minGpa: 3.6,
    link: "https://snu.ac.kr",
    description: "The most prestigious university in South Korea (part of the SKY universities).", location: "Seoul",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 36, rank: 36, name: "McGill University", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 55,000 / year", tuitionVal: 40000, acceptance: "46%",
    majors: ["Medicine", "Computer Science", "Law"], sat: "Optional", minSat: 1300,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://mcgill.ca",
    description: "Montreal's most prestigious English-language university with heavy research output.", location: "Montreal",
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 37, rank: 37, name: "KU Leuven", country: "Belgium", flag: "🇧🇪",
    tuition: "€4,000 / year", tuitionVal: 4500, acceptance: "50%",
    majors: ["Microengineering", "Philosophy", "Computer Science"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://kuleuven.be",
    description: "Consistently ranked as Europe's most innovative university.", location: "Leuven",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 38, rank: 38, name: "University of Texas at Austin", country: "United States", flag: "🇺🇸",
    tuition: "$40,000 / year", tuitionVal: 40000, acceptance: "31%",
    majors: ["Computer Science", "Engineering", "Business"], sat: "1350+", minSat: 1350,
    ielts: "6.5", minIelts: 6.5, gpa: "3.7+", minGpa: 3.7,
    link: "https://utexas.edu",
    description: "A powerhouse in tech and engineering located in the booming Austin tech hub.", location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 39, rank: 39, name: "KAIST (Korea Advanced Institute of Science and Technology)", country: "South Korea", flag: "🇰🇷",
    tuition: "KRW 7,000,000 / year", tuitionVal: 5000, acceptance: "20%",
    majors: ["Robotics", "AI", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://kaist.ac.kr",
    description: "South Korea's premier tech and engineering institute.", location: "Daejeon",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 40, rank: 40, name: "University of Illinois Urbana-Champaign", country: "United States", flag: "🇺🇸",
    tuition: "$36,000 / year", tuitionVal: 36000, acceptance: "60%",
    majors: ["Computer Science", "Engineering", "Physics"], sat: "1400+", minSat: 1400,
    ielts: "7.0", minIelts: 7.0, gpa: "3.6+", minGpa: 3.6,
    link: "https://illinois.edu",
    description: "A top-tier computer science program with massive silicon valley recruitment.", location: "Urbana, IL",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 41, rank: 41, name: "Aarhus University", country: "Denmark", flag: "🇩🇰",
    tuition: "€10,000 / year", tuitionVal: 11000, acceptance: "35%",
    majors: ["IT", "Business", "Bioscience"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://au.dk",
    description: "Denmark's largest and deeply research-focused university.", location: "Aarhus",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 42, rank: 42, name: "University of British Columbia (UBC)", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 45,000 / year", tuitionVal: 33000, acceptance: "52%",
    majors: ["Environmental Science", "Computer Science", "Psychology"], sat: "Optional", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.4+", minGpa: 3.4,
    link: "https://ubc.ca",
    description: "A beautiful campus with strong focus on sustainability and tech.", location: "Vancouver",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 43, rank: 43, name: "King's College London", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£26,000 / year", tuitionVal: 32000, acceptance: "13%",
    majors: ["Nursing", "Law", "International Relations"], sat: "1350+", minSat: 1350,
    ielts: "7.0", minIelts: 7.0, gpa: "3.4+", minGpa: 3.4,
    link: "https://kcl.ac.uk",
    description: "A historic university in the heart of London with strong medical programs.", location: "London",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 44, rank: 44, name: "Lund University", country: "Sweden", flag: "🇸🇪",
    tuition: "SEK 140,000 / year", tuitionVal: 13000, acceptance: "30%",
    majors: ["Innovation", "Engineering", "Design"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://lunduniversity.lu.se",
    description: "One of northern Europe's oldest, broadest and finest universities.", location: "Lund",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 45, rank: 45, name: "University of Sydney", country: "Australia", flag: "🇦🇺",
    tuition: "AUD 48,000 / year", tuitionVal: 32000, acceptance: "30%",
    majors: ["Medicine", "Law", "Architecture"], sat: "1300+", minSat: 1300,
    ielts: "6.5", minIelts: 6.5, gpa: "3.3+", minGpa: 3.3,
    link: "https://sydney.edu.au",
    description: "Australia's first university with stunning sandstone architecture.", location: "Sydney",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 46, rank: 46, name: "Politecnico di Milano", country: "Italy", flag: "🇮🇹",
    tuition: "€3,900 / year", tuitionVal: 4000, acceptance: "35%",
    majors: ["Architecture", "Design", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://polimi.it",
    description: "Italy's top university for engineering, architecture, and design.", location: "Milan",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 47, rank: 47, name: "Purdue University", country: "United States", flag: "🇺🇸",
    tuition: "$31,000 / year", tuitionVal: 31000, acceptance: "50%",
    majors: ["Aeronautics", "Computer Science", "Engineering"], sat: "1350+", minSat: 1350,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://purdue.edu",
    description: "Known as the 'Cradle of Astronauts' and a massive STEM hub.", location: "West Lafayette, IN",
    image: "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 48, rank: 48, name: "University of Warwick", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£25,000 / year", tuitionVal: 31000, acceptance: "14%",
    majors: ["Business", "Mathematics", "Economics"], sat: "1300+", minSat: 1300,
    ielts: "6.5", minIelts: 6.5, gpa: "3.4+", minGpa: 3.4,
    link: "https://warwick.ac.uk",
    description: "Modern campus university with exceptional mathematics and business programs.", location: "Coventry",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 49, rank: 49, name: "RWTH Aachen University", country: "Germany", flag: "🇩🇪",
    tuition: "€3,000 / year", tuitionVal: 3200, acceptance: "30%",
    majors: ["Mechanical Engineering", "Automotive", "Physics"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://rwth-aachen.de",
    description: "One of Europe's leading institutions for science and research in engineering.", location: "Aachen",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 50, rank: 50, name: "New York University (NYU)", country: "United States", flag: "🇺🇸",
    tuition: "$60,000 / year", tuitionVal: 60000, acceptance: "12%",
    majors: ["Arts", "Business (Stern)", "Computer Science"], sat: "1450+", minSat: 1450,
    ielts: "7.5", minIelts: 7.5, gpa: "3.8+", minGpa: 3.8,
    link: "https://nyu.edu",
    description: "A global network university located across from Manhattan with top arts and business.", location: "New York, NY",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 51, rank: 51, name: "Duke University", country: "United States", flag: "🇺🇸",
    tuition: "$63,000 / year", tuitionVal: 63000, acceptance: "6%",
    majors: ["Computer Science", "Economics", "Public Policy"], sat: "1500+", minSat: 1500,
    ielts: "7.0", minIelts: 7.0, gpa: "3.9+", minGpa: 3.9,
    link: "https://duke.edu",
    description: "Known as the 'Ivy of the South' with exceptional research facilities.", location: "Durham, NC",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 52, rank: 52, name: "Northwestern University", country: "United States", flag: "🇺🇸",
    tuition: "$64,000 / year", tuitionVal: 64000, acceptance: "7%",
    majors: ["Journalism", "Engineering", "Materials Science"], sat: "1480+", minSat: 1480,
    ielts: "7.5", minIelts: 7.5, gpa: "3.9+", minGpa: 3.9,
    link: "https://northwestern.edu",
    description: "A prestigious private research university on the shores of Lake Michigan.", location: "Evanston, IL",
    image: "https://images.unsplash.com/photo-1616003294382-7e9b0485925a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 53, rank: 53, name: "London School of Economics (LSE)", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£26,000 / year", tuitionVal: 32000, acceptance: "9%",
    majors: ["Economics", "Politics", "Finance"], sat: "1450+", minSat: 1450,
    ielts: "7.0", minIelts: 7.0, gpa: "3.8+", minGpa: 3.8,
    link: "https://lse.ac.uk",
    description: "World-leading specialist social science university in central London.", location: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 54, rank: 54, name: "UNSW Sydney", country: "Australia", flag: "🇦🇺",
    tuition: "AUD 48,000 / year", tuitionVal: 32000, acceptance: "30%",
    majors: ["Engineering", "Business", "Law"], sat: "1300+", minSat: 1300,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://unsw.edu.au",
    description: "A powerhouse in engineering and technology, located in Sydney.", location: "Sydney",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 55, rank: 55, name: "Brown University", country: "United States", flag: "🇺🇸",
    tuition: "$65,000 / year", tuitionVal: 65000, acceptance: "5%",
    majors: ["Computer Science", "Biology", "Applied Mathematics"], sat: "1500+", minSat: 1500,
    ielts: "8.0", minIelts: 8.0, gpa: "3.9+", minGpa: 3.9,
    link: "https://brown.edu",
    description: "Ivy League university famous for its Open Curriculum allowing student flexibility.", location: "Providence, RI",
    image: "https://images.unsplash.com/photo-1579124653629-4d830b561c20?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 56, rank: 56, name: "LMU Munich (Ludwig Maximilian University)", country: "Germany", flag: "🇩🇪",
    tuition: "€3,000 / year", tuitionVal: 3200, acceptance: "20%",
    majors: ["Physics", "Philosophy", "Medicine"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://lmu.de",
    description: "One of Germany's oldest and most prestigious research universities.", location: "Munich",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 57, rank: 57, name: "University of Bristol", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£25,000 / year", tuitionVal: 31000, acceptance: "67%",
    majors: ["Engineering", "Law", "Computer Science"], sat: "1350+", minSat: 1350,
    ielts: "6.5", minIelts: 6.5, gpa: "3.4+", minGpa: 3.4,
    link: "https://bristol.ac.uk",
    description: "A top-tier Russell Group university known for innovation and tech startups.", location: "Bristol",
    image: "https://images.unsplash.com/photo-1548325841-9467771727c6?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 58, rank: 58, name: "Sorbonne University", country: "France", flag: "🇫🇷",
    tuition: "€4,000 / year", tuitionVal: 4500, acceptance: "20%",
    majors: ["Mathematics", "Physics", "Humanities"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://sorbonne-universite.fr",
    description: "A world-class multidisciplinary research university in the heart of Paris.", location: "Paris",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 59, rank: 59, name: "Hong Kong University of Science and Technology (HKUST)", country: "Hong Kong", flag: "🇭🇰",
    tuition: "HKD 140,000 / year", tuitionVal: 18000, acceptance: "25%",
    majors: ["Engineering", "Business", "Science"], sat: "1350+", minSat: 1350,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://hkust.edu.hk",
    description: "A dynamic, international research university with a stunning coastal campus.", location: "Hong Kong",
    image: "https://images.unsplash.com/photo-1577452815755-667746979603?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 60, rank: 60, name: "Monash University", country: "Australia", flag: "🇦🇺",
    tuition: "AUD 45,000 / year", tuitionVal: 30000, acceptance: "40%",
    majors: ["Pharmacy", "Engineering", "Business"], sat: "1250+", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://monash.edu",
    description: "Australia's largest university with a strong international presence.", location: "Melbourne",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 61, rank: 61, name: "University of Wisconsin-Madison", country: "United States", flag: "🇺🇸",
    tuition: "$40,000 / year", tuitionVal: 40000, acceptance: "49%",
    majors: ["Computer Science", "Engineering", "Economics"], sat: "1350+", minSat: 1350,
    ielts: "6.5", minIelts: 6.5, gpa: "3.8+", minGpa: 3.8,
    link: "https://wisc.edu",
    description: "A massive public research institution known for strong STEM and campus life.", location: "Madison, WI",
    image: "https://images.unsplash.com/photo-1563203405-b0f3404c0587?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 62, rank: 62, name: "Tokyo Institute of Technology (Tokyo Tech)", country: "Japan", flag: "🇯🇵",
    tuition: "¥535,800 / year", tuitionVal: 3500, acceptance: "10%",
    majors: ["Computer Science", "Engineering", "Physics"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://titech.ac.jp",
    description: "Japan's top national university dedicated strictly to science and technology.", location: "Tokyo",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 63, rank: 63, name: "McMaster University", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 45,000 / year", tuitionVal: 33000, acceptance: "58%",
    majors: ["Health Sciences", "Engineering", "Computer Science"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://mcmaster.ca",
    description: "Highly ranked Canadian university with a pioneering medical program.", location: "Hamilton, ON",
    image: "https://images.unsplash.com/photo-1557425493-6f90ae4659fc?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 64, rank: 64, name: "University of Queensland", country: "Australia", flag: "🇦🇺",
    tuition: "AUD 46,000 / year", tuitionVal: 31000, acceptance: "40%",
    majors: ["Environmental Science", "Engineering", "Biotechnology"], sat: "1250+", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://uq.edu.au",
    description: "A leading research and teaching institution in beautiful Brisbane.", location: "Brisbane",
    image: "https://images.unsplash.com/photo-1506459964175-6e54f9188414?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 65, rank: 65, name: "Kyoto University", country: "Japan", flag: "🇯🇵",
    tuition: "¥535,800 / year", tuitionVal: 3500, acceptance: "12%",
    majors: ["Chemistry", "Physics", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://kyoto-u.ac.jp",
    description: "The second oldest Japanese university, boasting numerous Nobel laureates.", location: "Kyoto",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 66, rank: 66, name: "Washington University in St. Louis", country: "United States", flag: "🇺🇸",
    tuition: "$60,000 / year", tuitionVal: 60000, acceptance: "12%",
    majors: ["Medicine", "Business", "Engineering"], sat: "1480+", minSat: 1480,
    ielts: "7.0", minIelts: 7.0, gpa: "3.9+", minGpa: 3.9,
    link: "https://wustl.edu",
    description: "A top-tier private research university with strong pre-med and business tracks.", location: "St. Louis, MO",
    image: "https://images.unsplash.com/photo-1623945239962-d2906b834316?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 67, rank: 67, name: "University of Glasgow", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£24,000 / year", tuitionVal: 30000, acceptance: "50%",
    majors: ["Veterinary Medicine", "Law", "Computer Science"], sat: "1250+", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.4+", minGpa: 3.4,
    link: "https://gla.ac.uk",
    description: "One of Scotland's ancient universities with a breathtaking Hogwarts-like campus.", location: "Glasgow",
    image: "https://images.unsplash.com/photo-1548325841-9467771727c6?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 68, rank: 68, name: "University of Copenhagen", country: "Denmark", flag: "🇩🇰",
    tuition: "€12,000 / year", tuitionVal: 13000, acceptance: "30%",
    majors: ["Life Sciences", "Physics", "Computer Science"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://ku.dk",
    description: "The largest research and education institution in Denmark.", location: "Copenhagen",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 69, rank: 69, name: "Zhejiang University", country: "China", flag: "🇨🇳",
    tuition: "CNY 30,000 / year", tuitionVal: 4500, acceptance: "15%",
    majors: ["Engineering", "Computer Science", "Agriculture"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.4+", minGpa: 3.4,
    link: "https://zju.edu.cn",
    description: "One of China's oldest, most selective, and consistently highly ranked universities.", location: "Hangzhou",
    image: "https://images.unsplash.com/photo-1545646193-27038165158a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 70, rank: 70, name: "University of Zurich", country: "Switzerland", flag: "🇨🇭",
    tuition: "CHF 1,500 / year", tuitionVal: 1600, acceptance: "25%",
    majors: ["Medicine", "Finance", "Neuroscience"], sat: "Optional", minSat: 0,
    ielts: "7.0", minIelts: 7.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://uzh.ch",
    description: "The largest university in Switzerland, highly regarded for medical and financial studies.", location: "Zurich",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 71, rank: 71, name: "Boston University", country: "United States", flag: "🇺🇸",
    tuition: "$62,000 / year", tuitionVal: 62000, acceptance: "14%",
    majors: ["Business", "Communications", "Engineering"], sat: "1400+", minSat: 1400,
    ielts: "7.0", minIelts: 7.0, gpa: "3.7+", minGpa: 3.7,
    link: "https://bu.edu",
    description: "A prominent urban research university tightly integrated into the city of Boston.", location: "Boston, MA",
    image: "https://images.unsplash.com/photo-1589886326841-382a466d333a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 72, rank: 72, name: "University of Southampton", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£23,000 / year", tuitionVal: 29000, acceptance: "80%",
    majors: ["Engineering", "Computer Science", "Oceanography"], sat: "1250+", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://southampton.ac.uk",
    description: "A founding member of the Russell Group with excellent engineering and tech facilities.", location: "Southampton",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 73, rank: 73, name: "University of Alberta", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 30,000 / year", tuitionVal: 22000, acceptance: "58%",
    majors: ["AI", "Engineering", "Geology"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://ualberta.ca",
    description: "A major research powerhouse in Canada, especially recognized for Artificial Intelligence.", location: "Edmonton, AB",
    image: "https://images.unsplash.com/photo-1557425493-6f90ae4659fc?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 74, rank: 74, name: "Yonsei University", country: "South Korea", flag: "🇰🇷",
    tuition: "KRW 7,000,000 / year", tuitionVal: 5000, acceptance: "18%",
    majors: ["Business", "Medical Sciences", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://yonsei.ac.kr",
    description: "One of the prestigious SKY universities with a beautiful modern campus.", location: "Seoul",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 75, rank: 75, name: "University of Leeds", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£25,000 / year", tuitionVal: 31000, acceptance: "60%",
    majors: ["Business", "Engineering", "Arts"], sat: "1250+", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.3+", minGpa: 3.3,
    link: "https://leeds.ac.uk",
    description: "One of the UK's largest single-campus universities with a massive global community.", location: "Leeds",
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 76, rank: 76, name: "University of Birmingham", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£24,000 / year", tuitionVal: 30000, acceptance: "70%",
    majors: ["Physics", "Computer Science", "Business"], sat: "1250+", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.3+", minGpa: 3.3,
    link: "https://birmingham.ac.uk",
    description: "A beautiful redbrick university known for its research output and student experience.", location: "Birmingham",
    image: "https://images.unsplash.com/photo-1563273941-86a02b6df5e7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 77, rank: 77, name: "Korea University", country: "South Korea", flag: "🇰🇷",
    tuition: "KRW 7,500,000 / year", tuitionVal: 5500, acceptance: "16%",
    majors: ["Law", "Business", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://korea.ac.kr",
    description: "A top-tier SKY university known for its gothic architecture and strong alumni network.", location: "Seoul",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 78, rank: 78, name: "University of Sheffield", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£24,000 / year", tuitionVal: 30000, acceptance: "75%",
    majors: ["Engineering", "Architecture", "Computer Science"], sat: "1200+", minSat: 1200,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://sheffield.ac.uk",
    description: "A world-top-100 university renowned for excellence, particularly in engineering.", location: "Sheffield",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 79, rank: 79, name: "Uppsala University", country: "Sweden", flag: "🇸🇪",
    tuition: "SEK 120,000 / year", tuitionVal: 11000, acceptance: "40%",
    majors: ["Life Sciences", "Physics", "Humanities"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://uu.se",
    description: "The oldest university in Sweden and all of the Nordic countries.", location: "Uppsala",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 80, rank: 80, name: "University of Western Australia (UWA)", country: "Australia", flag: "🇦🇺",
    tuition: "AUD 42,000 / year", tuitionVal: 28000, acceptance: "35%",
    majors: ["Marine Science", "Engineering", "Medicine"], sat: "1250+", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://uwa.edu.au",
    description: "A Group of Eight university with a beautiful campus overlooking the Swan River.", location: "Perth",
    image: "https://images.unsplash.com/photo-1506459964175-6e54f9188414?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 81, rank: 81, name: "Rice University", country: "United States", flag: "🇺🇸",
    tuition: "$54,000 / year", tuitionVal: 54000, acceptance: "9%",
    majors: ["Engineering", "Computer Science", "Architecture"], sat: "1480+", minSat: 1480,
    ielts: "7.0", minIelts: 7.0, gpa: "3.9+", minGpa: 3.9,
    link: "https://rice.edu",
    description: "Often called the 'Harvard of the South', boasting an incredible student-to-faculty ratio.", location: "Houston, TX",
    image: "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 82, rank: 82, name: "University of Oslo", country: "Norway", flag: "🇳🇴",
    tuition: "Free (EU) / NOK 130,000", tuitionVal: 12000, acceptance: "30%",
    majors: ["Law", "Medicine", "Mathematics"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://uio.no",
    description: "Norway's oldest and highest-ranked institution of higher education.", location: "Oslo",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 83, rank: 83, name: "University of Helsinki", country: "Finland", flag: "🇫🇮",
    tuition: "€13,000 / year", tuitionVal: 14000, acceptance: "20%",
    majors: ["Computer Science", "Education", "Environmental Science"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://helsinki.fi",
    description: "Finland's largest and oldest academic institution with a strong emphasis on research.", location: "Helsinki",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 84, rank: 84, name: "University of Basel", country: "Switzerland", flag: "🇨🇭",
    tuition: "CHF 1,700 / year", tuitionVal: 1800, acceptance: "30%",
    majors: ["Life Sciences", "Medicine", "Chemistry"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://unibas.ch",
    description: "The oldest university in Switzerland, with a strong focus on life sciences and culture.", location: "Basel",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 85, rank: 85, name: "Trinity College Dublin", country: "Ireland", flag: "🇮🇪",
    tuition: "€20,000 / year", tuitionVal: 22000, acceptance: "33%",
    majors: ["Literature", "Computer Science", "Business"], sat: "1300+", minSat: 1300,
    ielts: "6.5", minIelts: 6.5, gpa: "3.3+", minGpa: 3.3,
    link: "https://tcd.ie",
    description: "Ireland's premier university with an iconic library and rich literary history.", location: "Dublin",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 86, rank: 86, name: "University of St Andrews", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£26,000 / year", tuitionVal: 32000, acceptance: "40%",
    majors: ["International Relations", "Physics", "History"], sat: "1350+", minSat: 1350,
    ielts: "7.0", minIelts: 7.0, gpa: "3.5+", minGpa: 3.5,
    link: "https://st-andrews.ac.uk",
    description: "Scotland's oldest university, famously known as the meeting place of Prince William and Kate.", location: "St Andrews",
    image: "https://images.unsplash.com/photo-1559065360-15339655518f?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 87, rank: 87, name: "Pohang University of Science and Technology (POSTECH)", country: "South Korea", flag: "🇰🇷",
    tuition: "KRW 6,000,000 / year", tuitionVal: 4500, acceptance: "20%",
    majors: ["Engineering", "Materials Science", "Physics"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.5+", minGpa: 3.5,
    link: "https://postech.ac.kr",
    description: "A private research university dedicated solely to science and engineering.", location: "Pohang",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 88, rank: 88, name: "Auckland University", country: "New Zealand", flag: "🇳🇿",
    tuition: "NZD 38,000 / year", tuitionVal: 24000, acceptance: "45%",
    majors: ["Engineering", "Business", "Medicine"], sat: "1200+", minSat: 1200,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://auckland.ac.nz",
    description: "New Zealand's leading university and the highest ranked in the country.", location: "Auckland",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 89, rank: 89, name: "Humboldt University of Berlin", country: "Germany", flag: "🇩🇪",
    tuition: "€3,000 / year", tuitionVal: 3200, acceptance: "18%",
    majors: ["Philosophy", "Physics", "Life Sciences"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://hu-berlin.de",
    description: "The 'Mother of all modern universities', where Albert Einstein once taught.", location: "Berlin",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 90, rank: 90, name: "Erasmus University Rotterdam", country: "Netherlands", flag: "🇳🇱",
    tuition: "€11,000 / year", tuitionVal: 12000, acceptance: "45%",
    majors: ["Business", "Economics", "Management"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://eur.nl",
    description: "World-renowned for its business school (RSM) and economics programs.", location: "Rotterdam",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 91, rank: 91, name: "University of Groningen", country: "Netherlands", flag: "🇳🇱",
    tuition: "€10,000 / year", tuitionVal: 11000, acceptance: "50%",
    majors: ["Artificial Intelligence", "Ecology", "Astronomy"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://rug.nl",
    description: "One of the oldest and most prestigious universities in the Netherlands with vast English programs.", location: "Groningen",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 92, rank: 92, name: "Tohoku University", country: "Japan", flag: "🇯🇵",
    tuition: "¥535,800 / year", tuitionVal: 3500, acceptance: "15%",
    majors: ["Materials Science", "Physics", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.2+", minGpa: 3.2,
    link: "https://tohoku.ac.jp",
    description: "A top Japanese National University, famous for its 'Open Doors' policy.", location: "Sendai",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 93, rank: 93, name: "Heidelberg University", country: "Germany", flag: "🇩🇪",
    tuition: "€3,000 / year", tuitionVal: 3200, acceptance: "16%",
    majors: ["Medicine", "Physics", "Life Sciences"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://uni-heidelberg.de",
    description: "Germany's oldest university and one of Europe's strongest research institutions.", location: "Heidelberg",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 94, rank: 94, name: "Leiden University", country: "Netherlands", flag: "🇳🇱",
    tuition: "€12,000 / year", tuitionVal: 13000, acceptance: "45%",
    majors: ["Law", "International Relations", "Humanities"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://universiteitleiden.nl",
    description: "The oldest university in the Netherlands, highly regarded in law and politics.", location: "Leiden",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 95, rank: 95, name: "University of Montreal", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 25,000 / year", tuitionVal: 18000, acceptance: "50%",
    majors: ["Computer Science (MILA)", "Medicine", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://umontreal.ca",
    description: "A leading Francophone research university, home to the MILA AI institute.", location: "Montreal, QC",
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 96, rank: 96, name: "University of Geneva", country: "Switzerland", flag: "🇨🇭",
    tuition: "CHF 1,000 / year", tuitionVal: 1100, acceptance: "25%",
    majors: ["International Relations", "Physics", "Law"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://unige.ch",
    description: "Located in the heart of international diplomacy, excellent for IR and physics.", location: "Geneva",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 97, rank: 97, name: "Stockholm University", country: "Sweden", flag: "🇸🇪",
    tuition: "SEK 100,000 / year", tuitionVal: 9500, acceptance: "35%",
    majors: ["Environmental Science", "Sociology", "Law"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://su.se",
    description: "A modern university situated in a national city park, strong in sustainability.", location: "Stockholm",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 98, rank: 98, name: "National Taiwan University (NTU)", country: "Taiwan", flag: "🇹🇼",
    tuition: "TWD 120,000 / year", tuitionVal: 3800, acceptance: "15%",
    majors: ["Electrical Engineering", "Computer Science", "Medicine"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.5+", minGpa: 3.5,
    link: "https://ntu.edu.tw",
    description: "Taiwan's most prestigious comprehensive university.", location: "Taipei",
    image: "https://images.unsplash.com/photo-1545646193-27038165158a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 99, rank: 99, name: "University of Nottingham", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£22,000 / year", tuitionVal: 28000, acceptance: "75%",
    majors: ["Pharmacy", "Engineering", "Law"], sat: "1250+", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://nottingham.ac.uk",
    description: "A truly global university with campuses in the UK, China, and Malaysia.", location: "Nottingham",
    image: "https://images.unsplash.com/photo-1563273941-86a02b6df5e7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 100, rank: 100, name: "Technical University of Denmark (DTU)", country: "Denmark", flag: "🇩🇰",
    tuition: "€15,000 / year", tuitionVal: 16000, acceptance: "35%",
    majors: ["Wind Energy", "Biotechnology", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://dtu.dk",
    description: "One of Europe's top engineering institutions, focused on green tech and sustainability.", location: "Lyngby",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 101, rank: 101, name: "University of Southern California (USC)", country: "United States", flag: "🇺🇸",
    tuition: "$66,000 / year", tuitionVal: 66000, acceptance: "12%",
    majors: ["Cinematic Arts", "Business", "Engineering"], sat: "1450+", minSat: 1450,
    ielts: "7.0", minIelts: 7.0, gpa: "3.8+", minGpa: 3.8,
    link: "https://usc.edu",
    description: "A top private research university in Los Angeles, famous for film, business, and tech.", location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 102, rank: 102, name: "University of California, San Diego (UCSD)", country: "United States", flag: "🇺🇸",
    tuition: "$46,000 / year", tuitionVal: 46000, acceptance: "24%",
    majors: ["Biology", "Computer Science", "Cognitive Science"], sat: "Test Blind", minSat: 0,
    ielts: "7.0", minIelts: 7.0, gpa: "3.8+", minGpa: 3.8,
    link: "https://ucsd.edu",
    description: "A powerhouse in STEM, oceanography, and biological sciences.", location: "San Diego, CA",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 103, rank: 103, name: "University of California, Davis (UC Davis)", country: "United States", flag: "🇺🇸",
    tuition: "$44,000 / year", tuitionVal: 44000, acceptance: "37%",
    majors: ["Veterinary Medicine", "Agriculture", "Environmental Science"], sat: "Test Blind", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.6+", minGpa: 3.6,
    link: "https://ucdavis.edu",
    description: "World-renowned for veterinary medicine and agricultural sciences.", location: "Davis, CA",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 104, rank: 104, name: "University of California, Irvine (UCI)", country: "United States", flag: "🇺🇸",
    tuition: "$44,000 / year", tuitionVal: 44000, acceptance: "21%",
    majors: ["Criminology", "Computer Science", "Public Health"], sat: "Test Blind", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.7+", minGpa: 3.7,
    link: "https://uci.edu",
    description: "A major research university situated in the tech-heavy region of Orange County.", location: "Irvine, CA",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 105, rank: 105, name: "University of California, Santa Barbara (UCSB)", country: "United States", flag: "🇺🇸",
    tuition: "$44,000 / year", tuitionVal: 44000, acceptance: "26%",
    majors: ["Physics", "Materials Science", "Environmental Studies"], sat: "Test Blind", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.7+", minGpa: 3.7,
    link: "https://ucsb.edu",
    description: "Known for its stunning coastal campus and top-tier physics and engineering programs.", location: "Santa Barbara, CA",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 106, rank: 106, name: "University of North Carolina at Chapel Hill", country: "United States", flag: "🇺🇸",
    tuition: "$39,000 / year", tuitionVal: 39000, acceptance: "17%",
    majors: ["Public Health", "Business", "Journalism"], sat: "1350+", minSat: 1350,
    ielts: "7.0", minIelts: 7.0, gpa: "3.8+", minGpa: 3.8,
    link: "https://unc.edu",
    description: "One of the oldest public universities in the US, part of the prestigious Research Triangle.", location: "Chapel Hill, NC",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 107, rank: 107, name: "University of Virginia (UVA)", country: "United States", flag: "🇺🇸",
    tuition: "$56,000 / year", tuitionVal: 56000, acceptance: "19%",
    majors: ["Business (McIntire)", "Law", "Architecture"], sat: "1400+", minSat: 1400,
    ielts: "7.0", minIelts: 7.0, gpa: "3.8+", minGpa: 3.8,
    link: "https://virginia.edu",
    description: "A historic university founded by Thomas Jefferson, known for its beautiful campus.", location: "Charlottesville, VA",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 108, rank: 108, name: "University of Florida", country: "United States", flag: "🇺🇸",
    tuition: "$28,000 / year", tuitionVal: 28000, acceptance: "23%",
    majors: ["Engineering", "Business", "Agricultural Sciences"], sat: "1350+", minSat: 1350,
    ielts: "6.5", minIelts: 6.5, gpa: "3.8+", minGpa: 3.8,
    link: "https://ufl.edu",
    description: "A massive, highly-ranked public research university with excellent ROI.", location: "Gainesville, FL",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 109, rank: 109, name: "Texas A&M University", country: "United States", flag: "🇺🇸",
    tuition: "$40,000 / year", tuitionVal: 40000, acceptance: "58%",
    majors: ["Engineering", "Agriculture", "Business"], sat: "1250+", minSat: 1250,
    ielts: "6.0", minIelts: 6.0, gpa: "3.5+", minGpa: 3.5,
    link: "https://tamu.edu",
    description: "One of the largest universities in the US, known for engineering and strong alumni network.", location: "College Station, TX",
    image: "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 110, rank: 110, name: "Penn State University", country: "United States", flag: "🇺🇸",
    tuition: "$39,000 / year", tuitionVal: 39000, acceptance: "55%",
    majors: ["Engineering", "Business", "Information Sciences"], sat: "1250+", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://psu.edu",
    description: "A major research university with a huge global alumni network.", location: "State College, PA",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 111, rank: 111, name: "Ohio State University", country: "United States", flag: "🇺🇸",
    tuition: "$38,000 / year", tuitionVal: 38000, acceptance: "53%",
    majors: ["Business", "Engineering", "Psychology"], sat: "1300+", minSat: 1300,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://osu.edu",
    description: "A massive public university with highly ranked specialized programs and sports.", location: "Columbus, OH",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 112, rank: 112, name: "University of Maryland, College Park", country: "United States", flag: "🇺🇸",
    tuition: "$40,000 / year", tuitionVal: 40000, acceptance: "44%",
    majors: ["Computer Science", "Engineering", "Business"], sat: "1350+", minSat: 1350,
    ielts: "7.0", minIelts: 7.0, gpa: "3.7+", minGpa: 3.7,
    link: "https://umd.edu",
    description: "Located near Washington D.C., offering unparalleled government and tech opportunities.", location: "College Park, MD",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 113, rank: 113, name: "Rutgers University", country: "United States", flag: "🇺🇸",
    tuition: "$34,000 / year", tuitionVal: 34000, acceptance: "66%",
    majors: ["Pharmacy", "Business", "Computer Science"], sat: "1300+", minSat: 1300,
    ielts: "6.5", minIelts: 6.5, gpa: "3.4+", minGpa: 3.4,
    link: "https://rutgers.edu",
    description: "The state university of New Jersey, situated close to the NYC metropolitan area.", location: "New Brunswick, NJ",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 114, rank: 114, name: "University of Colorado Boulder", country: "United States", flag: "🇺🇸",
    tuition: "$42,000 / year", tuitionVal: 42000, acceptance: "80%",
    majors: ["Aerospace Engineering", "Environmental Science", "Physics"], sat: "1250+", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.4+", minGpa: 3.4,
    link: "https://colorado.edu",
    description: "Nestled in the Rocky Mountains, highly respected for aerospace and earth sciences.", location: "Boulder, CO",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 115, rank: 115, name: "University of Adelaide", country: "Australia", flag: "🇦🇺",
    tuition: "AUD 44,000 / year", tuitionVal: 29000, acceptance: "45%",
    majors: ["Dentistry", "Agriculture", "Engineering"], sat: "1200+", minSat: 1200,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://adelaide.edu.au",
    description: "A member of the Group of Eight, known for high-impact research.", location: "Adelaide",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 116, rank: 116, name: "University of Technology Sydney (UTS)", country: "Australia", flag: "🇦🇺",
    tuition: "AUD 42,000 / year", tuitionVal: 28000, acceptance: "35%",
    majors: ["IT", "Design", "Business"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://uts.edu.au",
    description: "A leading young university located in the heart of Sydney's creative and tech precinct.", location: "Sydney",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 117, rank: 117, name: "RMIT University", country: "Australia", flag: "🇦🇺",
    tuition: "AUD 40,000 / year", tuitionVal: 27000, acceptance: "45%",
    majors: ["Art & Design", "Architecture", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://rmit.edu.au",
    description: "A global university of technology, design, and enterprise.", location: "Melbourne",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 118, rank: 118, name: "Macquarie University", country: "Australia", flag: "🇦🇺",
    tuition: "AUD 41,000 / year", tuitionVal: 27500, acceptance: "40%",
    majors: ["Linguistics", "Psychology", "Business"], sat: "1150+", minSat: 1150,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://mq.edu.au",
    description: "Set in Sydney's largest high-tech precinct, known for industry collaboration.", location: "Sydney",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 119, rank: 119, name: "Curtin University", country: "Australia", flag: "🇦🇺",
    tuition: "AUD 38,000 / year", tuitionVal: 25000, acceptance: "50%",
    majors: ["Mining Engineering", "Earth Sciences", "Business"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://curtin.edu.au",
    description: "Globally recognized for mining engineering and mineral economics.", location: "Perth",
    image: "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 120, rank: 120, name: "University of Calgary", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 28,000 / year", tuitionVal: 21000, acceptance: "60%",
    majors: ["Engineering", "Kinesiology", "Business"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.3+", minGpa: 3.3,
    link: "https://ucalgary.ca",
    description: "A leading Canadian research university located in an energy and tech hub.", location: "Calgary, AB",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 121, rank: 121, name: "Western University", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 39,000 / year", tuitionVal: 29000, acceptance: "58%",
    majors: ["Business (Ivey)", "Medicine", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.3+", minGpa: 3.3,
    link: "https://uwo.ca",
    description: "Famous for its Ivey Business School and picturesque campus.", location: "London, ON",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 122, rank: 122, name: "Queen's University", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 40,000 / year", tuitionVal: 30000, acceptance: "42%",
    majors: ["Commerce", "Engineering", "Arts"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.4+", minGpa: 3.4,
    link: "https://queensu.ca",
    description: "One of Canada's oldest degree-granting institutions with tight-knit student life.", location: "Kingston, ON",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 123, rank: 123, name: "University of Ottawa", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 35,000 / year", tuitionVal: 26000, acceptance: "54%",
    majors: ["Public Policy", "Law", "Computer Science"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://uottawa.ca",
    description: "The largest bilingual (English-French) university in the world, located in the capital.", location: "Ottawa, ON",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 124, rank: 124, name: "Simon Fraser University (SFU)", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 32,000 / year", tuitionVal: 24000, acceptance: "60%",
    majors: ["Communication", "Criminology", "Computing Science"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://sfu.ca",
    description: "Consistently ranked as Canada's top comprehensive university.", location: "Burnaby, BC",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 125, rank: 125, name: "Dalhousie University", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 30,000 / year", tuitionVal: 22000, acceptance: "65%",
    majors: ["Marine Biology", "Medicine", "Oceanography"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://dal.ca",
    description: "The leading research university in Atlantic Canada.", location: "Halifax, NS",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 126, rank: 126, name: "University of Victoria", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 28,000 / year", tuitionVal: 21000, acceptance: "64%",
    majors: ["Earth Sciences", "Law", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://uvic.ca",
    description: "Known for dynamic learning, research excellence, and a beautiful island location.", location: "Victoria, BC",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 127, rank: 127, name: "University College Dublin (UCD)", country: "Ireland", flag: "🇮🇪",
    tuition: "€20,000 / year", tuitionVal: 22000, acceptance: "45%",
    majors: ["Veterinary Science", "Business", "Engineering"], sat: "1250+", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://ucd.ie",
    description: "Ireland's largest and most globally engaged university.", location: "Dublin",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 128, rank: 128, name: "University of Galway", country: "Ireland", flag: "🇮🇪",
    tuition: "€18,000 / year", tuitionVal: 20000, acceptance: "50%",
    majors: ["Biomedical Science", "IT", "Arts"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://universityofgalway.ie",
    description: "A vibrant research-led university located in Ireland's cultural heart.", location: "Galway",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 129, rank: 129, name: "Chalmers University of Technology", country: "Sweden", flag: "🇸🇪",
    tuition: "SEK 140,000 / year", tuitionVal: 13000, acceptance: "40%",
    majors: ["Engineering", "Architecture", "Technology"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://chalmers.se",
    description: "A highly respected Swedish university focusing on tech, science, and architecture.", location: "Gothenburg",
    image: "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 130, rank: 130, name: "University of Gothenburg", country: "Sweden", flag: "🇸🇪",
    tuition: "SEK 130,000 / year", tuitionVal: 12000, acceptance: "45%",
    majors: ["Life Sciences", "Business", "Social Sciences"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://gu.se",
    description: "One of the largest universities in the Nordic countries, highly international.", location: "Gothenburg",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 131, rank: 131, name: "Aalto University", country: "Finland", flag: "🇫🇮",
    tuition: "€15,000 / year", tuitionVal: 16000, acceptance: "30%",
    majors: ["Art & Design", "Business", "Technology"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://aalto.fi",
    description: "A unique multidisciplinary university bridging tech, business, and arts.", location: "Espoo",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 132, rank: 132, name: "University of Turku", country: "Finland", flag: "🇫🇮",
    tuition: "€12,000 / year", tuitionVal: 13000, acceptance: "40%",
    majors: ["Education", "Nursing", "Biosciences"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://utu.fi",
    description: "An active academic community known for future-oriented research.", location: "Turku",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 133, rank: 133, name: "Norwegian University of Science and Technology (NTNU)", country: "Norway", flag: "🇳🇴",
    tuition: "Free (EU) / NOK 120,000", tuitionVal: 11000, acceptance: "35%",
    majors: ["Engineering", "Technology", "Natural Sciences"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://ntnu.edu",
    description: "Norway's premier institution for educating engineers and technical experts.", location: "Trondheim",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 134, rank: 134, name: "University of Bergen", country: "Norway", flag: "🇳🇴",
    tuition: "Free (EU) / NOK 110,000", tuitionVal: 10000, acceptance: "40%",
    majors: ["Marine Science", "Climate Research", "Medicine"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://uib.no",
    description: "An internationally recognized research university set in a coastal city.", location: "Bergen",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 135, rank: 135, name: "University of Bern", country: "Switzerland", flag: "🇨🇭",
    tuition: "CHF 1,500 / year", tuitionVal: 1600, acceptance: "30%",
    majors: ["Space Science", "Medicine", "Climate Change"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://unibe.ch",
    description: "Located in the Swiss capital, renowned for its space research and sustainability.", location: "Bern",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 136, rank: 136, name: "University of Lausanne (UNIL)", country: "Switzerland", flag: "🇨🇭",
    tuition: "CHF 1,200 / year", tuitionVal: 1300, acceptance: "35%",
    majors: ["Life Sciences", "Geosciences", "Business"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://unil.ch",
    description: "Situated by Lake Geneva, sharing a massive campus with EPFL.", location: "Lausanne",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 137, rank: 137, name: "University of Vienna", country: "Austria", flag: "🇦🇹",
    tuition: "€1,500 / year", tuitionVal: 1600, acceptance: "40%",
    majors: ["Humanities", "Law", "Physics"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://univie.ac.at",
    description: "The oldest university in the German-speaking world with a massive global footprint.", location: "Vienna",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 138, rank: 138, name: "TU Wien (Vienna University of Technology)", country: "Austria", flag: "🇦🇹",
    tuition: "€1,500 / year", tuitionVal: 1600, acceptance: "35%",
    majors: ["Computer Science", "Engineering", "Architecture"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://tuwien.at",
    description: "Austria's largest scientific-technical research and educational institution.", location: "Vienna",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 139, rank: 139, name: "Shanghai Jiao Tong University (SJTU)", country: "China", flag: "🇨🇳",
    tuition: "CNY 30,000 / year", tuitionVal: 4500, acceptance: "18%",
    majors: ["Engineering", "Medicine", "Management"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.5+", minGpa: 3.5,
    link: "https://sjtu.edu.cn",
    description: "One of the oldest and most influential universities in China.", location: "Shanghai",
    image: "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 140, rank: 140, name: "Nanjing University", country: "China", flag: "🇨🇳",
    tuition: "CNY 30,000 / year", tuitionVal: 4500, acceptance: "20%",
    majors: ["Physics", "Literature", "Earth Sciences"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.4+", minGpa: 3.4,
    link: "https://nju.edu.cn",
    description: "A prestigious, elite university with a long history in research.", location: "Nanjing",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 141, rank: 141, name: "University of Science and Technology of China (USTC)", country: "China", flag: "🇨🇳",
    tuition: "CNY 30,000 / year", tuitionVal: 4500, acceptance: "15%",
    majors: ["Quantum Physics", "Chemistry", "Computer Science"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.5+", minGpa: 3.5,
    link: "https://ustc.edu.cn",
    description: "Often referred to as the 'Caltech of China' due to its rigorous science focus.", location: "Hefei",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 142, rank: 142, name: "City University of Hong Kong", country: "Hong Kong", flag: "🇭🇰",
    tuition: "HKD 140,000 / year", tuitionVal: 18000, acceptance: "35%",
    majors: ["Business", "Engineering", "Creative Media"], sat: "1250+", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://cityu.edu.hk",
    description: "A fast-rising, innovative university in the heart of Hong Kong.", location: "Hong Kong",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 143, rank: 143, name: "Hong Kong Polytechnic University (PolyU)", country: "Hong Kong", flag: "🇭🇰",
    tuition: "HKD 140,000 / year", tuitionVal: 18000, acceptance: "35%",
    majors: ["Hospitality", "Architecture", "Engineering"], sat: "1250+", minSat: 1250,
    ielts: "6.0", minIelts: 6.0, gpa: "3.2+", minGpa: 3.2,
    link: "https://polyu.edu.hk",
    description: "Known for strong industry connections and practical, applied learning.", location: "Hong Kong",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 144, rank: 144, name: "National Tsing Hua University", country: "Taiwan", flag: "🇹🇼",
    tuition: "TWD 120,000 / year", tuitionVal: 3800, acceptance: "20%",
    majors: ["Semiconductors", "Computer Science", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.4+", minGpa: 3.4,
    link: "https://nthu.edu.tw",
    description: "A top tech university in Taiwan, critical to the global semiconductor industry.", location: "Hsinchu",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 145, rank: 145, name: "Sungkyunkwan University (SKKU)", country: "South Korea", flag: "🇰🇷",
    tuition: "KRW 7,000,000 / year", tuitionVal: 5000, acceptance: "25%",
    majors: ["Business", "Semiconductors", "Medicine"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.3+", minGpa: 3.3,
    link: "https://skku.edu",
    description: "One of Korea's oldest universities, heavily partnered with Samsung.", location: "Seoul",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 146, rank: 146, name: "Hanyang University", country: "South Korea", flag: "🇰🇷",
    tuition: "KRW 7,500,000 / year", tuitionVal: 5500, acceptance: "28%",
    majors: ["Engineering", "Business", "Architecture"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.2+", minGpa: 3.2,
    link: "https://hanyang.ac.kr",
    description: "A major private research university known historically for its engineering prowess.", location: "Seoul",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 147, rank: 147, name: "Kyung Hee University", country: "South Korea", flag: "🇰🇷",
    tuition: "KRW 7,000,000 / year", tuitionVal: 5000, acceptance: "30%",
    majors: ["Hospitality", "Medicine", "International Relations"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.2+", minGpa: 3.2,
    link: "https://khu.ac.kr",
    description: "Famous for its stunning neo-classic campus and top-ranked hospitality programs.", location: "Seoul",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 148, rank: 148, name: "Waseda University", country: "Japan", flag: "🇯🇵",
    tuition: "¥1,200,000 / year", tuitionVal: 8000, acceptance: "25%",
    majors: ["Political Science", "Economics", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.3+", minGpa: 3.3,
    link: "https://waseda.jp",
    description: "One of Japan's top private universities, producing numerous prime ministers.", location: "Tokyo",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 149, rank: 149, name: "Keio University", country: "Japan", flag: "🇯🇵",
    tuition: "¥1,300,000 / year", tuitionVal: 8500, acceptance: "25%",
    majors: ["Business", "Law", "Medicine"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.3+", minGpa: 3.3,
    link: "https://keio.ac.jp",
    description: "Japan's oldest private institute of higher education, known for business leaders.", location: "Tokyo",
    image: "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 150, rank: 150, name: "Kyushu University", country: "Japan", flag: "🇯🇵",
    tuition: "¥535,800 / year", tuitionVal: 3500, acceptance: "20%",
    majors: ["Engineering", "Medicine", "Agriculture"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.2+", minGpa: 3.2,
    link: "https://kyushu-u.ac.jp",
    description: "A prestigious national university located in the tech-friendly city of Fukuoka.", location: "Fukuoka",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 151, rank: 151, name: "University of Rochester", country: "United States", flag: "🇺🇸",
    tuition: "$60,000 / year", tuitionVal: 60000, acceptance: "29%",
    majors: ["Optics", "Music", "Engineering"], sat: "1350+", minSat: 1350,
    ielts: "7.0", minIelts: 7.0, gpa: "3.7+", minGpa: 3.7,
    link: "https://rochester.edu",
    description: "A leading private research university known for its optics and music programs.", location: "Rochester, NY",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 152, rank: 152, name: "Emory University", country: "United States", flag: "🇺🇸",
    tuition: "$57,000 / year", tuitionVal: 57000, acceptance: "13%",
    majors: ["Nursing", "Business", "Biology"], sat: "1420+", minSat: 1420,
    ielts: "7.5", minIelts: 7.5, gpa: "3.8+", minGpa: 3.8,
    link: "https://emory.edu",
    description: "Highly ranked for healthcare, business, and its close ties to the CDC.", location: "Atlanta, GA",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 153, rank: 153, name: "Vanderbilt University", country: "United States", flag: "🇺🇸",
    tuition: "$60,000 / year", tuitionVal: 60000, acceptance: "7%",
    majors: ["Education", "Medicine", "Engineering"], sat: "1480+", minSat: 1480,
    ielts: "7.5", minIelts: 7.5, gpa: "3.9+", minGpa: 3.9,
    link: "https://vanderbilt.edu",
    description: "A premier research university offering a rigorous academic environment.", location: "Nashville, TN",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 154, rank: 154, name: "University of Notre Dame", country: "United States", flag: "🇺🇸",
    tuition: "$60,000 / year", tuitionVal: 60000, acceptance: "13%",
    majors: ["Business", "Architecture", "Theology"], sat: "1450+", minSat: 1450,
    ielts: "7.5", minIelts: 7.5, gpa: "3.9+", minGpa: 3.9,
    link: "https://nd.edu",
    description: "A prestigious Catholic research university known for strong alumni loyalty.", location: "Notre Dame, IN",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 155, rank: 155, name: "Georgetown University", country: "United States", flag: "🇺🇸",
    tuition: "$62,000 / year", tuitionVal: 62000, acceptance: "12%",
    majors: ["International Relations", "Political Science", "Law"], sat: "1440+", minSat: 1440,
    ielts: "7.0", minIelts: 7.0, gpa: "3.9+", minGpa: 3.9,
    link: "https://georgetown.edu",
    description: "Located in the nation's capital, top-tier for politics and diplomacy.", location: "Washington, D.C.",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 156, rank: 156, name: "University of Miami", country: "United States", flag: "🇺🇸",
    tuition: "$55,000 / year", tuitionVal: 55000, acceptance: "19%",
    majors: ["Marine Biology", "Business", "Medicine"], sat: "1330+", minSat: 1330,
    ielts: "6.5", minIelts: 6.5, gpa: "3.6+", minGpa: 3.6,
    link: "https://miami.edu",
    description: "A vibrant private university with renowned marine science and medical programs.", location: "Coral Gables, FL",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 157, rank: 157, name: "University of Pittsburgh", country: "United States", flag: "🇺🇸",
    tuition: "$36,000 / year", tuitionVal: 36000, acceptance: "49%",
    majors: ["Philosophy", "Medicine", "Engineering"], sat: "1250+", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.6+", minGpa: 3.6,
    link: "https://pitt.edu",
    description: "A state-related research university highly respected for health sciences.", location: "Pittsburgh, PA",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 158, rank: 158, name: "Michigan State University", country: "United States", flag: "🇺🇸",
    tuition: "$40,000 / year", tuitionVal: 40000, acceptance: "83%",
    majors: ["Supply Chain", "Agriculture", "Education"], sat: "1150+", minSat: 1150,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://msu.edu",
    description: "A major public research institution known globally for its supply chain programs.", location: "East Lansing, MI",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 159, rank: 159, name: "Indiana University Bloomington", country: "United States", flag: "🇺🇸",
    tuition: "$38,000 / year", tuitionVal: 38000, acceptance: "82%",
    majors: ["Business (Kelley)", "Music", "Public Affairs"], sat: "1200+", minSat: 1200,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://indiana.edu",
    description: "Home to the prestigious Kelley School of Business and a stunning campus.", location: "Bloomington, IN",
    image: "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 160, rank: 160, name: "University of Arizona", country: "United States", flag: "🇺🇸",
    tuition: "$37,000 / year", tuitionVal: 37000, acceptance: "87%",
    majors: ["Astronomy", "Management Information Systems", "Optical Sciences"], sat: "1150+", minSat: 1150,
    ielts: "6.0", minIelts: 6.0, gpa: "3.3+", minGpa: 3.3,
    link: "https://arizona.edu",
    description: "A leader in space sciences and earth observation research.", location: "Tucson, AZ",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 161, rank: 161, name: "University of York", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£22,000 / year", tuitionVal: 28000, acceptance: "78%",
    majors: ["Social Policy", "English Literature", "Biosciences"], sat: "1250+", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://york.ac.uk",
    description: "A Russell Group university set in a beautiful historic city.", location: "York",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 162, rank: 162, name: "Lancaster University", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£23,000 / year", tuitionVal: 29000, acceptance: "75%",
    majors: ["Linguistics", "Business", "Physics"], sat: "1250+", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://lancaster.ac.uk",
    description: "Consistently ranked in the top 15 in the UK, known for student satisfaction.", location: "Lancaster",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 163, rank: 163, name: "University of Exeter", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£24,000 / year", tuitionVal: 30000, acceptance: "70%",
    majors: ["Sports Science", "Geography", "Psychology"], sat: "1250+", minSat: 1250,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://exeter.ac.uk",
    description: "A prestigious university with beautiful campuses in South West England.", location: "Exeter",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 164, rank: 164, name: "Newcastle University", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£23,000 / year", tuitionVal: 29000, acceptance: "80%",
    majors: ["Dentistry", "Architecture", "Engineering"], sat: "1200+", minSat: 1200,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://ncl.ac.uk",
    description: "Renowned for its research impact and vibrant student life in the North East.", location: "Newcastle",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 165, rank: 165, name: "Cardiff University", country: "United Kingdom", flag: "🇬🇧",
    tuition: "£22,000 / year", tuitionVal: 28000, acceptance: "75%",
    majors: ["Architecture", "Psychology", "Journalism"], sat: "1200+", minSat: 1200,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://cardiff.ac.uk",
    description: "Wales' leading research university and a member of the Russell Group.", location: "Cardiff",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 166, rank: 166, name: "University of Waterloo", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 45,000 / year", tuitionVal: 33000, acceptance: "53%",
    majors: ["Computer Science", "Engineering", "Mathematics"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.6+", minGpa: 3.6,
    link: "https://uwaterloo.ca",
    description: "World-famous for its co-op education and powerhouse tech programs.", location: "Waterloo, ON",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 167, rank: 167, name: "Laval University (Université Laval)", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 24,000 / year", tuitionVal: 18000, acceptance: "55%",
    majors: ["Forestry", "Medicine", "Law"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://ulaval.ca",
    description: "The oldest French-language university in North America.", location: "Quebec City, QC",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 168, rank: 168, name: "Concordia University", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 25,000 / year", tuitionVal: 18500, acceptance: "60%",
    majors: ["Fine Arts", "Business", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://concordia.ca",
    description: "An innovative public research university in multicultural Montreal.", location: "Montreal, QC",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 169, rank: 169, name: "York University", country: "Canada", flag: "🇨🇦",
    tuition: "CAD 30,000 / year", tuitionVal: 22000, acceptance: "65%",
    majors: ["Business (Schulich)", "Law", "Space Science"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://yorku.ca",
    description: "Canada's third-largest university, known for its leading business and law schools.", location: "Toronto, ON",
    image: "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 170, rank: 170, name: "Delft University of Technology (TU Delft)", country: "Netherlands", flag: "🇳🇱",
    tuition: "€16,000 / year", tuitionVal: 17000, acceptance: "40%",
    majors: ["Architecture", "Civil Engineering", "Aerospace"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://tudelft.nl",
    description: "Consistently ranked among the top engineering and technology universities worldwide.", location: "Delft",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 171, rank: 171, name: "University of Amsterdam (UvA)", country: "Netherlands", flag: "🇳🇱",
    tuition: "€11,000 / year", tuitionVal: 12000, acceptance: "35%",
    majors: ["Communication", "Sociology", "Psychology"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://uva.nl",
    description: "The largest university in the Netherlands, highly ranked in media and communications.", location: "Amsterdam",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 172, rank: 172, name: "Vrije Universiteit Amsterdam (VU)", country: "Netherlands", flag: "🇳🇱",
    tuition: "€10,000 / year", tuitionVal: 11000, acceptance: "40%",
    majors: ["Law", "Computer Science", "Business"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://vu.nl",
    description: "A major research university offering many English-taught bachelor's programs.", location: "Amsterdam",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 173, rank: 173, name: "Politecnico di Milano", country: "Italy", flag: "🇮🇹",
    tuition: "€3,900 / year", tuitionVal: 4200, acceptance: "30%",
    majors: ["Design", "Architecture", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://polimi.it",
    description: "Italy's top university for technical fields, architecture, and design.", location: "Milan",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 174, rank: 174, name: "University of Bologna", country: "Italy", flag: "🇮🇹",
    tuition: "€3,000 / year", tuitionVal: 3200, acceptance: "45%",
    majors: ["Law", "Humanities", "Medicine"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://unibo.it",
    description: "The oldest university in the Western world in continuous operation.", location: "Bologna",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 175, rank: 175, name: "Sapienza University of Rome", country: "Italy", flag: "🇮🇹",
    tuition: "€2,900 / year", tuitionVal: 3100, acceptance: "45%",
    majors: ["Classics", "Physics", "Archaeology"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://uniroma1.it",
    description: "One of the largest European universities, world-renowned for Classics & Ancient History.", location: "Rome",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 176, rank: 176, name: "University of Padua", country: "Italy", flag: "🇮🇹",
    tuition: "€2,600 / year", tuitionVal: 2800, acceptance: "50%",
    majors: ["Medicine", "Engineering", "Psychology"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://unipd.it",
    description: "One of Europe's oldest universities, where Galileo Galilei once taught.", location: "Padua",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 177, rank: 177, name: "University of Barcelona", country: "Spain", flag: "🇪🇸",
    tuition: "€3,500 / year", tuitionVal: 3800, acceptance: "40%",
    majors: ["Medicine", "Natural Sciences", "Social Sciences"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://ub.edu",
    description: "Spain's premier research university situated in a vibrant international city.", location: "Barcelona",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 178, rank: 178, name: "Autonomous University of Barcelona", country: "Spain", flag: "🇪🇸",
    tuition: "€3,500 / year", tuitionVal: 3800, acceptance: "45%",
    majors: ["Veterinary Science", "Economics", "Linguistics"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://uab.cat",
    description: "Known for its modern campus and strong international orientation.", location: "Barcelona",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 179, rank: 179, name: "Complutense University of Madrid", country: "Spain", flag: "🇪🇸",
    tuition: "€3,000 / year", tuitionVal: 3200, acceptance: "50%",
    majors: ["Dentistry", "Law", "Arts"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://ucm.es",
    description: "One of the oldest and largest universities in Spain, located in the capital.", location: "Madrid",
    image: "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 180, rank: 180, name: "KU Leuven", country: "Belgium", flag: "🇧🇪",
    tuition: "€3,900 / year", tuitionVal: 4200, acceptance: "40%",
    majors: ["Theology", "Engineering", "Medicine"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://kuleuven.be",
    description: "Belgium's highest-ranked university and one of the most innovative in Europe.", location: "Leuven",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 181, rank: 181, name: "Ghent University", country: "Belgium", flag: "🇧🇪",
    tuition: "€3,000 / year", tuitionVal: 3200, acceptance: "45%",
    majors: ["Veterinary Science", "Life Sciences", "Psychology"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://ugent.be",
    description: "A top 100 global university known for its scientific research.", location: "Ghent",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 182, rank: 182, name: "Lund University", country: "Sweden", flag: "🇸🇪",
    tuition: "SEK 130,000 / year", tuitionVal: 12500, acceptance: "35%",
    majors: ["Geography", "Physics", "Law"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://lunduniversity.lu.se",
    description: "One of northern Europe's oldest, broadest, and finest universities.", location: "Lund",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 183, rank: 183, name: "KTH Royal Institute of Technology", country: "Sweden", flag: "🇸🇪",
    tuition: "SEK 145,000 / year", tuitionVal: 13500, acceptance: "30%",
    majors: ["Architecture", "Electrical Engineering", "Computer Science"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://kth.se",
    description: "Sweden's largest technical research and learning institution.", location: "Stockholm",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 184, rank: 184, name: "Indian Institute of Technology Bombay (IIT Bombay)", country: "India", flag: "🇮🇳",
    tuition: "INR 300,000 / year", tuitionVal: 3600, acceptance: "2%",
    majors: ["Computer Science", "Electrical Engineering", "Civil Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.5+", minGpa: 3.5,
    link: "https://iitb.ac.in",
    description: "One of the most competitive and prestigious engineering institutes in the world.", location: "Mumbai",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 185, rank: 185, name: "Indian Institute of Technology Delhi (IIT Delhi)", country: "India", flag: "🇮🇳",
    tuition: "INR 300,000 / year", tuitionVal: 3600, acceptance: "2%",
    majors: ["Mechanical Engineering", "Computer Science", "Physics"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.5+", minGpa: 3.5,
    link: "https://iitd.ac.in",
    description: "A globally recognized center of excellence in science and technology.", location: "New Delhi",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 186, rank: 186, name: "Indian Institute of Science (IISc)", country: "India", flag: "🇮🇳",
    tuition: "INR 150,000 / year", tuitionVal: 1800, acceptance: "3%",
    majors: ["Space Science", "Biological Sciences", "Materials Science"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.5+", minGpa: 3.5,
    link: "https://iisc.ac.in",
    description: "India's premier destination for advanced scientific and technological research.", location: "Bangalore",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 187, rank: 187, name: "Fudan University", country: "China", flag: "🇨🇳",
    tuition: "CNY 34,000 / year", tuitionVal: 4800, acceptance: "15%",
    majors: ["Modern Languages", "Chemistry", "Business"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.5+", minGpa: 3.5,
    link: "https://fudan.edu.cn",
    description: "A major comprehensive university located in the financial hub of Shanghai.", location: "Shanghai",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 188, rank: 188, name: "Sun Yat-sen University", country: "China", flag: "🇨🇳",
    tuition: "CNY 30,000 / year", tuitionVal: 4500, acceptance: "20%",
    majors: ["Business", "Medicine", "Life Sciences"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.4+", minGpa: 3.4,
    link: "https://sysu.edu.cn",
    description: "A top-tier university in Southern China with multiple modern campuses.", location: "Guangzhou",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 189, rank: 189, name: "Wuhan University", country: "China", flag: "🇨🇳",
    tuition: "CNY 28,000 / year", tuitionVal: 4200, acceptance: "25%",
    majors: ["Remote Sensing", "Water Resources", "Dentistry"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.4+", minGpa: 3.4,
    link: "https://whu.edu.cn",
    description: "Widely regarded as one of the most beautiful university campuses in China.", location: "Wuhan",
    image: "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 190, rank: 190, name: "Harbin Institute of Technology", country: "China", flag: "🇨🇳",
    tuition: "CNY 26,000 / year", tuitionVal: 3800, acceptance: "22%",
    majors: ["Aerospace Engineering", "Robotics", "Computer Science"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.3+", minGpa: 3.3,
    link: "https://hit.edu.cn",
    description: "A Chinese C9 League university, exceptional in engineering and space tech.", location: "Harbin",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 191, rank: 191, name: "University of Malaya (UM)", country: "Malaysia", flag: "🇲🇾",
    tuition: "MYR 15,000 / year", tuitionVal: 3200, acceptance: "35%",
    majors: ["Engineering", "Business", "Medicine"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.2+", minGpa: 3.2,
    link: "https://um.edu.my",
    description: "The oldest and highest-ranking institution of higher education in Malaysia.", location: "Kuala Lumpur",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 192, rank: 192, name: "Universiti Putra Malaysia (UPM)", country: "Malaysia", flag: "🇲🇾",
    tuition: "MYR 14,000 / year", tuitionVal: 3000, acceptance: "40%",
    majors: ["Agriculture", "Forestry", "Veterinary Science"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://upm.edu.my",
    description: "A leading research university initially founded as a school of agriculture.", location: "Serdang",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 193, rank: 193, name: "Chulalongkorn University", country: "Thailand", flag: "🇹🇭",
    tuition: "THB 150,000 / year", tuitionVal: 4200, acceptance: "25%",
    majors: ["Engineering", "Arts", "Medicine"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.2+", minGpa: 3.2,
    link: "https://chula.ac.th",
    description: "Thailand's oldest and most prestigious university.", location: "Bangkok",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 194, rank: 194, name: "Mahidol University", country: "Thailand", flag: "🇹🇭",
    tuition: "THB 160,000 / year", tuitionVal: 4500, acceptance: "30%",
    majors: ["Medicine", "Public Health", "Science"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.2+", minGpa: 3.2,
    link: "https://mahidol.ac.th",
    description: "Outstanding reputation in health sciences and medical research.", location: "Nakhon Pathom",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 195, rank: 195, name: "University of Cape Town (UCT)", country: "South Africa", flag: "🇿🇦",
    tuition: "ZAR 75,000 / year", tuitionVal: 4000, acceptance: "40%",
    majors: ["Development Studies", "Medicine", "Law"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://uct.ac.za",
    description: "The highest-ranked African university, boasting a breathtaking campus.", location: "Cape Town",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 196, rank: 196, name: "University of the Witwatersrand", country: "South Africa", flag: "🇿🇦",
    tuition: "ZAR 65,000 / year", tuitionVal: 3500, acceptance: "45%",
    majors: ["Mining", "Archaeology", "Business"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://wits.ac.za",
    description: "Known for major discoveries in human evolution and strong engineering programs.", location: "Johannesburg",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 197, rank: 197, name: "Lomonosov Moscow State University", country: "Russia", flag: "🇷🇺",
    tuition: "RUB 400,000 / year", tuitionVal: 4500, acceptance: "15%",
    majors: ["Mathematics", "Physics", "Computer Science"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.4+", minGpa: 3.4,
    link: "https://msu.ru",
    description: "Russia's largest and most famous university, housed in iconic architecture.", location: "Moscow",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 198, rank: 198, name: "King Abdulaziz University (KAU)", country: "Saudi Arabia", flag: "🇸🇦",
    tuition: "Free (Scholarships)", tuitionVal: 0, acceptance: "35%",
    majors: ["Mathematics", "Engineering", "Computer Science"], sat: "Optional", minSat: 0,
    ielts: "5.5", minIelts: 5.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://kau.edu.sa",
    description: "A top Arab university known for generous international scholarships.", location: "Jeddah",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 199, rank: 199, name: "King Abdullah University of Science and Technology (KAUST)", country: "Saudi Arabia", flag: "🇸🇦",
    tuition: "Fully Funded", tuitionVal: 0, acceptance: "10%",
    majors: ["Energy", "Water Research", "Environmental Science"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5,
    link: "https://kaust.edu.sa",
    description: "A private graduate-level research university with state-of-the-art facilities.", location: "Thuwal",
    image: "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 200, rank: 200, name: "Tel Aviv University", country: "Israel", flag: "🇮🇱",
    tuition: "$15,000 / year", tuitionVal: 15000, acceptance: "45%",
    majors: ["Cybersecurity", "Computer Science", "Entrepreneurship"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://tau.ac.il",
    description: "The largest university in Israel, highly regarded for tech startups and innovation.", location: "Tel Aviv",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 201, rank: 201, name: "Hebrew University of Jerusalem", country: "Israel", flag: "🇮🇱",
    tuition: "$14,000 / year", tuitionVal: 14000, acceptance: "30%",
    majors: ["Mathematics", "Computer Science", "Physics"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://huji.ac.il",
    description: "Israel's premier university, known for producing multiple Nobel laureates.", location: "Jerusalem",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 202, rank: 202, name: "Technion - Israel Institute of Technology", country: "Israel", flag: "🇮🇱",
    tuition: "$15,000 / year", tuitionVal: 15000, acceptance: "35%",
    majors: ["Aerospace", "Computer Science", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.4+", minGpa: 3.4,
    link: "https://technion.ac.il",
    description: "Often called the 'MIT of the Middle East', driving Israel's high-tech boom.", location: "Haifa",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 203, rank: 203, name: "University of Buenos Aires (UBA)", country: "Argentina", flag: "🇦🇷",
    tuition: "Free (Public)", tuitionVal: 0, acceptance: "Open",
    majors: ["Medicine", "Law", "Architecture"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://uba.ar",
    description: "The largest university in Argentina and one of the most prestigious in Latin America.", location: "Buenos Aires",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 204, rank: 204, name: "Universidad Nacional Autónoma de México (UNAM)", country: "Mexico", flag: "🇲🇽",
    tuition: "Free (Public)", tuitionVal: 0, acceptance: "8%",
    majors: ["Engineering", "Arts", "Social Sciences"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://unam.mx",
    description: "A massive, historically significant university with a UNESCO World Heritage campus.", location: "Mexico City",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 205, rank: 205, name: "Universidade de São Paulo (USP)", country: "Brazil", flag: "🇧🇷",
    tuition: "Free (Public)", tuitionVal: 0, acceptance: "10%",
    majors: ["Dentistry", "Agriculture", "Veterinary Science"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://usp.br",
    description: "The largest and most important research institution in Brazil.", location: "São Paulo",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 206, rank: 206, name: "Pontificia Universidad Católica de Chile (UC)", country: "Chile", flag: "🇨🇱",
    tuition: "$8,000 / year", tuitionVal: 8000, acceptance: "20%",
    majors: ["Law", "Business", "Architecture"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.2+", minGpa: 3.2,
    link: "https://uc.cl",
    description: "Consistently ranked as one of the top universities in Latin America.", location: "Santiago",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 207, rank: 207, name: "Tecnológico de Monterrey (ITESM)", country: "Mexico", flag: "🇲🇽",
    tuition: "$12,000 / year", tuitionVal: 12000, acceptance: "40%",
    majors: ["Business", "Engineering", "IT"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://tec.mx",
    description: "A private university known for strong industry ties and entrepreneurial focus.", location: "Monterrey",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 208, rank: 208, name: "University of Otago", country: "New Zealand", flag: "🇳🇿",
    tuition: "NZD 35,000 / year", tuitionVal: 22000, acceptance: "55%",
    majors: ["Dentistry", "Medicine", "Psychology"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://otago.ac.nz",
    description: "New Zealand's oldest university, famed for its beautiful campus and student life.", location: "Dunedin",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 209, rank: 209, name: "Victoria University of Wellington", country: "New Zealand", flag: "🇳🇿",
    tuition: "NZD 32,000 / year", tuitionVal: 20000, acceptance: "60%",
    majors: ["Law", "Humanities", "Earth Sciences"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://wgtn.ac.nz",
    description: "Located in the capital, well-connected to government and policy networks.", location: "Wellington",
    image: "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 210, rank: 210, name: "University of Canterbury", country: "New Zealand", flag: "🇳🇿",
    tuition: "NZD 34,000 / year", tuitionVal: 21000, acceptance: "50%",
    majors: ["Engineering", "Forestry", "Science"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://canterbury.ac.nz",
    description: "Known for its strong engineering programs and resilience.", location: "Christchurch",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 211, rank: 211, name: "Universidad de los Andes", country: "Colombia", flag: "🇨🇴",
    tuition: "$9,000 / year", tuitionVal: 9000, acceptance: "35%",
    majors: ["Business", "Law", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.2+", minGpa: 3.2,
    link: "https://uniandes.edu.co",
    description: "Colombia's top private university with excellent research output.", location: "Bogotá",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 212, rank: 212, name: "University of Campinas (Unicamp)", country: "Brazil", flag: "🇧🇷",
    tuition: "Free (Public)", tuitionVal: 0, acceptance: "8%",
    majors: ["Dentistry", "Agriculture", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://unicamp.br",
    description: "A highly selective public research university responsible for much of Brazil's tech.", location: "Campinas",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 213, rank: 213, name: "King Saud University", country: "Saudi Arabia", flag: "🇸🇦",
    tuition: "Free (Scholarships)", tuitionVal: 0, acceptance: "40%",
    majors: ["Pharmacy", "Engineering", "Computer Science"], sat: "Optional", minSat: 0,
    ielts: "5.5", minIelts: 5.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://ksu.edu.sa",
    description: "The first university in Saudi Arabia, heavily funded for research.", location: "Riyadh",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 214, rank: 214, name: "United Arab Emirates University (UAEU)", country: "United Arab Emirates", flag: "🇦🇪",
    tuition: "AED 50,000 / year", tuitionVal: 13600, acceptance: "45%",
    majors: ["Business", "Engineering", "Medicine"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://uaeu.ac.ae",
    description: "The oldest and flagship university of the UAE.", location: "Al Ain",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 215, rank: 215, name: "Khalifa University", country: "United Arab Emirates", flag: "🇦🇪",
    tuition: "AED 100,000 / year", tuitionVal: 27000, acceptance: "25%",
    majors: ["Aerospace Engineering", "Petroleum Engineering", "Robotics"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://ku.ac.ae",
    description: "A top-ranked, science-focused institution in the Middle East.", location: "Abu Dhabi",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 216, rank: 216, name: "Qatar University", country: "Qatar", flag: "🇶🇦",
    tuition: "QAR 40,000 / year", tuitionVal: 11000, acceptance: "40%",
    majors: ["Engineering", "Business", "Law"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://qu.edu.qa",
    description: "Qatar's primary institution of higher education with diverse programs.", location: "Doha",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 217, rank: 217, name: "American University of Beirut (AUB)", country: "Lebanon", flag: "🇱🇧",
    tuition: "$20,000 / year", tuitionVal: 20000, acceptance: "50%",
    majors: ["Medicine", "Engineering", "Business"], sat: "1200+", minSat: 1200,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://aub.edu.lb",
    description: "A historic and deeply influential university in the Arab world.", location: "Beirut",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 218, rank: 218, name: "University of Jordan", country: "Jordan", flag: "🇯🇴",
    tuition: "$6,000 / year", tuitionVal: 6000, acceptance: "45%",
    majors: ["Medicine", "Dentistry", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://ju.edu.jo",
    description: "The oldest and largest university in Jordan.", location: "Amman",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 219, rank: 219, name: "Cairo University", country: "Egypt", flag: "🇪🇬",
    tuition: "$7,000 / year", tuitionVal: 7000, acceptance: "55%",
    majors: ["Medicine", "Engineering", "Pharmacy"], sat: "Optional", minSat: 0,
    ielts: "5.5", minIelts: 5.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://cu.edu.eg",
    description: "Egypt's premier public university with a rich history in the region.", location: "Giza",
    image: "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 220, rank: 220, name: "Makerere University", country: "Uganda", flag: "🇺🇬",
    tuition: "$4,000 / year", tuitionVal: 4000, acceptance: "60%",
    majors: ["Public Health", "Agriculture", "Humanities"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://mak.ac.ug",
    description: "One of Africa's oldest and most prestigious universities.", location: "Kampala",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 221, rank: 221, name: "University of Nairobi", country: "Kenya", flag: "🇰🇪",
    tuition: "$5,000 / year", tuitionVal: 5000, acceptance: "50%",
    majors: ["Veterinary Science", "Business", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://uonbi.ac.ke",
    description: "The largest and top-ranked university in Kenya.", location: "Nairobi",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 222, rank: 222, name: "University of Pretoria", country: "South Africa", flag: "🇿🇦",
    tuition: "ZAR 60,000 / year", tuitionVal: 3200, acceptance: "55%",
    majors: ["Veterinary Science", "Law", "Engineering"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://up.ac.za",
    description: "A large research university with the only veterinary faculty in South Africa.", location: "Pretoria",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 223, rank: 223, name: "Stellenbosch University", country: "South Africa", flag: "🇿🇦",
    tuition: "ZAR 65,000 / year", tuitionVal: 3500, acceptance: "45%",
    majors: ["Agriculture", "Theology", "Law"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://sun.ac.za",
    description: "Set in the winelands, one of South Africa's leading research universities.", location: "Stellenbosch",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 224, rank: 224, name: "University of KwaZulu-Natal", country: "South Africa", flag: "🇿🇦",
    tuition: "ZAR 55,000 / year", tuitionVal: 3000, acceptance: "60%",
    majors: ["Medicine", "Science", "Education"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://ukzn.ac.za",
    description: "Formed by a merger, a major center for health and scientific research.", location: "Durban",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 225, rank: 225, name: "University of Ghana", country: "Ghana", flag: "🇬🇭",
    tuition: "$6,000 / year", tuitionVal: 6000, acceptance: "50%",
    majors: ["Public Health", "Business", "Humanities"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://ug.edu.gh",
    description: "The oldest and largest of the thirteen Ghanaian national public universities.", location: "Accra",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 226, rank: 226, name: "University of Ibadan", country: "Nigeria", flag: "🇳🇬",
    tuition: "$3,000 / year", tuitionVal: 3000, acceptance: "25%",
    majors: ["Medicine", "Agriculture", "Arts"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://ui.edu.ng",
    description: "Nigeria's premier university with a massive impact on West African education.", location: "Ibadan",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 227, rank: 227, name: "University of the Philippines Diliman", country: "Philippines", flag: "🇵🇭",
    tuition: "PHP 50,000 / year", tuitionVal: 900, acceptance: "15%",
    majors: ["Engineering", "Law", "Social Sciences"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://upd.edu.ph",
    description: "The flagship campus of the University of the Philippines system.", location: "Quezon City",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 228, rank: 228, name: "Ateneo de Manila University", country: "Philippines", flag: "🇵🇭",
    tuition: "PHP 200,000 / year", tuitionVal: 3500, acceptance: "20%",
    majors: ["Business", "Humanities", "Management"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://ateneo.edu",
    description: "A top-tier private Jesuit university known for rigorous academics.", location: "Quezon City",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 229, rank: 229, name: "Thammasat University", country: "Thailand", flag: "🇹🇭",
    tuition: "THB 140,000 / year", tuitionVal: 4000, acceptance: "35%",
    majors: ["Law", "Political Science", "Economics"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://tu.ac.th",
    description: "Thailand's second oldest university, renowned for social sciences and law.", location: "Bangkok",
    image: "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 230, rank: 230, name: "Chiang Mai University", country: "Thailand", flag: "🇹🇭",
    tuition: "THB 120,000 / year", tuitionVal: 3500, acceptance: "40%",
    majors: ["Medicine", "Agriculture", "Science"], sat: "Optional", minSat: 0,
    ielts: "5.5", minIelts: 5.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://cmu.ac.th",
    description: "A major regional university in northern Thailand with a lush campus.", location: "Chiang Mai",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 231, rank: 231, name: "Vietnam National University, Hanoi", country: "Vietnam", flag: "🇻🇳",
    tuition: "VND 40,000,000 / year", tuitionVal: 1700, acceptance: "25%",
    majors: ["Computer Science", "Engineering", "Natural Sciences"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://vnu.edu.vn",
    description: "The largest and most prestigious comprehensive university in Vietnam.", location: "Hanoi",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 232, rank: 232, name: "Gadjah Mada University", country: "Indonesia", flag: "🇮🇩",
    tuition: "IDR 40,000,000 / year", tuitionVal: 2500, acceptance: "15%",
    majors: ["Medicine", "Engineering", "Social Sciences"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.2+", minGpa: 3.2,
    link: "https://ugm.ac.id",
    description: "One of the oldest and largest universities in Indonesia.", location: "Yogyakarta",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 233, rank: 233, name: "University of Indonesia", country: "Indonesia", flag: "🇮🇩",
    tuition: "IDR 50,000,000 / year", tuitionVal: 3200, acceptance: "10%",
    majors: ["Business", "Law", "Medicine"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://ui.ac.id",
    description: "A prestigious university consistently ranked as top in Indonesia.", location: "Depok",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 234, rank: 234, name: "Bandung Institute of Technology (ITB)", country: "Indonesia", flag: "🇮🇩",
    tuition: "IDR 45,000,000 / year", tuitionVal: 2900, acceptance: "12%",
    majors: ["Engineering", "Architecture", "Art & Design"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.2+", minGpa: 3.2,
    link: "https://itb.ac.id",
    description: "Indonesia's premier technology and engineering institute.", location: "Bandung",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 235, rank: 235, name: "University of Dhaka", country: "Bangladesh", flag: "🇧🇩",
    tuition: "$2,000 / year", tuitionVal: 2000, acceptance: "15%",
    majors: ["Social Sciences", "Business", "Sciences"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://du.ac.bd",
    description: "The oldest university in Bangladesh, crucial to the nation's history.", location: "Dhaka",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 236, rank: 236, name: "National University of Sciences and Technology (NUST)", country: "Pakistan", flag: "🇵🇰",
    tuition: "$3,500 / year", tuitionVal: 3500, acceptance: "20%",
    majors: ["Engineering", "Computer Science", "Business"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://nust.edu.pk",
    description: "Pakistan's leading engineering and technology university.", location: "Islamabad",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 237, rank: 237, name: "Quaid-i-Azam University", country: "Pakistan", flag: "🇵🇰",
    tuition: "$2,500 / year", tuitionVal: 2500, acceptance: "25%",
    majors: ["Natural Sciences", "Social Sciences", "Biological Sciences"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://qau.edu.pk",
    description: "The top-ranked public university in Pakistan for general sciences.", location: "Islamabad",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 238, rank: 238, name: "University of Colombo", country: "Sri Lanka", flag: "🇱🇰",
    tuition: "$3,000 / year", tuitionVal: 3000, acceptance: "20%",
    majors: ["Medicine", "Law", "Management"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://cmb.ac.lk",
    description: "The oldest and highest-ranked university in Sri Lanka.", location: "Colombo",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 239, rank: 239, name: "Al-Farabi Kazakh National University", country: "Kazakhstan", flag: "🇰🇿",
    tuition: "$4,500 / year", tuitionVal: 4500, acceptance: "35%",
    majors: ["Physics", "International Relations", "Chemistry"], sat: "Optional", minSat: 0,
    ielts: "5.5", minIelts: 5.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://kaznu.kz",
    description: "The leading comprehensive university in Kazakhstan and Central Asia.", location: "Almaty",
    image: "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 240, rank: 240, name: "L.N. Gumilyov Eurasian National University", country: "Kazakhstan", flag: "🇰🇿",
    tuition: "$4,000 / year", tuitionVal: 4000, acceptance: "40%",
    majors: ["Engineering", "Economics", "Humanities"], sat: "Optional", minSat: 0,
    ielts: "5.5", minIelts: 5.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://enu.kz",
    description: "A major research university situated in the capital of Kazakhstan.", location: "Astana",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 241, rank: 241, name: "Bauman Moscow State Technical University", country: "Russia", flag: "🇷🇺",
    tuition: "RUB 350,000 / year", tuitionVal: 4000, acceptance: "25%",
    majors: ["Aerospace Engineering", "Robotics", "Computer Science"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.2+", minGpa: 3.2,
    link: "https://bmstu.ru",
    description: "Russia's premier technological university, famous for space and engineering programs.", location: "Moscow",
    image: "https://images.unsplash.com/photo-1541339907198-e08756defefe?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 242, rank: 242, name: "Saint Petersburg State University", country: "Russia", flag: "🇷🇺",
    tuition: "RUB 380,000 / year", tuitionVal: 4200, acceptance: "20%",
    majors: ["Mathematics", "Physics", "Linguistics"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.2+", minGpa: 3.2,
    link: "https://spbu.ru",
    description: "The oldest university in Russia, producing numerous leaders and scientists.", location: "Saint Petersburg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 243, rank: 243, name: "Novosibirsk State University", country: "Russia", flag: "🇷🇺",
    tuition: "RUB 250,000 / year", tuitionVal: 2800, acceptance: "30%",
    majors: ["Natural Sciences", "Mathematics", "Physics"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://nsu.ru",
    description: "Located in Akademgorodok (Academic City), deeply integrated with scientific research.", location: "Novosibirsk",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 244, rank: 244, name: "University of Warsaw", country: "Poland", flag: "🇵🇱",
    tuition: "€3,000 / year", tuitionVal: 3200, acceptance: "40%",
    majors: ["Computer Science", "Linguistics", "International Relations"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://uw.edu.pl",
    description: "The largest university in Poland and one of the best in Eastern Europe.", location: "Warsaw",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 245, rank: 245, name: "Jagiellonian University", country: "Poland", flag: "🇵🇱",
    tuition: "€4,500 / year", tuitionVal: 4800, acceptance: "35%",
    majors: ["Medicine", "Law", "History"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2,
    link: "https://uj.edu.pl",
    description: "One of the oldest universities in the world, alma mater of Copernicus.", location: "Krakow",
    image: "https://images.unsplash.com/photo-1523050335456-c6bb74957e8c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 246, rank: 246, name: "Charles University", country: "Czechia", flag: "🇨🇿",
    tuition: "€6,000 / year", tuitionVal: 6500, acceptance: "45%",
    majors: ["Medicine", "Humanities", "Mathematics"], sat: "Optional", minSat: 0,
    ielts: "6.5", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0,
    link: "https://cuni.cz",
    description: "The oldest and largest university in the Czech Republic.", location: "Prague",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 247, rank: 247, name: "Czech Technical University in Prague", country: "Czechia", flag: "🇨🇿",
    tuition: "€4,000 / year", tuitionVal: 4300, acceptance: "50%",
    majors: ["Civil Engineering", "Computer Science", "Architecture"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://cvut.cz",
    description: "One of the oldest technological universities in Central Europe.", location: "Prague",
    image: "https://images.unsplash.com/photo-1492538368552-c6508c7a5c55?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 248, rank: 248, name: "Eötvös Loránd University (ELTE)", country: "Hungary", flag: "🇭🇺",
    tuition: "€3,500 / year", tuitionVal: 3800, acceptance: "55%",
    majors: ["Mathematics", "Physics", "Computer Science"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://elte.hu",
    description: "Hungary's oldest and largest university, strongly research-oriented.", location: "Budapest",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 249, rank: 249, name: "University of Szeged", country: "Hungary", flag: "🇭🇺",
    tuition: "€4,000 / year", tuitionVal: 4300, acceptance: "50%",
    majors: ["Medicine", "Dentistry", "Pharmacy"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://u-szeged.hu",
    description: "Highly ranked in Hungary, particularly popular among international medical students.", location: "Szeged",
    image: "https://images.unsplash.com/photo-1621640786029-22ad31054eb7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 250, rank: 250, name: "University of Bucharest", country: "Romania", flag: "🇷🇴",
    tuition: "€3,000 / year", tuitionVal: 3200, acceptance: "60%",
    majors: ["Computer Science", "Foreign Languages", "Mathematics"], sat: "Optional", minSat: 0,
    ielts: "6.0", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0,
    link: "https://unibuc.ro",
    description: "A leading center of excellence in education, research, and culture in Romania.", location: "Bucharest",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80"
  },
  { id: 251, name: "University of Surrey", location: "Guildford", country: "United Kingdom", flag: "🇬🇧", rank: 251, tuition: "$28,000 / year", tuitionVal: 28000, ielts: "6.5+", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2, sat: "Optional", minSat: 0, acceptance: "65%", majors: ["Engineering", "Business", "Space Science"], description: "Known for its exceptional research output and high graduate employability rate.", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800", link: "https://www.surrey.ac.uk" },
  { id: 252, name: "University of Massachusetts Amherst", location: "Amherst", country: "USA", flag: "🇺🇸", rank: 252, tuition: "$36,000 / year", tuitionVal: 36000, ielts: "6.5+", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5, sat: "1250+", minSat: 1250, acceptance: "65%", majors: ["Computer Science", "Business", "Engineering"], description: "The flagship campus of the UMass system, highly ranked for computer science and research.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", link: "https://www.umass.edu" },
  { id: 253, name: "University of Miami", location: "Coral Gables", country: "USA", flag: "🇺🇸", rank: 253, tuition: "$55,000 / year", tuitionVal: 55000, ielts: "7.0+", minIelts: 7.0, gpa: "3.6+", minGpa: 3.6, sat: "1300+", minSat: 1300, acceptance: "28%", majors: ["Marine Biology", "Business", "Pre-Med"], description: "A private research university known for its vibrant campus life and strong marine science programs.", image: "https://images.unsplash.com/photo-1590059345229-8cbdfd2ea78d?auto=format&fit=crop&q=80&w=800", link: "https://www.miami.edu" },
  { id: 254, name: "Dalhousie University", location: "Halifax", country: "Canada", flag: "🇨🇦", rank: 254, tuition: "$22,000 / year", tuitionVal: 22000, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "60%", majors: ["Oceanography", "Law", "Medicine"], description: "One of Canada's oldest universities, globally recognized for its ocean research.", image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=800", link: "https://www.dal.ca" },
  { id: 255, name: "University of Florence", location: "Florence", country: "Italy", flag: "🇮🇹", rank: 255, tuition: "$3,500 / year", tuitionVal: 3500, ielts: "6.0+", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "45%", majors: ["Architecture", "Art History", "Economics"], description: "One of the most important and oldest public comprehensive universities in Italy.", image: "https://images.unsplash.com/photo-1542382103-625d303f8a09?auto=format&fit=crop&q=80&w=800", link: "https://www.unifi.it" },
  { id: 256, name: "RMIT University", location: "Melbourne", country: "Australia", flag: "🇦🇺", rank: 256, tuition: "$30,000 / year", tuitionVal: 30000, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "46%", majors: ["Art & Design", "Architecture", "Engineering"], description: "A global university of technology, design and enterprise, known for practical education.", image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=800", link: "https://www.rmit.edu.au" },
  { id: 257, name: "University of Twente", location: "Enschede", country: "Netherlands", flag: "🇳🇱", rank: 257, tuition: "$12,000 / year", tuitionVal: 12000, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "55%", majors: ["Nanotechnology", "Computer Science", "Engineering"], description: "A pioneering university offering high-tech human touch education and vibrant campus life.", image: "https://images.unsplash.com/photo-1592284906598-6bb75cc922f3?auto=format&fit=crop&q=80&w=800", link: "https://www.utwente.nl" },
  { id: 258, name: "Waseda University", location: "Tokyo", country: "Japan", flag: "🇯🇵", rank: 258, tuition: "$14,000 / year", tuitionVal: 14000, ielts: "6.5+", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2, sat: "1200+", minSat: 1200, acceptance: "17%", majors: ["Political Science", "Economics", "Engineering"], description: "A top private university in Japan, known for producing numerous prime ministers and CEOs.", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=800", link: "https://www.waseda.jp" },
  { id: 259, name: "University of Waikato", location: "Hamilton", country: "New Zealand", flag: "🇳🇿", rank: 259, tuition: "$20,000 / year", tuitionVal: 20000, ielts: "6.0+", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "65%", majors: ["Management", "Education", "Computer Science"], description: "Known for its strong management school and focus on Māori indigenous studies.", image: "https://images.unsplash.com/photo-1604160450925-0eecf56ba859?auto=format&fit=crop&q=80&w=800", link: "https://www.waikato.ac.nz" },
  { id: 260, name: "Vrije Universiteit Brussel", location: "Brussels", country: "Belgium", flag: "🇧🇪", rank: 260, tuition: "$4,500 / year", tuitionVal: 4500, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "40%", majors: ["Engineering", "Social Sciences", "Life Sciences"], description: "An internationally oriented university in the heart of Europe.", image: "https://images.unsplash.com/photo-1559828552-e5c94e0edb8e?auto=format&fit=crop&q=80&w=800", link: "https://www.vub.be" },
  { id: 261, name: "University of Antwerp", location: "Antwerp", country: "Belgium", flag: "🇧🇪", rank: 261, tuition: "$4,000 / year", tuitionVal: 4000, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "42%", majors: ["Business", "Medicine", "Applied Sciences"], description: "Characterized by its high standards in education and internationally competitive research.", image: "https://images.unsplash.com/photo-1629707436066-6b2cb9dcf7cc?auto=format&fit=crop&q=80&w=800", link: "https://www.uantwerpen.be" },
  { id: 262, name: "Birkbeck, University of London", location: "London", country: "United Kingdom", flag: "🇬🇧", rank: 262, tuition: "$24,000 / year", tuitionVal: 24000, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "58%", majors: ["Law", "Psychology", "Humanities"], description: "World-class research and teaching institution, famous for its evening study programs.", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800", link: "https://www.bbk.ac.uk" },
  { id: 263, name: "University of Oulu", location: "Oulu", country: "Finland", flag: "🇫🇮", rank: 263, tuition: "$11,000 / year", tuitionVal: 11000, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "35%", majors: ["Telecommunications", "Engineering", "Business"], description: "An international science university which creates innovation for the future.", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800", link: "https://www.oulu.fi" },
  { id: 264, name: "University of Turku", location: "Turku", country: "Finland", flag: "🇫🇮", rank: 264, tuition: "$10,500 / year", tuitionVal: 10500, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "33%", majors: ["Medicine", "Social Sciences", "Education"], description: "An active academic community of 25,000 students and staff members.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", link: "https://www.utu.fi" },
  { id: 265, name: "Kobe University", location: "Kobe", country: "Japan", flag: "🇯🇵", rank: 265, tuition: "$6,000 / year", tuitionVal: 6000, ielts: "6.0+", minIelts: 6.0, gpa: "3.2+", minGpa: 3.2, sat: "Optional", minSat: 0, acceptance: "22%", majors: ["Economics", "Business Administration", "Law"], description: "One of the oldest and largest national universities in Japan.", image: "https://images.unsplash.com/photo-1590059345229-8cbdfd2ea78d?auto=format&fit=crop&q=80&w=800", link: "https://www.kobe-u.ac.jp" },
  { id: 266, name: "University of Utah", location: "Salt Lake City", country: "USA", flag: "🇺🇸", rank: 266, tuition: "$32,000 / year", tuitionVal: 32000, ielts: "6.5+", minIelts: 6.5, gpa: "3.3+", minGpa: 3.3, sat: "1200+", minSat: 1200, acceptance: "89%", majors: ["Engineering", "Computer Science", "Business"], description: "A public research university highly regarded for its innovation and medical programs.", image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=800", link: "https://www.utah.edu" },
  { id: 267, name: "Syracuse University", location: "Syracuse", country: "USA", flag: "🇺🇸", rank: 267, tuition: "$58,000 / year", tuitionVal: 58000, ielts: "7.0+", minIelts: 7.0, gpa: "3.5+", minGpa: 3.5, sat: "1250+", minSat: 1250, acceptance: "52%", majors: ["Communications", "Architecture", "Information Studies"], description: "A private research university with a beautiful campus and top-tier communications school.", image: "https://images.unsplash.com/photo-1542382103-625d303f8a09?auto=format&fit=crop&q=80&w=800", link: "https://www.syracuse.edu" },
  { id: 268, name: "University of Sussex", location: "Brighton", country: "United Kingdom", flag: "🇬🇧", rank: 268, tuition: "$26,000 / year", tuitionVal: 26000, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "63%", majors: ["Development Studies", "International Relations", "Psychology"], description: "World-leading in Development Studies and located in the vibrant city of Brighton.", image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=800", link: "https://www.sussex.ac.uk" },
  { id: 269, name: "Heriot-Watt University", location: "Edinburgh", country: "United Kingdom", flag: "🇬🇧", rank: 269, tuition: "$23,000 / year", tuitionVal: 23000, ielts: "6.0+", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "70%", majors: ["Engineering", "Business", "Mathematics"], description: "A global university with campuses in the UK, Dubai, and Malaysia.", image: "https://images.unsplash.com/photo-1592284906598-6bb75cc922f3?auto=format&fit=crop&q=80&w=800", link: "https://www.hw.ac.uk" },
  { id: 270, name: "Macquarie University", location: "Sydney", country: "Australia", flag: "🇦🇺", rank: 270, tuition: "$28,000 / year", tuitionVal: 28000, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "50%", majors: ["Finance", "Linguistics", "Environmental Science"], description: "Recognized globally for its expertise in areas like business, health, and medical sciences.", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=800", link: "https://www.mq.edu.au" },
  { id: 271, name: "University of Victoria", location: "Victoria", country: "Canada", flag: "🇨🇦", rank: 271, tuition: "$21,000 / year", tuitionVal: 21000, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "63%", majors: ["Earth Sciences", "Law", "Business"], description: "Offers a rich and supportive learning environment with a focus on civic engagement.", image: "https://images.unsplash.com/photo-1604160450925-0eecf56ba859?auto=format&fit=crop&q=80&w=800", link: "https://www.uvic.ca" },
  { id: 272, name: "Simon Fraser University", location: "Burnaby", country: "Canada", flag: "🇨🇦", rank: 272, tuition: "$24,000 / year", tuitionVal: 24000, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "59%", majors: ["Computer Science", "Communication", "Criminology"], description: "Consistently ranked among Canada's top comprehensive universities.", image: "https://images.unsplash.com/photo-1559828552-e5c94e0edb8e?auto=format&fit=crop&q=80&w=800", link: "https://www.sfu.ca" },
  { id: 273, name: "University of Tartu", location: "Tartu", country: "Estonia", flag: "🇪🇪", rank: 273, tuition: "$5,000 / year", tuitionVal: 5000, ielts: "6.0+", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "35%", majors: ["IT", "Medicine", "Humanities"], description: "The oldest and largest university in Estonia, known for strong IT and tech programs.", image: "https://images.unsplash.com/photo-1629707436066-6b2cb9dcf7cc?auto=format&fit=crop&q=80&w=800", link: "https://ut.ee" },
  { id: 274, name: "University of Szeged", location: "Szeged", country: "Hungary", flag: "🇭🇺", rank: 274, tuition: "$6,500 / year", tuitionVal: 6500, ielts: "6.0+", minIelts: 6.0, gpa: "2.8+", minGpa: 2.8, sat: "Optional", minSat: 0, acceptance: "48%", majors: ["Medicine", "Pharmacy", "Dentistry"], description: "One of Hungary's leading universities, offering high-quality medical and science education.", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800", link: "https://u-szeged.hu" },
  { id: 275, name: "Jagiellonian University", location: "Kraków", country: "Poland", flag: "🇵🇱", rank: 275, tuition: "$5,000 / year", tuitionVal: 5000, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "40%", majors: ["Medicine", "Law", "International Relations"], description: "The oldest university in Poland, blending rich history with modern academic excellence.", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800", link: "https://en.uj.edu.pl" },
  { id: 276, name: "University of Lisbon", location: "Lisbon", country: "Portugal", flag: "🇵🇹", rank: 276, tuition: "$4,500 / year", tuitionVal: 4500, ielts: "6.0+", minIelts: 6.0, gpa: "2.8+", minGpa: 2.8, sat: "Optional", minSat: 0, acceptance: "45%", majors: ["Engineering", "Architecture", "Economics"], description: "The largest university in Portugal, known for its extensive research programs.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", link: "https://www.ulisboa.pt" },
  { id: 277, name: "Universidad de Palermo", location: "Buenos Aires", country: "Argentina", flag: "🇦🇷", rank: 277, tuition: "$8,000 / year", tuitionVal: 8000, ielts: "6.0+", minIelts: 6.0, gpa: "2.5+", minGpa: 2.5, sat: "Optional", minSat: 0, acceptance: "70%", majors: ["Design", "Business", "Law"], description: "Renowned globally for its Art and Design programs and strong international community.", image: "https://images.unsplash.com/photo-1590059345229-8cbdfd2ea78d?auto=format&fit=crop&q=80&w=800", link: "https://www.palermo.edu" },
  { id: 278, name: "University of Johannesburg", location: "Johannesburg", country: "South Africa", flag: "🇿🇦", rank: 278, tuition: "$5,500 / year", tuitionVal: 5500, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "30%", majors: ["Finance", "Engineering", "Arts"], description: "A comprehensive, dynamic university promoting excellence in teaching and research.", image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=800", link: "https://www.uj.ac.za" },
  { id: 279, name: "Aarhus University", location: "Aarhus", country: "Denmark", flag: "🇩🇰", rank: 279, tuition: "$12,000 / year", tuitionVal: 12000, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "40%", majors: ["Business", "Engineering", "Medicine"], description: "A top-ranked European university with a strong focus on research and innovation.", image: "https://images.unsplash.com/photo-1542382103-625d303f8a09?auto=format&fit=crop&q=80&w=800", link: "https://international.au.dk" },
  { id: 280, name: "Chalmers University of Technology", location: "Gothenburg", country: "Sweden", flag: "🇸🇪", rank: 280, tuition: "$16,000 / year", tuitionVal: 16000, ielts: "6.5+", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2, sat: "Optional", minSat: 0, acceptance: "35%", majors: ["Architecture", "Engineering", "Technology"], description: "Highly respected for its technology, science, and architecture education.", image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=800", link: "https://www.chalmers.se" },
  { id: 281, name: "Bilkent University", location: "Ankara", country: "Turkey", flag: "🇹🇷", rank: 281, tuition: "$14,500 / year", tuitionVal: 14500, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "25%", majors: ["Engineering", "Business", "International Relations"], description: "The first private, non-profit university in Turkey, offering top-tier education in English.", image: "https://images.unsplash.com/photo-1592284906598-6bb75cc922f3?auto=format&fit=crop&q=80&w=800", link: "https://w3.bilkent.edu.tr" },
  { id: 282, name: "Kyung Hee University", location: "Seoul", country: "South Korea", flag: "🇰🇷", rank: 282, tuition: "$8,000 / year", tuitionVal: 8000, ielts: "6.0+", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "38%", majors: ["Medicine", "Hospitality", "Business"], description: "Famous for its stunning campus and exceptional traditional medicine and hospitality programs.", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=800", link: "https://www.khu.ac.kr" },
  { id: 283, name: "Sun Yat-sen University", location: "Guangzhou", country: "China", flag: "🇨🇳", rank: 283, tuition: "$6,500 / year", tuitionVal: 6500, ielts: "6.0+", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "20%", majors: ["Business", "Medicine", "Engineering"], description: "A major public research university founded by Dr. Sun Yat-sen.", image: "https://images.unsplash.com/photo-1604160450925-0eecf56ba859?auto=format&fit=crop&q=80&w=800", link: "https://www.sysu.edu.cn" },
  { id: 284, name: "National Taiwan University of Science and Technology", location: "Taipei", country: "Taiwan", flag: "🇹🇼", rank: 284, tuition: "$4,500 / year", tuitionVal: 4500, ielts: "6.0+", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "32%", majors: ["Engineering", "Management", "Design"], description: "Taiwan's leading technological university with strong industry ties.", image: "https://images.unsplash.com/photo-1559828552-e5c94e0edb8e?auto=format&fit=crop&q=80&w=800", link: "https://www.ntust.edu.tw" },
  { id: 285, name: "University of Cincinnati", location: "Cincinnati", country: "USA", flag: "🇺🇸", rank: 285, tuition: "$28,000 / year", tuitionVal: 28000, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "1150+", minSat: 1150, acceptance: "76%", majors: ["Design", "Architecture", "Engineering"], description: "Pioneer of cooperative education, offering extensive real-world experience.", image: "https://images.unsplash.com/photo-1629707436066-6b2cb9dcf7cc?auto=format&fit=crop&q=80&w=800", link: "https://www.uc.edu" },
  { id: 286, name: "University of Colorado Boulder", location: "Boulder", country: "USA", flag: "🇺🇸", rank: 286, tuition: "$38,000 / year", tuitionVal: 38000, ielts: "6.5+", minIelts: 6.5, gpa: "3.4+", minGpa: 3.4, sat: "1200+", minSat: 1200, acceptance: "84%", majors: ["Aerospace", "Environmental Science", "Physics"], description: "Set against the Rocky Mountains, renowned for its aerospace and sciences programs.", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800", link: "https://www.colorado.edu" },
  { id: 287, name: "University of Illinois Chicago", location: "Chicago", country: "USA", flag: "🇺🇸", rank: 287, tuition: "$30,000 / year", tuitionVal: 30000, ielts: "6.5+", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2, sat: "1100+", minSat: 1100, acceptance: "73%", majors: ["Nursing", "Business", "Engineering"], description: "Chicago's largest university, deeply engaged with the city's medical and business sectors.", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800", link: "https://www.uic.edu" },
  { id: 288, name: "Binghamton University", location: "Binghamton", country: "USA", flag: "🇺🇸", rank: 288, tuition: "$25,000 / year", tuitionVal: 25000, ielts: "6.5+", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5, sat: "1300+", minSat: 1300, acceptance: "44%", majors: ["Accounting", "Computer Science", "Biology"], description: "The premier public university in the SUNY system, offering Ivy-caliber education at a public price.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", link: "https://www.binghamton.edu" },
  { id: 289, name: "Loughborough University", location: "Loughborough", country: "United Kingdom", flag: "🇬🇧", rank: 289, tuition: "$25,000 / year", tuitionVal: 25000, ielts: "6.5+", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2, sat: "Optional", minSat: 0, acceptance: "68%", majors: ["Sports Science", "Engineering", "Business"], description: "Globally recognized for sports-related subjects and excellent student experience.", image: "https://images.unsplash.com/photo-1590059345229-8cbdfd2ea78d?auto=format&fit=crop&q=80&w=800", link: "https://www.lboro.ac.uk" },
  { id: 290, name: "University of Reading", location: "Reading", country: "United Kingdom", flag: "🇬🇧", rank: 290, tuition: "$24,500 / year", tuitionVal: 24500, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "70%", majors: ["Agriculture", "Meteorology", "Business"], description: "Outstanding reputation for environmental science, agriculture, and business programs.", image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=800", link: "https://www.reading.ac.uk" },
  { id: 291, name: "Trinity College Dublin", location: "Dublin", country: "Ireland", flag: "🇮🇪", rank: 291, tuition: "$25,000 / year", tuitionVal: 25000, ielts: "6.5+", minIelts: 6.5, gpa: "3.3+", minGpa: 3.3, sat: "1250+", minSat: 1250, acceptance: "33%", majors: ["Literature", "History", "Computer Science"], description: "Ireland's premier university, located in the heart of Dublin with a rich historical legacy.", image: "https://images.unsplash.com/photo-1542382103-625d303f8a09?auto=format&fit=crop&q=80&w=800", link: "https://www.tcd.ie" },
  { id: 292, name: "University College Dublin", location: "Dublin", country: "Ireland", flag: "🇮🇪", rank: 292, tuition: "$24,000 / year", tuitionVal: 24000, ielts: "6.5+", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2, sat: "Optional", minSat: 0, acceptance: "45%", majors: ["Veterinary Science", "Business", "Engineering"], description: "One of Europe's leading research-intensive universities.", image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=800", link: "https://www.ucd.ie" },
  { id: 293, name: "Linköping University", location: "Linköping", country: "Sweden", flag: "🇸🇪", rank: 293, tuition: "$14,000 / year", tuitionVal: 14000, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "40%", majors: ["Software Engineering", "Medicine", "Education"], description: "Known for its innovative education formats and close collaboration with the business world.", image: "https://images.unsplash.com/photo-1592284906598-6bb75cc922f3?auto=format&fit=crop&q=80&w=800", link: "https://liu.se" },
  { id: 294, name: "Umeå University", location: "Umeå", country: "Sweden", flag: "🇸🇪", rank: 294, tuition: "$13,500 / year", tuitionVal: 13500, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "42%", majors: ["Design", "Life Sciences", "Arts"], description: "Offers world-class research and a highly vibrant campus in northern Sweden.", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=800", link: "https://www.umu.se" },
  { id: 295, name: "University of Bergen", location: "Bergen", country: "Norway", flag: "🇳🇴", rank: 295, tuition: "Free / $1,000 fees", tuitionVal: 1000, ielts: "6.5+", minIelts: 6.5, gpa: "3.2+", minGpa: 3.2, sat: "Optional", minSat: 0, acceptance: "29%", majors: ["Marine Biology", "Climate Science", "Humanities"], description: "An internationally recognized research university, especially strong in marine research.", image: "https://images.unsplash.com/photo-1604160450925-0eecf56ba859?auto=format&fit=crop&q=80&w=800", link: "https://www.uib.no" },
  { id: 296, name: "University of Tromsø", location: "Tromsø", country: "Norway", flag: "🇳🇴", rank: 296, tuition: "Free / $1,000 fees", tuitionVal: 1000, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "33%", majors: ["Arctic Studies", "Fisheries", "Medicine"], description: "The northernmost university in the world, specializing in Arctic issues.", image: "https://images.unsplash.com/photo-1559828552-e5c94e0edb8e?auto=format&fit=crop&q=80&w=800", link: "https://en.uit.no" },
  { id: 297, name: "National Chiao Tung University", location: "Hsinchu", country: "Taiwan", flag: "🇹🇼", rank: 297, tuition: "$4,500 / year", tuitionVal: 4500, ielts: "6.0+", minIelts: 6.0, gpa: "3.3+", minGpa: 3.3, sat: "Optional", minSat: 0, acceptance: "25%", majors: ["Electrical Engineering", "Computer Science", "Management"], description: "A top tech university in Taiwan, heavily feeding talent into the local semiconductor industry.", image: "https://images.unsplash.com/photo-1629707436066-6b2cb9dcf7cc?auto=format&fit=crop&q=80&w=800", link: "https://www.nycu.edu.tw" },
  { id: 298, name: "Indian Institute of Technology Delhi", location: "New Delhi", country: "India", flag: "🇮🇳", rank: 298, tuition: "$4,000 / year", tuitionVal: 4000, ielts: "6.5+", minIelts: 6.5, gpa: "3.5+", minGpa: 3.5, sat: "Optional", minSat: 0, acceptance: "2%", majors: ["Computer Science", "Mechanical Engineering", "Civil Engineering"], description: "One of India's premier engineering institutes, extremely competitive with high global standing.", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800", link: "https://home.iitd.ac.in" },
  { id: 299, name: "University of Pretoria", location: "Pretoria", country: "South Africa", flag: "🇿🇦", rank: 299, tuition: "$4,500 / year", tuitionVal: 4500, ielts: "6.5+", minIelts: 6.5, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "35%", majors: ["Veterinary Science", "Law", "Theology"], description: "One of Africa's top universities, featuring the only veterinary faculty in South Africa.", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800", link: "https://www.up.ac.za" },
  { id: 300, name: "Massey University", location: "Palmerston North", country: "New Zealand", flag: "🇳🇿", rank: 300, tuition: "$21,000 / year", tuitionVal: 21000, ielts: "6.0+", minIelts: 6.0, gpa: "3.0+", minGpa: 3.0, sat: "Optional", minSat: 0, acceptance: "60%", majors: ["Agriculture", "Aviation", "Veterinary Medicine"], description: "Known for its applied sciences and offering New Zealand's only aviation and vet programs.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", link: "https://www.massey.ac.nz" }
  ];