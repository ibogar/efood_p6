import { useDispatch, useSelector } from "react-redux"

import { RootReducer } from "@/store"
import { placeOrder } from "@/store/reducers/cart"

import { SidebarButton, Title } from "../styles"
import { useState } from "react"
import { InputGroup, Row } from "./styles"

const Form = () => {
    const dispatch = useDispatch()

    const [delivery, setDelivery] = useState(true)

    return (
        <form>
            {delivery ? 
                <>
                    <Title>Entrega</Title>
                    <InputGroup>
                        <label htmlFor="recipient">Quem irá receber</label>
                        <input type="text" id="recipient" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="address">Endereço</label>
                        <input type="text" id="address" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="city">Cidade</label>
                        <input type="text" id="city" />
                    </InputGroup>
                    <Row>
                        <InputGroup maxWidth="155px">
                            <label htmlFor="postalCode">CEP</label>
                            <input type="text" id="postalCode" />
                        </InputGroup>
                        <InputGroup maxWidth="155px">
                            <label htmlFor="number">Número</label>
                            <input type="text" id="number" />
                        </InputGroup>
                    </Row>
                    <InputGroup>
                        <label htmlFor="address2">Complemento (opcional)</label>
                        <input type="text" id="address2" />
                    </InputGroup>
                    <SidebarButton marginTop="24px" type="button" onClick={() => setDelivery(false)}>Continuar para o pagamento</SidebarButton>
                    <SidebarButton marginTop="8px" type="button" onClick={() => dispatch(placeOrder('cart'))}>Voltar para o carrinho</SidebarButton>
                </>
                :
                <>
                    <Title>Pagamento - valor a pagar R$ 90,00</Title>
                    <InputGroup>
                        <label htmlFor="cardOwner">Nome no cartão</label>
                        <input type="text" id="cardOwner" />
                    </InputGroup>
                    <Row>
                        <InputGroup maxWidth="228px">
                            <label htmlFor="cardNumber">Número do cartão</label>
                            <input type="text" id="cardNumber" />
                        </InputGroup>
                        <InputGroup maxWidth="88px">
                            <label htmlFor="securityCode">CVV</label>
                            <input type="text" id="securityCode" />
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup maxWidth="155px">
                            <label htmlFor="expMonth">Mês de vencimento</label>
                            <input type="text" id="expMonth" />
                        </InputGroup>
                        <InputGroup maxWidth="155px">
                            <label htmlFor="expYear">Ano de vencimento</label>
                            <input type="text" id="expYear" />
                        </InputGroup>
                    </Row>
                    <SidebarButton marginTop="24px" type="button" onClick={() => dispatch(placeOrder('checkout'))}>Finalizar pagamento</SidebarButton>
                    <SidebarButton marginTop="8px" type="button" onClick={() => setDelivery(true)}>Editar endereço</SidebarButton>
                </>
            }
        </form>
    )
}

export default Form