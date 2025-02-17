/* eslint-disable @next/next/no-img-element */
import type { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import Monkey from "../component/templates/Monkey";
import TimeCard from "../component/card/TimeCard";

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <div className="relative  flex h-screen  items-center justify-center bg-primary">
      <div className="absolute left-0 top-0 ">
        <Monkey />
      </div>
      <TimeCard />
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
