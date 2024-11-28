
import "../assets/css/Hero4.css";

const Hero4 = () => {
  const awards = [
    { year: "2020", title: "Websites Of The Year", studio: "Lewis Studio" },
    { year: "2020", title: "Websites Of The Year", studio: "Lewis Studio" },
    { year: "2020", title: "Websites Of The Year", studio: "Lewis Studio" },
    { year: "2020", title: "Websites Of The Year", studio: "Lewis Studio" },
  ];

  return (
    <section className="awards-section">
      <h2 className="awards-title">
        Our<span>Awards</span>
      </h2>
      <div className="awards-list">
        {awards.map((award, index) => (
          <div key={index} className="award-item">
            <div className="award-content">
              <h3 className="award-title">
                {award.title} {award.year}
              </h3>
              <p className="award-studio">{award.studio}</p>
            </div>
            <a href="#" className="see-project">
              See Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero4;