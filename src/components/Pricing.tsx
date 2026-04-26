// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import {
  Card,
  // CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Flat Fee",
    popular: 0,
    price: 5,
    description:
      "As part of our commitment, we charge a flat fee of only 5% for the life of the contract.",
    buttonText: "Get Started",
    benefitList: [
      "1 Team member",
      "2 GB Storage",
      "Upto 4 pages",
      "Community support",
      "lorem ipsum dolor",
    ],
  },
  // {
  //   title: "After 12 Months",
  //   popular: 1,
  //   price: 8,
  //   description:
  //     "If your contract extends beyond the initial 12 months, our fee drops to just 8%. This means you’ll take home more pay—even if your employer doesn’t give you a raise. It’s our way of rewarding your continued work and helping you earn more over time, simply by keeping our fees fair and transparent.",
  //   buttonText: "Start Free Trial",
  //   benefitList: [
  //     "4 Team member",
  //     "4 GB Storage",
  //     "Upto 6 pages",
  //     "Priority support",
  //     "lorem ipsum dolor",
  //   ],
  // },
  // {
  //   title: "Self Find",
  //   popular: 0,
  //   price: 5,
  //   description:
  //     "We believe in rewarding your initiative and experience. If you find a contract opportunity through your own network and choose to work with us, we’ll only charge a reduced fee of 5%. This allows you to leverage the connections you’ve built over your career while still benefiting from our support and services—at a significantly lower cost.",
  //   buttonText: "Contact US",
  //   benefitList: [
  //     "10 Team member",
  //     "8 GB Storage",
  //     "Upto 10 pages",
  //     "Priority support",
  //     "lorem ipsum dolor",
  //   ],
  // },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Pricing
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        At ByteSpeed Solutions, we understand the frustration with unfair and opaque fees that exploit clients and contractors. That's why we prioritize fairness, transparency, and integrity with consistently low, clear fees and no hidden charges. This empowers contractors with higher earnings and provides clients with cost savings without sacrificing quality, fostering long-term, trust-based relationships.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card key={pricing.title}>
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">{pricing.price}%</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
