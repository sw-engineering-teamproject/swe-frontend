export const extractMonth = (dateString: string) => {
  const parts = dateString.split('-');
  if (parts.length !== 3) {
    throw new Error('Invalid date format. Expected format: YYYY-MM-DD');
  }
  return parts[1];
};

export const extractNickname = (userString: string): string => {
  const match = userString.match(/nickname=(.*?),/);
  return match ? match[1] : userString;
};