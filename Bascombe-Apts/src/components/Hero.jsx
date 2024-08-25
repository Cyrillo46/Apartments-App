import "../component-css/Hero.css";

export const Hero = () => {
  return (
    <>
      <div>
        <header
          className="hero-image"
          style={{
            backgroundImage: `url()`,
          }}></header>
      </div>
      <div>
        <form>
          <input
            type="text"
            id="inputField1"
            placeholder="First Name"
            style={{
              width: "300px",
              padding: "10px",
              fontSize: "16px",
              boxSizing: "border-box",
              marginBottom: "0",
              display: "inline",
            }}
          />
          <input
            type="text"
            id="inputField2"
            placeholder="Last Name"
            style={{
              width: "300px",
              padding: "10px",
              fontSize: "16px",
              boxSizing: "border-box",
              marginBottom: "0",
              display: "inline",
            }}
          />
          <input
            type="text"
            id="inputField3"
            placeholder="Email Address"
            style={{
              width: "300px",
              padding: "10px",
              fontSize: "16px",
              boxSizing: "border-box",
              display: "inline",
            }}
          />
        </form>
      </div>
      <button>Reserve</button>
    </>
  );
};
