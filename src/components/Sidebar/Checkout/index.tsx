import { useDispatch } from "react-redux";

import { close, placeOrder } from "@/store/reducers/cart";

import { Text } from "./styles";
import { SidebarButton, Title } from "../styles";

const Checkout = () => {

    const dispatch = useDispatch()

    return (
        <>
            <Title>Pedido realizado - ORDER_ID</Title>
            <Text>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</Text>
            <Text>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</Text>
            <Text>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</Text>
            <Text>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</Text>
            <SidebarButton 
                onClick={() => {
                    dispatch(placeOrder('cart'))
                    dispatch(close())
                    }
                }>
                    Concluir
            </SidebarButton>
        </>

    )
}

export default Checkout