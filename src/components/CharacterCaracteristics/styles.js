import styled from 'styled-components/native'

import { spacing, colors } from '../../styles/variables';

export const Container = styled.View`
    justify-content: space-between;
    flex-flow: row nowrap;
    margin-top: ${spacing.lg * 2}px;
`

export const InfoContainer = styled.View`
    align-items: center;
`

export const InfoText = styled.Text`
    margin-top: ${spacing.sm}px;
    font-family: gilroy-medium;
    font-size: 12px;
    color: ${colors.primaryWhite}
`