import {Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
    display: flex;
`;

export const BackgrounHeader = styled(Image)`
    position: absolute;
    width: 100%;
`;

export const HeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${RFValue(20)}px;
    margin-top: ${RFValue(getStatusBarHeight() + 5)}px;
`;

export const HeaderTitleContainer = styled.View`
    display: flex;
`;

export const HeaderTitle = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.Poppins};
    font-size: ${RFValue(16)}px;
    font-weight: 600;
`;

export const HeaderTitleMessage = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.Poppins};
    font-size: ${RFValue(12)}px;
    font-weight: 500;
`;

export const HeaderUserAvatarContainer = styled.View``;
