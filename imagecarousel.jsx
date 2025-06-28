import React, { useEffect, useRef, useState } from "react";
import "./ImageCarousel.css";

// Placeholder for images array, later to be fetched from Firebase.
// Each image should have a unique id and a color (or url in the future).
const PLACEHOLDER_IMAGES = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  // Different colors for demo
  color: [
    "#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF",
    "#F06595", "#A9DEF9", "#E4C1F9", "#F7B32B",
    "#43AA8B", "#3D5A80"
  ][i % 10]
}));

export default function ImageCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const intervalRef = useRef();

  // How many to show at once
  const VISIBLE = 4;

  // Auto-scroll every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setStartIndex(prev =>
        (prev + VISIBLE) % PLACEHOLDER_IMAGES.length
      );
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // To get 4 images, wrap around if needed
  function getVisibleImages() {
    const images = [];
    for (let i = 0; i < VISIBLE; i++) {
      images.push(
        PLACEHOLDER_IMAGES[(startIndex + i) % PLACEHOLDER_IMAGES.length]
      );
    }
    return images;
  }

  return (
    <div className="carousel-container">
      <div className="carousel-images">
        {getVisibleImages().map((img, idx) => (
          <div
            key={img.id}
            className="carousel-img-box"
            style={{ background: img.color }}
          >
            <span className="carousel-img-label">Box {img.id + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}