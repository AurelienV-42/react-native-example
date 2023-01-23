import React from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import MyText from 'components/MyText';
import mainStyles from 'config/sharedStyles/mainStyles';
import Close from 'assets/images/UI/close.svg';
import MyButton from 'components/MyButton';
import MyBottomModal from 'components/MyBottomModal';
import Malt from 'assets/images/logo/malt_logo.svg';
import Fiverr from 'assets/images/logo/fiverr_logo.svg';

interface ContactModalProps {
  isVisible: boolean;
  onClose: () => void;
}
const ContactModal: React.FC<ContactModalProps> = ({isVisible, onClose}) => {
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
        <MyText style={styles.title} txt={'Interested? Contact Me!'} />
        <View style={styles.containerLogos}>
          <MyButton
            onPress={() =>
              Linking.openURL('https://www.malt.fr/profile/aurelienvandaele')
            }
            style={[styles.btnLogo]}
            svg={<Malt style={styles.svgColor} width={70} height={20} />}
          />
          <MyButton
            onPress={() => Linking.openURL('https://fr.fiverr.com/aurelienvan')}
            style={[styles.btnLogo, styles.fiverrColor]}
            svg={<Fiverr style={styles.svgColor} width={70} height={20} />}
          />
        </View>
      </View>
    </MyBottomModal>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    backgroundColor: mainStyles.lightOrange,
    padding: 20,
    paddingBottom: '12%',
  },
  containerBtn: {
    marginBottom: 20,
    alignSelf: 'flex-end',
    backgroundColor: mainStyles.white,
    padding: 7,
    borderRadius: 50,
    ...mainStyles.shadow,
  },
  title: {
    ...mainStyles.s20Semi,
    marginBottom: 28,
  },
  containerLogos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLogo: {
    height: 90,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: mainStyles.red,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fiverrColor: {marginLeft: 35, backgroundColor: mainStyles.green},
  svgColor: {
    color: mainStyles.white,
  },
});
export default ContactModal;
