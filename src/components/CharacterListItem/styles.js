import styled from 'styled-components/native';

import { spacing, colors } from '../../styles/variables';

import { Title } from '../../styles/typo';
import LinearGradient from 'react-native-linear-gradient';

export const TouchableContainer = styled.TouchableOpacity`
    margin-right: ${spacing.md}px;
`;

export const Container = styled.View`
    width: 140px;
    height: 230px;
    border-radius: 16px;
    position: relative;
    align-items: flex-start;
    justify-content: flex-end;
`

export const Gradient = styled(LinearGradient)`
    width: 140px;
    height: 230px;
    border-radius: 16px;
    position: absolute;
`

export const CharImage = styled.Image`
    width: 140px;
    height: 230px;
    border-radius: 16px;
    position: absolute;
`

export const CharInfo = styled.View`
    padding: ${spacing.sm}px;
    flex-flow: column nowrap;
`

export const CharName = styled(Title)`
    color: ${colors.primaryWhite};
    font-size: 20px;
`

export const CharAlterEgo = styled.Text`
    color: ${colors.primaryWhite};
    font-family: gilroy-mendium;
    font-size: 14px;
`;