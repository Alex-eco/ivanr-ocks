import crypto from "crypto";

const ADMIN_PASSWORD = "ivan2026";
const COOKIE_NAME = "ivan_admin";

function createToken() {
  return crypto
    .createHash("sha256")
    .update(`ivanr-ocks-admin:${ADMIN_PASSWORD}`)
    .digest("hex");
}

export function isValidPassword(password: string) {
  return password === ADMIN_PASSWORD;
}

export function getAdminToken() {
  return createToken();
}

export function isValidToken(token: string | undefined) {
  return token === createToken();
}

export { COOKIE_NAME };
