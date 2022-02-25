import {Image, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    padding: ${RFValue(20)}px;
`;

export const RectangleImageContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${RFValue(10)}px;
`;

export const RectangleImage = styled(Image)`
    justify-content: center;
    align-items: center;
`;

export const TitleContainer = styled.View`
    padding: ${RFValue(20)}px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.Poppins};
    font-size: ${RFValue(16)}px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.textHeading};
`;

export const ButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    padding: ${RFValue(20)}px;
    align-items: center;
    justify-content: space-between;
`;

export const ConfirmButton = styled(TouchableOpacity)`
    padding: ${RFValue(20)}px;
    background-color: ${({theme}) => theme.colors.confirmationButton};
    border-color: ${({theme}) => theme.colors.gray2};
    border-radius: ${RFValue(10)}px;
    border-width: ${RFValue(1)}px;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin-left: ${RFValue(5)}px;
`;

export const ConfirmButtonTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.Poppins};
    font-size: ${RFValue(16)}px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.white};
`;

export const CancelButton = styled(TouchableOpacity)`
    padding: ${RFValue(20)}px;
    background-color: ${({theme}) => theme.colors.gray1};
    border-color: ${({theme}) => theme.colors.gray2};
    border-radius: ${RFValue(10)}px;
    border-width: ${RFValue(1)}px;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin-right: ${RFValue(5)}px;
`;

export const CancelButtonTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.Poppins};
    font-size: ${RFValue(16)}px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.cancelButtonTitle};
`;

export const LineSeparatorContainer = styled.View`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-top: ${RFValue(10)}px;
`;

export const LineSeparatorImage = styled(Image)``;

export const DeleButtonContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${RFValue(20)}px;
    margin-bottom: ${RFValue(getBottomSpace())}px;
`;

export const DeleteButton = styled(TouchableOpacity)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const DeleteButtonTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.Poppins};
    font-size: ${RFValue(16)}px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.red};
    margin-left: ${RFValue(10)}px;
`;
