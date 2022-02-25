import React from 'react';

import UnionIcon from '../../assets/images/splashScreen/Union.svg';
import LogoTipo from '../../assets/images/splashScreen/Logotipo.svg';

import {Container, ContainerBackImage} from './styles';

export function SplashScreen() {
    return (
        <Container>
            <ContainerBackImage>
                <UnionIcon />
            </ContainerBackImage>
            <LogoTipo />
        </Container>
    );
}
