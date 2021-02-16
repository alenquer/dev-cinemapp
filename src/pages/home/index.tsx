import React, { useState } from 'react';
import { API_KEY } from '@env';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Form,
  Input,
  Header,
  Title,
  Button,
  Description,
} from './styles';
import Favorites from '../../components/Favorites';
import api from '../../config/api';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const [filter, setFilter] = useState('');
  const [color, setColor] = useState('#ff9946');
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  async function search() {
    const result = await api.get(`/?apikey=${API_KEY}&s=${input}`);
    const { Response, Search } = result.data;

    if (Response === 'False') return setError(true);

    setError(false);
    navigation.navigate('search', { key: input, data: Search });
  }

  function changeFilter() {
    switch (filter) {
      case 'movie':
        setColor('#FFAE0C');
        return setFilter('series');
      case 'series':
        setColor('#ff9946');
        return setFilter('');
      default:
        setColor('#FF4314');
        return setFilter('movie');
    }
  }

  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <Header>
          <Title>Cinema APP</Title>
          <Description>Bem vindo ao espetacular mundo do cinema!</Description>
        </Header>

        <Form>
          <Input
            value={input}
            onChangeText={setInput}
            error={error}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Procurar filme.."
          />
          <Button onPress={search}>
            <Icon name="plus" size={22} color="#FFF" />
          </Button>
          <Button style={{ backgroundColor: color }} onPress={changeFilter}>
            <Icon name="filter" size={22} color="#FFF" />
          </Button>
        </Form>
        <Favorites filter={filter} search={input} />
      </SafeAreaView>
    </Container>
  );
};

export default HomeScreen;
