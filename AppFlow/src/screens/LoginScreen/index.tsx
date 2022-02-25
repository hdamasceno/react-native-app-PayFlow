import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

import GoogleIcon from '../../assets/images/loginScreen/google-icon-1.svg';
import Imagem1 from '../../assets/images/loginScreen/image-1.svg';
import Imagem2 from '../../assets/images/loginScreen/image-2.svg';
import Imagem3 from '../../assets/images/loginScreen/image-3.svg';
import Imagem4 from '../../assets/images/loginScreen/image-4.svg';

import {
    Container,
    ContainerImage1,
    ContainerImage2,
    ContainerImage3,
    ContainerImage4,
    ContainerTitle,
    Title,
    ContainerLoginButton,
    ButtonGoogle,
    ButtonGoogleTitle,
    ContainerImage,
    RectangleImage,
} from './styles';

export function LoginScreen() {
    return (
        <>
            <Container>
                <RectangleImage
                    source={require('../../assets/images/loginScreen/rectangle.png')}
                />
                <ContainerImage>
                    <ContainerImage1>
                        <Imagem1
                            height={`${RFValue(362)}px`}
                            width={`${RFValue(202)}px`}
                        />
                    </ContainerImage1>
                    <ContainerImage2>
                        <Imagem2 />
                    </ContainerImage2>
                    <ContainerImage3>
                        <Imagem3 />
                    </ContainerImage3>
                </ContainerImage>
                <ContainerImage4>
                    <Imagem4 />
                </ContainerImage4>
                <ContainerTitle>
                    <Title>
                        Organize seus {'\n'}
                        boletos em um {'\n'}
                        só lugar
                    </Title>
                </ContainerTitle>
                <ContainerLoginButton>
                    <ButtonGoogle>
                        <GoogleIcon />
                        <ButtonGoogleTitle>Entrar com Google</ButtonGoogleTitle>
                    </ButtonGoogle>
                </ContainerLoginButton>
            </Container>
        </>
    );
}
