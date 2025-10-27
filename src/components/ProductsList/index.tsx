import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Product from "../Product";
import { List } from "./styles";
import { ProductType } from "@/pages/Home";

interface Props {
    menu: ProductType[]
}

const ProductsList = ({ menu }: Props) => {

    return  (
        <div className="container">
            <List>
                {menu.map((i) => <Product key={i.id} nome={i.nome} foto={i.foto} descricao={i.descricao}/>)}
            </List>
        </div>
    )
}

export default ProductsList