import React from 'react';
import { MainContainer } from './styles';

import Header from '../../components/Header';
import Brand from '../../components/Brand';
import Categories from '../../components/Categories';
import CharacterList from '../../components/CharactersList';
import { ScrollView } from 'react-native-gesture-handler';

import {
    StatusBar
} from 'react-native'

import { colors } from '../../styles/variables';

export default function HomeScreen({ navigation }) {
    return (
        <>
            <StatusBar backgroundColor={colors.primarySilver} barStyle='dark-content' />
            <MainContainer>
                <Header />
                <ScrollView>
                    <Brand />
                    <Categories />
                    <CharacterList navigation={navigation} />
                </ScrollView>
            </MainContainer>
        </>
    )
}