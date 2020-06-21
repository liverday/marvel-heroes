import React from 'react';

import { Container, TouchableContainer, Gradient, CharImage } from './styles'

import CharacterNameInfo from '../CharacterNameInfo';

export default function CharacterListItem({ data, onCharacterPressed }) {

    return (
        <TouchableContainer
            onPress={() => onCharacterPressed(data)}
        >
            <Container>
                <CharImage source={{ uri: data.imagePath }} imageStyle={{ borderRadius: 16 }} />
                <Gradient 
                    start={{ x: 0, y: 0.41 }} 
                    end={{ x: 0, y: 1 }}
                    colors={['rgba(0, 0, 0, 0)', '#000000']}    
                />

                <CharacterNameInfo name={data.name} alterEgo={data.alterEgo} />
            </Container>
        </TouchableContainer>
    )
} 