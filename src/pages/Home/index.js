import { FlatList, StyleSheet, Text, View } from 'react-native';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto Conta de Luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0, //despesas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: '20/09/2022',
    type: 1, //receita /entrada
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.200,00',
    date: '22/09/2022',
    type: 1,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Thais Michelini" />
      <Balance saldo="9.250,90" gastos="-527,00" />
      <Actions />
      <Text style={styles.title}>Últimas Movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
