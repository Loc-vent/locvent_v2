import React, {useState, useCallback, useEffect, useContext} from 'react';
import {GiftedChat, InputToolbar, Bubble, Send} from 'react-native-gifted-chat';
import {View, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import {AuthContext} from '../../Context/AuthProvider';

export default function MessageScreen() {
  const {user, getMessages, otherMessages} = useContext(AuthContext);
  const [messages, setMessages] = useState([]);

  // const meessaagees =  await getMessages(user._id);

  useEffect(() => {
    // ...
    getMessages(user._id);
    console.log('user i message ', user);

    console.log('messages on others ', otherMessages.others);

    otherMessages.others?.map((message, index) => {
      setMessages(messages => [
        ...messages,
        {
          _id: message._id,
          text: message.message,
          createdAt: message.Date,
          user: {
            _id: message.userId,
            name: message.userId.UserName,
            //   avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ]);

      console.log('messahesssss', message.message);
    });
  }, []);

  console.log('messages  ', otherMessages);

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Hello developer',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'Abenezer Seifu ',
  //         //   avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //   ]);
  // }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon="send" size={22} color="#009F93" />
        </View>
      </Send>
    );
  }
  const customtInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: 'white',
          borderColor: '#009F93',
          height: 40,
          marginBottom: 10,
          paddingBottom: 5,
        }}
      />
    );
  };

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#009F93',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      infiniteScroll={true}
      renderInputToolbar={props => customtInputToolbar(props)}
      renderBubble={renderBubble}
      showUserAvatar={true}
      alwaysShowSend={true}
      renderSend={renderSend}
      user={{_id: 1, name: 'Abraham Terfie'}}
    />
  );
}
const styles = StyleSheet.create({
  sendingContainer: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
