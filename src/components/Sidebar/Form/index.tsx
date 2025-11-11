import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '@/store'
import { changeMode, setOrder } from '@/store/reducers/checkout'

import { usePurchaseMutation } from '@/services/api'

import formatPrice from '@/utils/formatPrice'
import { cardNumberMask, lettersOnlyMask, numbersOnlyMask, postalCodeMask } from '@/utils/masks'

import { InputGroup, Row } from './styles'
import { SidebarButton, Title } from '../styles'

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
        validationSchema: Yup.object({
            receiver: Yup.string()
                .min(5, 'Insira o nome completo de quem irá receber o pedido')
                .required('Campo obrigatório'),
            address: Yup.string()
                .min(5, 'Insira o nome da sua rua/avenida')
                .required('Campo obrigatório'),
            city: Yup.string()
                .min(5, 'Insira o nome da sua cidade')
                .required('Campo obrigatório'),
            postalCode: Yup.string()
                .min(9, 'O CEP deve ter 8 dígitos')
                .max(9, 'O CEP deve ter 8 dígitos')
                .required('Campo obrigatório'),
            number: Yup.string()
                .min(2, 'Insira o número do endereço')
                .required('Campo obrigatório'),
            address2: Yup.string()
                .min(4, 'Insira o complemento'),
            cardOwner: Yup.string()
                .min(5, 'Insira seu nome completo')
                .required('Campo obrigatório'),
            cardNumber: Yup.string()
                .min(19, 'Número do cartão deve conter 16 caracteres')
                .max(19, 'Número do cartão deve conter 16 caracteres')
                .required('Campo obrigatório'),
            securityCode: Yup.string()
                .min(3, 'O código deve ter 3 caracteres')
                .max(3, 'O código deve ter 3 caracteres')
                .required('Campo obrigatório'),
            expMonth: Yup.string()
                .min(2, 'Insira o mês no formato MM')
                .max(2, 'Insira o mês no formato MM')
                .required('Campo obrigatório'),
            expYear: Yup.string()
                .min(4, 'Insira o ano no formato YYYY')
                .max(4, 'Insira o ano no formato YYYY')
                .required('Campo obrigatório')
        }),
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

    const checkInputHasError = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isTouched && isInvalid

        return hasError
    }

    useEffect(() => {
            if (data && isSuccess) {
                dispatch(setOrder(data.orderId))
                dispatch(changeMode('checkout'))
            }
    }, [data, isSuccess, dispatch])


    const sumPrices = () => {
    
            const totalPrice = items.reduce((accumulator, currentValue) => {
                return accumulator += currentValue.preco * currentValue.quantity
            } , 0)
    
            return formatPrice(totalPrice)
        }
    

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
                            onChange={(e) => {
                                    const masked = lettersOnlyMask(e.target.value)
                                    form.setFieldValue('receiver', masked)
                                }}
                            onBlur={form.handleBlur}
                            className={checkInputHasError('receiver') ? 'error' : ''}
                            placeholder={checkInputHasError('receiver') ? 'Campo obrigatório' : ''}
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
                            className={checkInputHasError('address') ? 'error' : ''}
                            placeholder={checkInputHasError('address') ? 'Campo obrigatório' : ''}
                        />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="city">Cidade</label>
                        <input 
                            type="text" 
                            id="city"
                            name="city"
                            value={form.values.city}
                            onChange={(e) => {
                                    const masked = lettersOnlyMask(e.target.value)
                                    form.setFieldValue('city', masked)
                                }}
                            onBlur={form.handleBlur}
                            className={checkInputHasError('city') ? 'error' : ''}
                            placeholder={checkInputHasError('city') ? 'Campo obrigatório' : ''}
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
                                onChange={(e) => {
                                    const masked = postalCodeMask(e.target.value)
                                    form.setFieldValue('postalCode', masked)
                                }}
                                onBlur={form.handleBlur}
                                className={checkInputHasError('postalCode') ? 'error' : ''}
                                placeholder={checkInputHasError('postalCode') ? 'Campo obrigatório' : ''}
                            />
                        </InputGroup>
                        <InputGroup $maxWidth="155px">
                            <label htmlFor="number">Número</label>
                            <input 
                                type="text" 
                                id="number"
                                name="number"
                                value={form.values.number}
                                onChange={(e) => {
                                    const masked = numbersOnlyMask(e.target.value)
                                    form.setFieldValue('number', masked)
                                }}
                                onBlur={form.handleBlur}
                                className={checkInputHasError('number') ? 'error' : ''}
                                placeholder={checkInputHasError('number') ? 'Campo obrigatório' : ''}
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
                            className={checkInputHasError('address2') ? 'error' : ''}
                        />
                    </InputGroup>
                    <SidebarButton $marginTop="24px" type="button" onClick={() => setDelivery(false)}>Continuar para o pagamento</SidebarButton>
                    <SidebarButton $marginTop="8px" type="button" onClick={() => dispatch(changeMode('cart'))}>Voltar para o carrinho</SidebarButton>
                </>
                :
                <>
                    <Title>Pagamento - valor a pagar {sumPrices()}</Title>
                    <InputGroup>
                        <label htmlFor="cardOwner">Nome no cartão</label>
                        <input 
                            type="text" 
                            id="cardOwner"
                            name="cardOwner"
                            value={form.values.cardOwner}
                            onChange={(e) => {
                                    const masked = lettersOnlyMask(e.target.value)
                                    form.setFieldValue('cardOwner', masked)
                                }}
                            onBlur={form.handleBlur}
                            className={checkInputHasError('cardOwner') ? 'error' : ''}
                            placeholder={checkInputHasError('cardOwner') ? 'Campo obrigatório' : ''}
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
                                onChange={(e) => {
                                    const masked = cardNumberMask(e.target.value)
                                    form.setFieldValue('cardNumber', masked)
                                }}
                                onBlur={form.handleBlur}
                                className={checkInputHasError('cardNumber') ? 'error' : ''}
                                placeholder={checkInputHasError('cardNumber') ? 'Campo obrigatório' : ''}
                            />
                        </InputGroup>
                        <InputGroup $maxWidth="88px">
                            <label htmlFor="securityCode">CVV</label>
                            <input 
                                type="text" 
                                id="securityCode"
                                name="securityCode"
                                value={form.values.securityCode}
                                onChange={(e) => {
                                    const masked = numbersOnlyMask(e.target.value, 3)
                                    form.setFieldValue('securityCode', masked)
                                }}
                                onBlur={form.handleBlur}
                                className={checkInputHasError('securityCode') ? 'error' : ''}
                                placeholder={checkInputHasError('securityCode') ? 'Obrigatório' : ''}
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
                                onChange={(e) => {
                                    const masked = numbersOnlyMask(e.target.value, 2)
                                    form.setFieldValue('expMonth', masked)
                                }}
                                onBlur={form.handleBlur}
                                className={checkInputHasError('expMonth') ? 'error' : ''}
                                placeholder={checkInputHasError('expMonth') ? 'Campo obrigatório' : ''}
                            />
                        </InputGroup>
                        <InputGroup $maxWidth="155px">
                            <label htmlFor="expYear">Ano de vencimento</label>
                            <input 
                                type="text" 
                                id="expYear"
                                name="expYear"
                                value={form.values.expYear}
                                onChange={(e) => {
                                    const masked = numbersOnlyMask(e.target.value, 4)
                                    form.setFieldValue('expYear', masked)
                                }}
                                onBlur={form.handleBlur}
                                className={checkInputHasError('expYear') ? 'error' : ''}
                                placeholder={checkInputHasError('expYear') ? 'Campo obrigatório' : ''}
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