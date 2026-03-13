const USERS_KEY = "projectAI_users";
const AUTH_KEY = "projectAI_auth";
const ACCOUNT_UPDATED_EVENT = "projectai:account-updated";

function notifyAccountUpdate() {
  window.dispatchEvent(new Event(ACCOUNT_UPDATED_EVENT));
}

function safeParseArray(value) {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function getStoredUsers() {
  return safeParseArray(localStorage.getItem(USERS_KEY));
}

export function setStoredUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  notifyAccountUpdate();
}

export function getActiveAuthEmail() {
  const email = localStorage.getItem(AUTH_KEY);
  return email ? email.trim().toLowerCase() : "";
}

export function setActiveAuthEmail(email) {
  localStorage.setItem(AUTH_KEY, email.trim().toLowerCase());
  notifyAccountUpdate();
}

export function getUserByEmail(email) {
  const normalizedEmail = email ? email.trim().toLowerCase() : "";
  if (!normalizedEmail) return null;

  return getStoredUsers().find((user) => user.email === normalizedEmail) || null;
}

export function getActiveUser() {
  const authEmail = getActiveAuthEmail();
  return {
    authEmail,
    user: getUserByEmail(authEmail),
  };
}

export function updateStoredUser(previousEmail, updater) {
  const normalizedPreviousEmail = previousEmail
    ? previousEmail.trim().toLowerCase()
    : "";
  const users = getStoredUsers();
  const index = users.findIndex((user) => user.email === normalizedPreviousEmail);

  if (index === -1) {
    return null;
  }

  const nextUser = updater(users[index]);
  users[index] = nextUser;
  setStoredUsers(users);

  if (nextUser?.email && nextUser.email !== normalizedPreviousEmail) {
    setActiveAuthEmail(nextUser.email);
  }

  return nextUser;
}

export function logoutUser() {
  localStorage.removeItem(AUTH_KEY);
  notifyAccountUpdate();
}

export function addAccountUpdateListener(listener) {
  window.addEventListener(ACCOUNT_UPDATED_EVENT, listener);
  window.addEventListener("storage", listener);

  return () => {
    window.removeEventListener(ACCOUNT_UPDATED_EVENT, listener);
    window.removeEventListener("storage", listener);
  };
}
