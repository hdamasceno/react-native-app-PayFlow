import React from 'react';
import {Image} from 'react-native';
import {BoletoList} from './BoletoList';

import {
    Container,
    BackgrounHeader,
    HeaderContainer,
    HeaderTitleContainer,
    HeaderTitle,
    HeaderTitleMessage,
    HeaderUserAvatarContainer,
    HeaderMessageContainer,
    HeaderMessageLeftImage,
    HeaderMessageTitle,
    Title,
    TitleContainer,
    TitleLineDivider,
} from './styles';

export function HomeScreen() {
    return (
        <Container>
            <BackgrounHeader
                source={require('../../assets/images/homeScreen/rectangle.png')}
            />
            <HeaderContainer>
                <HeaderTitleContainer>
                    <HeaderTitle>Olá, Henry</HeaderTitle>
                    <HeaderTitleMessage>
                        Mantenha suas contas em dia
                    </HeaderTitleMessage>
                </HeaderTitleContainer>
                <HeaderUserAvatarContainer>
                    <Image
                        source={require('../../assets/images/homeScreen/userAvatar.png')}
                    />
                </HeaderUserAvatarContainer>
            </HeaderContainer>
            <HeaderMessageContainer>
                <HeaderMessageLeftImage
                    source={require('../../assets/images/homeScreen/barCode.png')}
                />
                <Image
                    source={require('../../assets/images/homeScreen/headerMessageDivider.png')}
                />
                <HeaderMessageTitle>
                    Você tem 14 boletos {'\n'}
                    cadastrados para pagar
                </HeaderMessageTitle>
            </HeaderMessageContainer>
            <TitleContainer>
                <Title>Meus boletos</Title>
                <TitleLineDivider
                    source={require('../../assets/images/homeScreen/line.png')}
                />
            </TitleContainer>
            <BoletoList />
        </Container>
    );
}
