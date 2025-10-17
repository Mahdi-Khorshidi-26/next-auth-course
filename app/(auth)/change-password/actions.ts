export function changePassword({
  currentPassword,
  password,
  confirmPassword,
}: {
  currentPassword: string;
  password: string;
  confirmPassword: string;
}) {
  // Implement your password change logic here
  return { error: false, message: "Password changed successfully" };
}
