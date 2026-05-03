"use client";
import { CSSProperties } from "react";

interface PetSpriteStyles extends CSSProperties {
  "--pet-scale"?: number;
  "--sprite-url"?: string;
  "--sprite-row"?: number;
  "--sprite-frames"?: number;
  "--sprite-duration"?: string;
}

interface PetSpriteProps {
  src: string;
  row: number;
  frames: number; 
  duration: number;
  scale?: number;
}

export default function PetSprite({ src, row, frames, duration, scale = 0.5 }: PetSpriteProps) {
  return (
    <div className="w-fit inline-block align-middle">
      <div className="pet-sprite-frame" style={{ "--pet-scale": scale } as PetSpriteStyles}>
        <div
          className="pet-sprite"
          style={{
            "--sprite-url": `url(${src})`,
            "--sprite-row": row,
            "--sprite-frames": frames,
            "--sprite-duration": `${duration}ms`,
          } as PetSpriteStyles}
        />
      </div>
    </div>
  );
}