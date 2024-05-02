"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import OpenLogin from "../components/openLogin/OpenLogin";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { openLoginDialog } from "@/redux/generalSlice";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export function EmailPopover() {
  const isLoginModalOpen = useSelector(
    (state: RootState) => state.general.isLoginModalOpen
  );
  const dispatch: AppDispatch = useDispatch();

  const handleLoginModule = () => {
    dispatch(openLoginDialog(!isLoginModalOpen));
  };

  return (
    <Dialog open={isLoginModalOpen} onOpenChange={handleLoginModule}>
      <VisuallyHidden.Root>
        <DialogTrigger asChild className="hidden">
          <OpenLogin />
        </DialogTrigger>
      </VisuallyHidden.Root>

      <DialogContent className="sm:max-w-[425px] bg-white rounded-xl">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
