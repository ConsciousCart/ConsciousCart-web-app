"use client";
import { TypographyH2 } from "@/components/ui/Typography/TypographyH2";
import { TypographyP } from "@/components/ui/Typography/TypographyP";
import { SignIn } from "@clerk/nextjs";
export default function Page() {
  return (
    <div className="overflow-hidden flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="grid md:w-4/5 lg:w-max rounded-xl border-4 p-6 md:p-8 shadow-lg bg-gradient-to-br from-white to-blue-50 lg:grid-cols-2 gap-6 mx-auto lg:mx-0">
        <div className="flex flex-col justify-center">
          <TypographyH2 className="text-3xl md:text-4xl lg:text-5xl text-center tracking-wide mb-4 lg:mb-0">
            Conscious Cart
          </TypographyH2>
          <TypographyP className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center lg:text-justify mx-auto md:max-w-md">
            Your AI-powered shopping companion. Scan products to instantly
            reveal their health, environmental, and social impacts. Make
            informed choices tailored to your personal values and wellbeing
            goals. Shop smarter, live better.
          </TypographyP>
        </div>
        <div className="flex justify-center items-center lg:p-6">
          <SignIn
            signUpUrl="/sign-up"
            appearance={{
              elements: {
                footerAction: "hidden",
                cardBox: "h-full",
                card: "h-full flex flex-col",
                headerTitle: "text-2xl font-bold mb-4",
                headerSubtitle: "mb-4 text-gray-600",
                socialButtonsBlockButton:
                  "mb-2 hover:bg-blue-50 transition-colors",
                dividerLine: "my-4 border-blue-200",
                formFieldInput:
                  "mb-2 border-blue-200 focus:border-blue-500 focus:ring-blue-500",
                formButtonPrimary:
                  "mt-4 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out",
                formFieldRow: "mb-2",
                main: "flex flex-col justify-between flex-grow",
                body: "flex flex-col flex-grow",
                form: "flex flex-col flex-grow justify-between",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
