import {useState} from 'react';
import * as Icon from 'react-feather';

const SeeImagesIcon = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
      style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "2px", background: "#E1E9FE", borderRadius: "4px", height: "24px", cursor: "pointer", width: isHovering ? "108px" : "24px" }}
    >
        <Icon.Image size={14} color={"#6992FC"} style={{ minWidth: "12px" }} />
        {isHovering && <span style={{ fontSize: "12px", color: "#6992FC", transitionDelay:'2s' }}>See images</span>}
    </div>
  )
}

export default SeeImagesIcon