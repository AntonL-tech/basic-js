module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date && !isNaN(date.valueOf()))) {
    throw new Error();
  }

  let season = date.getMonth();

  if(season >= 2 && season < 5) {
    return 'spring';
  } else if(season >= 5 && season < 8) {
    return 'summer';
  } else if(season >= 8 && season < 11) {
    return 'autumn';
  } else {
    return 'winter';
  }
};

