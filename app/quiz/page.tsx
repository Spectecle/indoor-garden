import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import QuizWidget from "@/components/quiz/QuizWidget";

export const metadata: Metadata = {
  title: "Plant Quiz — Find Your Perfect Plant",
  description:
    "Answer 5 quick questions about your light, lifestyle, and space to find the perfect indoor plant for your home.",
};

export default function QuizPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream">
        <QuizWidget />
      </main>
      <Footer />
    </>
  );
}
