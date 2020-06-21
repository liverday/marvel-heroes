import styled from 'styled-components/native';

import { colors, spacing } from '../../styles/variables';
import LinearGradient from 'react-native-linear-gradient';
import { GilroyBold } from '../../styles/typo';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.primaryBlack};
`;

export const FakeStatusBar = styled.View`
  background: ${({ scrolling }) => (scrolling ? colors.primaryBlack : 'transparent')};
  height: 30px;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  opacity: 0.6;
`;

export const AppBar = styled.View`
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;    
    background: ${({ scrolling }) => scrolling ? colors.primaryBlack : 'transparent' }
    padding: 10px ${spacing.md}px;
    align-items: flex-start;  
    opacity: 0.6;
`

export const OverviewContainer = styled.View`
    position: relative;
    justify-content: flex-end;
    min-height: 800px;
`

export const ContentContainer = styled.View`
    padding: ${spacing.lg}px;
    margin-top: 330px;
`

export const CharImage = styled.Image`
    position: absolute;
    width: 100%;
    height: 800px;
    left: 0;
    top: 0;
`;

export const Gradient = styled(LinearGradient)`
    position: absolute;
    width: 100%;
    height: 800px;
    top: 0;
    left: 0;
`

export const CharacterBio = styled.Text`
    margin-top: ${spacing.lg}px;
    font-size: 14px;
    font-family: gilroy-medium;
    color: ${colors.primaryWhite};
    width: 100%;
    text-align: justify;
    opacity: 0.75;
`;

export const SectionTitle = styled(GilroyBold)`
    margin-top: ${spacing.xl}px;
    font-size: 18px;
    color: ${colors.primaryWhite};
`

export const MovieContianer = styled.View`
    margin-top: ${spacing.md}px;
    position: relative;
    margin-right: ${({ isLast }) => isLast ? '0' : `${spacing.md}px`};
    width: 140px;
    height: 230px;
    border-radius: 16px;
`

export const MovieImage = styled.Image`
    border-radius: 16px;
    width: 100%;
    height: 100%;
`