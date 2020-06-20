import styled from 'styled-components/native';

import { spacing } from '../../styles/variables'

export const Container = styled.View`
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    padding: ${spacing.md}px;
`;

export const CategoryButton = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
`