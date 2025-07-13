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
    title: "First 12 Months",
    popular: 0,
    price: 10,
    description:
      "As part of our commitment, we charge a flat fee of only 10% for the first 12 months of the contract.",
    buttonText: "Get Started",
    benefitList: [
      "1 Team member",
      "2 GB Storage",
      "Upto 4 pages",
      "Community support",
      "lorem ipsum dolor",
    ],
  },
  {
    title: "After 12 Months",
    popular: 1,
    price: 8,
    description:
      "If your contract extends beyond the initial 12 months, our fee drops to just 8%. This means you’ll take home more pay—even if your employer doesn’t give you a raise. It’s our way of rewarding your continued work and helping you earn more over time, simply by keeping our fees fair and transparent.",
    buttonText: "Start Free Trial",
    benefitList: [
      "4 Team member",
      "4 GB Storage",
      "Upto 6 pages",
      "Priority support",
      "lorem ipsum dolor",
    ],
  },
  {
    title: "Self Find",
    popular: 0,
    price: 5,
    description:
      "We believe in rewarding your initiative and experience. If you find a contract opportunity through your own network and choose to work with us, we’ll only charge a reduced fee of 5%. This allows you to leverage the connections you’ve built over your career while still benefiting from our support and services—at a significantly lower cost.",
    buttonText: "Contact US",
    benefitList: [
      "10 Team member",
      "8 GB Storage",
      "Upto 10 pages",
      "Priority support",
      "lorem ipsum dolor",
    ],
  },
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
        At Kynetic Consulting, we genuinely understand the frustration that
        comes with facing unfair, opaque, and excessively inflated fees,
        especially when they seem to serve no purpose other than to take
        advantage of clients and contractors alike. These types of opportunistic
        pricing practices have unfortunately become all too common in the
        industry, often leading to mistrust and dissatisfaction on both ends of
        the service. <br></br>
        <br></br>That’s why we’ve built our business on a foundation of
        fairness, transparency, and integrity. We are committed to keeping our
        fees consistently low, clearly communicated, and entirely free from
        hidden charges. Our approach ensures that contractors receive a higher
        portion of their earnings, empowering them to do their best work, while
        clients benefit from meaningful cost savings without compromising on
        quality or service. <br></br>
        <br></br>By prioritizing honest pricing, we aim to create long-term,
        trust-based relationships with everyone we work with. It's more than
        just a policy, it's our mission.
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
