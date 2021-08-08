import React, {useState, useReducer} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {HistoryData, userData} from '../../Data/Data';
import HistoryCard from '../../components/HistoryCard';
import {Button} from 'react-native-paper';
import Modal from 'react-native-modal';

const ACTIONS = {
  TOGGLEMODAL: 'TOGGLEMODAL',

  DELETE_HISTORY: 'DELETE_HISTORY',
  EDIT_HISTORY: 'EDIT_HISTORY',
  EDIT_HISTORY_DATE: 'EDIT_HISTORY_DATE',

  ADD_HISTORY_DATE: 'ADD_HISTORY_DATE',
  DELETE_HISTORY_DATE: 'DELETE_HISTORY_DATE',
};

const active = {
  id: '',
  date: '',
  description: '',
  location: {
    Latitude: '',
    Longitude: '',
  },
};

export function HistoryList({navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeHistory, setActiveHistory] = useState(active);

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.TOGGLEMODAL:
        return {
          isModalVisible: setModalVisible(!isModalVisible),
          ...activeHistory,
        };
      case 'setActiveHistory':
        return;
        null;

      default:
        return state;
    }
  }

  function updateActiveHistory() {}

  const [state, dispatch] = useReducer(reducer, activeHistory);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const getActiveHistoryData = item => {
    setActiveHistory({
      id: item.id,
      date: item.date,
      description: item.description,
      location: {
        Latitude: item.location.Latitude,
        Longitude: item.location.Longitude,
      },
    });
  };
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        key={(item, index) => item.id}
        data={HistoryData}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              getActiveHistoryData(item);
              dispatch({type: ACTIONS.TOGGLEMODAL, payload: {item}});
            }}>
            <HistoryCard
              navigation={navigation}
              id={item.id}
              date={item.date}
              description={item.description}
              Latitude={item.location.Latitude}
              Longitude={item.location.Longitude}
            />
          </TouchableOpacity>
        )}
      />

      <View style={{flex: 1}}>
        <Modal isVisible={isModalVisible}>
          <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Text> thi steeh {state.id} </Text>
            <Text> thi steeh {state.description} </Text>
            <Text> thi steeh {state.location.Latitude} </Text>
            <Text> thi steeh {state.location.Longitude} </Text>

            <Button title="Show modal">
              <Text>this shit </Text>{' '}
            </Button>

            <Button title="Show modal" onPress={toggleModal}>
              <Text>Kill modal </Text>{' '}
            </Button>
          </View>
        </Modal>
      </View>
    </View>
  );
}

export function HistoryView() {
  return <Text>this</Text>;
}
