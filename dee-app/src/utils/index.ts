import Toast from 'react-native-toast-message';

const toastType = {
  s: 'success',
  e: 'error',
  i: 'info',
};

export const showToast = (
  type: 's' | 'e' | 'i',
  title: string,
  message: string,
) => {
  Toast.show({
    type: toastType[type],
    text1: title || toastType[type].toUpperCase(),
    text2: message,
  });
};
