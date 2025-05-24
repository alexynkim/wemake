import { Link } from "react-router";
import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { EyeIcon, MessageCircleIcon, ChevronUpIcon } from "lucide-react";
import { Button } from "~/common/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  commentCount: number;
  viewCount: number;
  upvoteCount: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  commentCount,
  viewCount,
  upvoteCount,
}) => {
  return (
    <Link to={`/products/${id}`}>
      <Card className="w-full flex flex-row justify-between bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="w-full">
          <CardTitle>{name}</CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MessageCircleIcon className="size-4" />
              <span>{commentCount}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <EyeIcon className="size-4" />
              <span>{viewCount}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter>
          <Button variant="outline" className="flex flex-col gap-2 size-16">
            <ChevronUpIcon className="size-4 shrink-0" />
            <span>{upvoteCount}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
