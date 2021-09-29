import React from 'react';
import  {Conteiner,Content,CardContent,CardHeader,CardFooter,Card,Title,Anotation,Description} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Animated} from'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Header from '~/components/Header/index';
import Menu from '~/components/MenuInicial/index';
import Tabs from '~/components/Tabs/index';

export default  function Main(){
  const translateY= new Animated.Value(0);
  let setOff=0;
  const animatedEvent = Animated.event(
    [
      {
       nativeEvent:{
         translationY:translateY,
       },
      },
    ],
    {useNativeDriver:true},
  );
  function onHandlerStateChange(event){
    
    if (event.nativeEvent.oldState === State.ACTIVE){
     let opened=false
     const {translationY} = event.nativeEvent;

     setOff +=translationY;
    if (translationY>=100){
      opened=true;
      
    }else{
     translateY.setValue(0);
     translateY.setOffset(setOff);
     setOff=0;
    }
    Animated.timing(translateY,{
        toValue: opened ? 380 :0 ,
        duration:200,
        useNativeDriver:true,
      
      }).start(()=>{
        setOff = opened ? 380:0;
         translateY.setOffset(setOff);
         translateY.setValue(0);
      });
    
    }
  }
  return (
      <Conteiner translateY={translateY}>
      <Header/>
      <Content>
        <Menu translateY={translateY}/>
      <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChange} >
      <Card  style={{
        transform:[{
          translateY:translateY.interpolate({
            inputRange:[-350,0,380],
            outputRange:[-100,0,380],
            extrapolate:'clamp'
          }),
        }],
      }}>
      <CardHeader>
        <Icon name="attach-money"  size={28} color="#666"/>
        <Icon name="visibility-off"  size={28} color="#666"/>
      </CardHeader>  
      <CardContent>
      <Title>
        saldo dispónivel
      </Title>
      <Description>R$ 192.611,66</Description>
      </CardContent>
      <CardFooter>
        <Anotation>
          Trasferencia de 20,oo recebida Pagurudev hoje as 6:00
        </Anotation>
      </CardFooter>
      </Card>
      </PanGestureHandler>
      </Content> 
      
      <Tabs translateY={translateY}/>
      </Conteiner>
  );
}