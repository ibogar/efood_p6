import RestaurantsList from "components/RestaurantsList";

import japanese from "assets/images/japanese.png";
import italian from "assets/images/italian.png";
import { ProductType } from "components/Product";

export type RestaurantType = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: ProductType[]
}

const restaurants: RestaurantType[] = [
    {
        id: 1,
        titulo: 'Hioki Sushi',
        avaliacao: 4.9,
        descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        capa: japanese,
        tipo: 'Japonesa',
        destacado: false,
        cardapio: []
    },
    {
        id: 2,
        titulo: 'La Dolce Vita Trattoria',
        avaliacao: 4.6,
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        capa: italian,
        tipo: 'Italiana',
        destacado: false,
        cardapio: []
    },
    {
        id: 3,
        titulo: 'La Dolce Vita Trattoria',
        avaliacao: 4.6,
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        capa: italian,
        tipo: 'Italiana',
        destacado: false,
        cardapio: []
    },
    {
        id: 4,
        titulo: 'La Dolce Vita Trattoria',
        avaliacao: 4.6,
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        capa: italian,
        tipo: 'Italiana',
        destacado: false,
        cardapio: []
    },
    {
        id: 5,
        titulo: 'La Dolce Vita Trattoria',
        avaliacao: 4.6,
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        capa: italian,
        tipo: 'Italiana',
        destacado: false,
        cardapio: []
    },
    {
        id: 6,
        titulo: 'La Dolce Vita Trattoria',
        avaliacao: 4.6,
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        capa: italian,
        tipo: 'Italiana',
        destacado: false,
        cardapio: []
    }
]

const Home = () => (
    <RestaurantsList restaurants={restaurants}/>
)

export default Home