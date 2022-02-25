import React from 'react';
import {BillProps} from '../../../models/Bill.model';

import {
    BoletoTitle,
    Container,
    BoletoContainer,
    BoletoTitleContainer,
    BoletoDescription,
    BoletoAmountContainer,
    BoletoAmount,
} from './styles';

interface Props {
    item: BillProps;
}

export function Item({item}: Props) {
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
