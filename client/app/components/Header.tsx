import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { TypographyH2 } from "@/components/ui/Typography/TypographyH2";
const Header = ({className}:{className?:string}) => {
  return (
    <div className={`flex justify-between fixed w-full top-0 flex-row-reverse p-5 ${className}`}>
      {/* ACCOUNT SETTINGS */}
      <>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          {/* <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "w-10 h-10",
                userButtonOuterBox: "flex items-center justify-center",
              },
            }}
          /> */}
        </SignedIn>
      </>

      <TypographyH2 className="p-4 w-full tracking-wide border-none py-3 m-0 text-center">
        Conscious Cart
      </TypographyH2>
    </div>
  );
};

export default Header;
