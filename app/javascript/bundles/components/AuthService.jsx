// This isn't actually used yet, but this is the type of functionality that
// I would use in order to save a user in the browser

export const saveUserAuth = (userId) => {
  // Obviously, in a real app we would user a token and not just the userId
  localStorage.setItem('auth-token', userId);
};

export const removeUserAuth = () => {
  localStorage.removeItem('auth-token');
};

export const isAuthenticated = () => {
  return localStorage.getItem('auth-token') != null
};