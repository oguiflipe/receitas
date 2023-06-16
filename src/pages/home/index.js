import {useState, useEffect} from 'react'


import {
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    TextInput, 
    TouchableOpacity,
    FlatList
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Logo} from '../../components/logo';
import api from '../../services/api';
import {FoodList} from '../../components/foodlist';


export function Home(){

    //função para coletar as informações digitadas pelo usuário.
    const [inputValue, setInputValue] = useState('');

    //Codigo para criar array vazia das receitas para o usuário.
    const [foods, setFoods] = useState([]);
    //utilizando o useEffect para criar a chamada da api e mostrar os dados da fakeapi
    useEffect(() => {
        async function fatchApi(){
            const response = await api.get("/foods");
            setFoods(response.data);
        }

        fatchApi();

        //console.log('Carregou')
    }, []);


    //função para coletar as informações digitadas pelo usuário.
    function handleSearch(){
        console.log(inputValue)
    };


    return(
        <SafeAreaView style={styles.container}>
            <Logo />
            <Text style={styles.title}>Econtre uma receita </Text>
            <Text style={styles.title}>que combina com você.</Text>
            <View style={styles.form}>
                <TextInput
                placeholder='Digite o nome da comida.'
                style={styles.input}
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name='search' size={28} color='#4cbe6c'/>
                </TouchableOpacity>
            </View>

            <FlatList
            data={foods}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <FoodList data={item}/>}
            showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14,
    },
    title:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0e0e0e'
    },
    form:{
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ececec',
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input:{
        width: '90%',
        height: 54,
        maxWidth: '90%'
    }
});


