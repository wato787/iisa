import type { NextPage } from "next";

import { signOut, useSession } from "next-auth/react";
import Auth from "./Auth";

const Home: NextPage = () => {
  return (
    <>
      <Auth />
    </>
  );
};

export default Home;
