import MainNavigation from './navigation/MainNavigation.jsx';
import Home from './screens/Home/Home.jsx';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
