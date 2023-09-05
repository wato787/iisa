/* eslint-disable @next/next/no-img-element */
import type { GetServerSideProps, NextPage } from "next";
import { useSession, signOut, getSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  console.log(session);
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
