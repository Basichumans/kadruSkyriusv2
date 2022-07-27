import React from "react";

const PopHoofsOnSkates = ({ open, onClose }) => {
  if (!open) {
    return null;
  }
  return (
    <div className="overlay">
      <div className="modalContainer">
        <iframe
          className="modalVimeo"
          frameBorder="0"
          title="Hoofs on Skates"
          src="https://player.vimeo.com/video/641847875?h=634321194a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        >
        </iframe>
        <p onClick={onClose} className="closeBtn">
          x
        </p>
      <div className="modalRight">
          <div className="content">
            <p>pavadinimas</p>
            <p>apie</p>
            <p>info info info info</p>
          </div>
      </div>
      </div>
    </div>
  );
};

export default PopHoofsOnSkates;
