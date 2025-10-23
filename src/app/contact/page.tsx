// // "use client";

// // import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
// // import { Input } from "../components/ui/input";
// // import { Label } from "../components/ui/label";
// // import { Textarea } from "../components/ui/textarea";
// // import { Button } from "../components/ui/button";

// // export default function ContactPage() {
// //   return (
// //     <div className="max-h-screen bg-white pt-16">
// //       <section className="bg-orange-50 py-16 px-6 text-center">
// //         <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
// //         <p className="text-gray-600 max-w-2xl mx-auto">
// //           Not finding what you are looking for? Reach out to us and we will help you out.
// //         </p>
// //       </section>

// //       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 py-16 px-6">
// //         {/* Contact Info */}
// //         <div className="space-y-6">
// //           <h2 className="text-xl font-semibold text-gray-800">Monday - Friday (9:00 AM to 5:00 PM)</h2>
// //           <p className="flex items-center space-x-3 text-gray-700">
// //             📧 <span>letstalk@ledgertower.com</span>
// //           </p>
// //           <p className="flex items-center space-x-3 text-gray-700">
// //             📞 <span>+91 +91 70421 21948</span>
// //           </p>
// //           <p className="flex items-center space-x-3 text-gray-700">
// //             📍 <span>HQ-27,MG Road,Gurgoan, Haryana 122003</span>
// //           </p>
// //         </div>

// //         {/* Contact Form */}
// //         <Card className="max  shadow-md">
// //           <CardHeader>
// //             <CardTitle className="text-2xl text-center font-semibold">Get in touch with us</CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <form className="space-y-4">
// //               <div>
// //                 <Label htmlFor="name">Name *</Label>
// //                 <Input id="name" type="text" placeholder="Enter your name" required />
// //               </div>

// //               <div>
// //                 <Label htmlFor="email">Email *</Label>
// //                 <Input id="email" type="email" placeholder="you@example.com" required />
// //               </div>

// //               <div>
// //                 <Label htmlFor="mobile">Mobile Number</Label>
// //                 <Input id="mobile" type="tel" placeholder="+91 98765 43210" />
// //               </div>

// //               <div>
// //                 <Label htmlFor="message">Message *</Label>
// //                 <Textarea id="message" placeholder="Write your message..." required />
// //               </div>

// //               <p className="text-xs text-gray-500">
// //                 By clicking Submit, you agree to our{" "}
// //                 <a href="/privacy" className="text-blue-600 hover:underline">
// //                   Privacy Policy
// //                 </a>.
// //               </p>

// //               <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
// //                 SUBMIT
// //               </Button>
// //             </form>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     </div>
// //   );
// // }
  

"use client";

import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export default function ContactPage() {
  return (
    <div className="max-h-screen bg-white pt-20">
      {/* Header Section */}
      <section className="bg-orange-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Not finding what you are looking for? Reach out to us and we will help you out.
        </p>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 py-16 px-6">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Monday - Friday (9:00 AM to 5:00 PM)
          </h2>
          <p className="flex items-center space-x-3 text-gray-700">
            📧 <span>letstalk@ledgertower.com</span>
          </p>
          <p className="flex items-center space-x-3 text-gray-700">
            📞 <span>+91 70421 21948</span>
          </p>
          <p className="flex items-center space-x-3 text-gray-700">
            📍 <span>HQ-27, MG Road, Gurgaon, Haryana 122003</span>
          </p>
        </div>

        {/* Contact Form */}
        <Card className="w-full max-w-md mx-auto -mt-14">
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl text-center font-semibold">
              Get in touch with us
            </CardTitle>
          </CardHeader>

          {/* Reduced bottom spacing */}
          <CardContent className="pb-2">
            <form className="space-y-3">
              <div>
                <Label htmlFor="name" className="text-sm">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="h-9 text-sm"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-9 text-sm"
                  required
                />
              </div>

              <div>
                <Label htmlFor="mobile" className="text-sm">
                  Mobile Number
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="h-9 text-sm"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Write your message..."
                  className="text-sm"
                  required
                />
              </div>

              <p className="text-xs text-gray-500">
                By clicking Submit, you agree to our{" "}
                <a href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>.
              </p>

              <Button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-sm py-2"
              >
                SUBMIT
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
