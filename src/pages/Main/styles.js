import Styled from 'styled-components/native';
import {Animated} from 'react-native';
import {getStatusBarHeight}  from 'react-native-iphone-x-helper'
export const Conteiner =  Styled.View`
flex:1;
background:#8b10ae;
justify-content:center;
padding-top:${getStatusBarHeight()}px;

`;

export const Content= Styled.View`
flex:1;
max-height:400px;
z-index:5;
`;

export const Card= Styled(Animated.View)`
flex:1;
background:#fff;
border-radius: 4px;
margin: 0 20px;
height:100%;
position:absolute;
left:0;
right:0;
top:0;
`;

export const CardHeader= Styled.View`
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:30px;
`;

export const CardContent= Styled.View`
flex:1;
padding:0 30px;
justify-content:center;
`;

export const Title= Styled.Text`
font-size:13px;
color:#999;
`;

export const Description= Styled.Text`
font-size:32px;
margin-top:3px;
color:#333;
`;

export const CardFooter= Styled.View`
padding:30px;
background:#eeee;
border-radius:4px;
`;

export const Anotation= Styled.Text`
font-size:12px;
color:#333;
`;