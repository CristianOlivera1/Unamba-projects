"use client";

import { useState, useEffect } from "react";
import PetSprite from "./spritegrid";

export default function AutoPetSprite() {
  const [currentRow, setCurrentRow] = useState(0);
  const totalRows = 9;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRow((prevRow) => (prevRow + 1) % totalRows);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <PetSprite
      src="/images/spritesheet.webp"
      row={currentRow}
      frames={8}
      duration={1800}
      scale={0.5}
    />
  );
}