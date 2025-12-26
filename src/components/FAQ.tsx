import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  variant?: "light" | "dark";
}

export default function FAQ({ items, variant = "light" }: FAQProps) {
  const isDark = variant === "dark";

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className={`border-b ${isDark ? "border-secondary-foreground/20" : "border-border"}`}
          >
            <AccordionTrigger
              className={`text-left font-display font-medium py-5 text-base sm:text-lg hover:no-underline ${
                isDark
                  ? "text-secondary-foreground hover:text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent
              className={`text-sm sm:text-base pb-5 ${
                isDark ? "text-secondary-foreground/80" : "text-muted-foreground"
              }`}
            >
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
