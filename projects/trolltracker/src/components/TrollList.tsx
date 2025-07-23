import React, { useEffect, useRef, useState } from "react";
import type { Troll } from "../types.ts";

interface Props {
  trolls: Troll[];
}

const TrollList: React.FC<Props> = ({ trolls }) => {
  const [visibleCount, setVisibleCount] = useState(5);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => prev + 5);
      }
    });

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, []);

  if (trolls.length === 0) {
    return <p>No trolls added yet.</p>;
  }

  return (
    <>
      {trolls.slice(0, visibleCount).map((troll) => (
        <div key={troll.id} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
          <h3>{troll.gamertag}</h3>
            <p><strong>Champion:</strong> {troll.champ}</p>
            <p><strong>KDA:</strong> {troll.kda}</p>

          <p>{troll.info}</p>
          <small>Added on {new Date(troll.created).toLocaleString()}</small>
        </div>
      ))}
      <div ref={loaderRef}></div>
    </>
  );
};

export default TrollList;
