import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/promote-page";
import { SelectPair } from "~/common/components/select-pair";
import { Form } from "react-router";
import { Calendar } from "~/common/components/ui/calendar";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Promote Product" },
    { name: "description", content: "Promote Product" },
  ];
};

export default function PromotePage() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <div className="space-y-5">
      <Hero
        title="Promote Your Product"
        description="Boost your product visibility"
      />
      <Form className="flex flex-col mx-auto max-w-sm">
        <SelectPair
          label="Select a Product"
          description="Select a product you want to promote"
          name="product"
          required
          placeholder="Select a product"
          options={[
            { label: "AI Dark mode maker", value: "ai-dark-mode-maker" },
            { label: "AI Image generator", value: "ai-image-generator" },
            { label: "Text to image", value: "text-to-image" },
            { label: "Video transformer", value: "video-transformer" },
            { label: "AI Tools for Other", value: "ai-tools-other" },
          ]}
        />
      </Form>
      <div>
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={setDateRange}
          className="mx-auto"
        />
        {dateRange?.from && (
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Selected range: {dateRange.from.toLocaleDateString()}
              {dateRange.to && ` - ${dateRange.to.toLocaleDateString()}`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
