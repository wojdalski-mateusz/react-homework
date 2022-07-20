import Button from "./Button";

const AboutMe = ({src, alt, name, description, logoText, setLogoText, setNewLogoText, newLogoText}) => {


  const handleSubmit = (event) => {
    event.preventDefault();
    setNewLogoText(newLogoText+logoText)
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
              placeholder={"dodaj tekst do logo"}
              onChange={(event) => changeLogo(event)}
            />
            <Button type="submit" onClick={handleSubmit} text={"Dodaj"} />
          </form>
        </div>
      </>
    );
}


export default AboutMe;