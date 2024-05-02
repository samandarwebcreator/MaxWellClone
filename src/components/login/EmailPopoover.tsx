"use client";

import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import OpenLogin from "../components/openLogin/OpenLogin";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { openLoginDialog } from "@/redux/generalSlice";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { LoginCodeChecker } from "../components/loginCode/LoginCodeChecker";
import { isEnteredEmail } from "./slicer/loginSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function EmailPopover() {
  const { isLoginModalOpen } = useSelector((state: RootState) => state.general);
  const { enteredEmail } = useSelector((state: RootState) => state.login);
  const [securityCode, setSecurityCode] = useState<string>("000000");

  const dispatch: AppDispatch = useDispatch();

  const handleLoginModule = () => {
    dispatch(openLoginDialog(!isLoginModalOpen));
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.current) {
      try {
        const response = await emailjs.sendForm(
          "service_ud95y0q",
          "template_4yil693",
          form.current,
          "DoU8UGEuhIEVWJs0s"
        );
        console.log("Email sent successfully:", response.text);
        dispatch(isEnteredEmail(true));
        toast("Wow so easy!");
      } catch (error) {
        console.error("Email sending error:", error);
        toast("Error Occured");
      }
    }
  };

  return (
    <div className="rounded-2xl md:rounded-full">
      <Dialog open={isLoginModalOpen} onOpenChange={handleLoginModule}>
        <VisuallyHidden.Root>
          <DialogTrigger asChild className="hidden">
            <OpenLogin />
          </DialogTrigger>
        </VisuallyHidden.Root>

        <form action="" onSubmit={sendEmail} ref={form}>
          <DialogContent className="max-w-[300px] md:max-w-[425px] bg-white rounded-3xl w-full ">
            <DialogHeader>
              <DialogTitle>Sign in</DialogTitle>
              <DialogDescription>Sign in with your Email.</DialogDescription>
            </DialogHeader>
            <div className=" gap-4 py-4 w-full ">
              {!enteredEmail && (
                <Input
                  id="email"
                  className="col-span-3 rounded-xl w-full"
                  placeholder="example@gmail.com"
                  type="email"
                  name="user_email"
                />
              )}
              <VisuallyHidden.Root>
                <Input
                  id="password"
                  className="col-span-3 rounded-xl w-full"
                  type="text"
                  name="message"
                  defaultValue={securityCode}
                />
              </VisuallyHidden.Root>
              {enteredEmail && <LoginCodeChecker />}
            </div>
            <DialogFooter>
              {!enteredEmail && (
                <Button
                  type="submit"
                  className="rounded-3xl bg-brandColor py-2 w-full text-white hover:opacity-90 active:opacity-55"
                >
                  Send Code
                </Button>
              )}
              {enteredEmail && (
                <Button className="rounded-3xl bg-brandColor py-2 w-full text-white hover:opacity-85 active:bg-slate-300">
                  Confirm
                </Button>
              )}
              <ToastContainer />
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
