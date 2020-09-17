import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { SearchScreen } from './src';

const navigator = createSwitchNavigator({
  Search: SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);