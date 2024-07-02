const counterKWH = () => {
  const startDate = new Date('2024-07-02T23:47:00');
  const initDate = new Date();
  const seconds = Math.floor((initDate - startDate) / 1000);

  return 1134147814 + seconds;
};

export default counterKWH;
