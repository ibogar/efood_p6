import RestaurantCLass from "models/RestaurantClass";
import Restaurant from "../Restaurant";
import { List } from "./styles";

type Props = {
    restaurants: RestaurantCLass[]
}

const RestaurantsList = ({ restaurants }: Props) => (
    <div className="container">
        <List>
            {restaurants.map((restaurant) => (
                <Restaurant
                    key={restaurant.id}
                    name={restaurant.name}
                    score={restaurant.score}
                    description={restaurant.description}
                    image={restaurant.image}
                    tags={restaurant.tags}
                />
            ))}
        </List>
    </div>
)

export default RestaurantsList