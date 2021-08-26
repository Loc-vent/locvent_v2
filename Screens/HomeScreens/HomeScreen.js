import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({initialProps}) {
  const [
    {cameraRef, type, ratio, autoFocus, autoFocusPoint, isRecording},
    {
      toggleFacing,
      touchToFocus,
      textRecognized,
      facesDetected,
      recordVideo,
      setIsRecording,
      takePicture,
    },
  ] = useCamera(initialProps);

  return (
    <View style={{flex: 1}}>
      <RNCamera
        useFlash={true}
        ref={cameraRef}
        autoFocusPointOfInterest={autoFocusPoint.normalized}
        type={type}
        ratio={ratio}
        style={{flex: 1}}
        autoFocus={autoFocus}
        // onTextRecognized={textRecognized}
        // onFacesDetected={facesDetected}
        onPictureSaved={takePicture}>
        <TouchableOpacity
          style={styles.shutterButton}
          onPress={async () => {
            try {
              setIsRecording(true);
              const data = await takePicture();
              console.log(data);
              console.warn(data);
            } catch (error) {
              console.warn(error);
            } finally {
              setIsRecording(false);
            }
          }}>
          <FontAwesome
            name="circle-o"
            size={90}
            color="#fff"
          />
        </TouchableOpacity>
      </RNCamera>
    </View>
  );
}

const styles = {
  shutterButton: {
    flex: 1,
    // paddingBottom: 100,
    margin: 10,
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    alignItems: 'center',
  },
};
