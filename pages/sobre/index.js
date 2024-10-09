import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const sobre = require('../../assets/img/sobre.png');
const lojaEntrada = require('../../assets/img/loja-entrada.png');
const lojaDentro = require('../../assets/img/loja-dentro.png');
const bolo = require('../../assets/img/bolo1.png');
const doces = require('../../assets/img/doces.png');
const duas = require('../../assets/img/netaEvo.png');

export default function Sobre() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.banner}>
          <Image source={sobre} style={styles.banner} />
        </View>

        <View style={styles.card}>
          <View style={styles.conjunto}>
            
            <Text style={styles.titulo}>Nossa História</Text>

            <Text style={styles.texto}>A história da confeitaria se inicia com a pequena Clara, que adorava passar os fins de semana com sua avó,
               Dona Lúcia, ela tinha em sua casa uma grande horta com diversas frutas, a que Clara mais gostava era o morango. Sua avó a chamava 
               de Creminha, pois ela sempre pedia para avó fazer uma creme para comer com os morangos da horta.</Text>
            
            <Image source={duas} style={styles.image} />
            
            <Text style={styles.texto}> Um dia, elas prepararam juntas um delicioso Bolo de Morango,  Clara achou tão bonito e gostoso que essa experiência se tornou uma memória muito especial. </Text>
            
            <Image source={bolo} style={styles.image} />
            
            <Text style={styles.texto}> Após a morte da avó, Clara decidiu honrá-la realizando seu sonho de abrir uma confeitaria. Ela criou a "Morango 
            & Creme", onde serviria o bolo de morango e outras receitas da avó. </Text>
            
            <Image source={lojaEntrada} style={styles.image} />
            
            <Text style={styles.texto}> A confeitaria faz sucesso reunindo pessoas e trazendo alegria, enquanto Clara ensina crianças a fazer doces, prepetuando o legado de Dona Lúcia. Assim, a tradição continuou, adoçando a vida de todos ao redor.</Text>
            
            <Image source={lojaDentro} style={styles.image} />
            
            <Text style={styles.texto}> Além de bolos a confeitaria tem diversas opções de doces, tanto de morango quanto de sabores de escolha do próprio cliente.</Text>
            
            <Image source={doces} style={styles.image} />

          </View>
        </View>
        


      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', //#FAACAF #F2A7AA
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  img: {
    flex: 1,
    justifyContent: 'flex-start',
    resizeMode: 'contain',
    width: 450,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 2500,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#F2A7AA',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.75,
    shadowRadius: 2,
    elevation: 15,
    marginBottom: 100,
    padding: 5,
  },
  conjunto: {
    padding: 10,
  },
  titulo: {
    padding: 5,
    color: '#6B060A',
    fontSize: 22,
  },
  texto: {
    padding: 5,
    color: '#6B060A',
    fontSize: 16,
  },
  image: {
    width: 345,
    height: 345,
    marginRight:5,
    marginLeft:10,
    marginTop: 18,
    marginBottom: 18,
  },
  banner: {
    width: 450,
    height: 450,
  }
});