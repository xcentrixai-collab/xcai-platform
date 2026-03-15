export type AuthUser = {
  id: string;
  email: string;
};

export async function getAuthUser(): Promise<AuthUser | null> {
  // Placeholder for Auth.js or Supabase integration.
  return null;
}
