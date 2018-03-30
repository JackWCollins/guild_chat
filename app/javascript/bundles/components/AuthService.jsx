export const saveUserData = (userId) => {
  // Obviously, in a real app we would user a token and not just the userId
  localStorage.setItem('auth-token', userId);
}

export const logout = () => {
  localStorage.removeItem('auth-token');
}

export const isAuthenticated = () => {
  return localStorage.getItem('auth-token') != null
}