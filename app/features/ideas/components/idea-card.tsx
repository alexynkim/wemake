import { Link } from "react-router";
import { cn } from "~/common/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { DotIcon, EyeIcon, HeartIcon, LockIcon } from "lucide-react";

interface IdeaCardProps {
  id: string;
  title: string;
  viewCount: number;
  likeCount: number;
  postedAt: string;
  claimed?: boolean;
}

export const IdeaCard: React.FC<IdeaCardProps> = ({
  id,
  title,
  viewCount,
  likeCount,
  postedAt,
  claimed = false,
}) => {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors">
      <CardHeader>
        <Link to={claimed ? "" : `ideas/${id}`}>
          <CardTitle
            className={cn(
              "text-lg",
              claimed
                ? "bg-muted-foreground text-muted-foreground select-none"
                : ""
            )}
          >
            {title}
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row items-center gap-1 text-sm text-muted-foreground">
          <EyeIcon className="size-4" />
          <span>{viewCount}</span>
          <DotIcon className="size-4" />
          <span>{postedAt}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" className="flex flex-row items-center gap-2">
          <HeartIcon className="size-4" />
          <span>{likeCount}</span>
        </Button>
        {claimed ? (
          <Button variant="outline" disabled className="cursor-not-allowed">
            <LockIcon className="size-4" />
            Claimed
          </Button>
        ) : (
          <Button asChild>
            <Link to={`ideas/${id}/claim`}>Claim idea now &rarr;</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
