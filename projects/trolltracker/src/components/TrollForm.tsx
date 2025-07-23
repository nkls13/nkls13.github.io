import React, { useState } from "react";
import type { Troll } from "../types.ts";

interface Props {
  onSubmit: (troll: Troll) => void;
  onClose: () => void;
}

const TrollForm: React.FC<Props> = ({ onSubmit, onClose }) => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTroll: Troll = {
      id: crypto.randomUUID(),
      name,
      info,
      created: new Date().toISOString(),
    };
    onSubmit(newTroll);
    setName("");
    setInfo("");
  };

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      background: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center", alignItems: "center"
    }}>
      <form onSubmit={handleSubmit} style={{ background: "#fff", padding: "2rem", borderRadius: "10px" }}>
        <h2>Add a Troll</h2>
        <input
          type="text"
          placeholder="Troll name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ display: "block", marginBottom: "1rem", width: "100%", padding: "0.5rem" }}
        />
        <textarea
          placeholder="Troll info"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          required
          style={{ display: "block", marginBottom: "1rem", width: "100%", padding: "0.5rem" }}
        />
        <button type="submit">Add</button>
        <button type="button" onClick={onClose} style={{ marginLeft: "1rem" }}>Cancel</button>
      </form>
    </div>
  );
};

export default TrollForm;
