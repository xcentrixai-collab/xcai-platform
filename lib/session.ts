export type SessionState = {
  isAuthenticated: boolean;
};

export async function getSessionState(): Promise<SessionState> {
  // Placeholder for server session lookup.
  return { isAuthenticated: false };
}
