export const timeConvert = (time) => {
  let num = time;
  let hours = num / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  return rhours + " hours and " + rminutes + " minutes";
};
