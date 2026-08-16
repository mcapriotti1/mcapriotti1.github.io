export const experiences = [
  {
    title:
      "Software Engineering Intern — NASA Marshall Space Flight Center",
    date: "June 2026 - August 2026",
    description:
      "Developed a normalized PostgreSQL database for mass properties data replacing manual spreadsheet workflows, built Python pipelines for processing historical data, and created a FastAPI web application for search, hierarchy navigation, revision management, and data import/export."
  },
  {
    title:
      "Teaching Assistant — Northwestern University Computer Science Department",
    date: "January 2026 - June 2026",
    description:
      "Supported a computer systems course with 150+ students through tutoring, exam proctoring, grading, and helping students with data representation, assembly, stack-based memory, virtual memory, caches, file systems, concurrency, and process scheduling.",
  },
  {
    title: "Mail and Package Assistant — Northwestern University",
    date: "September 2025 - June 2026",
    description:
      "Worked at Northwestern's mail and package center to process and distribute mail and packages to students on campus.",
  },
  {
    title: "Lifeguard — Glen Ellyn Park District",
    date: "June 2025 - August 2025",
    description:
      "Monitored pool facilities, enforced safety procedures, and responded to emergencies while providing a safe environment for patrons.",
  },
  {
    title: "Academic Tutor — Amikka Learning",
    date: "June 2024 - August 2024",
    description:
      "Provided academic tutoring and helped students develop their understanding of course material and problem-solving strategies.",
  },
];

export const softwareProjects = [
  {
    title: "Stock Forecast",
    links: [
      {
        text: "GitHub",
        url: "https://github.com/mcapriotti1/Stock_Forecast",
      },
    ],
    description:
      "A machine learning web app predicting stock prices for 400+ companies using LSTM models trained on 5 years of historical data. Results are shown in an interactive React + FastAPI dashboard.",
    tech: "React, FastAPI, Python, Sqlite3, Typescript, CSS, NumPy, Pandas, TensorFlow, Yahooquery",
    media: {
      type: "video",
      src: "/demos/Stock_Forecast_Demo.mp4",
    },
  },

  {
    title: "Golf Swing Analyzer",
    links: [
      {
        text: "GitHub",
        url: "https://github.com/mcapriotti1/Golf_Swing",
      },
      {
        text: "Live",
        url: "https://golf-swing.onrender.com/",
      },
    ],
    note: "May take 5 minutes to start",
    description:
      "This project analyzes golf swings and classifies them as either Pro or Amateur using a Random Forest Classification model and pose estimation. Users can upload videos and see predictions via the Flask web app.",
    tech: "Python, Mediapipe, Flask, scikit-learn, NumPy, OpenCV, Javascript, HTML, CSS",
    media: {
      type: "video",
      src: "/demos/Golf Swing_Analyzer _Demo.mp4",
    },
  },

  {
    title: "Trading Simulation",
    links: [
      {
        text: "GitHub",
        url: "https://github.com/mcapriotti1/Trading_Simulation",
      },
    ],
    description:
      "A C++ single ticker market simulation with 5 variations of trading bots. Every tick a bot can submit a single order, which is placed and executed (if possible) into a price sorted order book. Every bot's portfolio is tracked throughout the simulation.",
    tech: "C++, Python, Matplotlib, CSV",
    media: {
      type: "images",
      sources: [
        "/demos/Trading/Trading_Simulation_Demo1.png",
        "/demos/Trading/Trading_Simulation_Demo2.png",
      ],
    },
  },

  {
    title: "Evolutionary Algorithm Flappy Bird",
    links: [
      {
        text: "GitHub",
        url: "https://github.com/mcapriotti1/Evolutionary_Algorithm_Flappy_Bird",
      },
    ],
    description:
      "A Unity (C#) game which uses a custom Evolutionary Algorithm to optimize a neural network that plays Flappy Bird. The user has the ability to Train, Watch, and Play Against the AI.",
    tech: "Unity (C#), NEAT, JsonUtility",
    media: {
      type: "video",
      src: "/demos/Flappy_Bird_Demo.mp4",
    },
  },
  {
    title: "Backend Developer — Northwestern DISC",
    links: [
      {
        text: "GitHub",
        url: "https://github.com/Harrybido2711/fdd-backend",
      },
    ],
    description:
      "Developed the database and backend APIs for a donation tracking platform used by a nonprofit, enabling secure role-based access, Excel data uploads, validation, filtering, and donation history queries for a frontend dashboard.",
  },
];

export const researchProjects = [
  {
    title:
      "QUBO to Maxcut (Associated with Los Alamos National Laboratory)",
    links: [
      {
        text: "GitHub",
        url: "https://github.com/BBhattacharyya1729/QUBO_To_MaxCut",
      },
      {
        text: "arXiv",
        url: "https://arxiv.org/abs/2504.06253",
      },
    ],
    description:
      "Collaborated on authoring a research paper on quantum algorithms by applying the Quantum Approximate Optimization Algorithm (QAOA) to solve complex combinatorial optimization problems. Designed and implemented warm-start strategies that integrate classical optimization with quantum computation.",
    tech: "Qiskit, Matplotlib, Python, Jupyter Notebook",
    media: {
      type: "images",
      sources: [
        "/demos/QAOA/Full_Comparison_All.png"
      ]
      // sources: [
      //   "/demos/QAOA/QAOA_Figures_Demo5.png",
      //   "/demos/QAOA/QAOA_Figures_Demo1.png",
      //   "/demos/QAOA/QAOA_Figures_Demo2.png",
      //   "/demos/QAOA/QAOA_Figures_Demo3.png",
      //   "/demos/QAOA/QAOA_Figures_Demo4.png",
      // ],
    },
  },

  {
    title:
      "Executives Analysis (Associated with Northwestern Kellogg School of Management)",
    links: [
      {
        text: "GitHub",
        url: "https://github.com/mcapriotti1/Executives_Analysis",
      },
      {
        text: "IMSAloquium",
        url: "https://digitalcommons.imsa.edu/sir_presentations/2023/session1/47/",
      },
    ],
    description:
      "Contributed to a research project on automated obituary classification, starting with manual data labeling and later transitioning to scalable methods by extracting data via OCR and developing automatic labeling strategies. Investigated machine learning classification and large language models for automated labeling.",
  },
];

export const consultingProjects = [
  {
    title: "Cora Health",
    links: [
      {
        text: "CORA",
        url: "https://cora.healthcare/",
      },
    ],
    description:
      "Analyzed social media engagement trends for Cora Health, identifying opportunities for new post types and highlighting exemplary content. Provided recommendations to improve website interactivity, supported by a working demo.",
  },

  {
    title: "Cloth + Home",
    links: [
      {
        text: "Cloth + Home",
        url: "https://clothandhomeshop.com/",
      },
    ],
    description:
      "Assisted in creating a new newsletter template and planning the schedule for next year's campaigns. Analyzed Mailchimp campaign data to determine optimal send times and days based on engagement metrics.",
  },
];