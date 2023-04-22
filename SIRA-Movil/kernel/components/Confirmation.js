import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { Overlay, Image } from '@rneui/base'

export default function Confirmation(props) {
    const {show, text} = props;
  return (
    <Overlay
    isVisible={show}
    windowsBackgroundColor= 'rgb(0,0,0,0.5)'
    overlayBackgroundColor='transparent'
    overlayStyle={styles.overlay}
    >
        <View style={styles.container} >
            <Image
            source={require('../../assets/check.png')}
            style={styles.img}
            />

            {text && <Text style={styles.text} >{text}</Text>}
        </View>
    </Overlay>
  )
}

const styles = StyleSheet.create({
    overlay:{
        height:220,
        width:220,
        backgroundColor:'#fff',
        borderColor:'#fff',
        borderWidth:2,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color: 'green',
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    img:{
        width:100,
        height:100,
    }
})