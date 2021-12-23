export const getTime = (minutes: number) => {
  const hour = Math.trunc(minutes / 60);
  const minute = minutes - hour * 60;

  return `${hour}Ч ${minute}М`;
};
