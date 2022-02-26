import React from 'react';

import {
    Container,
    BackgrounHeader,
    HeaderContainer,
    HeaderTitleContainer,
    HeaderTitle,
    HeaderTitleMessage,
    HeaderUserAvatarContainer,
    HeaderUserAvatarImage,
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
                    <HeaderUserAvatarImage
                        source={require('../../assets/images/henryAvatar.jpeg')}
                    />
                </HeaderUserAvatarContainer>
            </HeaderContainer>
        </Container>
    );
}
