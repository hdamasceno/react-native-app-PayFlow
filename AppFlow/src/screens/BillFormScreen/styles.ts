import {TextInput, TouchableOpacity} from 'react-native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex: 1;
`;

export const BackButtonContainer = styled.View`
    display: flex;
    padding: ${RFValue(20)}px;
    margin-top: ${RFValue(getStatusBarHeight())}px;
`;

export const BackButton = styled(TouchableOpacity)``;

export const TitleContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.textHeading};
    font-family: ${({theme}) => theme.fonts.Poppins};
    font-weight: 700;
    font-size: ${RFValue(20)}px;
`;

export const FormContainer = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    padding: ${RFValue(20)}px;
`;

export const Input = styled(TextInput)`
    color: ${({theme}) => theme.colors.textHeading};
    font-family: ${({theme}) => theme.fonts.Poppins};
    font-weight: 500;
    font-size: ${RFValue(12)}px;
    padding: ${RFValue(10)}px;
    border-radius: ${RFValue(5)}px;
    border-width: ${RFValue(1)}px;
    border-color: ${({theme}) => theme.colors.gray1};
    width: 100%;
    margin-top: ${RFValue(10)}px;
`;

export const OperationButtonContiner = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${RFValue(20)}px;
    margin-bottom: ${RFValue(getBottomSpace() + 10)}px;
`;

export const CancelButton = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${RFValue(10)}px;
    border-radius: ${RFValue(5)}px;
    border-width: ${RFValue(1)}px;
    border-color: ${({theme}) => theme.colors.gray1};
    background-color: ${({theme}) => theme.colors.gray1};
    width: 49%;
`;

export const CancelButtonTitle = styled.Text`
    color: ${({theme}) => theme.colors.textHeading};
    font-family: ${({theme}) => theme.fonts.Poppins};
    font-weight: 500;
    font-size: ${RFValue(16)}px;
`;

export const ConfirmButton = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${RFValue(10)}px;
    border-radius: ${RFValue(5)}px;
    border-width: ${RFValue(1)}px;
    border-color: ${({theme}) => theme.colors.gray1};
    background-color: ${({theme}) => theme.colors.confirmationButton};
    width: 49%;
`;

export const ConfirmButtonTitle = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.Poppins};
    font-weight: 700;
    font-size: ${RFValue(16)}px;
`;
