// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/*interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe",
    comment: "This landing page is awesome!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe1",
    comment:
      "Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe2",
    comment:
      "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe3",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe4",
    comment:
      "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe5",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];*/

export const ContactUs = () => {
  return (
    <section id="contact-us" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Contacts
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Email us</CardTitle>
          </CardHeader>

          <CardContent>
            <a href='mailto:contact@kyneticconsulting.com.au' target={"_blank"} > contact@kyneticconsulting.com.au </a>
          </CardContent>
          
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Call us</CardTitle>
          </CardHeader>

          <CardContent>
            Ali: <a href='tel:0401029211' target={"_blank"}> 0401029211 </a> <br />
            Cena: <a href='tel:0470324601' target={"_blank"}> 0470324601 </a>
          </CardContent>
          
          
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              Chat to us on <a
                href="https://www.linkedin.com/"
                className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"
                target="_blank"
              >
                LinkedIn{" "}
              </a>{" "}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};
