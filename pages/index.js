import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className="min-h-screen px-0 px-2 flex flex-col justify-center items-center">
      <Layout title="Home">
        <p className="text-4xl">Welcome to Nextjs</p>
      </Layout>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
