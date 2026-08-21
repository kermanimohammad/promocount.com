"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-teal-200 bg-teal-50 px-6 py-10 text-center">
        <p className="font-heading text-lg font-semibold text-teal-950">Message saved locally</p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-teal-900/80">
          Thanks for writing. This demo form does not send email yet. When a mail provider is
          connected, messages will be delivered to the Promo Count inbox.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6 h-10"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-foreground/8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" className="h-10" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="h-10"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" required className="h-10" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required rows={6} className="min-h-32" />
      </div>
      <Button type="submit" className="h-11 w-full bg-teal-800 hover:bg-teal-800/90 sm:w-auto sm:px-8">
        Send Message
      </Button>
    </form>
  );
}
