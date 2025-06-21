import type { Route } from "./+types/submit-page";
import { Hero } from "~/common/components/hero";
import { InputPair } from "~/common/components/input-pair";
import { Form } from "react-router";
import { SelectPair } from "~/common/components/select-pair";
import { Label } from "~/common/components/ui/label";
import { Input } from "~/common/components/ui/input";
import { useState } from "react";
import { FileImage } from "lucide-react";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit | wemake" },
    { name: "description", content: "Submit a product to wemake" },
  ];
};

export default function SubmitPage() {
  const [icon, setIcon] = useState<string | null>(null);

  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIcon(URL.createObjectURL(file));
    }
  };

  return (
    <div className="space-y-20">
      <Hero
        title="Submit Your Product"
        description="Share your product with the world"
      />
      <Form className="grid grid-cols-2 gap-5 mx-auto max-w-screen-lg">
        <div className="space-y-5">
          <InputPair
            label="Name"
            description="This is the name of your product"
            id="name"
            name="name"
            placeholder="Name of your product"
            required
            type="text"
          />
          <InputPair
            label="Tagline"
            description="60 characters or less"
            id="tagline"
            name="tagline"
            placeholder="A concise description of your product"
            required
            type="text"
          />
          <InputPair
            label="URL"
            description="The URL of your product"
            id="url"
            name="url"
            placeholder="https://example.com"
            required
            type="url"
          />
          <InputPair
            label="Description"
            description="Tell us more about your product"
            textArea={true}
            id="description"
            name="description"
            placeholder="Tell us more about your product"
            required
          />
          <SelectPair
            label="Category"
            description="Select a category for your product"
            name="category"
            required
            options={[
              { label: "AI Tools", value: "ai-tools" },
              { label: "Productivity", value: "productivity" },
              { label: "Design", value: "design" },
              { label: "Marketing", value: "marketing" },
              { label: "Finance", value: "finance" },
              { label: "Other", value: "other" },
            ]}
            placeholder="Select a category"
          />
          <div className="flex justify-end">
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </div>
        <div className="space-y-5">
          <div className="size-50 rounded-md border bg-background shadow-md">
            {icon ? (
              <img src={icon} alt="icon" className="size-full object-cover" />
            ) : (
              <div className="flex items-center justify-center size-full">
                <FileImage className="size-1/6 text-gray-200" />
              </div>
            )}
          </div>
          <div className="space-y-2">
            <Label className="flex flex-col items-start gap-1">
              Icon
              <small className="text-muted-foreground">
                This is the icon of your product
              </small>
            </Label>
            <Input
              type="file"
              className="w-2/3 text-muted-foreground italic"
              required
              placeholder="Choose file for icon"
              onChange={handleIconChange}
            />
            <div className="flex flex-col text-sm text-muted-foreground">
              <span>Recommended size: 128x128px</span>
              <span>Accepted formats: PNG, JPG, JPEG</span>
              <span>Max file size: 10MB</span>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
