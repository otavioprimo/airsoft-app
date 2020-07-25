const AuthUrls = {
  loginWithEmail: 'auth/email',
  refreshToken: 'auth/refresh-token',
};

const UserUrls = {
  create: 'user',
  update: 'user',
  getByUsername: 'user/username',
  getProfile: 'user',
  uploadProfilePicture: 'upload/user/profile',
}

export const ApiActions = {
  Auth: AuthUrls,
  User: UserUrls,
};
