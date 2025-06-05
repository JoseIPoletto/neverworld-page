import React, { useEffect, useRef, useState } from 'react';
import './HeroSection.css';
import ShinyButton from './Flashbuttom'; // Usa el nombre y ruta correctos

export default function HeroSection() {
  const characterRef = useRef();
  const [showCharacter, setShowCharacter] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  // Fade-in controlado
  useEffect(() => {
    const timeout1 = setTimeout(() => setShowCharacter(true), 100);
    const timeout2 = setTimeout(() => setShowButtons(true), 1000);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  // Parallax
  useEffect(() => {
    const character = characterRef.current;
    if (!character) return;

    const maxDistance = 500;

    const handleMouseMove = (e) => {
      const rect = character.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance <= maxDistance) {
        const factor = 8;
        const x = (dx / maxDistance) * factor;
        const y = (dy / maxDistance) * factor;
        character.style.transform = `translate(${x}px, ${y}px)`;
      } else {
        character.style.transform = `translate(0px, 0px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="hero">
      <div className="blur-background"></div>

      <img
        src="/assets/newbackground.png"
        alt="Neverworld"
        className="foreground-image"
      />

      {/* WRAPPER con clase condicional */}
      <div className={`solar-wrapper ${showCharacter ? 'visible' : ''}`}>
        <img
          ref={characterRef}
          src="/assets/elSolarKik.png"
          alt="Solar Kid"
          className="solar-character"
        />
      </div>

      {/* Botones con fade-in */}
      <div className={`button-container ${showButtons ? 'visible' : ''}`}>
        <ShinyButton>UNIRSE A LOS NIÑOS PERDIDOS</ShinyButton>
        <button className="secondary">VER EL TRAILER</button>
      </div>
    </div>
  );
}
