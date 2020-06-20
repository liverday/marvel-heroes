import React from 'react';
import { MainContainer } from './styles';

import Header from '../../components/Header';
import Brand from '../../components/Brand';
import Categories from '../../components/Categories';
import CharacterList from '../../components/CharactersList';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
    return (
        <MainContainer>
            <ScrollView>
                <Header />
                <Brand />
                <Categories />
                <CharacterList />
            </ScrollView>
        </MainContainer>
    )
}