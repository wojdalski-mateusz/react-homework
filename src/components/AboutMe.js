const AboutMe = ({src, alt, name, description, logoText, setLogoText, setNewLogoText}) => {


  const handleSubmit = (event) => {
    event.preventDefault();
    setNewLogoText(logoText)
    setLogoText("")
  };

  const changeLogo = (event) => {
    setLogoText(event.target.value);
  };

    return (
      <>
        <img className="myImage" src={src} alt={alt} />
        <div className="name">{name}</div>
        <p className="aboutMe-text">{description}</p>
        <div className="update-logo-button">
          <form onSubmit={(event) => handleSubmit(event)}>
            <input
              type="text"
              value={logoText}
              placeholder={"wprowadź nowe logo"}
              onChange={(event) => changeLogo(event)}
            />
            <button type="submit" onClick={handleSubmit}>
              Zmień logo
            </button>
          </form>
        </div>
      </>
    );
}


export default AboutMe;