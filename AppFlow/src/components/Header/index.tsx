import React from 'react';
import {Image} from 'react-native';

import {
    Container,
    BackgrounHeader,
    HeaderContainer,
    HeaderTitleContainer,
    HeaderTitle,
    HeaderTitleMessage,
    HeaderUserAvatarContainer,
} from './styles';

export function Header() {
    return (
        <Container>
            <BackgrounHeader
                source={require('../../assets/images/headerComponent/rectangle.png')}
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
                        source={require('../../assets/images/headerComponent/userAvatar.png')}
                    />
                </HeaderUserAvatarContainer>
            </HeaderContainer>
        </Container>
    );
}
