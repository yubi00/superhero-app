const checkPattern = (str1, str2) => {
  if (str2.length > str1.length) return false;
  for (let i = 0; i < str2.length; i++) {
    if (str1[i].toLowerCase() !== str2[i].toLowerCase()) return false;
  }
  return true;
};

module.exports = {
  checkPattern
};
