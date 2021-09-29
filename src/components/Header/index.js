import React from 'react'

import  {Conteiner,Top,Logo,Title} from './styles';
import logo from '~/assets/Nubank_Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Header(){
    return(
    <Conteiner>
        <Top>
            <Logo  source={logo} />
            <Title>Joao</Title>
        </Top>
     <Icon  name="keyboard-arrow-down" size={20} color='#fff'/>
    </Conteiner>
    
    );
} 