import { buttonVariants } from "./ui/button";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-1 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline text-center">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Kynetic Consulting
            </span>{" "}
            Conneting ICT
          </h1>{" "}
          <h2 className="inline text-center">
            <span className="inline text-center bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Professional
            </span>{" "}
          </h2>
          <h2 className="inline text-center">with unique opportunities</h2>
        </main>
        <br></br>
        <br></br>
        <div className="items-center space-y-4 md:space-y-0 md:space-x-4">
          <a
            rel="noreferrer noopener"
            href="#footer"
            className={`w-full md:w-2/5 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            I am hiring
          </a>

          <a
            rel="noreferrer noopener"
            href="#jobs"
            className={`w-full md:w-2/5 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            I am looking for opportunity
          </a>
        </div>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
