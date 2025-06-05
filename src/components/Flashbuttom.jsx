import React, { useEffect, useState } from 'react';
import './Flashbuttom.css';

export default function ShinyButton({ children }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 500); // Delay del rayo
    return () => clearTimeout(timer);
  }, []);

  return (
    <button className={`shiny-btn ${active ? 'shine' : ''}`}>
      {children}
    </button>
  );
}
