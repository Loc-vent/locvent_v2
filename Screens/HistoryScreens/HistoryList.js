import React from 'react';
import {FlatList} from 'react-native';
import {HistoryData, userData} from '../../Data/Data';
import HistoryCard from '../../components/HistoryCard';

export default function HistoryList({navigation}) {
  return (
    <FlatList
      data={HistoryData}
      renderItem={({item}) => (
        <HistoryCard
          navigation={navigation}
          id={item.id}
          date={item.date}
          description={item.description}
          Latitude={item.location.Latitude}
          Longitude={item.location.Longitude}
        />
      )}
    />
  );
}
