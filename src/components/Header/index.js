import React from 'react';

import { HeaderContainer } from './styles';
import { colors } from '../../styles/variables'

import MenuIcon from '../../assets/icons/menu.svg';
import MarvelIcon from '../../assets/icons/marvel.svg';
import SearchIcon from '../../assets/icons/search.svg';

export default function Header() {
    return (
        <HeaderContainer>
            <MenuIcon width={24} height={24} fill={colors.primaryDark} />
            <MarvelIcon width={70} height={26} fill={colors.primaryRed} />
            <SearchIcon width={24} height={24} />
        </HeaderContainer>
    )
}