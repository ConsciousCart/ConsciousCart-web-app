import Image from "next/image";
import { TypographyP } from "@/components/ui/Typography/TypographyP";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { TypographyH2 } from "@/components/ui/Typography/TypographyH2";

const ProfileScreen: React.FC = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="lg:h-full bg-[rgb(30,30,30)] p-4 text-white flex flex-col items-center justify-center my-auto">
      <TypographyH2 className="border-none text-xl font-bold mb-2">
        Profile
      </TypographyH2>
      <Image
        src={user.imageUrl}
        alt="User Profile"
        className="rounded-full mb-4"
        width={96}
        height={96}
      />
      <div>
        <TypographyP>
          Name: <span>{user.fullName}</span>
        </TypographyP>
        <TypographyP>
          Email: <span>{user.emailAddresses[0].emailAddress}</span>
        </TypographyP>

        {/* MANAGE ACCOUNT AND SIGN OUT */}
        <div className="mt-6 flex space-x-3 mr-auto">
          <TypographyP className="">Account Settings</TypographyP>
          <div className="text-center">
            <UserButton
  signInUrl="/sign-in"
  
  appearance={{
    elements: {
      userButtonPopoverCard: "text-black border border-gray-700 centered-popup",
      // ... other appearance properties
      userButtonPopoverFooter: "hidden"
    }
  }}
/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
