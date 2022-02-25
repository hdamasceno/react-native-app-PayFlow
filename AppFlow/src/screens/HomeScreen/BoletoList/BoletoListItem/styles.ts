import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
    display: flex;
`;

export const BoletoContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: ${RFValue(20)}px;
    padding-right: ${RFValue(20)}px;
    padding-top: ${RFValue(15)}px;
`;

export const BoletoTitleContainer = styled.View`
    display: flex;
`;

export const BoletoTitle = styled.Text`
    color: ${({theme}) => theme.colors.textHeading};
    font-family: ${({theme}) => theme.fonts.Poppins};
    font-size: ${RFValue(14)}px;
    font-weight: 600;
`;

export const BoletoDescription = styled.Text`
    color: ${({theme}) => theme.colors.textHeading};
    font-family: ${({theme}) => theme.fonts.Poppins};
    font-size: ${RFValue(12)}px;
    font-weight: 500;
`;

export const BoletoAmountContainer = styled.View`
    display: flex;
`;

export const BoletoAmount = styled.Text`
    color: ${({theme}) => theme.colors.textHeading};
    font-family: ${({theme}) => theme.fonts.Poppins};
    font-size: ${RFValue(16)}px;
    font-weight: 600;
`;
