const revenueData = {
  "Americano": {
    Week: [
      { day: "Mon", revenue: 240 },
      { day: "Tue", revenue: 310 },
      { day: "Wed", revenue: 260 },
      { day: "Thu", revenue: 380 },
      { day: "Fri", revenue: 290 },
      { day: "Sat", revenue: 430 },
      { day: "Sun", revenue: 390 },
    ],
    Month: [
      { week: "Week 1", revenue: 1000 },
      { week: "Week 2", revenue: 1250 },
      { week: "Week 3", revenue: 1500 },
      { week: "Week 4", revenue: 1750 },
    ],
    "6-Month": [
      { month: "M1", revenue: 3000 },
      { month: "M2", revenue: 3600 },
      { month: "M3", revenue: 4200 },
      { month: "M4", revenue: 4800 },
      { month: "M5", revenue: 5400 },
      { month: "M6", revenue: 6000 },
    ],
    Year: Array.from({ length: 12 }, (_, i) => ({
      month: `M${i + 1}`,
      revenue: 1000 + i * 800,
    })),
  },
  "Latte": {
    Week: [
      { day: "Mon", revenue: 180 },
      { day: "Tue", revenue: 220 },
      { day: "Wed", revenue: 200 },
      { day: "Thu", revenue: 260 },
      { day: "Fri", revenue: 310 },
      { day: "Sat", revenue: 400 },
      { day: "Sun", revenue: 370 },
    ],
    Month: [
      { week: "Week 1", revenue: 800 },
      { week: "Week 2", revenue: 1000 },
      { week: "Week 3", revenue: 1200 },
      { week: "Week 4", revenue: 1400 },
    ],
    "6-Month": [
      { month: "M1", revenue: 2000 },
      { month: "M2", revenue: 2400 },
      { month: "M3", revenue: 2800 },
      { month: "M4", revenue: 3200 },
      { month: "M5", revenue: 3600 },
      { month: "M6", revenue: 4000 },
    ],
    Year: Array.from({ length: 12 }, (_, i) => ({
      month: `M${i + 1}`,
      revenue: 800 + i * 500,
    })),
  },
  "Matcha": {
    Week: [
      { day: "Mon", revenue: 100 },
      { day: "Tue", revenue: 120 },
      { day: "Wed", revenue: 180 },
      { day: "Thu", revenue: 160 },
      { day: "Fri", revenue: 190 },
      { day: "Sat", revenue: 250 },
      { day: "Sun", revenue: 200 },
    ],
    Month: [
      { week: "Week 1", revenue: 700 },
      { week: "Week 2", revenue: 850 },
      { week: "Week 3", revenue: 1000 },
      { week: "Week 4", revenue: 1150 },
    ],
    "6-Month": [
      { month: "M1", revenue: 1500 },
      { month: "M2", revenue: 1800 },
      { month: "M3", revenue: 2100 },
      { month: "M4", revenue: 2400 },
      { month: "M5", revenue: 2700 },
      { month: "M6", revenue: 3000 },
    ],
    Year: Array.from({ length: 12 }, (_, i) => ({
      month: `M${i + 1}`,
      revenue: 600 + i * 400,
    })),
  },
  "Italian Soda": {
    Week: [
      { day: "Mon", revenue: 130 },
      { day: "Tue", revenue: 150 },
      { day: "Wed", revenue: 170 },
      { day: "Thu", revenue: 200 },
      { day: "Fri", revenue: 220 },
      { day: "Sat", revenue: 270 },
      { day: "Sun", revenue: 250 },
    ],
    Month: [
      { week: "Week 1", revenue: 900 },
      { week: "Week 2", revenue: 1080 },
      { week: "Week 3", revenue: 1260 },
      { week: "Week 4", revenue: 1440 },
    ],
    "6-Month": [
      { month: "M1", revenue: 2500 },
      { month: "M2", revenue: 2850 },
      { month: "M3", revenue: 3200 },
      { month: "M4", revenue: 3550 },
      { month: "M5", revenue: 3900 },
      { month: "M6", revenue: 4250 },
    ],
    Year: Array.from({ length: 12 }, (_, i) => ({
      month: `M${i + 1}`,
      revenue: 700 + i * 420,
    })),
  },
  "Cappucino": {
    Week: [
      { day: "Mon", revenue: 80 },
      { day: "Tue", revenue: 90 },
      { day: "Wed", revenue: 100 },
      { day: "Thu", revenue: 110 },
      { day: "Fri", revenue: 120 },
      { day: "Sat", revenue: 160 },
      { day: "Sun", revenue: 140 },
    ],
    Month: [
      { week: "Week 1", revenue: 500 },
      { week: "Week 2", revenue: 600 },
      { week: "Week 3", revenue: 700 },
      { week: "Week 4", revenue: 800 },
    ],
    "6-Month": [
      { month: "M1", revenue: 1200 },
      { month: "M2", revenue: 1400 },
      { month: "M3", revenue: 1600 },
      { month: "M4", revenue: 1800 },
      { month: "M5", revenue: 2000 },
      { month: "M6", revenue: 2200 },
    ],
    Year: Array.from({ length: 12 }, (_, i) => ({
      month: `M${i + 1}`,
      revenue: 400 + i * 250,
    })),
  },
};

export default revenueData;
