import * as S from "./styles";
import pizza from "assets/images/pizza.png"

interface Props {
    nome: string
    foto: string
    descricao: string
}

const Product = ({ nome, foto, descricao }: Props) => {

    const setDescription = (descricao: string) => {
        if (descricao.length > 266) {
            return descricao.slice(0, 263) + '...'
        }
        return descricao
    }

    return (
        <S.Card>
            <S.Image src={foto}/>
            <S.Title>
                <h3>{nome}</h3>
            </S.Title>
            <S.Description>{setDescription(descricao)}</S.Description>
            <S.Button>Adicionar ao carrinho</S.Button>
        </S.Card>
    )
}

export default Product