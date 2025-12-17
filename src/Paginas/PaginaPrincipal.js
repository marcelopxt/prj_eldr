import { Text, View, StyleSheet,FlatList } from 'react-native'

export default function PaginaConversa(){
    return<>
    {/*Header*/}
    <View style={style.header}>
        <Text style={style.headerText}>Perfil</Text>
    </View>

    {/*Body*/}
    <View>
        <Text style={style.text}>Principal</Text>
    </View>
    {/*Footer*/}
    </>
}
const style = StyleSheet.create({
    header:{
        width : '100%',
        backgroundColor: "#555151ff",

    },
    headerText:{
        color: "#fff    "
    },
    text:{
        fontSize: 50,
        alignItems:'center',
        textAlign: 'center'
    }
});