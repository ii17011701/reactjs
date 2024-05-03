import React, { useCallback, useState } from 'react';
import './Drag.css'; // You can create this CSS file for styling

const DraggableDiv = () => {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const handleDragStart = useCallback(() => {
    setDragging(true);
  }, []);

  const handleDragEnd = useCallback((event) => {
    setDragging(false);
    const { clientX, clientY } = event;
    setButtonPosition({ x: clientX, y: clientY });
  }, []);

  const handleDrag = useCallback((event) => {
    if (dragging) {
      const { clientX, clientY } = event;
      setButtonPosition({ x: clientX, y: clientY });
    }
  }, [dragging]);

  return (
    <div
      className="draggable-div"
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrag={handleDrag}
    >
      <button
        className="draggable-button"
        style={{ transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)` }}
        draggable="true"
        onDragStart={(event) => event.stopPropagation()}
      >
        Drag me!
      </button>
    </div>
  );
};

export default DraggableDiv;
