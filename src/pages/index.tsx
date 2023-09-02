/* eslint-disable @next/next/no-img-element */
import type { GetServerSideProps, NextPage } from "next";
import { getSession, signOut, useSession } from "next-auth/react";
import Header from "../component/templates/Header";
import TimeCard from "../component/card/TimeCard";

const Home: NextPage = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="h-screen  bg-primary flex flex-col items-center justify-center">
      <Header />
      <TimeCard />
      <button
        onClick={() =>
          signOut({ callbackUrl: "http://localhost:3000/auth/signin" })
        }
      >
        logout
      </button>
    </div>
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
