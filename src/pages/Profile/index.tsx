import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { RestaurantType } from "../Home";

import Header from "@/components/Header";
import ProductsList from "../../components/ProductsList";

const Profile = () => {

    const { id } = useParams()
    const [restaurant, setRestaurant] = useState<RestaurantType>()
    const capitalize = (str: string) =>
        str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : "";

    useEffect(() => {
        fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
            .then((ans) => ans.json())
            .then((ans) => setRestaurant(ans))
    }, [])

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