import * as S from "./styles";
import star from "assets/images/star.png"

type Props = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: ProductType[]
}

const Restaurant = ({ id, titulo, destacado, tipo, avaliacao, descricao, capa, cardapio}: Props) => (
    <S.Card>
        <S.Image src={capa} />
        <S.Tags>
            {destacado && (
                <S.Tag>Destaque da semana</S.Tag>
            )}
            <S.Tag>{tipo}</S.Tag>
        </S.Tags>
        <S.CardContainer>
            <S.Title>
                <h3>{titulo}</h3>
                <h3>{avaliacao} <img src={star}/></h3>
            </S.Title>
            <S.Description>{descricao}</S.Description>
            <S.Button to={'/profile'}>Saiba mais</S.Button>
        </S.CardContainer>
    </S.Card>

)

export default Restaurant