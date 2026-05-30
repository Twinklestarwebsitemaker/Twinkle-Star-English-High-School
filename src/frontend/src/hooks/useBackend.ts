import { createActor } from "@/backend";
import type { NewsItem } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type RawNewsItem = {
  id: bigint;
  title: string;
  date: bigint;
  category: string;
  content: string;
  imageUrl: string;
  excerpt: string;
};

type ActorWithMethods = {
  getNews: () => Promise<RawNewsItem[]>;
  addContactSubmission: (
    name: string,
    email: string,
    subject: string,
    message: string,
    inquiryType: string,
  ) => Promise<{ ok: bigint } | { err: string }>;
};

export function useNews() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<NewsItem[]>({
    queryKey: ["news"],
    queryFn: async () => {
      if (!actor) return [];
      const raw = await (actor as unknown as ActorWithMethods).getNews();
      return raw.map((item) => ({
        id: Number(item.id),
        title: item.title,
        date: Number(item.date),
        category: item.category,
        content: item.content,
        imageUrl: item.imageUrl,
        excerpt: item.excerpt,
      }));
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddContact() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      subject,
      message,
      inquiryType,
    }: {
      name: string;
      email: string;
      subject: string;
      message: string;
      inquiryType: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      const result = await (
        actor as unknown as ActorWithMethods
      ).addContactSubmission(name, email, subject, message, inquiryType);
      if ("err" in result) throw new Error(result.err);
      return Number((result as { ok: bigint }).ok);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
}
