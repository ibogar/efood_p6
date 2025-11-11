import RestaurantsList from '@/components/RestaurantsList'
import Header from '@/components/Header'

import { useGetRestaurantsQuery } from '@/services/api'
import { ClockLoader } from 'react-spinners'
import { colors } from '@/styles'


const Home = () => {
    const { data } = useGetRestaurantsQuery()

    if (!data) {
        return (
            <div className='center-loader'>
                <ClockLoader color={colors.primary} size={240}/>
            </div>
        )
    }


    return (
        <>
            <Header />
            <RestaurantsList restaurants={data}/>
        </>
    ) 
}

export default Home