const TABS = ["Home", "Profile", "Messages", "Settings"];

function TabMenu({ activeTab, onTabChange }) {
  return (
    <nav className="tab-menu">
      {TABS.map((tab) => (
        <button
          key={tab}
          className={tab === activeTab ? "tab active" : "tab"}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}

export default TabMenu;
