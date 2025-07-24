// Data for entrance exams - both Indian and International
const ENTRANCE_EXAMS = [
    {
        id: "jee-main",
        name: "JEE Main",
        fullName: "Joint Entrance Examination Main",
        category: "Engineering",
        conductedBy: "National Testing Agency (NTA)",
        eligibility: "Candidates who have passed class 12th or equivalent examination with Physics, Chemistry, and Mathematics as compulsory subjects.",
        applicationFee: {
            general: "₹1000",
            reserved: "₹500"
        },
        examFrequency: "Twice a year (January and April)",
        examMode: "Computer Based Test (CBT)",
        languages: ["English", "Hindi", "Gujarati", "Assamese", "Bengali", "Kannada", "Malayalam", "Marathi", "Odia", "Punjabi", "Tamil", "Telugu", "Urdu"],
        examDuration: "3 hours",
        totalMarks: 300,
        examPattern: [
            {
                subject: "Physics",
                questions: 25,
                marks: 100
            },
            {
                subject: "Chemistry",
                questions: 25,
                marks: 100
            },
            {
                subject: "Mathematics",
                questions: 25,
                marks: 100
            }
        ],
        cutoffs: {
            "2023": {
                "General": 90.7,
                "OBC-NCL": 73.6,
                "SC": 51.9,
                "ST": 37.2,
                "EWS": 75.6
            },
            "2022": {
                "General": 88.4,
                "OBC-NCL": 67.2,
                "SC": 43.1,
                "ST": 26.7,
                "EWS": 63.1
            }
        },
        officialWebsite: "https://jeemain.nta.nic.in/",
        regions: ["North India", "South India", "East India", "West India", "Central India", "Northeast India"],
        description: "JEE Main is the first phase of the Joint Entrance Examination conducted by the National Testing Agency (NTA) for admission to undergraduate engineering programs at NITs, IIITs, other Centrally Funded Technical Institutions (CFTIs), and institutions funded by participating State Governments. It is also an eligibility test for JEE Advanced, which is conducted for admission to IITs."
    },
    {
        id: "neet-ug",
        name: "NEET-UG",
        fullName: "National Eligibility cum Entrance Test (Undergraduate)",
        category: "Medical",
        conductedBy: "National Testing Agency (NTA)",
        eligibility: "Candidates who have completed or will appear for Class 12th with Physics, Chemistry, Biology/Biotechnology, and English as core subjects.",
        applicationFee: {
            general: "₹1600",
            reserved: "₹900"
        },
        examFrequency: "Once a year",
        examMode: "Pen and Paper Based",
        languages: ["English", "Hindi", "Assamese", "Bengali", "Gujarati", "Kannada", "Malayalam", "Marathi", "Odia", "Punjabi", "Tamil", "Telugu", "Urdu"],
        examDuration: "3 hours 20 minutes",
        totalMarks: 720,
        examPattern: [
            {
                subject: "Physics",
                questions: 45,
                marks: 180
            },
            {
                subject: "Chemistry",
                questions: 45,
                marks: 180
            },
            {
                subject: "Biology (Botany + Zoology)",
                questions: 90,
                marks: 360
            }
        ],
        cutoffs: {
            "2023": {
                "General": 720,
                "OBC-NCL": 715,
                "SC": 610,
                "ST": 605,
                "EWS": 705
            },
            "2022": {
                "General": 715,
                "OBC-NCL": 695,
                "SC": 600,
                "ST": 590,
                "EWS": 685
            }
        },
        officialWebsite: "https://neet.nta.nic.in/",
        regions: ["North India", "South India", "East India", "West India", "Central India", "Northeast India"],
        description: "NEET-UG is the single entrance examination for admissions to MBBS, BDS, AYUSH, and other medical courses in India. It replaced the All India Pre-Medical Test (AIPMT) and all individual MBBS exams conducted by states or colleges themselves."
    },
    {
        id: "cat",
        name: "CAT",
        fullName: "Common Admission Test",
        category: "Management",
        conductedBy: "Indian Institutes of Management (IIMs)",
        eligibility: "Bachelor's degree with at least 50% marks or equivalent CGPA (45% for reserved categories).",
        applicationFee: {
            general: "₹2200",
            reserved: "₹1100"
        },
        examFrequency: "Once a year (November)",
        examMode: "Computer Based Test (CBT)",
        languages: ["English"],
        examDuration: "2 hours",
        totalMarks: 300,
        examPattern: [
            {
                section: "Verbal Ability & Reading Comprehension (VARC)",
                duration: "40 minutes",
                questions: 24
            },
            {
                section: "Data Interpretation & Logical Reasoning (DILR)",
                duration: "40 minutes",
                questions: 20
            },
            {
                section: "Quantitative Ability (QA)",
                duration: "40 minutes",
                questions: 22
            }
        ],
        cutoffs: {
            "2023": {
                "IIM Ahmedabad": 99,
                "IIM Bangalore": 99,
                "IIM Calcutta": 99,
                "IIM Lucknow": 98,
                "IIM Indore": 98
            },
            "2022": {
                "IIM Ahmedabad": 99,
                "IIM Bangalore": 99,
                "IIM Calcutta": 99,
                "IIM Lucknow": 97,
                "IIM Indore": 97
            }
        },
        officialWebsite: "https://iimcat.ac.in/",
        regions: ["North India", "South India", "East India", "West India", "Central India", "Northeast India"],
        description: "The Common Admission Test (CAT) is a computer-based test conducted by the Indian Institutes of Management as a pre-requisite for admission to various management programs of IIMs, IITs, and other prestigious business schools. The test measures candidates' abilities in Verbal Ability & Reading Comprehension, Data Interpretation & Logical Reasoning, and Quantitative Ability."
    },
    {
        id: "clat",
        name: "CLAT",
        fullName: "Common Law Admission Test",
        category: "Law",
        conductedBy: "Consortium of National Law Universities",
        eligibility: "For UG: 10+2 with minimum 45% marks (40% for reserved categories). For PG: LLB degree with minimum 50% marks (45% for reserved categories).",
        applicationFee: {
            general: "₹4000",
            reserved: "₹3500"
        },
        examFrequency: "Once a year (December)",
        examMode: "Computer Based Test (CBT)",
        languages: ["English"],
        examDuration: "2 hours",
        totalMarks: 150,
        examPattern: [
            {
                section: "English Language",
                questions: 30,
                marks: 30
            },
            {
                section: "Current Affairs & GK",
                questions: 35,
                marks: 35
            },
            {
                section: "Legal Reasoning",
                questions: 35,
                marks: 35
            },
            {
                section: "Logical Reasoning",
                questions: 30,
                marks: 30
            },
            {
                section: "Quantitative Techniques",
                questions: 20,
                marks: 20
            }
        ],
        cutoffs: {
            "2023": {
                "NLSIU Bangalore": 116,
                "NALSAR Hyderabad": 110,
                "NLIU Bhopal": 105,
                "NLU Delhi": 115,
                "WBNUJS Kolkata": 108
            },
            "2022": {
                "NLSIU Bangalore": 115,
                "NALSAR Hyderabad": 109,
                "NLIU Bhopal": 102,
                "NLU Delhi": 113,
                "WBNUJS Kolkata": 106
            }
        },
        officialWebsite: "https://consortiumofnlus.ac.in/clat/",
        regions: ["North India", "South India", "East India", "West India", "Central India", "Northeast India"],
        description: "The Common Law Admission Test (CLAT) is a centralized entrance examination for admissions to undergraduate and postgraduate law programs offered by 22 National Law Universities in India. It tests candidates on English, General Knowledge, Legal Reasoning, Logical Reasoning, and Quantitative Techniques."
    },
    {
        id: "gate",
        name: "GATE",
        fullName: "Graduate Aptitude Test in Engineering",
        category: "Engineering",
        conductedBy: "IISc and 7 IITs (on rotational basis)",
        eligibility: "Bachelor's degree in Engineering/Technology/Architecture/Science/Commerce/Arts (3rd year students may also apply).",
        applicationFee: {
            general: "₹1800",
            reserved: "₹900"
        },
        examFrequency: "Once a year (February)",
        examMode: "Computer Based Test (CBT)",
        languages: ["English"],
        examDuration: "3 hours",
        totalMarks: 100,
        examPattern: [
            {
                section: "General Aptitude (GA)",
                questions: 10,
                marks: 15
            },
            {
                section: "Subject-specific questions",
                questions: "Varies by subject",
                marks: 85
            }
        ],
        cutoffs: {
            "2023": {
                "General": 33.81,
                "OBC-NCL": 30.42,
                "SC/ST/PwD": 22.54
            },
            "2022": {
                "General": 32.46,
                "OBC-NCL": 29.21,
                "SC/ST/PwD": 21.64
            }
        },
        officialWebsite: "https://gate.iitb.ac.in/",
        regions: ["North India", "South India", "East India", "West India", "Central India", "Northeast India"],
        description: "The Graduate Aptitude Test in Engineering (GATE) is an examination conducted jointly by the Indian Institute of Science (IISc), Bangalore and seven Indian Institutes of Technology (IITs) on behalf of the National Coordination Board (NCB)-GATE, Department of Higher Education, Ministry of Education (MoE), Government of India. It tests the comprehensive understanding of various undergraduate subjects in Engineering, Technology, Architecture, Science, Commerce, and Arts."
    },
    {
        id: "ielts",
        name: "IELTS",
        fullName: "International English Language Testing System",
        category: "International",
        conductedBy: "British Council, IDP: IELTS Australia and Cambridge Assessment English",
        eligibility: "No formal qualification requirements, but candidates should be at least 16 years old.",
        applicationFee: {
            general: "₹15,500"
        },
        examFrequency: "Multiple sessions every month",
        examMode: "Paper-based or Computer-delivered",
        languages: ["English"],
        examDuration: "2 hours 45 minutes",
        totalMarks: "Band score from 1-9",
        examPattern: [
            {
                section: "Listening",
                duration: "30 minutes",
                questions: 40
            },
            {
                section: "Reading",
                duration: "60 minutes",
                questions: 40
            },
            {
                section: "Writing",
                duration: "60 minutes",
                tasks: 2
            },
            {
                section: "Speaking",
                duration: "11-14 minutes",
                format: "Face-to-face interview"
            }
        ],
        cutoffs: {
            "General": {
                "Most UK Universities": "6.0-6.5",
                "Most Australian Universities": "6.5-7.0",
                "Most Canadian Universities": "6.5",
                "Most US Universities": "6.5-7.0"
            }
        },
        officialWebsite: "https://www.ielts.org/",
        regions: ["International"],
        description: "The International English Language Testing System (IELTS) is designed to help you work, study or migrate to a country where English is the native language. This includes countries such as Australia, Canada, New Zealand, the UK and USA. It is one of the most widely accepted English language tests globally."
    },
    {
        id: "toefl",
        name: "TOEFL",
        fullName: "Test of English as a Foreign Language",
        category: "International",
        conductedBy: "Educational Testing Service (ETS)",
        eligibility: "No formal qualification requirements.",
        applicationFee: {
            general: "₹14,500"
        },
        examFrequency: "Multiple sessions every month",
        examMode: "Internet-based Test (iBT)",
        languages: ["English"],
        examDuration: "3 hours",
        totalMarks: 120,
        examPattern: [
            {
                section: "Reading",
                duration: "54-72 minutes",
                questions: "30-40"
            },
            {
                section: "Listening",
                duration: "41-57 minutes",
                questions: "28-39"
            },
            {
                section: "Speaking",
                duration: "17 minutes",
                tasks: 4
            },
            {
                section: "Writing",
                duration: "50 minutes",
                tasks: 2
            }
        ],
        cutoffs: {
            "General": {
                "Most US Universities": "80-100",
                "Most UK Universities": "88-100",
                "Most Canadian Universities": "86-100",
                "Most Australian Universities": "79-90"
            }
        },
        officialWebsite: "https://www.ets.org/toefl/",
        regions: ["International"],
        description: "The Test of English as a Foreign Language (TOEFL) is a standardized test to measure the English language ability of non-native speakers wishing to enroll in English-speaking universities. The test is accepted by more than 11,000 universities and other institutions in over 190 countries and territories."
    },
    {
        id: "gre",
        name: "GRE",
        fullName: "Graduate Record Examination",
        category: "International",
        conductedBy: "Educational Testing Service (ETS)",
        eligibility: "No specific eligibility criteria, but generally taken by graduates seeking admission to graduate schools.",
        applicationFee: {
            general: "₹16,000"
        },
        examFrequency: "Multiple sessions throughout the year",
        examMode: "Computer-based",
        languages: ["English"],
        examDuration: "3 hours 45 minutes",
        totalMarks: "Verbal Reasoning and Quantitative Reasoning (130-170 each), Analytical Writing (0-6)",
        examPattern: [
            {
                section: "Analytical Writing",
                duration: "60 minutes",
                tasks: 2
            },
            {
                section: "Verbal Reasoning",
                duration: "60 minutes",
                questions: 40
            },
            {
                section: "Quantitative Reasoning",
                duration: "70 minutes",
                questions: 40
            }
        ],
        cutoffs: {
            "General": {
                "Top US Universities": "320+",
                "Good US Universities": "300-320",
                "Average US Universities": "290-300"
            }
        },
        officialWebsite: "https://www.ets.org/gre/",
        regions: ["International"],
        description: "The Graduate Record Examination (GRE) is a standardized test that is an admissions requirement for many graduate schools in the United States and Canada. The GRE is owned and administered by Educational Testing Service (ETS). The test was established in 1936 by the Carnegie Foundation for the Advancement of Teaching."
    },
    {
        id: "gmat",
        name: "GMAT",
        fullName: "Graduate Management Admission Test",
        category: "International",
        conductedBy: "Graduate Management Admission Council (GMAC)",
        eligibility: "No specific eligibility criteria, but generally taken by graduates seeking admission to business schools.",
        applicationFee: {
            general: "₹21,000"
        },
        examFrequency: "Multiple sessions throughout the year",
        examMode: "Computer-based",
        languages: ["English"],
        examDuration: "3 hours 30 minutes",
        totalMarks: 800,
        examPattern: [
            {
                section: "Analytical Writing Assessment",
                duration: "30 minutes",
                tasks: 1
            },
            {
                section: "Integrated Reasoning",
                duration: "30 minutes",
                questions: 12
            },
            {
                section: "Quantitative Reasoning",
                duration: "62 minutes",
                questions: 31
            },
            {
                section: "Verbal Reasoning",
                duration: "65 minutes",
                questions: 36
            }
        ],
        cutoffs: {
            "General": {
                "Top Business Schools": "720-730+",
                "Good Business Schools": "680-720",
                "Average Business Schools": "600-680"
            }
        },
        officialWebsite: "https://www.gmac.com/",
        regions: ["International"],
        description: "The Graduate Management Admission Test (GMAT) is a computer adaptive test intended to assess certain analytical, writing, quantitative, verbal, and reading skills in written English for use in admission to a graduate management program, such as an MBA program. It is required for admission to many MBA programs globally."
    },
    {
        id: "sat",
        name: "SAT",
        fullName: "Scholastic Assessment Test",
        category: "International",
        conductedBy: "College Board",
        eligibility: "No specific eligibility criteria. Usually taken by high school students applying to undergraduate programs.",
        applicationFee: {
            general: "₹8,000"
        },
        examFrequency: "7 times per year (March, May, June, August, October, November, December)",
        examMode: "Paper-based or Digital (depending on location)",
        languages: ["English"],
        examDuration: "3 hours",
        totalMarks: 1600,
        examPattern: [
            {
                section: "Evidence-Based Reading and Writing",
                duration: "65 minutes",
                questions: 52,
                marks: 800
            },
            {
                section: "Math",
                duration: "80 minutes",
                questions: 58,
                marks: 800
            }
        ],
        cutoffs: {
            "General": {
                "Ivy League Universities": "1500+",
                "Top US Universities": "1450-1500",
                "Competitive US Universities": "1350-1450",
                "Average US Universities": "1050-1350"
            }
        },
        officialWebsite: "https://satsuite.collegeboard.org/sat",
        regions: ["International"],
        description: "The SAT is a standardized test widely used for college admissions in the United States. It was first introduced in 1926, and its name and scoring have changed several times. It was originally called the Scholastic Aptitude Test, then the Scholastic Assessment Test. It tests writing skills, critical reading, and mathematics."
    },
    {
        id: "pte",
        name: "PTE Academic",
        fullName: "Pearson Test of English Academic",
        category: "International",
        conductedBy: "Pearson PLC",
        eligibility: "No formal qualification requirements.",
        applicationFee: {
            general: "₹14,700"
        },
        examFrequency: "Multiple sessions throughout the year",
        examMode: "Computer-based",
        languages: ["English"],
        examDuration: "2 hours",
        totalMarks: "10-90 (Score scale)",
        examPattern: [
            {
                section: "Speaking & Writing",
                duration: "54-67 minutes",
                tasks: "Various"
            },
            {
                section: "Reading",
                duration: "29-30 minutes",
                tasks: "Various"
            },
            {
                section: "Listening",
                duration: "30-43 minutes",
                tasks: "Various"
            }
        ],
        cutoffs: {
            "General": {
                "Most Australian Universities": "58-65",
                "Most UK Universities": "51-58",
                "Most Canadian Universities": "58-65",
                "Most US Universities": "45-65"
            }
        },
        officialWebsite: "https://www.pearsonpte.com/",
        regions: ["International"],
        description: "The Pearson Test of English Academic (PTE Academic) is a computer-based English language test aimed at non-native English speakers wanting to study abroad. It tests Reading, Writing, Listening and Speaking. The test is conducted and managed by Pearson PLC and is recognized by thousands of academic programs worldwide."
    }
];

// Data for colleges
const COLLEGES = [
    {
        id: "iit-delhi",
        name: "Indian Institute of Technology Delhi",
        location: "New Delhi, Delhi",
        category: "Engineering",
        established: 1961,
        description: "IIT Delhi is one of India's most prestigious engineering institutions and has been consistently ranked among the top engineering colleges in the country. It offers undergraduate, postgraduate, and doctoral programs in various engineering disciplines.",
        website: "https://home.iitd.ac.in/",
        ranking: {
            "NIRF 2023": 2,
            "QS World 2023": 197
        },
        programs: ["B.Tech", "M.Tech", "M.Sc", "MBA", "Ph.D"],
        facilities: ["Central Library", "Sports Complex", "Hostels", "Hospital", "Research Labs", "Incubation Center"],
        acceptedExams: ["JEE Advanced", "GATE", "JAM"],
        avgPlacement: "₹18-20 LPA (2023)",
        notableAlumni: ["Sachin Bansal (Flipkart Co-founder)", "Binny Bansal (Flipkart Co-founder)", "Raghuram Rajan (Former RBI Governor)"]
    },
    {
        id: "iit-bombay",
        name: "Indian Institute of Technology Bombay",
        location: "Mumbai, Maharashtra",
        category: "Engineering",
        established: 1958,
        description: "IIT Bombay is recognized worldwide as a leader in the field of engineering education and research. It was founded in 1958 with foreign assistance from UNESCO and the Soviet Union. It is recognized worldwide as a leader in engineering education and research.",
        website: "https://www.iitb.ac.in/",
        ranking: {
            "NIRF 2023": 3,
            "QS World 2023": 172
        },
        programs: ["B.Tech", "B.Des", "M.Tech", "M.Des", "MBA", "Ph.D"],
        facilities: ["Central Library", "Sports Complex", "Hostels", "Hospital", "Research Labs", "Incubation Center", "Swimming Pool"],
        acceptedExams: ["JEE Advanced", "GATE", "JAM", "CEED"],
        avgPlacement: "₹20-22 LPA (2023)",
        notableAlumni: ["Nandan Nilekani (Infosys Co-founder)", "Manohar Parrikar (Former Defense Minister)", "Anil Kakodkar (Nuclear Scientist)"]
    },
    {
        id: "aiims-delhi",
        name: "All India Institute of Medical Sciences Delhi",
        location: "New Delhi, Delhi",
        category: "Medical",
        established: 1956,
        description: "AIIMS Delhi is a public medical school and hospital in New Delhi, India. It is an autonomous body established under an Act of Parliament. It has consistently ranked first among medical institutions in India and is widely regarded as a pioneer in medical education and research.",
        website: "https://www.aiims.edu/",
        ranking: {
            "NIRF 2023": 1
        },
        programs: ["MBBS", "B.Sc Nursing", "MD/MS", "M.Ch", "DM", "Ph.D"],
        facilities: ["Hospital Complex", "Advanced Research Labs", "Medical Library", "Hostels", "Sports Facilities"],
        acceptedExams: ["NEET-UG", "NEET-PG", "AIIMS Entrance"],
        avgPlacement: "Government Service / Residency",
        notableAlumni: ["Dr. Naresh Trehan (Founder, Medanta)", "Dr. P Venugopal (Former AIIMS Director)", "Dr. Randeep Guleria (Former AIIMS Director)"]
    },
    {
        id: "iim-ahmedabad",
        name: "Indian Institute of Management Ahmedabad",
        location: "Ahmedabad, Gujarat",
        category: "Management",
        established: 1961,
        description: "IIM Ahmedabad is consistently ranked as one of the top business schools in India and Asia. It was established in 1961 as the second Indian Institute of Management with the active collaboration of the Government of India, Government of Gujarat, Harvard Business School, and industry.",
        website: "https://www.iima.ac.in/",
        ranking: {
            "NIRF 2023": 1
        },
        programs: ["MBA", "MBA-PGPX", "Ph.D", "Executive Education"],
        facilities: ["Ravi J. Matthai Auditorium", "Harvard-style Classrooms", "Library", "Computing Facilities", "Sports Complex", "Student Hostels"],
        acceptedExams: ["CAT", "GMAT"],
        avgPlacement: "₹32-35 LPA (2023)",
        notableAlumni: ["Raghuram Rajan (Former RBI Governor)", "KV Kamath (Former ICICI Bank CEO)", "Harsha Bhogle (Cricket Commentator)"]
    },
    {
        id: "nlsiu-bangalore",
        name: "National Law School of India University",
        location: "Bangalore, Karnataka",
        category: "Law",
        established: 1987,
        description: "NLSIU Bangalore is India's first National Law University and is consistently ranked as the best law school in India. It was established in 1987 and has been a pioneer in legal education reform in the country.",
        website: "https://www.nls.ac.in/",
        ranking: {
            "NIRF 2023": 1
        },
        programs: ["B.A., LL.B. (Hons.)", "LL.M.", "Ph.D", "M.P.P.", "PG Diploma Programs"],
        facilities: ["Library", "Moot Court Hall", "Sports Facilities", "Hostels", "Computer Lab"],
        acceptedExams: ["CLAT", "AILET"],
        avgPlacement: "₹15-20 LPA (2023)",
        notableAlumni: ["Nandan Nilekani (Infosys Co-founder)", "Arvind Datar (Senior Advocate)", "Menaka Guruswamy (Senior Advocate)"]
    },
    {
        id: "nid-ahmedabad",
        name: "National Institute of Design",
        location: "Ahmedabad, Gujarat",
        category: "Design",
        established: 1961,
        description: "NID Ahmedabad is India's premier design institute, established in 1961 based on the recommendations of the famous Eames Report. It offers undergraduate and postgraduate programs in various design disciplines.",
        website: "https://www.nid.edu/",
        ranking: {
            "NIRF 2023": 1
        },
        programs: ["B.Des", "M.Des", "Ph.D in Design"],
        facilities: ["Design Studios", "Workshop Facilities", "Libraries", "Exhibition Spaces", "Material Museum"],
        acceptedExams: ["NID DAT", "CEED"],
        avgPlacement: "₹8-12 LPA (2023)",
        notableAlumni: ["Subrata Bhowmick (Textile Designer)", "Thota Tharrani (Art Director)", "Orijit Sen (Graphic Artist)"]
    },
    {
        id: "srcc-delhi",
        name: "Shri Ram College of Commerce",
        location: "New Delhi, Delhi",
        category: "Commerce",
        established: 1926,
        description: "SRCC is one of India's premier institutions for higher education in Commerce and Economics. It consistently ranks as the top commerce college in India and is known for its rigorous academic standards.",
        website: "https://www.srcc.edu/",
        ranking: {
            "NIRF 2023": 1
        },
        programs: ["B.Com (Hons)", "B.A. Economics (Hons)", "M.Com", "Global Business Operations (GBO)"],
        facilities: ["Library", "Sports Complex", "Seminar Halls", "Auditorium", "Computer Labs"],
        acceptedExams: ["DU-JAT", "CUET"],
        avgPlacement: "₹10-15 LPA (2023)",
        notableAlumni: ["Arun Jaitley (Former Finance Minister)", "Ajay Banga (Mastercard CEO)", "Gulshan Grover (Actor)"]
    },
    {
        id: "iit-madras",
        name: "Indian Institute of Technology Madras",
        location: "Chennai, Tamil Nadu",
        category: "Engineering",
        established: 1959,
        description: "IIT Madras is among the foremost institutes of national importance in higher technological education, basic and applied research. It has been ranked as the top engineering college in India for multiple consecutive years.",
        website: "https://www.iitm.ac.in/",
        ranking: {
            "NIRF 2023": 1,
            "QS World 2023": 250
        },
        programs: ["B.Tech", "B.S.", "Dual Degree", "M.Tech", "M.S.", "MBA", "Ph.D"],
        facilities: ["Central Library", "Research Park", "Hostels", "Hospital", "Sports Facilities", "Gajendra Circle"],
        acceptedExams: ["JEE Advanced", "GATE", "JAM", "CAT"],
        avgPlacement: "₹18-20 LPA (2023)",
        notableAlumni: ["Kris Gopalakrishnan (Infosys Co-founder)", "Venkatraman Ramakrishnan (Nobel Laureate)", "Kiran Seth (SPIC MACAY Founder)"]
    },
    {
        id: "jipmer",
        name: "Jawaharlal Institute of Postgraduate Medical Education and Research",
        location: "Puducherry, Puducherry",
        category: "Medical",
        established: 1956,
        description: "JIPMER is a premier medical institution in India, known for its excellence in medical education, research, and patient care. It is an Institution of National Importance under the Ministry of Health and Family Welfare.",
        website: "https://www.jipmer.edu.in/",
        ranking: {
            "NIRF 2023": 6
        },
        programs: ["MBBS", "MD/MS", "M.Sc Nursing", "Ph.D"],
        facilities: ["Hospital", "Library", "Labs", "Hostels", "Sports Complex"],
        acceptedExams: ["NEET-UG", "NEET-PG"],
        avgPlacement: "Government Service / Residency",
        notableAlumni: ["Dr. K. Srinath Reddy (President, Public Health Foundation of India)", "Dr. Sriram Rajagopal (Renowned Cardiologist)"]
    },
    {
        id: "xlri-jamshedpur",
        name: "XLRI - Xavier School of Management",
        location: "Jamshedpur, Jharkhand",
        category: "Management",
        established: 1949,
        description: "XLRI is one of India's oldest business schools, established in 1949. It is known for its Human Resources Management and Business Management programs and is consistently ranked among the top business schools in India.",
        website: "https://www.xlri.ac.in/",
        ranking: {
            "NIRF 2023": 2
        },
        programs: ["PGDM (BM)", "PGDM (HRM)", "FPM (Ph.D)", "Executive MBA"],
        facilities: ["International Centre for Excellence", "Library", "Sports Complex", "Hostels", "Learning Centers"],
        acceptedExams: ["XAT", "CAT", "GMAT"],
        avgPlacement: "₹30-32 LPA (2023)",
        notableAlumni: ["Ajay Banga (Mastercard CEO)", "N. Chandrasekaran (Tata Sons Chairman)", "Leena Nair (Chanel Global CEO)"]
    },
    {
        id: "harvard-university",
        name: "Harvard University",
        location: "Cambridge, Massachusetts, USA",
        category: "International",
        established: 1636,
        description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636, it is the oldest institution of higher learning in the United States and among the most prestigious in the world.",
        website: "https://www.harvard.edu/",
        ranking: {
            "QS World 2023": 5
        },
        programs: ["Undergraduate Programs", "Graduate & Professional Programs", "Online & Executive Education"],
        facilities: ["Harvard Library", "Research Centers", "Residential Houses", "Museums", "Athletics Facilities"],
        acceptedExams: ["SAT/ACT", "GRE", "GMAT", "TOEFL/IELTS"],
        avgPlacement: "$85,000-$150,000 (2023)",
        notableAlumni: ["Barack Obama (Former US President)", "Mark Zuckerberg (Facebook Founder)", "Bill Gates (Microsoft Founder)"]
    },
    {
        id: "stanford-university",
        name: "Stanford University",
        location: "Stanford, California, USA",
        category: "International",
        established: 1885,
        description: "Stanford University is one of the world's leading teaching and research institutions, dedicated to finding solutions to big challenges and preparing students for leadership in a complex world.",
        website: "https://www.stanford.edu/",
        ranking: {
            "QS World 2023": 3
        },
        programs: ["Undergraduate Programs", "Graduate Programs", "Professional Programs", "Executive Education"],
        facilities: ["Libraries", "Research Labs", "Stanford Linear Accelerator", "Athletic Facilities", "Stanford Medical Center"],
        acceptedExams: ["SAT/ACT", "GRE", "GMAT", "TOEFL/IELTS"],
        avgPlacement: "$90,000-$160,000 (2023)",
        notableAlumni: ["Larry Page (Google Co-founder)", "Sergey Brin (Google Co-founder)", "Elon Musk (Tesla & SpaceX CEO)"]
    },
    {
        id: "university-of-toronto",
        name: "University of Toronto",
        location: "Toronto, Ontario, Canada",
        category: "International",
        established: 1827,
        description: "The University of Toronto is a public research university in Toronto, Ontario, Canada. Founded in 1827, it is known for its groundbreaking research and educational programs across multiple disciplines.",
        website: "https://www.utoronto.ca/",
        ranking: {
            "QS World 2023": 34
        },
        programs: ["Undergraduate Programs", "Graduate Programs", "Professional Faculties", "Continuing Education"],
        facilities: ["Libraries", "Research Centers", "Residences", "Athletic Facilities", "Museums"],
        acceptedExams: ["SAT/ACT", "GRE", "GMAT", "TOEFL/IELTS"],
        avgPlacement: "CAD 60,000-100,000 (2023)",
        notableAlumni: ["Frederick Banting (Nobel Laureate, discovered insulin)", "Margaret Atwood (Author)", "Malcolm Gladwell (Author)"]
    },
    {
        id: "oxford-university",
        name: "University of Oxford",
        location: "Oxford, England, UK",
        category: "International",
        established: 1096,
        description: "The University of Oxford is the oldest university in the English-speaking world and the world's second-oldest university in continuous operation. It is known for its research and teaching excellence across a wide range of disciplines.",
        website: "https://www.ox.ac.uk/",
        ranking: {
            "QS World 2023": 4
        },
        programs: ["Undergraduate Courses", "Graduate Courses", "Research Degrees"],
        facilities: ["Bodleian Libraries", "Museums", "Colleges", "Sports Facilities", "Research Centers"],
        acceptedExams: ["UCAS", "GRE", "GMAT", "TOEFL/IELTS"],
        avgPlacement: "£30,000-£70,000 (2023)",
        notableAlumni: ["Stephen Hawking (Physicist)", "Malala Yousafzai (Nobel Laureate)", "Bill Clinton (Former US President)"]
    },
    {
        id: "cambridge-university",
        name: "University of Cambridge",
        location: "Cambridge, England, UK",
        category: "International",
        established: 1209,
        description: "The University of Cambridge is a collegiate research university in Cambridge, United Kingdom. Founded in 1209, it is the second-oldest university in the English-speaking world and the world's fourth-oldest surviving university.",
        website: "https://www.cam.ac.uk/",
        ranking: {
            "QS World 2023": 2
        },
        programs: ["Undergraduate Courses", "Postgraduate Courses", "Research Degrees"],
        facilities: ["Cambridge University Library", "Colleges", "Museums", "Research Centers", "Sports Facilities"],
        acceptedExams: ["UCAS", "GRE", "GMAT", "TOEFL/IELTS"],
        avgPlacement: "£35,000-£75,000 (2023)",
        notableAlumni: ["Isaac Newton (Physicist)", "Charles Darwin (Naturalist)", "Emma Thompson (Actress)"]
    },
    {
        id: "mit",
        name: "Massachusetts Institute of Technology",
        location: "Cambridge, Massachusetts, USA",
        category: "International",
        established: 1861,
        description: "MIT is a private research university in Cambridge, Massachusetts. The Institute is traditionally known for its research and education in the physical sciences and engineering, but more recently in biology, economics, linguistics, and management as well.",
        website: "https://www.mit.edu/",
        ranking: {
            "QS World 2023": 1
        },
        programs: ["Undergraduate Programs", "Graduate Programs", "Professional Education"],
        facilities: ["Libraries", "Research Labs", "Media Lab", "MIT.nano", "Sports Facilities"],
        acceptedExams: ["SAT/ACT", "GRE", "GMAT", "TOEFL/IELTS"],
        avgPlacement: "$95,000-$170,000 (2023)",
        notableAlumni: ["Buzz Aldrin (Astronaut)", "Kofi Annan (Former UN Secretary-General)", "Jonah Peretti (BuzzFeed Founder)"]
    }
];

// Regional statistics for exams
const EXAM_STATISTICS = {
    "JEE Main": {
        "North India": 450000,
        "South India": 380000,
        "East India": 280000,
        "West India": 320000,
        "Central India": 210000,
        "Northeast India": 90000
    },
    "NEET-UG": {
        "North India": 520000,
        "South India": 490000,
        "East India": 310000,
        "West India": 350000,
        "Central India": 240000,
        "Northeast India": 110000
    },
    "CAT": {
        "North India": 95000,
        "South India": 87000,
        "East India": 68000,
        "West India": 82000,
        "Central India": 42000,
        "Northeast India": 18000
    },
    "CLAT": {
        "North India": 22000,
        "South India": 19000,
        "East India": 15000,
        "West India": 18000,
        "Central India": 12000,
        "Northeast India": 5000
    },
    "GATE": {
        "North India": 180000,
        "South India": 210000,
        "East India": 140000,
        "West India": 160000,
        "Central India": 90000,
        "Northeast India": 40000
    },
    "IELTS": {
        "North India": 85000,
        "South India": 92000,
        "East India": 45000,
        "West India": 78000,
        "Central India": 30000,
        "Northeast India": 18000
    },
    "GRE": {
        "North India": 65000,
        "South India": 85000,
        "East India": 40000,
        "West India": 60000,
        "Central India": 25000,
        "Northeast India": 12000
    },
    "GMAT": {
        "North India": 35000,
        "South India": 42000,
        "East India": 18000,
        "West India": 30000,
        "Central India": 12000,
        "Northeast India": 5000
    }
};

// College statistics by region and category
const COLLEGE_STATISTICS = {
    "Engineering": {
        "North India": 850,
        "South India": 1200,
        "East India": 420,
        "West India": 780,
        "Central India": 320,
        "Northeast India": 120
    },
    "Medical": {
        "North India": 180,
        "South India": 250,
        "East India": 110,
        "West India": 160,
        "Central India": 90,
        "Northeast India": 40
    },
    "Management": {
        "North India": 420,
        "South India": 380,
        "East India": 180,
        "West India": 320,
        "Central India": 150,
        "Northeast India": 60
    },
    "Law": {
        "North India": 120,
        "South India": 110,
        "East India": 70,
        "West India": 90,
        "Central India": 50,
        "Northeast India": 20
    },
    "Architecture": {
        "North India": 75,
        "South India": 90,
        "East India": 40,
        "West India": 65,
        "Central India": 30,
        "Northeast India": 15
    },
    "Commerce": {
        "North India": 350,
        "South India": 320,
        "East India": 180,
        "West India": 280,
        "Central India": 140,
        "Northeast India": 60
    }
};

// Mapping of regions to states
const REGION_STATES = {
    "North India": ["Delhi", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Ladakh", "Punjab", "Rajasthan", "Uttarakhand", "Uttar Pradesh"],
    "South India": ["Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu", "Telangana", "Puducherry", "Lakshadweep"],
    "East India": ["Bihar", "Jharkhand", "Odisha", "West Bengal", "Andaman & Nicobar Islands"],
    "West India": ["Goa", "Gujarat", "Maharashtra", "Dadra & Nagar Haveli", "Daman & Diu"],
    "Central India": ["Chhattisgarh", "Madhya Pradesh"],
    "Northeast India": ["Arunachal Pradesh", "Assam", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Sikkim", "Tripura"]
};

// Exam categories
const EXAM_CATEGORIES = [
    "Engineering",
    "Medical",
    "Management",
    "Law",
    "Architecture",
    "Design",
    "Commerce",
    "Science",
    "Humanities",
    "International"
];