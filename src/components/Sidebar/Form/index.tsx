import { useDispatch, useSelector } from "react-redux"

import { RootReducer } from "@/store"
import { changeMode, setOrder } from "@/store/reducers/checkout"

import { SidebarButton, Title } from "../styles"
import { useEffect, useState } from "react"
import { InputGroup, Row } from "./styles"
import { useFormik } from "formik"
import { usePurchaseMutation } from "@/services/api"

const Form = () => {
    const dispatch = useDispatch()
    const [purchase, { data, isSuccess }] = usePurchaseMutation()
    const [delivery, setDelivery] = useState(true)
    const { items } = useSelector((state: RootReducer) => state.cart)

    const form = useFormik({
        initialValues: {
            receiver: '',
            address: '',
            city: '',
            postalCode: '',
            number: '',
            address2: '',
            cardOwner: '',
            cardNumber: '',
            securityCode: '',
            expMonth: '',
            expYear: ''
        },
        onSubmit: (values) => {
            purchase({
                products: items.map((item) => ({
                            id: item.id,
                            preco: item.preco
                        })),
                delivery: {
                    receiver: values.receiver,
                    address: {
                        description: values.address,
                        city: values.city,
                        zipCode: values.postalCode,
                        number: Number(values.number),
                        complement: values.address2
                    }
                },
                payment: {
                    card: {
                        name: values.cardOwner,
                        number: values.cardNumber,
                        code: Number(values.securityCode),
                        expires: {
                            month: Number(values.expMonth),
                            year: Number(values.expYear)
                        }
                    }
                }
            })
        }
    })

    useEffect(() => {
            if (data && isSuccess) {
                dispatch(setOrder(data.orderId))
                dispatch(changeMode('checkout'))
            }
    }, [data, isSuccess, dispatch])

    

    return (
        <form onSubmit={form.handleSubmit}>
            {delivery ? 
                <>
                    <Title>Entrega</Title>
                    <InputGroup>
                        <label htmlFor="receiver">Quem irá receber</label>
                        <input 
                            type="text" 
                            id="receiver"
                            name="receiver"
                            value={form.values.receiver}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="address">Endereço</label>
                        <input 
                            type="text" 
                            id="address"
                            name="address"
                            value={form.values.address}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="city">Cidade</label>
                        <input 
                            type="text" 
                            id="city"
                            name="city"
                            value={form.values.city}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        />
                    </InputGroup>
                    <Row>
                        <InputGroup $maxWidth="155px">
                            <label htmlFor="postalCode">CEP</label>
                            <input 
                                type="text" 
                                id="postalCode"
                                name="postalCode"
                                value={form.values.postalCode}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                        </InputGroup>
                        <InputGroup $maxWidth="155px">
                            <label htmlFor="number">Número</label>
                            <input 
                                type="text" 
                                id="number"
                                name="number"
                                value={form.values.number}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                        </InputGroup>
                    </Row>
                    <InputGroup>
                        <label htmlFor="address2">Complemento (opcional)</label>
                        <input 
                            type="text" 
                            id="address2"
                            name="address2"
                            value={form.values.address2}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        />
                    </InputGroup>
                    <SidebarButton $marginTop="24px" type="button" onClick={() => setDelivery(false)}>Continuar para o pagamento</SidebarButton>
                    <SidebarButton $marginTop="8px" type="button" onClick={() => dispatch(changeMode('cart'))}>Voltar para o carrinho</SidebarButton>
                </>
                :
                <>
                    <Title>Pagamento - valor a pagar R$ 90,00</Title>
                    <InputGroup>
                        <label htmlFor="cardOwner">Nome no cartão</label>
                        <input 
                            type="text" 
                            id="cardOwner"
                            name="cardOwner"
                            value={form.values.cardOwner}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        />
                    </InputGroup>
                    <Row>
                        <InputGroup $maxWidth="228px">
                            <label htmlFor="cardNumber">Número do cartão</label>
                            <input 
                                type="text" 
                                id="cardNumber"
                                name="cardNumber"
                                value={form.values.cardNumber}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                        </InputGroup>
                        <InputGroup $maxWidth="88px">
                            <label htmlFor="securityCode">CVV</label>
                            <input 
                                type="text" 
                                id="securityCode"
                                name="securityCode"
                                value={form.values.securityCode}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup $maxWidth="155px">
                            <label htmlFor="expMonth">Mês de vencimento</label>
                            <input 
                                type="text" 
                                id="expMonth"
                                name="expMonth"
                                value={form.values.expMonth}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                        </InputGroup>
                        <InputGroup $maxWidth="155px">
                            <label htmlFor="expYear">Ano de vencimento</label>
                            <input 
                                type="text" 
                                id="expYear"
                                name="expYear"
                                value={form.values.expYear}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                        </InputGroup>
                    </Row>
                    <SidebarButton $marginTop="24px" type="submit">Finalizar pagamento</SidebarButton>
                    <SidebarButton $marginTop="8px" type="button" onClick={() => setDelivery(true)}>Editar endereço</SidebarButton>
                </>
            }
        </form>
    )
}

export default Form