import React from 'react';

import TrashIcon from '../../assets/images/paymentConfirmationScreen/trash-icon.svg';

import {
    Container,
    TitleContainer,
    Title,
    ButtonContainer,
    CancelButton,
    CancelButtonTitle,
    ConfirmButton,
    ConfirmButtonTitle,
    RectangleImageContainer,
    RectangleImage,
    LineSeparatorContainer,
    LineSeparatorImage,
    DeleButtonContainer,
    DeleteButton,
    DeleteButtonTitle,
} from './styles';

export function PaymentConfirmationScreen() {
    return (
        <Container>
            <RectangleImageContainer>
                <RectangleImage
                    source={require('../../assets/images/paymentConfirmationScreen/rectangle-3.png')}
                />
            </RectangleImageContainer>
            <TitleContainer>
                <Title>
                    O boleto Tia Maria {'\n'}
                    no valor de R$ 2.131,33 {'\n'}
                    foi pago ?
                </Title>
            </TitleContainer>
            <ButtonContainer>
                <CancelButton>
                    <CancelButtonTitle>Agora não</CancelButtonTitle>
                </CancelButton>
                <ConfirmButton>
                    <ConfirmButtonTitle>Sim</ConfirmButtonTitle>
                </ConfirmButton>
            </ButtonContainer>
            <LineSeparatorContainer>
                <LineSeparatorImage
                    source={require('../../assets/images/paymentConfirmationScreen/line.png')}
                />
            </LineSeparatorContainer>
            <DeleButtonContainer>
                <DeleteButton>
                    <TrashIcon />
                    <DeleteButtonTitle>Deletar Boleto</DeleteButtonTitle>
                </DeleteButton>
            </DeleButtonContainer>
        </Container>
    );
}
