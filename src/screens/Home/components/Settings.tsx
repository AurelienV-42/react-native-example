import React from 'react';
import {StyleSheet, View} from 'react-native';
import mainStyles from 'config/sharedStyles/mainStyles';
import Close from 'assets/images/UI/close.svg';
import MyButton from 'components/MyButton';
import MyBottomModal from 'components/MyBottomModal';
import SwitchButtons from 'components/SwitchButtons';
import GB from 'assets/images/UI/gb.svg';
import FR from 'assets/images/UI/fr.svg';
import {useTranslation} from 'react-i18next';
import {storeAsyncData} from 'src/utils/asyncData';

interface SettingsModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({isVisible, onClose}) => {
  const {t, i18n} = useTranslation('home', {keyPrefix: 'settings'});

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    storeAsyncData('LOCALE', lng);
  };

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
          onPressLeft={() => {
            changeLanguage('en');
          }}
          onPressRight={() => {
            changeLanguage('fr');
          }}
          svgLeft={<GB width="25" />}
          svgRight={<FR width="25" />}
          txtLeft={t('english')}
          txtRight={t('french')}
          isRightSelected={i18n.language === 'fr'}
        />
      </View>
    </MyBottomModal>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
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
