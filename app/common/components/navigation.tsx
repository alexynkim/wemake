import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "~/common/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "~/common/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Separator } from "~/common/components/ui/separator";
import { cn } from "~/lib/utils";
import { Button } from "~/common/components/ui/button";
import {
  ChartColumnIncreasing,
  UserRound,
  SettingsIcon,
  LogOutIcon,
  BellIcon,
  MessageSquareIcon,
} from "lucide-react";

const menus = [
  {
    name: "Products",
    to: "/products",
    items: [
      {
        name: "Leaderboards",
        description: "See the top performers in your community",
        to: "/products/leaderboards",
      },
      {
        name: "Categories",
        description: "See the top categories in your community",
        to: "/products/categories",
      },
      {
        name: "Search",
        description: "Search for products in your community",
        to: "/products/search",
      },
      {
        name: "Submit",
        description: "Submit a product to our community",
        to: "/products/submit",
      },
      {
        name: "Promote",
        description: "Promote a product to our community",
        to: "/products/promote",
      },
    ],
  },
  {
    name: "Jobs",
    to: "/jobs",
    items: [
      {
        name: "Remote Jobs",
        description: "Find the top remote jobs in your community",
        to: "/jobs?location=remote",
      },
      {
        name: "Full-Time Jobs",
        description: "Find the top full-time jobs in your community",
        to: "/jobs?type=full-time",
      },
      {
        name: "Freelance Jobs",
        description: "Find the top freelance jobs in your community",
        to: "/jobs?type=freelance",
      },
      {
        name: "Internships",
        description: "Find the top internships in your community",
        to: "/jobs?type=internship",
      },
      {
        name: "Submit",
        description: "Submit a job to our community",
        to: "/jobs/submit",
      },
    ],
  },
  {
    name: "Community",
    to: "/community",
    items: [
      {
        name: "All Posts",
        description: "See all posts in our community",
        to: "/community/posts",
      },
      {
        name: "Top Posts",
        description: "See the top posts in our community",
        to: "/community?sort=top",
      },
      {
        name: "New Posts",
        description: "See the new posts in our community",
        to: "/community?sort=new",
      },
      {
        name: "Create Post",
        description: "Create a post in our community",
        to: "/community/create",
      },
    ],
  },
  {
    name: "Ideas GPT",
    to: "/ideas",
  },
  {
    name: "Teams",
    to: "/teams",
    items: [
      {
        name: "All Teams",
        description: "See all teams in our community",
        to: "/teams",
      },
      {
        name: "Create Team",
        description: "Create a team in our community",
        to: "/teams/create",
      },
    ],
  },
];

export default function Navigation({
  isLoggedin,
  hasNotification,
  hasMessages,
}: {
  isLoggedin: boolean;
  hasNotification: boolean;
  hasMessages: boolean;
}) {
  return (
    <nav className="flex px-10 py-4 h-16 justify-between items-center backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
      <div className="flex">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold">
            WeMake
          </Link>
        </div>

        <Separator orientation="vertical" className="h-4 py-4 mx-4" />

        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => {
              return (
                <NavigationMenuItem key={menu.name}>
                  {menu.items ? (
                    <>
                      <Link to={menu.to}>
                        <NavigationMenuTrigger>
                          {menu.name}
                        </NavigationMenuTrigger>
                      </Link>
                      <NavigationMenuContent>
                        <ul className="grid grid-cols-2 font-light gap-2 p-2 w-[500px]">
                          {menu.items?.map((item) => {
                            return (
                              <NavigationMenuItem
                                key={item.name}
                                className={cn([
                                  "block p-2 rounded-md transition-colors",
                                  (item.to === "/products/promote" ||
                                    item.to === "/jobs/submit") &&
                                    "col-span-2",
                                ])}
                              >
                                <NavigationMenuLink
                                  asChild
                                  className={cn([
                                    "block p-3 hover:bg-accent focus:bg-accent",
                                    (item.to === "/products/promote" ||
                                      item.to === "/jobs/submit") &&
                                      "bg-primary/10 hover:bg-primary/30 focus:bg-primary/30",
                                  ])}
                                >
                                  <Link to={item.to}>
                                    <span className="text-sm">{item.name}</span>
                                    <p className="text-sm text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </NavigationMenuItem>
                            );
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <>
                      <Link
                        to={menu.to}
                        className={cn(navigationMenuTriggerStyle(), "px-4")}
                      >
                        {menu.name}
                      </Link>
                    </>
                  )}
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {isLoggedin ? (
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/alexynkim.png" />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel className="flex flex-col">
                <span className="text-sm font-medium">Alex Kim</span>
                <span className="text-xs text-muted-foreground">@username</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/auth/dashboard">
                    <ChartColumnIncreasing className="size-4 mr-2" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/auth/profile">
                    <UserRound className="size-4 mr-2" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/auth/settings">
                    <SettingsIcon className="size-4 mr-2" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/auth/logout">
                    <LogOutIcon className="size-4 mr-2" />
                    <span>Logout</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="icon" variant="ghost" asChild>
            <Link to="/my/notifications" className="relative">
              <BellIcon className="size-5" />
              {hasNotification && (
                <div className="absolute top-0.5 right-0.5 size-2 bg-red-500 rounded-full"></div>
              )}
            </Link>
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <Link to="/my/messages" className="relative">
              <MessageSquareIcon className="size-5" />
              {hasMessages && (
                <div className="absolute top-0.5 right-0.5 size-2 bg-red-500 rounded-full"></div>
              )}
            </Link>
          </Button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button asChild variant="secondary">
            <Link to="/auth/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/auth/join">Join</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
