import styled from 'styled-components/native';

import { spacing, colors } from '../../styles/variables';

import { Title } from '../../styles/typo';

export const CharInfo = styled.View`
    padding: ${({ padding }) => typeof padding != 'undefined' ? padding : spacing.sm }px;
    flex-flow: column nowrap;
`

export const CharName = styled(Title)`
    color: ${colors.primaryWhite};
    font-size: ${({ sizeName }) => sizeName ? sizeName : 20}px;
`

export const CharAlterEgo = styled.Text`
    color: ${colors.primaryWhite};
    font-family: gilroy-mendium;
    font-size: ${({ sizeAlterEgo }) => sizeAlterEgo ? sizeAlterEgo : 14}px;
`;