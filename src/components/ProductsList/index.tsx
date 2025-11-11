import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Product from '../Product'

import closeBtn from '@/assets/images/close.png'
import formatPrice from '@/utils/formatPrice'
import { add, open } from '@/store/reducers/cart'
import { changeMode } from '@/store/reducers/checkout'

import * as S from './styles'

interface Props {
    menu: ProductType[]
}

interface ModalProps extends ProductType {
    isVisible: boolean
}

const ProductsList = ({ menu }: Props) => {

    const [modal, setModal] = useState<ModalProps>()

    const closeModal = () => {
        setModal({
            foto: "",
            preco: 0,
            id: 0,
            nome: "",
            descricao: "",
            porcao: "",
            isVisible: false
        })
    }

    const dispatch = useDispatch()
    const addToCart = (product: ProductType) => {
        dispatch(add(product))
        dispatch(changeMode('cart'))
        dispatch(open())
        closeModal()
    }

    return  (
        <div className="container">
            <S.List>
                {menu.map((i) => (
                    <li key={i.id} onClick={() => setModal({
                        foto: i.foto,
                        descricao: i.descricao,
                        id: i.id,
                        isVisible: true,
                        nome: i.nome,
                        porcao: i.porcao,
                        preco: i.preco
                    })}>
                        <Product  
                            nome={i.nome} 
                            foto={i.foto} 
                            descricao={i.descricao}
                        /> 
                    </li>))}
            </S.List>
            {modal && (
                <S.ModalContainer className={modal.isVisible ? "visible" : ""}>
                    <S.ModalContent className="container">
                        <S.ModalCLose onClick={() => closeModal()} src={closeBtn} />
                        {modal.foto && <S.ModalImage src={modal.foto} />}
                        <div>
                            <S.ModalTitle>{modal.nome}</S.ModalTitle>
                            <S.ModalDescription>
                                {modal.descricao}

                                <p className="servings">Serve: {modal.porcao.length > 11 ? `de ${modal.porcao}` : `${modal.porcao}`} </p>
                            </S.ModalDescription>
                            <S.ModalButton onClick={() => addToCart(modal)}>Adicionar ao carrinho - {formatPrice(modal.preco)}</S.ModalButton>
                        </div>
                    </S.ModalContent>
                    <div onClick={() => closeModal()} className="overlay"></div>
                </S.ModalContainer>
            )}
        </div>
    )
}

export default ProductsList