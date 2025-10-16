import RestaurantCLass from "models/RestaurantClass";
import RestaurantsList from "../../components/RestaurantsList";

import japanese from "../../assets/images/japanese.png";
import italian from "../../assets/images/italian.png";

const restaurants: RestaurantCLass[] = [
    {
        id: 1,
        name: 'Hioki Sushi',
        score: '4.9',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        image: japanese,
        tags: ['Destaque da semana', 'Japonesa']
    },
    {
        id: 2,
        name: 'La Dolce Vita Trattoria',
        score: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: italian,
        tags: ['Italiana']
    },
    {
        id: 3,
        name: 'La Dolce Vita Trattoria',
        score: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: italian,
        tags: ['Italiana']
    },
    {
        id: 4,
        name: 'La Dolce Vita Trattoria',
        score: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: italian,
        tags: ['Italiana']
    },
    {
        id: 5,
        name: 'La Dolce Vita Trattoria',
        score: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: italian,
        tags: ['Italiana']
    },
    {
        id: 6,
        name: 'La Dolce Vita Trattoria',
        score: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: italian,
        tags: ['Italiana']
    }
]

const Home = () => (
    <RestaurantsList restaurants={restaurants}/>
)

export default Home