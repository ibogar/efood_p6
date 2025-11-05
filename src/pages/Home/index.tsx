import RestaurantsList from "components/RestaurantsList";
import Header from "@/components/Header";

import { useGetRestaurantsQuery } from "@/services/api";


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