import Button from "./Button";

const AboutMe = ({
  src,
  alt,
  name,
  description,
  logoText,
  setLogoText,
  setNewLogoText,
  newLogoText,
}) => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setNewLogoText(newLogoText + logoText);
  //   setLogoText("");
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedLogoText = newLogoText + logoText;

    if(updatedLogoText.length > 20) {
      window.alert("Logo text shouldn't exceed more than 20 characters");
      setNewLogoText(newLogoText)
      setLogoText("")
      return;
    }

    setNewLogoText(updatedLogoText)
    setLogoText("")
  };

  const changeLogo = (event) => {
    const userLogoInput = event.target.value;

    if (userLogoInput.length === 10) {
      window.alert("User input shouldn't exceed 10 characters");
      return;
    }
    setLogoText(userLogoInput);
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
};

export default AboutMe;
