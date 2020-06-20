import React from 'react';

import { WelcomeText, PickYourCharText, Container } from './styles'

export default function Brand() {
    return (
        <Container>
            <WelcomeText>Bem vindo ao Marvel Heroes</WelcomeText>
            <PickYourCharText>Escolha o seu personagem</PickYourCharText>
        </Container>
    )
}