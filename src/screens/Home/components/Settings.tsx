import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import Modal from 'react-native-modal';
import MyText from 'components/MyText';
import mainStyles from 'config/sharedStyles/mainStyles';
import Close from 'assets/images/UI/close.svg';
import MyButton from 'components/MyButton';
import MyBottomModal from 'components/MyBottomModal';
import SwitchButtons from 'components/SwitchButtons';
import GB from 'assets/images/UI/gb.svg';
import FR from 'assets/images/UI/fr.svg';

interface SettingsModalProps {
  isVisible: boolean;
  onClose: () => void;
}
const SettingsModal: React.FC<SettingsModalProps> = ({isVisible, onClose}) => {
  return (
    <MyBottomModal isVisible={isVisible} onClose={onClose}>
      <View style={styles.container}>
        <MyButton
          onPress={onClose}
          style={styles.containerBtn}
          svg={
            <Close style={{color: mainStyles.gray1}} height={14} width={14} />
          }
        />
        <SwitchButtons
          onPressLeft={() => {}}
          onPressRight={() => {}}
          svgLeft={<GB width="25" />}
          svgRight={<FR width="25" />}
          txtLeft={'English'}
          txtRight={'French'}
          isRightSelected={true}
        />
      </View>
    </MyBottomModal>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    backgroundColor: mainStyles.lightOrange,
    height: '30%',
    padding: 20,
  },
  containerBtn: {
    marginBottom: 20,
    alignSelf: 'flex-end',
    backgroundColor: mainStyles.white,
    padding: 7,
    borderRadius: 50,
    ...mainStyles.shadow,
  },
});
export default SettingsModal;
