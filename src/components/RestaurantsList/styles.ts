import styled from 'styled-components'

import { breakpoints } from '@/styles'

export const List = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 48px;
    row-gap: 80px;
    padding: 0 20px;

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
        row-gap: 40px;
    }
`