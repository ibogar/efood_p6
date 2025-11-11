import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '@/store'
import { clear, close } from '@/store/reducers/cart'
import { changeMode } from '@/store/reducers/checkout'

import { Text } from './styles'
import { SidebarButton, Title } from '../styles'


const Checkout = () => {

    const dispatch = useDispatch()
    const { orderId } = useSelector((state:RootReducer) => state.checkout)

    const resetOrder = () => {
        dispatch(clear())
        dispatch(close())
        dispatch(changeMode('cart'))
    }
    
    return (
        <>
            <Title>Pedido realizado - {orderId} </Title>
            <Text>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</Text>
            <Text>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</Text>
            <Text>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</Text>
            <Text>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</Text>
            <SidebarButton 
                onClick={resetOrder}>
                    Concluir
            </SidebarButton>
        </>

    )
}

export default Checkout