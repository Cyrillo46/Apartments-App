export const Footer = () => {
  return (
    <>
      <h2 className="footer-form">Sign Up for Updates...</h2>
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
      <div className="footer-container">
        <div className="footer-logo"></div>
        <div className="footer-amenities">
          <ul>
            <li>
              <a href="">Amenities</a>
            </li>
            <li>
              <a href="">History</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Faqs</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Compliance</a>
            </li>
            <li>
              <a href="">Accessibility</a>
            </li>
            <li>
              <a href="">(Drone Photographer?)</a>
            </li>
          </ul>
        </div>
        <div className="footer-experiences"></div>
      </div>
    </>
  );
};
