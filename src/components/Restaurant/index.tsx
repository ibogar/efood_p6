import * as S from "./styles";
import japanese from "../../assets/images/japanese.png"
import star from "../../assets/images/star.png"

type Props = {
    name: string
    score: string
    description: string
    image: string
    tags: string[]
}

const Restaurant = ({ name, score, description, image, tags}: Props) => (
    <S.Card>
        <S.Image src={image} />
        <S.Tags>
            {tags.map((tag) => (
                <S.Tag key={tag}>{tag}</S.Tag>    
            ))}
        </S.Tags>
        <S.CardContainer>
            <S.Title>
                <h3>{name}</h3>
                <h3>{score} <img src={star}/></h3>
            </S.Title>
            <S.Description>{description}</S.Description>
            <S.Button to={'/profile'}>Saiba mais</S.Button>
        </S.CardContainer>
    </S.Card>

)

export default Restaurant