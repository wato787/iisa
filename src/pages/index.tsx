/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  // const router = useRouter();
  // const { data: session, status } = useSession();
  // if (status === "loading") return <div>loading...</div>;
  // // if (status === "unauthenticated") {
  // //   router.push("/auth/signin");
  // // }
  return (
    <>
      <button
        onClick={() =>
          signOut({ callbackUrl: "http://localhost:3000/auth/signin" })
        }
      >
        logout
      </button>
    </>
  );
};

export default Home;
