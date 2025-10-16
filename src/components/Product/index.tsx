import * as S from "./styles";
import pizza from "../../assets/images/pizza.png"

const Product = () => (
    <S.Card>
        <S.Image src={pizza} />
        <S.Title>
            <h3>Pizza Marguerita</h3>
        </S.Title>
        <S.Description>
            A clássica Marguerita: molho de tomate suculento, mussarela derretida, 
            manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </S.Description>
        <S.Button>Adicionar ao carrinho</S.Button>
    </S.Card>

)

export default Product