import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

const Faq1 = ({
  heading = "Frequently asked questions",
 items = [
  {
    id: "faq-1",
    question: "What is Zent?",
    answer:
      "Zent is Sri Lanka’s first student discount platform. It connects verified university students with exclusive discounts at local shops and brands.",
  },
  {
    id: "faq-2",
    question: "How do students get discounts?",
    answer:
      "Students sign up with their university ID to verify eligibility. At checkout, they simply scan their Zent QR code and the discount is applied instantly.",
  },
  {
    id: "faq-3",
    question: "Does Zent cost anything for students?",
    answer:
      "No. Zent is completely free for students. Our mission is to make student life more affordable.",
  },
  {
    id: "faq-4",
    question: "Why should shops join Zent?",
    answer:
      "By joining Zent, shops gain direct access to Sri Lanka’s 300,000+ university students. It’s a cost-effective way to drive footfall, build loyalty, and increase repeat sales.",
  },
  {
    id: "faq-5",
    question: "How much does it cost for businesses?",
    answer:
      "Businesses can choose a subscription plan or a pay-per-redemption model. This ensures you only pay for real, trackable results.",
  },
  {
    id: "faq-6",
    question: "What types of discounts can be offered?",
    answer:
      "Shops can offer flexible deals such as percentage discounts (e.g., 10% off), buy-one-get-one, or limited-time offers. Zent helps you customize and promote these offers to students.",
  },
  {
    id: "faq-7",
    question: "Which students are eligible?",
    answer:
      "All undergraduates and postgraduates at recognized universities in Sri Lanka are eligible once they verify with their student ID.",
  },
],

}: Faq1Props) => {
  return (
    <section className="py-0">
      <div className="container max-w-3xl mx-auto text-center">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl text-center">
          {heading}
        </h1>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold hover:no-underline text-center">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-center">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { Faq1 };
