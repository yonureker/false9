const checkEmptyObject = (obj) => {
  for (const i in obj) return false;
  return true;
};

export default checkEmptyObject;
