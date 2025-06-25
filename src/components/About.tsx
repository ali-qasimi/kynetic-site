import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Kyentic Consulting
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                At Kynetic Consulting, we are specialists in Salesforce and
                DevOps contract recruitment across Australia. Our focus is
                sharp, our approach is transparent, and our team brings years of
                hands-on experience in the very fields we recruit for, giving us
                a real edge when it comes to matching the right talent with the
                right opportunities. <br></br>
                <br></br> We understand the fast-moving nature of cloud
                platforms and modern development environments. Whether you're
                looking for a certified Salesforce consultant, a DevOps engineer
                with AWS expertise, or a CI/CD specialist to streamline your
                pipeline, we know what great looks like, because we've worked in
                these spaces ourselves.
                <br></br>
                <br></br>Our model is built on honesty, speed, and low,
                transparent fees. No inflated markups. No unnecessary
                complexity. Just high-quality contract talent delivered
                efficiently and affordably. Based in Australia, we support
                organisations nationwide with flexible, scalable hiring
                solutions — and help skilled contractors find meaningful,
                well-matched roles that let them do their best work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
