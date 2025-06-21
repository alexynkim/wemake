import { useState } from "react";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function SelectPair({
  label,
  description,
  name,
  required,
  options,
  placeholder,
}: {
  label: string;
  description: string;
  name: string;
  required: boolean;
  placeholder: string;
  options: {
    label: string;
    value: string;
  }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="space-y-2">
        <Label
          className="flex flex-col items-start gap-1"
          onClick={() => setOpen(true)}
        >
          {label}
          <small className="text-muted-foreground">{description}</small>
        </Label>
        <Select
          name={name}
          required={required}
          open={open}
          onOpenChange={setOpen}
        >
          <SelectTrigger className="w-full data-[state=open]:border-[var(--primary)] data-[state=open]:ring-[var(--primary)]">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className="data-[state=open]:border-[var(--primary)] data-[state=open]:ring-[var(--primary)]">
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
