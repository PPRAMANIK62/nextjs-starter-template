"use client";

import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Loader2 } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = ({ minimal = true }: { minimal?: boolean }) => {
  const { data, status } = useSession();

  if (status === "loading") {
    return (
      <Button color="primary" variant="ghost" disabled>
        <Loader2 className="animate-spin font-semibold" />
      </Button>
    );
  }

  if (status === "authenticated") {
    if (minimal) {
      return (
        <Button
          className="font-semibold"
          color="primary"
          variant="ghost"
          onClick={() => signOut()}
        >
          Sign Out
        </Button>
      );
    }

    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            showFallback={!data.user?.image}
            src={data.user?.image || ""}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{data.user?.email}</p>
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  return (
    <Button
      className="font-semibold"
      color="primary"
      variant="ghost"
      onClick={() => signIn("google")}
    >
      Sign In
    </Button>
  );
};

export default AuthButton;
