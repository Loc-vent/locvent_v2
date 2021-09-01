import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import MessageNoticePage from '../../components/MessageNoticePage';
import MessageScreen from './MessageScreen';

export default function Message() {
  const renderScene = SceneMap({
    first: MessageScreen,
    second: MessageNoticePage,
  });

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'first', title: 'Messages'},
    {key: 'second', title: 'Notice'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'white', height: 5}}
      style={{
        backgroundColor: '#009F93',
        height: 55,
      }}
    />
  );
  return (
    <TabView
      renderTabBar={renderTabBar}
      activeColor={'green'}
      inactiveColor={'pink'}
      style={{ backgroundColor: 'white'}}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width, backgroundColor: 'pink'}}
    />
  );
}
