import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Characters from "./components/Characters/index";
import Todo from "./components/Todo";
import Contact from "./components/Contact";
import Button from "./components/Button/index";
import * as S from "./styles"

const name = "Mateusz Wojdalski";
const description =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
const imageAddress =
  "https://media.istockphoto.com/photos/lifework-balance-and-city-living-lifestyle-concept-of-business-man-picture-id1183657530";

const App = () => {
  const [logoText, setLogoText] = useState("");
  const [newLogoText, setNewLogoText] = useState("Logo");
  const [showContent, setShowContent] = useState("AboutMe");

  const displayPage = (page) => {
    setShowContent(page);
  };

  return (
    <S.MainWrapper>
      <S.Navbar>
        <div>{newLogoText}</div>
        <div>
          <Button
            onClick={() => displayPage("AboutMe")}
            text={"O mnie"}
          />
          <Button
            onClick={() => displayPage("Characters")}
            text={"Lista postaci"}
          />
          <Button onClick={() => displayPage("Todo")} text={"Todo"} />
          <Button
            onClick={() => displayPage("Contact")}
            text={"Kontakt"}
          />
        </div>
      </S.Navbar>
      <S.Content>
        {showContent === "AboutMe" && (
          <AboutMe
            src={imageAddress}
            alt={"random-photo"}
            name={name}
            description={description}
            logoText={logoText}
            newLogoText={newLogoText}
            setLogoText={setLogoText}
            setNewLogoText={setNewLogoText}
          />
        )}
        {showContent === "Characters" && <Characters />}
        {showContent === "Todo" && (
          <Todo newLogoText={newLogoText} setNewLogoText={setNewLogoText} />
        )}
        {showContent === "Contact" && <Contact />}
      </S.Content>
    </S.MainWrapper>
  );
};

export default App;
