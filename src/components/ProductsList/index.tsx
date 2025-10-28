import Product from "../Product";
import { List, ModalButton, ModalCLose, ModalContainer, ModalContent, ModalDescription, ModalImage, ModalTitle } from "./styles";
import { ProductType } from "@/pages/Home";

import pizza from "../../assets/images/pizza.png"
import closeBtn from "../../assets/images/close.png"
import { useState } from "react";

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

    const formatPrice = (price = 0) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price)
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

                                <p className="servings">Serve: {modal.porcao.length > 11? `de ${modal.porcao}` : `${modal.porcao}`} </p>
                            </ModalDescription>
                            <ModalButton>Adicionar ao carrinho - {formatPrice(modal.preco)}</ModalButton>
                        </div>
                    </ModalContent>
                    <div onClick={() => closeModal()} className="overlay"></div>
                </ModalContainer>
            )}
        </div>
    )
}

export default ProductsList