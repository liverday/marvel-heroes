import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { 
    Container, 
    OverviewContainer, 
    ContentContainer, 
    AppBar, 
    CharImage, 
    Gradient, 
    FakeStatusBar,
    CharacterBio,
    SectionTitle,
    MovieContianer,
    MovieImage
} from './styles';

import { colors } from '../../styles/variables';

import BackIcon from '../../assets/icons/back.svg';

import { ActivityIndicator, StatusBar, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import CharacterNameInfo from '../../components/CharacterNameInfo';
import CharacterCaracteristics from '../../components/CharacterCaracteristics';
import CharacterAbilities from '../../components/CharacterAbilities';

export default function Character() {
    const { goBack } = useNavigation();
    const { params } = useRoute();
    const { data } = params;

    const [loading, setLoading] = useState(true);
    const [scrolling, setScolling] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])

    function handleScroll(event) {
        const { contentOffset } = event.nativeEvent;
        if (contentOffset.y > 0)
            setScolling(true);
        else
            setScolling(false);
    }

    const { caracteristics, biography, abilities, movies } = data;

    function abilitiesToArray() {
        const keys = Object.keys(abilities);

        const labelDict = {
            agility: 'Agilidade',
            force: 'Força',
            endurance: 'Resistência',
            velocity: 'Velocidade',
            intelligence: 'Inteligência'
        }

        return keys.map(key => ({
            type: key,
            label: labelDict[key],
            value: abilities[key]
        }))
    }

    return (
        <>
            <Container>
                <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
                {loading ? (
                    <ActivityIndicator
                        size="large"
                        color={colors.primaryRed}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    />
                ) : (
                        <ScrollView onScroll={handleScroll}>
                            <OverviewContainer>
                                <CharImage
                                    source={{ uri: data.imagePath }}
                                    resizeMode="cover"
                                />
                                <Gradient
                                    start={{ x: 0, y: 0.4 }}
                                    end={{ x: 0, y: 0.75 }}
                                    colors={['rgba(0, 0, 0, 0)', '#000000']}
                                />

                                <ContentContainer>
                                    <CharacterNameInfo 
                                        name={data.name.split(' ').join('\n')}
                                        alterEgo={data.alterEgo} 
                                        sizeName={40} 
                                        sizeAlterEgo={16} 
                                        padding={0}
                                    />

                                    <CharacterCaracteristics
                                        age={new Date().getFullYear() - caracteristics.birth}
                                        height={caracteristics.height.value}
                                        weight={caracteristics.weight.value}
                                        universe={caracteristics.universe}
                                    />

                                    <CharacterBio>
                                        {biography}
                                    </CharacterBio>

                                    <SectionTitle>
                                        Habilidades
                                    </SectionTitle>
                                    
                                    <CharacterAbilities abilities={abilitiesToArray()}/>

                                    <SectionTitle>
                                        Filmes
                                    </SectionTitle>

                                    <FlatList
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        keyExtractor={(_, i) => i.toString()}
                                        data={movies}
                                        renderItem={({ item, index }) => (
                                            <MovieContianer isLast={index == movies.length - 1}>
                                                <MovieImage 
                                                    source={{ uri: item }}
                                                />
                                            </MovieContianer>
                                        )}
                                    />
                                </ContentContainer>
                            </OverviewContainer>
                        </ScrollView>
                    )}
            </Container>
            <AppBar scrolling={scrolling}>
                <TouchableOpacity onPress={goBack}>
                    <BackIcon width={24} />
                </TouchableOpacity>
            </AppBar>
            <FakeStatusBar scrolling={scrolling} />
        </>
    )
}