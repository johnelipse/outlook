import SignInComp from "@/components/auth/login";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-200 to-blue-300">
      <SignInComp />
    </div>
  );
}
