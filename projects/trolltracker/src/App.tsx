import React, { useEffect, useState } from "react";
// Make sure the path is correct and the file exists
import SearchBar from "./components/SearchBar.tsx";
import TrollForm from "./components/TrollForm.tsx";
import TrollList from "./components/TrollList.tsx";
import type { Troll } from "./types.ts";

const App: React.FC = () => {
  const [trolls, setTrolls] = useState<Troll[]>([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("trolls");
    if (stored) setTrolls(JSON.parse(stored));
  }, []);

  // Save to localStorage whenever trolls change
  useEffect(() => {
    localStorage.setItem("trolls", JSON.stringify(trolls));
  }, [trolls]);

  const addTroll = (newTroll: Troll) => {
    setTrolls(prev => [newTroll, ...prev]);
    setShowForm(false);
  };

const searchLower = (search || "").toLowerCase();

const filteredTrolls = trolls.filter(troll =>
  typeof troll.gamertag === "string" &&
  typeof troll.info === "string" &&
  (
    troll.gamertag.toLowerCase().includes(searchLower) ||
    troll.info.toLowerCase().includes(searchLower)
  )
);

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🧙 Troll Tracker</h1>
      <button onClick={() => setShowForm(true)}>➕ Add Troll</button>

      <SearchBar search={search} setSearch={setSearch} />

      <TrollList trolls={filteredTrolls} />

      {showForm && <TrollForm onSubmit={addTroll} onClose={() => setShowForm(false)} />}
    </main>
  );
};

export default App;

