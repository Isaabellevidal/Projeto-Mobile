import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const cardapio = require('../../assets/img/itens.png');
const bolo1 = require('../../assets/img/bolo1.png');
const bolo2 = require('../../assets/img/bolo2.png');
const bolo3 = require('../../assets/img/bolo3.png');
const bolo4 = require('../../assets/img/bolo4.png');
const bolo5 = require('../../assets/img/bolo5.png');
const bolo6 = require('../../assets/img/bolo6.png');
const bolo7 = require('../../assets/img/bolo7.png');

export default function Cardapio() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.banner}>
          <Image source={cardapio} style={styles.banner} />
        </View>

        <View style={styles.card}>
          <Image source={bolo1} style={styles.image} />
          <View style={styles.conjunto}>
            <Text style={styles.titulo}>Bolo 2 andares</Text>
            <Text style={styles.texto}>Pioneiro de nossos confeitos, que deu o nome a marca.</Text>
            <Text style={styles.preco}>R$ 75,50</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={bolo2} style={styles.image} />
          <View style={styles.conjunto}>
            <Text style={styles.titulo}>Pedaços a vulso</Text>
            <Text style={styles.texto}>Um bolo é muito grande? Temos pedaços.</Text>
            <Text style={styles.preco}>R$ 15,00</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={bolo3} style={styles.image} />
          <View style={styles.conjunto}>
            <Text style={styles.titulo}>Torta de Morango</Text>
            <Text style={styles.texto}>Pedaços de torta com bordas      crocantes.</Text>
            <Text style={styles.preco}>R$ 12,90</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={bolo4} style={styles.image} />
          <View style={styles.conjunto}>
            <Text style={styles.titulo}>Pedaço bolo 2 andares</Text>
            <Text style={styles.texto}>Pedaços do maior bolo de nossa confeitaria.</Text>
            <Text style={styles.preco}>R$ 18,50</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={bolo5} style={styles.image} />
          <View style={styles.conjunto}>
            <Text style={styles.titulo}>Bolos de aniversário</Text>
            <Text style={styles.texto}>Bolos do sabor e confeitos do jeito que desejar(preço fixo).</Text>
            <Text style={styles.preco}>R$ 80,50</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={bolo6} style={styles.image} />
          <View style={styles.conjunto}>
            <Text style={styles.titulo}>Bolo de 1 andar</Text>
            <Text style={styles.texto}>Mesmo sabor porém menor, uma opção mais econômica.</Text>
            <Text style={styles.preco}>R$ 40,00</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={bolo7} style={styles.image} />
          <View style={styles.conjunto}>
            <Text style={styles.titulo}>Bolo Rustico</Text>
            <Text style={styles.texto}>Com a simplicidade e sofisticação que o momento merece.</Text>
            <Text style={styles.preco}>R$ 50,00</Text>
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
    marginBottom: 100,
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
    width: 370,
    height: 200,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#F2A7AA',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.75,
    shadowRadius: 2,
    elevation: 70,
    marginBottom: 40,
    padding: 20,
  },
  conjunto: {
    padding: 20,
    left: 10,
  },
  conjunto2: {
    padding: 20,
    left: 18,
  },
  titulo: {
    padding: 5,
    color: '#6B060A',
    fontSize: 20,
  },
  texto: {
    padding: 5,
    color: '#6B060A',
    fontSize: 15,
    marginRight:25,
  },
  preco: {
    padding: 5,
    color: '#6B060A',
    fontSize: 18,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#F2A7AA',
    width: 90,
    height: 50,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.75,
    shadowRadius: 2,
    elevation: 5,
    left: 20,
  },
  textbutton: {
    left: 20,
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  image: {
    left: 30,
    width: 100,
    height: 100,
    marginRight:5,
    marginLeft:10,
  },
  image2: {
    left: 30,
    width: 90,
    height: 110,
  },
  banner: {
    width: 450,
    height: 450,
  }
});