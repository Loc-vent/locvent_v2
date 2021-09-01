import React, {useState, useReducer, useContext} from 'react';
import {FlatList, View, Text, TouchableOpacity, Button} from 'react-native';
import {HistoryData, userData} from '../../Data/Data';
import HistoryCard from '../../components/HistoryCard';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {AuthContext} from '../../Context/AuthProvider';

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
  const {user, getUserReportHistory, reportHistory} = useContext(AuthContext);

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
      <View>
        <Button
          color={'#009F93'}
          onPress={() => navigation.navigate('Message')}
          title="Go to informatin board"></Button>
      </View>
      <FlatList
        keyExtractor={item => item.id}
        key={(item, index) => item.id}
        data={HistoryData}
        // data={reportHistory}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              getUserReportHistory(user._id, 9);
              getActiveHistoryData(item);
              dispatch({type: ACTIONS.TOGGLEMODAL, payload: {item}});
            }}>
            <HistoryCard
              navigation={navigation}
              reporterId={item.reporterId}
              ReportLatitude={item.ReportLatitude}
              ReportLongitude={item.ReportLongitude}
              DetectedLocust={item.DetectedLocust}
              created_on={item.created_on}
            />
          </TouchableOpacity>
        )}
      />

      <View style={{flex: 1}}>
        <Modal
          isVisible={isModalVisible}
          animationIn={'bounceInUp'}
          animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.textLineContainer}>
              <Text style={styles.titleHeading}> Report ID : </Text>
              <Text style={styles.dataText}>
                 {/* {reportHistory.reporterId}  */}
                 </Text>
            </View>

            <View style={styles.textLineContainer}>
              <Text style={styles.titleHeading}> Date : </Text>
              <Text style={styles.dataText}> 
              
              {/* {reportHistory.created_on} */}
               </Text>
            </View>

            <View style={styles.textLineContainer}>
              <Text style={styles.titleHeading}> Lattitude : </Text>
              <Text style={styles.dataText}>
                {' '}
                {/* {reportHistory.ReportLatitude} */}
              </Text>
            </View>

            <View style={styles.textLineContainer}>
              <Text style={styles.titleHeading}> Longitude : </Text>
              <Text style={styles.dataText}>
                {' '}
                {/* {reportHistory.ReportLongitude}{' '} */}
              </Text>
            </View>

            <View style={styles.textLineContainer}>
              <Text style={styles.titleHeading}> locust type : </Text>
              <Text style={styles.dataText}>
                {' '}
                {/* {reportHistory.DetectedLocust}{' '} */}
              </Text>
            </View>

            <TouchableOpacity style={styles.closeBtn} onPress={toggleModal}>
              <View>
                <Text style={styles.closeText}>close </Text>
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
    padding: 25,
  },
  textLineContainer: {
    flexDirection: 'row',
    marginTop: 2,
    marginBottom: 8,
  },
  titleHeading: {
    fontSize: 25,
    color: '#009F93',
    fontFamily: 'Comfortaa',
    letterSpacing: 2,
  },
  dataText: {
    flex: 1,
    letterSpacing: 2,
    fontSize: 20,
    color: 'silver',
    fontWeight: '100',
    fontFamily: 'Comfortaa',
  },
  closeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    width: '70%',
    borderRadius: 15,
    backgroundColor: '#fff',
    borderColor: '#009F93',
    borderWidth: 2,
    marginBottom: 10,
    marginTop: 15,
  },
  closeText: {
    color: '#009F93',
    fontFamily: 'Comfortaa',
    fontWeight: '100',
    fontSize: 20,
    letterSpacing: 4,
  },
};
