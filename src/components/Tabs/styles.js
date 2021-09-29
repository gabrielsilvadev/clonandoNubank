import styled from 'styled-components/native';
import {Animated} from 'react-native'

export const Conteiner = styled(Animated.View)`
height:100px;
margin-top:20px;

`;

export const  TabsConteiner = styled.ScrollView.attrs({
    horizontal:true,
    contentContainerStyle:{paddingLeft:10,paddingRight:20},
    showHorizontalScrollIndicator:false,
})``;


export const TabItem = styled.View`
background:rgba(255,255,255,0.2);
width:100px;
height:100px;
border-radius:3px;
margin-left:10px;
justify-content:space-between;
`;

export const  TabText = styled.Text`
font-size:13px;
color:#fff;
`;



