import * as S from "./styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <S.Footer>
      <p>Made by Mateusz Wojdalski</p>
      <p>
        <a href="https://www.facebook.com/9matwoj9">
          <FacebookIcon sx={{ color: "blue" }} />
        </a>
        <a href="https://github.com/wojdalski-mateusz">
          <GitHubIcon sx={{ color: "crimson" }} />
        </a>
      </p>
    </S.Footer>
  );
};

export default Footer;
