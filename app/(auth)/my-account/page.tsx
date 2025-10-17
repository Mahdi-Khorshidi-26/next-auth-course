"use client";
import LoggedinUserEmail from "@/app/components/userEmail";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function MyAccountPage() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-4xl">My Account</CardTitle>
          <CardDescription className="mt-2">
            <div>Email address</div>
            <LoggedinUserEmail />
          </CardDescription>
        </CardHeader>
        <br />
        <CardContent>
          <Button asChild>
            <Link href="/login">Enable Two-Factor Authentication</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
