import type { NextPage } from "next";

import { useSession } from "next-auth/react";
import Auth from "./Auth";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <Auth />
    </>
  );
};

export default Home;
