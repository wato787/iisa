import type { NextPage } from "next";

import { useSession } from "next-auth/react";
import Auth from "../component/auth";
import Image from "next/image";

const Home: NextPage = () => {
  const { status } = useSession();

  return (
    <div className="h-screen w-full bg-blue-300">
      <Image src="/logoo.png" width={250} height={250} alt="積み上げいいさ" />
      {/* <Auth /> */}
    </div>
  );
};

export default Home;
