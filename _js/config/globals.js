export const clear = () => {
  sessionStorage.removeItem('uid');
  return !sessionStorage.getItem('uid');
};
