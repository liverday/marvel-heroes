import styled from 'styled-components/native'

import { colors, spacing } from '../../styles/variables'

export const Container = styled.View`
    margin-bottom: ${spacing.xl}px;
`

export const CategoryHeader = styled.View`
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: ${spacing.sm}px ${spacing.md}px;
`

export const CategoryTitle = styled.Text`
    font-family: gilroy-bold;
    color: ${colors.primaryRed};
    font-size: 18px;
`

export const ShowAllLink = styled.TouchableOpacity`
    font-family: gilroy-medium;
    font-size: 14px;
    color: ${colors.primaryGrey};
    background: transparent;
`