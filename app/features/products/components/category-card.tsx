import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/common/components/ui/card";

interface CategoryCardProps {
  name: string;
  description: string;
}

export function CategoryCard({ name, description }: CategoryCardProps) {
  return (
    <Link to={`/products/categories/${name.toLowerCase()}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader>
          <CardTitle className="flex flex-row items-center gap-2">
            {name} <ChevronRight className="size-6" />
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
