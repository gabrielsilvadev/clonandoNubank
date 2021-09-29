import React from 'react';
import {Conteiner,Code,Nav,NavItems,NavText,SigOutButton,SignOutButtonText} from './styles';
import QRcode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Menu({translateY}){
return(

<Conteiner style={{
        opacity:translateY.interpolate({
          inputRange:[0,150],
          outputRange:[0,1],
        }),
      }}>
    <Code>
        <QRcode
        value="https://rocketseat.com.br"
        size={80}
        bgColor="#fff"
        fgColor="#8b10ae"
        />
    </Code>
    <Nav>
        <NavItems>
        <Icon  name='help-outline' size={20} color='#fff' />
        <NavText>Me ajuda</NavText>
        </NavItems>

        <NavItems>
        <Icon  name='person-outline' size={20} color='#fff' />
        <NavText>Meu Perfil</NavText>
        </NavItems>

        <NavItems>
        <Icon  name='credit-card' size={20} color='#fff' />
        <NavText>Configurar Meu Cartao</NavText>
        </NavItems>

        <NavItems>
        <Icon  name='smartphone' size={20} color='#fff' />
        <NavText>Configuracoes do App</NavText>
        </NavItems>
    </Nav>
    <SigOutButton  onPress={()=>{}}>
    
    <SignOutButtonText>Sair do App</SignOutButtonText>
    </SigOutButton>
</Conteiner>
);
}