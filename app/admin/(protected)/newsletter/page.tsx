export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import NewsletterClient from "@/components/admin/NewsletterClient";

export default async function NewsletterPage() {
  const subscribers = await prisma.newsletterSubscriber.findMany({
    orderBy: { createdAt: "desc" },
  });

  const data = subscribers.map((s) => ({
    ...s,
    createdAt: format(s.createdAt, "MMM d, yyyy"),
  }));

  const total = subscribers.length;
  const active = subscribers.filter((s) => s.active).length;
  const thisMonth = subscribers.filter((s) => {
    const d = new Date(s.createdAt);
    const now = new Date();
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;

  return <NewsletterClient subscribers={data} stats={{ total, active, thisMonth }} />;
}
