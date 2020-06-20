import React from 'react'

import Alien from '../../assets/icons/alien.svg';
import Human from '../../assets/icons/human.svg';
import Hero from '../../assets/icons/hero.svg';
import AntiHero from '../../assets/icons/antihero.svg';
import Villian from '../../assets/icons/villain.svg';

import {
    Container,
    CategoryButton
} from './styles'

import { gradients } from '../../styles/variables';
import LinearGradient from 'react-native-linear-gradient';

export default function Categories() {
    const categories = [
        {
            Icon: Hero,
            gradient: gradients.blue
        },
        {
            Icon: Villian,
            gradient: gradients.red
        },
        {
            Icon: AntiHero,
            gradient: gradients.purple
        },
        {
            Icon: Alien,
            gradient: gradients.green
        },
        {
            Icon: Human,
            gradient: gradients.pink
        }
    ]

    return (
        <Container>
            {categories && categories.map((category, i) => (
                <CategoryButton key={i} style={{ borderRadius: 50 }}>
                    <LinearGradient
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 50
                        }}
                        colors={[category.gradient.top, category.gradient.bottom]}
                    >
                        <category.Icon width={30} height={30} />
                    </LinearGradient>
                </CategoryButton>
            ))}
        </Container>
    )
}