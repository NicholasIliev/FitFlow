import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import { Welcome } from '../components/home/welcome/Welcome.jsx';
import { App } from '../components/home/folder/template.jsx';

const screens = {
    Home: {
        screen: Welcome
    },
    Template: {
        screen: App
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);