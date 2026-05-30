import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface NewsItem {
    id: bigint;
    title: string;
    content: string;
    date: bigint;
    imageUrl: string;
    excerpt: string;
    category: string;
}
export type Result = {
    __kind__: "ok";
    ok: bigint;
} | {
    __kind__: "err";
    err: string;
};
export interface backendInterface {
    addContactSubmission(name: string, email: string, subject: string, message: string, inquiryType: string): Promise<Result>;
    getNews(): Promise<Array<NewsItem>>;
}
