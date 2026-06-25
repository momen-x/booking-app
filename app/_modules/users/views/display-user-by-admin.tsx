"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Calendar, Clock, Pen } from "lucide-react";
import Link from "next/link";
import transformingTheDateToATextString from "@/utils/transformingTheDateToATextString";
import DeleteUserBtn from "./delete-user-btn";
import { Button } from "@/components/ui/button";
import BackBtn from "@/app/_components/back_btn";
import { useGetUserById } from "../hooks/useGetUserById";

export default function DisplayUserData({ id }: { id: string }) {
  const { data: user, isLoading } = useGetUserById(id);
  if (isLoading) return <div>Loading...</div>;
  if (!user) return <div className=""> user not found</div>;

  const getInitials = () => {
    return (
      user.username ??
      ""
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <BackBtn />
      <div className="flex gap-4 mt-4 mb-4">
        <Link
          href={`/admin-dashboard/users/${user.id}/update?username=${user.username}&email=${user.email}`}
        >
          <Button className="flex gap-4 mb-4 justify-center items-center">
            update <Pen className="h-4 w-4 text-white" />
          </Button>
        </Link>
        <div>
          <DeleteUserBtn userId={user.id} />{" "}
        </div>
      </div>
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.userImage || undefined} />
              <AvatarFallback className="text-2xl">
                {getInitials()}
              </AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-2xl">{user.username}</CardTitle>
          <div className="flex justify-center mt-2">
            <Badge variant="secondary">{user.role}</Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{user.email}</span>
          </div>

          <hr />

          <div className="space-y-2">
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>
                Joined: {transformingTheDateToATextString(user.createdAt)}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>
                Last updated: {transformingTheDateToATextString(user.updatedAt)}
              </span>
            </div>
          </div>

          <hr />

          <div className="text-sm text-muted-foreground">
            <p>User ID: {user.id}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
