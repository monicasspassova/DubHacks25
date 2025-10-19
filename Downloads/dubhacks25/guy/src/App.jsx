import { useState, useRef, useEffect } from "react";
import "./App.css";
import revenueData from "./data/revenueData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function App() {
  const [selectedProduct, setSelectedProduct] = useState("Americano");
  const [selectedPeriod, setSelectedPeriod] = useState("Week");

  //access data (avoid undefined errors)
  const currentData =
    revenueData[selectedProduct] && revenueData[selectedProduct][selectedPeriod]
      ? revenueData[selectedProduct][selectedPeriod]
      : [];

  // Determine which label to use for the X-axis
  const xKey =
    currentData.length && currentData[0].day
      ? "day"
      : currentData.length && currentData[0].week
      ? "week"
      : "month";

  //Calculate total revenue
  const totalRevenue =
    currentData.length > 0
      ? currentData.reduce((sum, entry) => sum + entry.revenue, 0)
      : 0;

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
      const errorMsg = { sender: "bot", text: "⚠️ Error: Could not connect to the backend." };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const [selectedOption, setSelectedOption] = useState("Products");

  return (
    <>
    <div className="revenue-filters">
        {/**Dropdown menu 1: products */}
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

          {/**Dropdown menu 2: time period */}
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

        {/* Total Revenue Summary */}
        <p className="total-revenue">
          Total Revenue: <strong>${totalRevenue.toLocaleString()}</strong>
        </p>
        <div className="chart-container">
        {/* <ResponsiveContainer width="100%" height={250}>
              <LineChart data={currentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={xKey} />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#0e2e85"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer> */}
        </div>

    </div>
    
    <div className="chat-container">
      <h1>GUY</h1>

      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      <div className="input-area">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
        
      </div>

      <div className="recommendation-box">
        <h2>Recommendations:</h2>
      </div>
        <div className="revenue-filters">
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option>Products</option>
          <option>Americano</option>
          <option>Cappucino</option>
          <option>Latte</option>
          <option>Matcha</option>
          <option>Italian Soda</option>
        </select>

        <select>
          <option>Time</option>
          <option>Week</option>
          <option>Month</option>
          <option>6-Months</option>
          <option>Year</option>
        </select>
      </div>
      <div className="revenue-box">
        <h2>Revenue:</h2>
      </div>

    

      {/* <div className="revenue-filters">
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          <option>All Products</option>
          <option>Orca Hoodie</option>
          <option>Whale Mug</option>
          <option>Eco Tote</option>
          <option>Recycled Notebook</option>
          <option>Marine Sticker Pack</option>
        </select>

        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          <option>Week</option>
          <option>Month</option>
          <option>6-Month</option>
          <option>Year</option>
        </select>
      </div>

      <div className="revenue-box">
        <h2>Revenue:</h2>
        <p>Product: {selectedProduct}</p>
        <p>Period: {selectedPeriod}</p>
        </div> */}

    </>
    
  );
}

export default App;

