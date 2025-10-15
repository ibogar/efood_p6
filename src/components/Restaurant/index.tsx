import * as S from "./styles";
import japanese from "../../assets/images/japanese.png"
import star from "../../assets/images/star.png"

const Restaurant = () => (
    <S.Card>
        <S.Image src={japanese} />
        <S.Tags>
            <S.Tag>Destaque da semana</S.Tag>
            <S.Tag>Japonesa</S.Tag>
        </S.Tags>
        <S.CardContainer>
            <S.Title className="titleContainer">
                <h3>Hioki Sushi</h3>
                <h3>4.9 <img src={star}/></h3>
            </S.Title>
            <S.Description>
                Peça já o melhor da culinária japonesa no conforto da sua casa! 
                Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. 
                Entrega rápida, embalagens cuidadosas e qualidade garantida.
                Experimente o Japão sem sair do lar com nosso delivery!
            </S.Description>
            <S.Button>Saiba mais</S.Button>
        </S.CardContainer>
    </S.Card>

)

export default Restaurant