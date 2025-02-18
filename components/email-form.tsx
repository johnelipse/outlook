"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Send,
  Paperclip,
  MoreHorizontal,
  Trash2,
  Maximize2,
  ChevronDown,
  Loader,
} from "lucide-react";
import VEditor from "./rich-text";
import { Session } from "next-auth";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/email";
import { useRouter } from "next/navigation";

export type EmailProps = {
  senderEmail: string;
  recieverEmail: string;
  subject: string;
  message: string;
  userId: string;
};

export default function EmailForm({ userData }: { userData: Session | null }) {
  const [content, setContent] = useState("<p>Initial content</p>");
  const [err, setErr] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailProps>({
    defaultValues: {
      senderEmail: userData?.user.email as string,
    },
  });

  async function onSubmit(data: EmailProps) {
    data.message = content;
    try {
      setLoading(true);
      const res = await sendEmail(data);
      if (res.status === 201) {
        toast.success("Created successfully.");
        setLoading(false);
        reset();
        setContent("");
        router.push("/sent-emails");
        router.refresh();
      } else if (res.status === 409) {
        setErr("The email entered is not signed on outlook.");
        setLoading(false);
        toast.error("The email entered is not signed on outlook.");
      }
      // const res = await fetch("/api/v1/emails", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "appication/json",
      //   },
      //   body: JSON.stringify(data),
      // });
      // if (res.status === 201) {
      //   toast.success("Created successfully.");
      //   reset();
      // } else if (res.status === 409) {
      //   setErr("The email entered is not signed on outlook.");
      //   toast.error("The email entered is not signed on outlook.");
      // }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-lg rounded-lg max-w-4xl mx-auto p-6"
    >
      <div className="flex items-center gap-3 border-b border-gray-200 pb-3 justify-between mb-4">
        <div className="flex items-center  w-full gap-2">
          <div className="flex items-center gap-[0.1rem]">
            {loading ? (
              <Button
                type="button"
                disabled
                className="bg-[#2383d6] rounded-l-md rounded-r-none hover:bg-[#0a5494] text-white flex items-center gap-1"
              >
                <Loader className="h-4 w-4 animate-spin" />
                Sending..
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-[#2383d6] rounded-l-md rounded-r-none hover:bg-[#0a5494] text-white flex items-center gap-1"
              >
                <Send className="h-4 w-4" />
                Send
              </Button>
            )}
            <Button
              type="button"
              className="bg-[#2383d6] rounded-r-md rounded-l-none px-1 hover:bg-[#0a5494] text-white flex items-center gap-1"
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center w-full gap-1 text-sm text-gray-700">
            <span>From:</span>
            <div>
              <Input
                id="from"
                type="email"
                className="flex-grow w-full border-none shadow-none focus-visible:ring-0"
                placeholder="Enter recipient's email"
                {...register("senderEmail", { required: true })}
              />
              {errors["senderEmail"] && (
                <span className="text-red-600 text-xs">
                  This field is required
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <button className="hover:bg-gray-100 p-2 rounded">
            <Trash2 className="h-5 w-5" />
          </button>
          <button className="hover:bg-gray-100 p-2 rounded">
            <Maximize2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center border-b border-gray-200 py-2">
          <label htmlFor="to" className="w-20 text-gray-600">
            To:
          </label>
          <div>
            <Input
              id="to"
              type="email"
              className="flex-grow border-none shadow-none focus-visible:ring-0"
              placeholder="Enter recipient's email"
              {...register("recieverEmail", { required: true })}
            />
            {errors["recieverEmail"] && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
            {err && <span className="text-red-600 text-xs">{err}</span>}
          </div>
        </div>

        <div className="flex items-center border-b border-gray-200 py-2">
          <label htmlFor="subject" className="w-20 text-gray-600">
            Subject:
          </label>
          <div>
            <Input
              id="subject"
              type="text"
              className="flex-grow border-none shadow-none focus-visible:ring-0"
              placeholder="Enter subject"
              {...register("subject", { required: true })}
            />
            {errors["subject"] && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className="flex space-x-2 py-2">
          <VEditor
            variant="compact"
            content={content}
            setContent={setContent}
            isEditable={true}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        {loading ? (
          <Button
            type="button"
            disabled
            className="bg-[#2383d6] rounded-l-md rounded-r-md hover:bg-[#0a5494] text-white flex items-center gap-1"
          >
            <Loader className="h-4 w-4 animate-spin" />
            Sending..
          </Button>
        ) : (
          <Button
            type="submit"
            className="bg-[#2383d6] rounded-l-md rounded-r-md hover:bg-[#0a5494] text-white flex items-center gap-1"
          >
            <Send className="h-4 w-4" />
            Send
          </Button>
        )}
        <div>
          <Button variant="ghost" size="icon" className="mr-2">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </form>
  );
}
