export const controlError = (error: any) => {
  if (error.message) {
    return error.message;
  }
  return 'An unknown error occurred';
};
