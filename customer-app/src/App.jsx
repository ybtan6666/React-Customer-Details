import { useState } from "react";
import TabMenu from "./components/TabMenu";
import LoginForm from "./components/LoginForm";
import CustomerTable from "./components/CustomerTable";
import data from "./data/customer.json";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="app">
      <TabMenu activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="content">
        {activeTab === "Home" && <LoginForm />}
        {activeTab === "Profile" && <p>Profile Tab.</p>}
        {activeTab === "Messages" && <p>Messages Tab.</p>}
        {activeTab === "Settings" && <p>Settings Tab.</p>}
      </main>
    </div>
  );
}

export default App;
