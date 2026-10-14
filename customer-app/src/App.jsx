import { useState } from "react";
import TabMenu from "./components/TabMenu";
import LoginForm from "./components/LoginForm";
import CustomerTable from "./components/CustomerTable";
import TreeMenu from "./components/TreeMenu";
import data from "./data/customer.json";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [selectedNode, setSelectedNode] = useState(null);

  const handleSelectNode = (node) => {
    console.log("Selected tree node:", node);
    setSelectedNode(node);
  };

  // e.g. { level: "state", name: "New York" } keeps customers whose state is New York
  const filteredCustomers = selectedNode
    ? data.customers.filter((c) => c[selectedNode.level] === selectedNode.name)
    : data.customers;

  return (
    <div className="app">
      <TabMenu activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="content">
        {activeTab === "Home" && (
          <div className="home">
            <p>Home Tab.</p>
            <div className="home-body">
              <TreeMenu
                nodes={data.tree}
                selectedNode={selectedNode}
                onSelect={handleSelectNode}
              />
              <div className="table-area">
                <div className="filter-bar">
                  {selectedNode ? (
                    <>
                      Filtered by {selectedNode.level}: <b>{selectedNode.name}</b>
                      <button onClick={() => setSelectedNode(null)}>Show all</button>
                    </>
                  ) : (
                    "Showing all customers"
                  )}
                </div>
                <CustomerTable customers={filteredCustomers} />
              </div>
            </div>
          </div>
        )}
        {activeTab === "Profile" && <LoginForm />}
        {activeTab === "Messages" && <p>Messages Tab.</p>}
        {activeTab === "Settings" && <p>Settings Tab.</p>}
      </main>
    </div>
  );
}

export default App;
