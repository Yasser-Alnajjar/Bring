export const URL_API = "http://localhost:9000";
function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.accessToken) return `Bearer ${user.accessToken}`;
  return {};
}

export const header = authHeader();
