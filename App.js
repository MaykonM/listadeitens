import React, {Component} from 'react';
import { Text } from 'react-native';

import ListaItens from './src/components/ListaItens'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ListaItens />
    );
  }
}
