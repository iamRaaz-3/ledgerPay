//   "use client"
// import { Button } from "../components/ui/button"
// import { Input } from "../components/ui/input";

// interface Login1Props {
//   heading?: string;
//   logo: {
//     url: string;
//     src: string;
//     alt: string;
//     title?: string;
//   };
//   buttonText?: string;
//   googleText?: string;
//   signupText?: string;
//   signupUrl?: string;
// }

// const login = ({
//   heading = "Login",
//   logo = {
//     url: "https://ledger-pay-ashen.vercel.app/",
//     // src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark.svg",
//     // alt: "logo",
//     title: "https://ledger-pay-ashen.vercel.app/",
//   },
//   buttonText = "Login",
//   signupText = "Need an account?",
//   signupUrl = "https://shadcnblocks.com",
// }: Login1Props) => {
//   return (
//     <section className="bg-muted h-screen">
//       <div className="flex h-full items-center justify-center">
//         {/* Logo */}
//         <div className="flex flex-col items-center gap-6 lg:justify-start">
//           <a href={logo.url}>
//             <img
//               src={logo.src}
//               alt={logo.alt}
//               title={logo.title}
//               className="h-10 dark:invert"
//             />
//           </a>
//           <div className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md">
//             {heading && <h1 className="text-xl font-semibold">{heading}</h1>}
//             <Input
//               type="email"
//               placeholder="Email"
//               className="text-sm"
//               required
//             />
//             <Input
//               type="password"
//               placeholder="Password"
//               className="text-sm"
//               required
//             />
//             <Button type="submit" className="w-full">
//               {buttonText}
//             </Button>
//           </div>
//           <div className="text-muted-foreground flex justify-center gap-1 text-sm">
//             <p>{signupText}</p>
//             <a
//               href={signupUrl}
//               className="text-primary font-medium hover:underline"
//             >
//               Sign up
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default login;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { Label } from "../components/ui/label";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in:", { email, password });
    // TODO: Add authentication logic
    router.push("/dashboard"); // Example redirect
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-8">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          <CardTitle className="text-4xl font-semibold text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Log In
            </Button>
          </form>
        </CardContent>

        {/* <CardFooter className="text-sm text-center text-gray-500">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </CardFooter> */}
      </Card>
    </div>
  );
}
