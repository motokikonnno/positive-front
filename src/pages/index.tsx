import { NextPage } from "next";
import { Home } from "../components/pages/Home"

const HomePage: NextPage = () => {
  return (
    <Home qaContent={qaContent} />
  )
}

export type Question = {
  question: string;
  answer: string;
};

export const qaContent: Question[] = [
  {
    question: "オキシトシンってなに？",
    answer: "予約ページを使うとよりお得にサービスを使うことができます。",
  },
  {
    question: "他の日記アプリと何が違うの？",
    answer: "予約ページを使うとよりお得にサービスを使うことができます。",
  },
  {
    question: "本当に幸せになれるの？",
    answer: "予約ページを使うとよりお得にサービスを使うことができます。",
  },
];

export default HomePage;