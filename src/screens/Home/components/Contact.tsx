import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import MyText from 'components/MyText';

interface SettingsModalProps {
  isVisible: boolean;
  onClose: () => void;
}
const ContactModal: React.FC<SettingsModalProps> = ({isVisible, onClose}) => {
  return (
    <View>
      <Modal isVisible={isVisible}>
        <View style={{flex: 1}}>
          <MyText txt={'I am the contact content!'} />
        </View>
      </Modal>
    </View>
  );
};

export default ContactModal;
