import {Image, Platform, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    background-color: ${({theme}) => theme.colors.white};
    ${Platform.select({
        ios: css`
            justify-content: center;
        `,
        android: css`
            justify-content: flex-start;
        `,
    })};
`;

export const RectangleImage = styled(Image)`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: ${RFValue(316)}px;
`;

export const ContainerImage = styled.View`
    display: flex;
    margin-top: ${RFValue(20)}px;
`;

export const ContainerImage1 = styled.View`
    display: flex;
    align-items: center;
`;

export const ContainerImage2 = styled.View`
    position: absolute;

    ${Platform.select({
        ios: css`
            margin-top: ${RFValue(223)}px;
            margin-left: -${RFValue(25)}px;
        `,
        android: css`
            margin-top: ${RFValue(255)}px;
            margin-left: -${RFValue(40)}px;
        `,
    })};
`;

export const ContainerImage3 = styled.View`
    position: absolute;
    ${Platform.select({
        ios: css`
            margin-top: ${RFValue(135)}px;
            margin-left: ${RFValue(185)}px;
        `,
        android: css`
            margin-top: ${RFValue(120)}px;
            margin-left: ${RFValue(180)}px;
        `,
    })};
`;

export const ContainerImage4 = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${RFValue(30)}px;
`;

export const ContainerTitle = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${RFValue(30)}px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.Poppins};
    font-size: ${RFValue(20)}px;
    font-weight: 700;
`;

export const ContainerLoginButton = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: ${RFValue(30)}px;
    ${Platform.select({
        ios: css`
            padding-botton: ${RFValue(0)}px;
        `,
        android: css`
            margin-botton: ${RFValue(40)}px;
        `,
    })};
`;

export const ButtonGoogle = styled(TouchableOpacity)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${RFValue(20)}px;
`;

export const ButtonGoogleTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.Poppins};
    font-size: ${RFValue(16)}px;
    font-weight: 500;
    margin-left: ${RFValue(15)}px;
`;
