import { useEffect, useState } from "react";

import RestaurantsList from "components/RestaurantsList";
import Header from "@/components/Header";


export type ProductType = {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
}

export type RestaurantType = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: ProductType[]
}


const Home = () => {
    const [restaurants, setRestaurants] = useState<RestaurantType[]>([])

    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
            .then((ans) => ans.json())
            .then((ans) => setRestaurants(ans))
    }, [])

    return (
        <>
            <Header />
            <RestaurantsList restaurants={restaurants}/>
        </>
    ) 
}

export default Home