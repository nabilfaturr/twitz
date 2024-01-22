import { Link } from "react-router-dom";

const Root = () => {
  return (
    <main className="w-full h-screen flex items-center">
      <section className="mx-auto space-x-10 space-y-5 flex flex-col justify-center items-center">
        <h1 className="font-bold text-7xl">
          Share your moment with{" "}
          <span
            style={{
              background: `linear-gradient(294deg, #0F2027 0%, #203A43 22%, rgba(184,0,255,1) 50%, rgba(255,0,172,1) 77%, rgba(248,0,255,1) 99%)`,
            }}
            className="text-white px-4"
          >
            Twit
          </span>
        </h1>
        <Link to={"/sign-in"}>
          <h1 className="text-4xl text-center hover:border-b inline border-black">Click to get started</h1>
        </Link>
      </section>
    </main>
  );
};

export default Root;
