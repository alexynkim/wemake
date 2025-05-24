import { Link } from "react-router";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";

interface TeamCardProps {
  id: string;
  leaderUsername: string;
  leaderUserAvatarUrl: string;
  projectDescription: string;
  roles: string[];
}

export const TeamCard: React.FC<TeamCardProps> = ({
  id,
  leaderUsername,
  leaderUserAvatarUrl,
  projectDescription,
  roles,
}) => {
  return (
    <Link to={`teams/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center gap-2">
          <CardTitle className="text-base leading-loose">
            <Badge variant="secondary">
              <span>@{leaderUsername}</span>
              <Avatar className="size-4">
                <AvatarImage src={leaderUserAvatarUrl} />
                <AvatarFallback>{leaderUsername}</AvatarFallback>
              </Avatar>
            </Badge>
            <span> is looking for </span>
            {roles.map((role, index) => (
              <Badge key={index} className="text-base">
                <span>{role}</span>
              </Badge>
            ))}
            <span> to build </span>
            <span>{projectDescription}</span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link">Join team &rarr;</Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
