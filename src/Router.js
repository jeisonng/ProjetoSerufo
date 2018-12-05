import React, { Component } from 'react'
import {
  View,
  StatusBar,
} from 'react-native'

import { Scene, Router } from 'react-native-router-flux';

import Login from './containers/AuthContainer/Login'
import Signup from './containers/AuthContainer/Signup'
import Dashboard from './containers/MainContainer/Dashboard'
import BarDetails from './containers/MainContainer/PlaceDetails'
import TestContainer from './containers/AuthContainer/TestContainer'
import EditarPerfil from './containers/AuthContainer/EditarPerfil'
import CreatePlace from './containers/MainContainer/CreatePlace'
import PlaceData from './containers/MainContainer/placeData'
import PlaceClassDatail from './containers/MainContainer/PlacesClassDatail';

class RouterComponent extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <View style={styles.container}>
        <Router>
          <Scene key='app'>
            <Scene key='auth' initial hideNavBar>
              <Scene key='login'
                component={Login}
                initial />
              <Scene
                key='signup'
                component={Signup} />
              <Scene
                  key='dashboard'
                  component={Dashboard} />
              <Scene
                key='barDetails'
                component={BarDetails} />
              <Scene
                key='testContainer'
                component={TestContainer} />
               <Scene
                key='editarperfil'
                component={EditarPerfil} />
                <Scene
                key='createplace'
                component={CreatePlace} />
                <Scene
                key='placedata'
                component={CreatePlace} />
                <Scene
                key='placelist'
                component={PlaceData}
                />
                <Scene
                key='placeClassDatail'
                component={PlaceClassDatail}
                />
            </Scene>
          </Scene>
        </Router>
      </View>
    )
  };
}

const styles = {
  container: {
    flex: 1
  },
  sceneStyle: {
    backgroundColor: '#F5F6F7'
  },
  navigationBarStyle: {
    elevation: 10,
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  titleStyle: {
    color: '#FFFFFF',
    letterSpacing: 1,
    fontWeight: '500',
    textAlign: 'left',
    marginLeft: -30,
  }
}

export default RouterComponent
