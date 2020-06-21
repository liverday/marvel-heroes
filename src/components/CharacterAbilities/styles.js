import styled from 'styled-components/native';

import { spacing, colors } from '../../styles/variables';
import { GilroyRegular } from '../../styles/typo';

export const Container = styled.View`
    margin-top: ${spacing.md}px;
`

export const AbilityContainer = styled.View`
    flex-flow: row nowrap;
    margin-bottom: ${spacing.md}px;
`

export const AbilityLabel = styled(GilroyRegular)`
    width: 100px;
    color: ${colors.primaryWhite};
    opacity: 0.75
`