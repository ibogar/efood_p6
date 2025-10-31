import { useParams } from "react-router-dom";

import Header from "@/components/Header";
import ProductsList from "../../components/ProductsList";
import { useGetSelectedRestaurantQuery } from "@/services/api";

const Profile = () => {

    const { id } = useParams()
    const { data: restaurant } = useGetSelectedRestaurantQuery(id!)
    const capitalize = (str: string) =>
        str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : "";

    if (!restaurant) {
        return <p>Carregando</p>
    }

    return (
        <>
            <Header capa={restaurant.capa} tipo={capitalize(restaurant.tipo)} titulo={restaurant.titulo} />
            <ProductsList menu={restaurant.cardapio}/>
        </>
    )
}

export default Profile