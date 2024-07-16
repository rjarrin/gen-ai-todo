import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserProfile() {
  const session = useSession();
  return (
    <div>
      <Image src={session?.data?.user?.image}
      width={24} 
      height={24} 
      alt="UserProfile Picture"> 
      </Image>
    </div>
  );
}