import { useEffect, useState } from "react";

import RestaurantsList from "components/RestaurantsList";
import Header from "@/components/Header";

import { useGetRestaurantsQuery } from "@/services/api";

export interface ProductType {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
}

export interface RestaurantType {
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
    const { data } = useGetRestaurantsQuery()

    if (!data) {
        return <h3>Carregando</h3>
    }


    return (
        <>
            <Header />
            <RestaurantsList restaurants={data}/>
        </>
    ) 
}

export default Home