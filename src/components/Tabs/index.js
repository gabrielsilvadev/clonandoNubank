import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Conteiner,TabsConteiner,TabItem,TabText}  from './styles';

export default function Tabs({translateY}){
    return(
    <Conteiner  style={{
        transform:[{
        translateY:translateY.interpolate({
         inputRange:[0,380],
         outputRange:[1,3],
         extrapolate:'clamp',
        }),
        }],
        opacity:translateY.interpolate({
            inputRange:[0,380],
            outputRange:[1,0],
            extrapolate:'clamp',
         }),
    }}>
        <TabsConteiner>
            <TabItem>
            <Icon name="person-add" size={24} color="#fff"/>
            <TabText>Indicar amigos</TabText>
            </TabItem>

            <TabItem>
            <Icon name="chat-bubble-outline" size={24} color="#fff"/>
            <TabText>Cobrar</TabText>
            </TabItem>

            <TabItem>
            <Icon name="arrow-downward" size={24} color="#fff"/>
            <TabText>Depositar</TabText>
            </TabItem>

            <TabItem>
            <Icon name="arrow-upward" size={24} color="#fff"/>
            <TabText>Transferir</TabText>
            </TabItem>

            <TabItem>
            <Icon name="lock" size={24} color="#fff"/>
            <TabText>Bloquear Cartao</TabText>
            </TabItem>

        </TabsConteiner>

    </Conteiner>
  );
}
