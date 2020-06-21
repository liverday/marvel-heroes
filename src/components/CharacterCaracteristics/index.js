import React from 'react';

import { Container, InfoContainer, InfoText } from './styles'

import AgeIcon from '../../assets/icons/age.svg';
import WeightIcon from '../../assets/icons/weight.svg';
import HeightIcon from '../../assets/icons/height.svg';
import UniverseIcon from '../../assets/icons/universe.svg';

export default function CharacterCaracteristics({ age, weight, height, universe }) {

    return (
        <Container>
            <InfoContainer>
                <AgeIcon width={30} />
                <InfoText>{age} anos</InfoText>
            </InfoContainer>
            <InfoContainer>
                <WeightIcon width={30} /> 
                <InfoText>{weight}kg</InfoText>
            </InfoContainer>
            <InfoContainer>
                <HeightIcon width={30} />
                <InfoText>{height.toFixed(2)}m</InfoText>
            </InfoContainer>
            <InfoContainer>
                <UniverseIcon width={30}/>
                <InfoText>{universe}</InfoText>
            </InfoContainer>
        </Container>
    )
}