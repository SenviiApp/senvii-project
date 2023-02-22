export const simulateDelay = async (seconds) => {
  await new Promise((resolve, _) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
};
