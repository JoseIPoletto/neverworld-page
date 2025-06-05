import './HeroSection.css';

const background = process.env.PUBLIC_URL + '/assets/background.jpg';

export default function HeroSection() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${background})` }}>
      <div className="button-container">
        <button className="primary">UNIRSE A LOS NIÑOS PERDIDOS</button>
        <button className="secondary">VER EL TRAILER</button>
      </div>
    </div>
  );
}
