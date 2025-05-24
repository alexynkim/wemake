import { Link } from "react-router";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";

interface PostCardProps {
  id: string;
  title: string;
  author: string;
  authorAvatarUrl: string;
  category: string;
  postedAt: string;
}

export const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  author,
  authorAvatarUrl,
  category,
  postedAt,
}) => {
  return (
    <Link to={`community/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="size-14">
            <AvatarFallback>{author}</AvatarFallback>
            {authorAvatarUrl && <AvatarImage src={authorAvatarUrl} />}
          </Avatar>
          <div className="space-y-2 flex flex-col">
            <CardTitle>{title}</CardTitle>
            <div className="flex flex-row gap-1 text-sm text-muted-foreground">
              <span>{author} on</span>
              <span>{category}</span>
              <span>.</span>
              <span>{postedAt}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link" className="text-sm p-0">
            Reply &rarr;
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
