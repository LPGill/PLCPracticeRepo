import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import { RecoilRoot} from 'recoil';
export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <RecoilRoot>
        <NavigationContainer>
          <NavigationStack />
        </NavigationContainer>
      </RecoilRoot>
    );
  }
}
