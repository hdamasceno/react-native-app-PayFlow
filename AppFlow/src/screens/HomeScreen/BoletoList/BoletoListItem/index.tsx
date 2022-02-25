import React from 'react';

import {
    BoletoTitle,
    Container,
    BoletoContainer,
    BoletoTitleContainer,
    BoletoDescription,
    BoletoAmountContainer,
    BoletoAmount,
} from './styles';

export interface BoletoProps {
    id: string;
    title: string;
    description: string;
    amount: number;
}

interface Props {
    item: BoletoProps;
}

export function BoletoListItem({item}: Props) {
    return (
        <Container>
            <BoletoContainer>
                <BoletoTitleContainer>
                    <BoletoTitle>{item.title}</BoletoTitle>
                    <BoletoDescription>{item.description}</BoletoDescription>
                </BoletoTitleContainer>
                <BoletoAmountContainer>
                    <BoletoAmount>
                        {Intl.NumberFormat('pt-BR', {
                            minimumFractionDigits: 2,
                        }).format(item.amount)}
                    </BoletoAmount>
                </BoletoAmountContainer>
            </BoletoContainer>
        </Container>
    );
}
