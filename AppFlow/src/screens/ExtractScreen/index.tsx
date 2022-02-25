import React, {useCallback} from 'react';
import {BillList} from '../../components/BillList';
import {Header} from '../../components/Header';
import {BillProps} from '../../models/Bill.model';

import {
    Container,
    TitleContainer,
    Title,
    TitleBillAmount,
    LineSeparatorContainer,
    LineSeparatorImage,
} from './styles';

export function ExtractScreen() {
    const lista: BillProps[] = [
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

    const handleSelect = useCallback((itemSelected: BillProps) => {
        console.log(itemSelected);
    }, []);

    const handleDelete = useCallback(async (itemSelected: BillProps) => {
        console.log(itemSelected);
    }, []);

    return (
        <Container>
            <Header />
            <TitleContainer>
                <Title>Meus extratos</Title>
                <TitleBillAmount>3 pagos</TitleBillAmount>
            </TitleContainer>
            <LineSeparatorContainer>
                <LineSeparatorImage
                    source={require('../../assets/images/extractScreen/lineSeparator.png')}
                />
            </LineSeparatorContainer>
            <BillList
                list={lista}
                handleSelect={handleSelect}
                handleDelete={handleDelete}
            />
        </Container>
    );
}
