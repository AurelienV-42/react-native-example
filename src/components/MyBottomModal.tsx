import React from 'react';
import Modal from 'react-native-modal';
import {StyleSheet} from 'react-native';

interface MyBottomModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const MyBottomModal: React.FC<MyBottomModalProps> = ({
  isVisible,
  onClose,
  children,
}) => {
  return (
    <Modal
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      swipeDirection={['down']}
      isVisible={isVisible}
      style={styles.modal}>
      {children}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

export default MyBottomModal;
