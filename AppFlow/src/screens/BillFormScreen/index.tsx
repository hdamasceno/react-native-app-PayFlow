import React from 'react';

import BackIcon from '../../assets/images/billFormScreen/back-icon.svg';

import {
    Container,
    BackButtonContainer,
    BackButton,
    TitleContainer,
    Title,
    FormContainer,
    Input,
    OperationButtonContiner,
    CancelButton,
    CancelButtonTitle,
    ConfirmButton,
    ConfirmButtonTitle,
} from './styles';

export function BillFormScreen() {
    return (
        <Container>
            <BackButtonContainer>
                <BackButton>
                    <BackIcon />
                </BackButton>
            </BackButtonContainer>
            <TitleContainer>
                <Title>Preencha os dados</Title>
                <Title>do boleto</Title>
            </TitleContainer>
            <FormContainer>
                <Input placeholder="Título do boleto" />
                <Input placeholder="Vencimento" />
                <Input placeholder="Valor" />
                <Input placeholder="Código de barras" />
            </FormContainer>
            <OperationButtonContiner>
                <CancelButton>
                    <CancelButtonTitle>Cancelar</CancelButtonTitle>
                </CancelButton>
                <ConfirmButton>
                    <ConfirmButtonTitle>Cadastrar</ConfirmButtonTitle>
                </ConfirmButton>
            </OperationButtonContiner>
        </Container>
    );
}
