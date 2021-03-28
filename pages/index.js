import Head from "next/head";
import MainApp from "../Components/MainApp";
export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Blog App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainApp />
      </div>
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
          body {
            margin: 0;
            padding: 0;
          }
          * {
            margin: 0;
          }
        `}
      </style>
    </>
  );
}
