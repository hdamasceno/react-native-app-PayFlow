import React from 'react';
import {Header} from '../../components/Header';

import {
    Container,
    TitleContainer,
    Title,
    TitleBillAmount,
    LineSeparatorContainer,
    LineSeparatorImage,
} from './styles';

export function ExtractScreen() {
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
        </Container>
    );
}
