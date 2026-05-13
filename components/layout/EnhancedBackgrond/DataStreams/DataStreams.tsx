"use client";

import { useEffect } from "react";

export interface DataStreamsProps {
  containerId: string;
}

const streamCount = 10;

export default function DataStreams({ containerId }: DataStreamsProps) {
  useEffect(() => {
    const dataStreams = document.getElementById(containerId);
    if (!dataStreams) return;

    dataStreams.innerHTML = "";

    for (let i = 0; i < streamCount; i++) {
      const stream = document.createElement("div");
      stream.className = "data-stream";
      stream.style.top = `${Math.random() * 100}%`;
      stream.style.left = "-300px";
      stream.style.animationDelay = `${Math.random() * 5}s`;
      stream.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
      dataStreams.appendChild(stream);
    }

    return () => {
      // No cleanup needed - owned by main component
    };
  }, [containerId]);

  return null;
}