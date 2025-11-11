import { useParams } from 'react-router-dom'

import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import ProductsList from '@/components/ProductsList'

import { useGetSelectedRestaurantQuery } from '@/services/api'
import { ClockLoader } from 'react-spinners'
import { colors } from '@/styles'

const Profile = () => {

    const { id } = useParams()
    const { data: restaurant } = useGetSelectedRestaurantQuery(id!)
    const capitalize = (str: string) =>
        str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : "";

    if (!restaurant) {
        return (
            <div className='center-loader'>
                <ClockLoader color={colors.primary} size={240}/>
            </div>
        )
    }

    return (
        <>
            <Header capa={restaurant.capa} tipo={capitalize(restaurant.tipo)} titulo={restaurant.titulo} />
            <ProductsList menu={restaurant.cardapio}/>
            <Sidebar />
        </>
    )
}

export default Profile