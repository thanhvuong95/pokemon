export const randomUnique = (length, min, max) => {
  const uniqueArr = [];
  while (uniqueArr.length < length) {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    if (uniqueArr.indexOf(number) === -1) uniqueArr.push(number);
  }
  return uniqueArr;
};

export const shuffle = (arr) => {
  let currentIndex = arr.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
};
