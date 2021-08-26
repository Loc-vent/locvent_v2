import React, {useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import MessageNoticePage from '../../components/MessageNoticePage';

import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';

export default function Message() {
  const [activeTab, setActiveTab] = useState('MESSAGES');
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const FirstRoute = () => (
    <View style={{flex: 1, backgroundColor: 'light-grey'}} />
  );
  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: 'light-grey'}} />
  );
  const renderScene = SceneMap({
    first: FirstRoute,
    second: MessageNoticePage,
  });

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {
      key: 'first',
      title: 'Messages',
    },
    {key: 'second', title: 'Notice'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'white', height: 4}}
      style={{
        backgroundColor: '#009F93',
        height: 50,
      }}
    />
  );
  return (
    <TabView
      renderTabBar={renderTabBar}
      activeColor={'green'}
      inactiveColor={'pink'}
      style={{marginTop: 100, backgroundColor: 'white'}}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width, backgroundColor: 'pink'}}
    />
  );
}

const styles = {
  tabContainer: {
    flexDirection: 'row',
    marginTop: 120,
    justifyContent: 'space-evenly',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },

  tabContainerTexts: {
    fontSize: 30,
    letterSpacing: 6,
    color: '#009F93',

    borderBottomWidth: 3,
    paddingBottom: 20,

    borderBottomColor: '#009F93',
    marginBottom: 10,
  },
  tabContainerTextsActive: {
    fontSize: 30,
    color: '#009F93',
  },
  activeTab: {
    fontSize: 40,
  },
  activeTabNot: {
    fontSize: 20,
  },
};
