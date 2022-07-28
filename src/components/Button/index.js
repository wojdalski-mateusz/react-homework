import * as S from "./styles"

const Button = ({onClick, text}) => {

    return (
        <S.Button onClick={onClick}>{text}</S.Button>
    )
}

export default Button;