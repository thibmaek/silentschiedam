export const basename = (() => {
  return window.app.basename;
})();

export const clear = () => {
  sessionStorage.removeItem('uid');
  return !sessionStorage.getItem('uid');
};
