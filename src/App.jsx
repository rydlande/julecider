import { useState } from "react";
import History from "./components/History";
import HowTo from "./components/HowTo";
import ProductInfo from "./components/Productinfo";

export default function App() {
  const [activeTab, setActiveTab] = useState("tabs-center-1"); // Tracks the active tab

  return (
    <div>
      <header className="p-4">
        <h1 className="text-center text-3xl font-bold">Eirins Eplecider</h1>
      </header>

      <main className="container mx-auto mt-6">
        {/* Navigation for Tabs */}
        <nav
          className="tabs tabs-bordered justify-center"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          <button
            type="button"
            className={`tab ${activeTab === "tabs-center-1" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("tabs-center-1")}
            id="tabs-center-item-1"
            aria-controls="tabs-center-1"
            role="tab"
            aria-selected={activeTab === "tabs-center-1"}
          >
            Fakta
          </button>
          <button
            type="button"
            className={`tab ${activeTab === "tabs-center-2" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("tabs-center-2")}
            id="tabs-center-item-2"
            aria-controls="tabs-center-2"
            role="tab"
            aria-selected={activeTab === "tabs-center-2"}
          >
            Prosess
          </button>
          <button
            type="button"
            className={`tab ${activeTab === "tabs-center-3" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("tabs-center-3")}
            id="tabs-center-item-3"
            aria-controls="tabs-center-3"
            role="tab"
            aria-selected={activeTab === "tabs-center-3"}
          >
            Produktinfo
          </button>
        </nav>

        {/* Tab Content */}
        <div
          id="tabs-center-1"
          role="tabpanel"
          aria-labelledby="tabs-center-item-1"
          className={`flex justify-center mt-4 ${activeTab === "tabs-center-1" ? "" : "hidden"}`}
        >
          <History />
        </div>
        <div
          id="tabs-center-2"
          role="tabpanel"
          aria-labelledby="tabs-center-item-2"
          className={`flex justify-center mt-4 ${activeTab === "tabs-center-2" ? "" : "hidden"}`}
        >
          <HowTo />
        </div>
        <div
          id="tabs-center-3"
          role="tabpanel"
          aria-labelledby="tabs-center-item-3"
          className={`flex justify-center mt-4 ${activeTab === "tabs-center-3" ? "" : "hidden"}`}
        >
          <ProductInfo />
        </div>
      </main>
    </div>
  );
}