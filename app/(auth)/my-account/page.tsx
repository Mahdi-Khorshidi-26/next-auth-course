"use client";
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
          <CardDescription className="mt-4">
            <div className="text-xl text-black">Email address</div>
            {/* <LoggedinUserEmail /> */}
          </CardDescription>
        </CardHeader>
        <br />
        <CardContent className="w-full">
          <Button asChild className="w-full mb-1">
            <Link href="/login">Enable Two-Factor Authentication</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
