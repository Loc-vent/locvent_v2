import React, {useState, useReducer} from 'react';
import {FlatList, View, Text, TouchableOpacity, Button} from 'react-native';
import {HistoryData, userData} from '../../Data/Data';
import HistoryCard from '../../components/HistoryCard';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ACTIONS = {
  TOGGLEMODAL: 'TOGGLEMODAL',
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
      <Button
        style={{
          backgroundColor: '#009F93',
        }}
        onPress={() => navigation.navigate('Message')}
        title="Go to Messages">
        <MaterialCommunityIcons
          style={{
            marginRight: 30,
          }}
          name="comment-processing"
          color="#009F93"
          size={40}
        />
      </Button>
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
        <Modal
          isVisible={isModalVisible}
          transparent={true}
          animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.textLineContainer}>
              <Text style={styles.titleHeading}> Report ID : </Text>
              <Text style={styles.dataText}> {state.id} </Text>
            </View>

            <View style={styles.textLineContainer}>
              <Text style={styles.titleHeading}> Date : </Text>
              <Text style={styles.dataText}> {state.date} </Text>
            </View>

            <View style={styles.textLineContainer}>
              <Text style={styles.titleHeading}> Lattitude : </Text>
              <Text style={styles.dataText}> {state.location.Latitude} </Text>
            </View>

            <View style={styles.textLineContainer}>
              <Text style={styles.titleHeading}> Longitude : </Text>
              <Text style={styles.dataText}> {state.location.Longitude} </Text>
            </View>

            <View style={styles.textLineContainer}>
              <Text style={styles.titleHeading}> Description : </Text>
              <Text style={styles.dataText}> {state.description} </Text>
            </View>

            <TouchableOpacity style={styles.closeBtn} onPress={toggleModal}>
              <View>
                <Text style={styles.closeText}>Close </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = {
  modalContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 25,
    alignContent: 'center',
    opacity: 0.8,
  },
  textLineContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 14,
  },
  titleHeading: {
    fontSize: 30,
    color: '#009F93',
    fontWeight: 'bold',
    fontFamily: 'Comfortaa',
    letterSpacing: 0.5,
  },
  dataText: {
    flex: 1,
    fontSize: 20,
    color: 'grey',
    fontWeight: '100',
    fontFamily: 'Comfortaa',
  },
  closeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    height: 70,
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#009F93',
    padding: 10,
    marginBottom: 10,
    marginTop: 15,
  },
  closeText: {
    color: 'white',
    fontFamily: 'Comfortaa',
    fontWeight: '100',
    fontSize: 30,
    letterSpacing: 1.9,
  },
};
