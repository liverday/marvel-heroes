import React, { useEffect, useState } from 'react';

import api from '../../services/api'

import { Text, FlatList } from 'react-native';

import { 
    Container, 
    CategoryHeader, 
    CategoryTitle, 
    ShowAllLink,
} from './styles'
import CharacterListItem from '../CharacterListItem';

export default function CharactersList() {
    const [heroes, setHeroes] = useState([])
    const [villains, setVillains] = useState([]);
    const [antiHeroes, setAntiHeroes] = useState([]);
    const [humans, setHumans] = useState([]);
    const [aliens, setAliens] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const promises = Promise.all([
                api.get('heroes'),
                api.get('villains'),
                api.get('antiHeroes'),
                api.get('humans'),
                api.get('aliens')
            ])

            const [heroes, villains, antiHeroes, humans, aliens] = await promises;
            
            setHeroes(heroes.data)
            setVillains(villains.data)
            setAntiHeroes(antiHeroes.data)
            setHumans(humans.data)
            setAliens(aliens.data)
        }
        fetchData()
    }, [])

    return (
        <>
            <Container>
                <CategoryHeader>
                    <CategoryTitle>Heróis</CategoryTitle>
                    <ShowAllLink activeOpacity={0.8}>
                        <Text>Ver tudo</Text>
                    </ShowAllLink>
                </CategoryHeader>
                <FlatList
                    data={heroes}
                    keyExtractor={(_, i) => i.toString()}
                    horizontal={true}
                    contentContainerStyle={{
                        paddingLeft: 20
                    }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <CharacterListItem data={item} />}
                />
            </Container>
            <Container>
                <CategoryHeader>
                    <CategoryTitle>Vilões</CategoryTitle>
                    <ShowAllLink activeOpacity={0.8}>
                        <Text>Ver tudo</Text>
                    </ShowAllLink>
                </CategoryHeader>
                <FlatList
                    data={villains}
                    keyExtractor={(_, i) => i.toString()}
                    horizontal={true}
                    contentContainerStyle={{
                        paddingLeft: 20
                    }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <CharacterListItem data={item} />}
                />
            </Container>
            <Container>
                <CategoryHeader>
                    <CategoryTitle>Anti-heróis</CategoryTitle>
                    <ShowAllLink activeOpacity={0.8}>
                        <Text>Ver tudo</Text>
                    </ShowAllLink>
                </CategoryHeader>
                <FlatList
                    data={antiHeroes}
                    keyExtractor={(_, i) => i.toString()}
                    horizontal={true}
                    contentContainerStyle={{
                        paddingLeft: 20
                    }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <CharacterListItem data={item} />}
                />
            </Container>
            <Container>
                <CategoryHeader>
                    <CategoryTitle>Alienígenas</CategoryTitle>
                    <ShowAllLink activeOpacity={0.8}>
                        <Text>Ver tudo</Text>
                    </ShowAllLink>
                </CategoryHeader>
                <FlatList
                    data={aliens}
                    keyExtractor={(_, i) => i.toString()}
                    horizontal={true}
                    contentContainerStyle={{
                        paddingLeft: 20
                    }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <CharacterListItem data={item} />}
                />
            </Container>
            <Container>
                <CategoryHeader>
                    <CategoryTitle>Humanos</CategoryTitle>
                    <ShowAllLink activeOpacity={0.8}>
                        <Text>Ver tudo</Text>
                    </ShowAllLink>
                </CategoryHeader>
                <FlatList
                    data={humans}
                    keyExtractor={(_, i) => i.toString()}
                    horizontal={true}
                    contentContainerStyle={{
                        paddingLeft: 20
                    }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <CharacterListItem data={item} />}
                />
            </Container>
        </>
    )
}