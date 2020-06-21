import React from 'react';

import { Container, AbilityContainer, AbilityLabel } from './styles'
import StrengthBar from '../StrengthBar';

export default function CharacterAbilities({ abilities }) {
    return (
        <Container>
            {abilities.map((ability, i) => (
                <AbilityContainer 
                    key={i}
                >
                    <AbilityLabel>{ability.label}</AbilityLabel>
                    <StrengthBar strength={ability.value} />
                </AbilityContainer>
            ))}
        </Container>
    )
}