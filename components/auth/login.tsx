// "use client";
// import Link from "next/link";
// import { ChevronRight } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";

// export default function SignInComp() {
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   async function signupWithGoogle() {
//     setIsLoading(true);
//     try {
//       const result = await signIn("google", { callbackUrl: "/email-list" });
//       if (result?.error) {
//         console.error("Error signing in with Google:", result.error);
//       }
//     } catch (error) {
//       console.error("An unexpected error occurred:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return (
//     <div className="min-h-auto max-w-sm mt-16 rounded-xl mx-auto  bg-white text-black">
//       <div className="mx-auto max-w-[380px] space-y-6 p-4">
//         <div className="space-y-6 text-center">
//           <h1 className="text-2xl font-bold">Sign in to Outlook</h1>
//         </div>
//         <div className="space-y-4">
//           {isLoading ? (
//             <Button
//               variant="outline"
//               disabled
//               className="w-full hover:text-white bg-gradient-to-br from-blue-400 to-blue-600 text-white"
//             >
//               {/* <img src="/google.png" className="w-4 h-4" alt="google" /> */}
//               SigningUp....
//             </Button>
//           ) : (
//             <Button
//               onClick={() => signupWithGoogle()}
//               variant="outline"
//               className="w-full hover:text-white bg-gradient-to-br from-blue-400 to-blue-600 text-white"
//             >
//               <img src="/google.png" className="w-4 h-4" alt="google" />
//               Sign in with Google
//             </Button>
//           )}
//           <Button
//             variant="outline"
//             className="w-full hover:text-white bg-gradient-to-br from-blue-400 to-blue-600 text-white"
//           >
//             <img src="/mic.png" className="w-4 h-4" alt="microsoft" />
//             Sign in with Apple
//           </Button>
//           <div className="relative flex items-center py-2">
//             <div className="flex-grow border-t border-zinc-700"></div>
//             <span className="mx-4 flex-shrink text-zinc-500">or</span>
//             <div className="flex-grow border-t border-zinc-700"></div>
//           </div>
//           <div className="space-y-4">
//             <Input
//               className="border-zinc-700 bg-gray-100 text-gray-800 focus-visible:ring-1 focus-visible:ring-blue-500 placeholder-zinc-500 outline-none focus-visible:outline-none"
//               placeholder="Phone, email, or username"
//             />
//             <Button className="w-full bg-white text-black hover:bg-zinc-200">
//               Next
//               <ChevronRight className="ml-2 h-4 w-4" />
//             </Button>
//             <Button
//               variant="outline"
//               className="w-full bg-gradient-to-br from-blue-400 to-blue-600 text-white"
//             >
//               Forgot password?
//             </Button>
//           </div>
//         </div>
//         <p className="text-center text-sm text-zinc-500">
//           Don't have an account?{" "}
//           <Link href="/register" className="text-blue-500 hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function SignInComp() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function signupWithGoogle() {
    setIsLoading(true);
    try {
      const result = await signIn("google", { callbackUrl: "/email-list" });
      if (result?.error) {
        console.error("Error signing in with Google:", result.error);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8 space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Sign in to Outlook
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Access your email and stay connected
            </p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={() => signupWithGoogle()}
              variant="outline"
              className="w-full bg-white hover:bg-white hover:text-black  text-gray-900 font-semibold border border-gray-300 transition-colors duration-300"
              disabled={isLoading}
            >
              <img
                src="/google.png"
                className="w-5 h-5 mr-2"
                alt="Google logo"
              />
              {isLoading ? "Signing in..." : "Sign in with Google"}
            </Button>

            <Button
              variant="outline"
              className="w-full bg-white hover:bg-white hover:text-black  text-gray-900 font-semibold border border-gray-300 transition-colors duration-300"
            >
              <img src="/mic.png" className="w-5 h-5 mr-2" alt="Apple logo" />
              Sign in with Apple
            </Button>
          </div>

          <div className="relative">
            <Separator />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
              or
            </span>
          </div>

          <div className="space-y-4">
            <Input
              className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md"
              placeholder="Phone, email, or username"
            />
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-300">
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="link"
              className="w-full text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              Forgot password?
            </Button>
          </div>
        </div>

        <div className="px-8 py-4 bg-gray-50 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-blue-600 hover:underline font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
