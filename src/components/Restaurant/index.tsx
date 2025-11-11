import star from '@/assets/images/star.png'

import * as S from './styles'

interface Props {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
}

const Restaurant = ({ id, titulo, destacado, tipo, avaliacao, descricao, capa}: Props) => {

    const setDescription = (description: string) => {
        if (description.length > 283) {
            return description.slice(0, 280) + '...'
        }
        return description
    }

    return (
        <S.Card to={`/profile/${id}`}>
            <S.Image src={capa} />
            <S.Tags>
                {destacado && (
                    <S.Tag>Destaque da semana</S.Tag>
                )}
                <S.Tag>{tipo}</S.Tag>
            </S.Tags>
            <S.CardContainer>
                <S.Title>
                    <h3>{titulo}</h3>
                    <h3>{avaliacao} <img src={star}/></h3>
                </S.Title>
                <S.Description>{setDescription(descricao)}</S.Description>
                <S.Button to={`/profile/${id}`}>Saiba mais</S.Button>
            </S.CardContainer>
        </S.Card>
    )
}

export default Restaurant