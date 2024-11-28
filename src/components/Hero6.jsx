
import "../assets/css/Hero6.css";

const Hero6 = () => {
  const works = [
    {
      id: 1,
      title: "(01) Landing page",
      imgSrc: "/src/assets/images/Rectangle 3997.svg", 
      alt: "Landing page design 1",
    },
    {
      id: 2,
      title: "(02) Landing page",
      imgSrc: "/src/assets/images/Rectangle 3998.svg", 
      alt: "Landing page design 2",
    },
    {
      id: 3,
      title: "(03) Landing page",
      imgSrc: "/src/assets/images/Rectangle 3999.svg", 
      alt: "Landing page design 3",
    },
  ];

  return (
    <div className="latest-works">
      <div className="header">
        <h2>
          <span className="highlight">Latest</span> Works
        </h2>
        <p>
          At pulvinar egestas ornare ac hendrerit ante <br />
          Orci sit nisl ultricies enim pellentesque <br />
          Tristique donec et amet nunc Quis
        </p>
      </div>
      <div className="works-grid">
        {works.map((work) => (
          <div className="work-item" key={work.id}>
            <img src={work.imgSrc} alt={work.alt} />
            <h3>{work.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero6;
