
import '../assets/css/Hero1.css';  

const Hero1 = () => {  
  return (  
    <div className="hero">  
      <div className="text-container">  
        <h1 className="main-title">Bigger, Bolder & Better</h1>  
        <p className="description">  
          Connect Otter to your Google or Microsoft calendar and it can  
          automatically join and record  
        </p>  
      </div>  
      <div className="image-container">  
        <img  
          className="image"  
          src="/src/assets/images/Rectangle 3993@2x (1).svg" 
          alt="Hero"  
        />  
      </div>  
      <div className="image-container">  
        <img  
          className="image"  
          src="/src/assets/images/Rectangle 3994.svg" 
          alt="Team Collaboration"  
        />  
      </div>  
    </div>  
  );  
};  

export default Hero1; 