import { useState, useRef, useEffect } from "react";
//  import revenueData from "../data/revenueData";
import week1Data from "../week1.json";
import mascotGif from "../assets/guygif.gif";
import {
  PieChart, Pie, Cell,
  BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

function Dashboard() {
    const { inventory, budget, sales } = week1Data;

    // 🧮 Basic stats
    const totalSales = sales.reduce((sum, item) => sum + item.units_sold, 0);
    const totalRevenue = sales.reduce(
    (sum, item) => sum + item.current_price * item.units_sold,
    0
    );
    const totalInventory = inventory.reduce((sum, item) => sum + item.count, 0);
    const totalBudget = budget.total_weekly_budget;

    // 🥧 Prepare budget data for pie chart
    const budgetData = Object.entries(budget.allocated).map(([category, value]) => ({
    name: category,
    value,
    }));

    // 📊 Prepare sales data for bar chart
    const salesData = sales.map((item) => ({
    name: item.product,
    units: item.units_sold,
    }));

//   const [selectedProduct, setSelectedProduct] = useState("Americano");
//   const [selectedPeriod, setSelectedPeriod] = useState("Week");

//   const currentData =
//     revenueData[selectedProduct] && revenueData[selectedProduct][selectedPeriod]
//       ? revenueData[selectedProduct][selectedPeriod]
//       : [];

//   const xKey =
//     currentData.length && currentData[0].day
//       ? "day"
//       : currentData.length && currentData[0].week
//       ? "week"
//       : "month";

//   const totalRevenue =
//     currentData.length > 0
//       ? currentData.reduce((sum, entry) => sum + entry.revenue, 0)
//       : 0;

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const botMsg = { sender: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg = {
        sender: "bot",
        text: "⚠️ Error: Could not connect to the backend.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
        {/* 🟦 REVENUE */}
<div className="metric-box">
  <h2>Revenue</h2>
  <p className="metric-value">${totalRevenue.toLocaleString()}</p>
</div>

{/* 🟩 SALES */}
<div className="metric-box">
  <h2>Sales</h2>
  <p className="metric-value">{totalSales.toLocaleString()} units</p>
</div>

{/* 🟨 INVENTORY */}
<div className="metric-box">
  <h2>Inventory</h2>
  <p className="metric-value">{totalInventory.toLocaleString()} items</p>
</div>

{/* 🟧 BUDGET */}
<div className="metric-box">
  <h2>Budget</h2>
  <p className="metric-value">${totalBudget.toLocaleString()}</p>
</div>

{/* 🥧 Budget Allocation Pie Chart
<div className="chart-section">
  <h2>Budget Allocation</h2>
  <PieChart width={500} height={300}>
    <Pie
      data={budgetData}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={100}
      fill="#8884d8"
      label
    >
      {budgetData.map((entry, index) => (
        <Cell
          key={`cell-${index}`}
          fill={["#0e2e85", "#4b74ff", "#82ca9d", "#ffc658", "#ff7f50"][index % 5]}
        />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
</div> */}


{/* <div className="chart-section">
  <h2>Sales Breakdown</h2>

  {salesData && salesData.length > 0 ? (
    <BarChart width={500} height={300} data={salesData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="units" fill="#0e2e85" name="Units Sold" />
    </BarChart>
  ) : (
    <p>No sales data available.</p>
  )}
</div> */}



      {/* Everything you currently had below the header
      <div className="revenue-filters">
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          {Object.keys(revenueData).map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>

        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          {Object.keys(revenueData[selectedProduct]).map((period) => (
            <option key={period} value={period}>
              {period}
            </option>
          ))}
        </select>
      </div>

      <div className="revenue-box">
        <h2>
          {selectedProduct} Revenue ({selectedPeriod})
        </h2>

        <p className="total-revenue">
          Total Revenue: <strong>${totalRevenue.toLocaleString()}</strong>
        </p>
      </div>

      <div className="sales-box">
        <h2>
            {selectedProduct} Sales ({selectedPeriod})
        </h2>

    {/* Example logic — for now we’ll just estimate sales from revenue 
      <p className="total-sales">
        Total Sales: <strong>{Math.floor(totalRevenue / 50).toLocaleString()}</strong>
      </p>
    </div> */}
    </>
  );
}

export default Dashboard;
