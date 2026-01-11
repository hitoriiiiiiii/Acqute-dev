// Minimal in-memory auth service for development/testing
const users = [];

export const createUser = async ({ name, email, password, role = 'user' }) => {
  const existing = users.find((u) => u.email === email);
  if (existing) throw new Error('User with this email already exists');

  const user = {
    id: users.length + 1,
    name,
    email,
    password,
    role,
  };

  users.push(user);
  return user;
};

export const authenticateUser = async ({ email, password }) => {
  const user = users.find((u) => u.email === email);
  if (!user) throw new Error('User not found');
  if (user.password !== password) throw new Error('Invalid password');
  return user;
};
