import React from 'react';

import { CharInfo, CharAlterEgo, CharName } from './styles'

export default function CharacterNameInfo({ alterEgo, name, sizeName, sizeAlterEgo, padding }) {
    return (
        <CharInfo padding={padding}>
            <CharAlterEgo sizeAlterEgo={sizeAlterEgo}>{alterEgo}</CharAlterEgo>
            <CharName sizeName={sizeName}>{name}</CharName>
        </CharInfo>
    )
}