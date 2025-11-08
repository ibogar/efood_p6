import Product from "../Product";
import { List, ModalButton, ModalCLose, ModalContainer, ModalContent, ModalDescription, ModalImage, ModalTitle } from "./styles";

import closeBtn from "../../assets/images/close.png"
import { useState } from "react";
import formatPrice from "@/utils/formatPrice";
import { useDispatch } from "react-redux";
import { add, open } from "@/store/reducers/cart";
import { changeMode } from "@/store/reducers/checkout"

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
            <List>
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
            </List>
            {modal && (
                <ModalContainer className={modal.isVisible ? "visible" : ""}>
                    <ModalContent className="container">
                        <ModalCLose onClick={() => closeModal()} src={closeBtn} />
                        <ModalImage src={modal.foto}/>
                        <div>
                            <ModalTitle>{modal.nome}</ModalTitle>
                            <ModalDescription>
                                {modal.descricao}

                                <p className="servings">Serve: {modal.porcao.length > 11 ? `de ${modal.porcao}` : `${modal.porcao}`} </p>
                            </ModalDescription>
                            <ModalButton onClick={() => addToCart(modal)}>Adicionar ao carrinho - {formatPrice(modal.preco)}</ModalButton>
                        </div>
                    </ModalContent>
                    <div onClick={() => closeModal()} className="overlay"></div>
                </ModalContainer>
            )}
        </div>
    )
}

export default ProductsList