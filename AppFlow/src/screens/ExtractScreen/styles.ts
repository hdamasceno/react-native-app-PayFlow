import {Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex: 1;
`;

export const TitleContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: ${RFValue(20)}px;
    padding: ${RFValue(20)}px;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.Poppins};
    font-size: ${RFValue(16)}px;
    font-weight: 600;
`;

export const TitleBillAmount = styled.Text`
    font-family: ${({theme}) => theme.fonts.Poppins};
    font-size: ${RFValue(12)}px;
    font-weight: 500;
`;

export const LineSeparatorContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const LineSeparatorImage = styled(Image)``;
