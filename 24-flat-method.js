const arrayMarks = [45, [90, 60], 70, 40, [8, 9, [3, 0]], , 7, ,]
console.log(`Length : ${arrayMarks.length}`);

const flattenArray = arrayMarks.flat(2);
console.log(flattenArray);

const arrayWithEmptySlots = [45, , 70, 40, , , 7, ,]
const res = arrayWithEmptySlots.flat();
console.log(res);