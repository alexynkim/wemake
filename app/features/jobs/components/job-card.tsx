import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Avatar, AvatarImage } from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { DotIcon } from "lucide-react";

interface JobCardProps {
  id: string;
  title: string;
  companyName: string;
  companyLogoUrl: string;
  postedAt: string;
  type: string;
  location: string;
  salary: string;
  isRemote?: boolean;
}

export const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  companyName,
  companyLogoUrl,
  postedAt,
  type,
  location,
  salary,
  isRemote = false,
}) => {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors">
      <CardHeader>
        <div className="flex flex-row items-center gap-2 text-sm mb-6">
          <Avatar className="size-6">
            <AvatarImage src={companyLogoUrl} />
          </Avatar>
          <span>{companyName}</span>
          <DotIcon className="size-4" />
          <span>{postedAt}</span>
        </div>
        <Link to={`jobs/${id}`}>
          <CardTitle>{title}</CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="flex flex-row gap-2">
        <Badge variant="outline">{type}</Badge>
        {isRemote && <Badge variant="outline">Remote</Badge>}
      </CardContent>
      <CardFooter className="flex flex-row justify-between">
        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <span>{salary}</span>
          <span>{location}</span>
        </div>
        <Button variant="outline">
          <Link to={`jobs/${id}`}>Apply now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
