import Link from "next/link";
import LogoutButton from "./logoutButton";
import { auth } from "@/auth";
import LoggedinUserEmail from "./userEmail";

export default async function Header() {
  const session = await auth();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <nav>
        <ul className="flex items-center space-x-4 font-bold">
          <li>
            <Link href="/my-account">My Account</Link>
          </li>
          <li>
            <Link href="/change-password">Change Password</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <LoggedinUserEmail />
        <LogoutButton />
      </div>
    </header>
  );
}
