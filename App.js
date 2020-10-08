import React from 'react';

import { setNavigator } from './src/navigationRef';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider as QRCodeProvider } from './src/context/QRCodeContext';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as BicicletasProvider } from './src/context/BicicletasContext';

import LoadingScreen from './src/screens/LoadingScreen';
import InicioScreen from './src/screens/InicioScreen';
import TelefonoScreen from './src/screens/TelefonoScreen';
import CodigoScreen from './src/screens/CodigoScreen';
import MainScreen from './src/screens/MainScreen';
import QRCodeScreen from './src/screens/QRCodeScreen';

const stackInicio = createStackNavigator( {
	Inicio: InicioScreen,
	Telefono: TelefonoScreen,
	Codigo: CodigoScreen
} );

const stackMain = createStackNavigator( {
	Main: MainScreen,
	QRCode: QRCodeScreen
} );

const switchNavigator = createSwitchNavigator( {
	Loading: LoadingScreen,
	iniciarFlow: stackInicio,
	mainFlow: stackMain
} );

const App = createAppContainer( switchNavigator );

export default () => {
	return (
		<BicicletasProvider>
			<AuthProvider>
				<QRCodeProvider>
					<App ref={ ( nav ) => { setNavigator( nav ) } } />
				</QRCodeProvider>
			</AuthProvider>
		</BicicletasProvider>
	);
};
