import Restaurant from "components/Restaurant";
import { List } from "./styles";
import { RestaurantType } from "pages/Home";

type Props = {
    restaurants: RestaurantType[]
}

const RestaurantsList = ({ restaurants }: Props) => (
    <div className="container">
        <List>
            {restaurants.map((restaurant) => (
                <Restaurant
                    key={restaurant.id}
                    id={restaurant.id}
                    titulo={restaurant.titulo}
                    destacado={restaurant.destacado}
                    tipo={restaurant.tipo}
                    avaliacao={restaurant.avaliacao}
                    descricao={restaurant.descricao}
                    capa={restaurant.capa}
                    cardapio={restaurant.cardapio}
                />
            ))}
        </List>
    </div>
)

export default RestaurantsList