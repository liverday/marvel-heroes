import React from 'react';

import { Container, TouchableContainer, Gradient, CharImage, CharInfo, CharAlterEgo, CharName } from './styles'

export default function CharacterListItem({ data }) {
    return (
        <TouchableContainer>
            <Container>
                <CharImage source={{ uri: data.imagePath }} imageStyle={{ borderRadius: 16 }} />
                <Gradient 
                    start={{ x: 0, y: 0.41 }} 
                    end={{ x: 0, y: 1 }}
                    colors={['rgba(0, 0, 0, 0)', '#000000']}    
                />
                <CharInfo>
                    <CharAlterEgo>{data.alterEgo}</CharAlterEgo>
                    <CharName>{data.name}</CharName>
                </CharInfo>
            
            </Container>
        </TouchableContainer>
    )
} 