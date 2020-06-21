import React, { useState, useEffect } from 'react';

import { Container, Bar } from './styles';

export default function StrengthBar({ strength, strengthBase = 44 }) {
    const [bars, setBars] = useState([]);
    
    useEffect(() => {
        setBars([
            ...Array.from(Array(strengthBase), (_, i) => i + 1)
        ])
    }, [strengthBase])


    return (
        <Container>
            {bars && bars.map(bar => (
                <Bar 
                    key={bar} 
                    color={bar <= Math.round((strength * strengthBase) / 100)}
                    isLast={bar === Math.round((strength * strengthBase) / 100)}
                />
            ))}
        </Container>
    )
}