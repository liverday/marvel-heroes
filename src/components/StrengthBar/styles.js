import styled from 'styled-components/native';

import { colors, spacing } from '../../styles/variables';

export const Container = styled.View`
    flex: 1;
    flex-flow: row nowrap;
    align-items: center;
`

export const Bar = styled.View`
    width: 1px;
    background: ${colors.primaryWhite};
    opacity: ${({ color }) => (color ? 1 : 0.25)};
    height: ${({ isLast }) => isLast ? '12px' : '8px'}
    margin-right: ${spacing.xs}px;
`