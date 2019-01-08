import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import conAdultoActual from '../hoc/conAdultoActual';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: { screen: conAdultoActual(DetailsScreen) }
});

export default createAppContainer(AppNavigator);
