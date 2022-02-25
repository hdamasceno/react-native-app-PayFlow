import React from 'react';
import {FlatList} from 'react-native';
import {BoletoListItem, BoletoProps} from './BoletoListItem';

import {Container} from './styles';

export function BoletoList() {
    const lista: BoletoProps[] = [
        {
            id: '1',
            title: 'Globo Play BBB 24 horas',
            description: 'Vence 30/02/2022',
            amount: 99,
        },
        {
            id: '2',
            title: 'Disney Plus',
            description: 'Vence 30/02/2022',
            amount: 24.24,
        },
        {
            id: '3',
            title: 'Netflix',
            description: 'Vence 30/02/2022',
            amount: 199.99,
        },
        {
            id: '4',
            title: 'Amazon Prime Video',
            description: 'Vence 30/02/2022',
            amount: 1099.99,
        },
        {
            id: '5',
            title: 'HBO Max',
            description: 'Vence 30/02/2022',
            amount: 19099.99,
        },
        {
            id: '6',
            title: 'Universal Studios Family',
            description: 'Vence 30/02/2022',
            amount: 109099.99,
        },
    ];

    return (
        <Container>
            <FlatList
                data={lista}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => <BoletoListItem item={item} />}
            />
        </Container>
    );
}
