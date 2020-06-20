import styled from 'styled-components/native';

import { colors, spacing } from '../../styles/variables'
import { Title } from '../../styles/typo'

export const Container = styled.View`
    margin-top: ${spacing.md}px;
    padding: 0 ${spacing.md}px;
`

export const WelcomeText = styled.Text`
    font-family: gilroy-semibold;
    font-size: 14px;
    color: ${colors.primaryGrey};
`

export const PickYourCharText = styled(Title)`
    font-size: 32px;
`