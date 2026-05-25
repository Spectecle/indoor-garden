"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Leaf,
  RotateCcw,
  CheckCircle,
  Sun,
  Droplets,
  Shield,
} from "lucide-react";
import { quizQuestions, calculateResult } from "@/lib/data/quiz";
import { getPlantBySlug } from "@/lib/data/plants";
import { cn } from "@/lib/utils";

export default function QuizWidget() {
  const [step, setStep] = useState(0); // 0 = intro, 1-5 = questions, 6 = result
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentQuestion = quizQuestions[step - 1];
  const totalSteps = quizQuestions.length;
  const isIntro = step === 0;
  const isResult = step > totalSteps;

  const handleSelect = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (step < totalSteps) {
        setStep(step + 1);
      } else {
        setStep(totalSteps + 1);
      }
    }, 300);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
  };

  const result = isResult ? calculateResult(answers) : null;
  const resultPlant = result ? getPlantBySlug(result.slug) : null;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-forest pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=1920&q=60&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sage-light text-sm font-medium mb-5">
            <Leaf size={14} />
            30-second plant quiz
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-semibold">
            Find Your Perfect <em className="text-sage-light">Plant Match</em>
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-md mx-auto">
            5 questions. We'll match you with the perfect plant for your home
            and lifestyle.
          </p>

          {/* Progress bar */}
          {!isIntro && !isResult && (
            <div className="mt-8 max-w-xs mx-auto">
              <div className="flex justify-between text-white/60 text-xs mb-2">
                <span>
                  Question {step} of {totalSteps}
                </span>
                <span>{Math.round((step / totalSteps) * 100)}%</span>
              </div>
              <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-sage transition-all duration-500 rounded-full"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#FDFAF4" />
          </svg>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Intro */}
        {isIntro && (
          <div className="text-center">
            <div className="grid grid-cols-3 gap-4 mb-10 max-w-md mx-auto">
              {[
                {
                  icon: Sun,
                  label: "Your light",
                  color: "text-earth",
                  bg: "bg-earth-pale",
                },
                {
                  icon: Droplets,
                  label: "Your lifestyle",
                  color: "text-sage",
                  bg: "bg-sage-pale",
                },
                {
                  icon: Shield,
                  label: "Your space",
                  color: "text-forest",
                  bg: "bg-cream-dark",
                },
              ].map(({ icon: Icon, label, color, bg }) => (
                <div
                  key={label}
                  className={cn("rounded-2xl p-5 text-center", bg)}
                >
                  <Icon size={24} className={cn("mx-auto mb-2", color)} />
                  <p className="text-xs font-medium text-text-body">{label}</p>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl text-text-dark font-semibold mb-3">
              Ready to find your plant?
            </h2>
            <p className="text-text-body text-sm mb-8 max-w-sm mx-auto leading-relaxed">
              We'll ask about your space, lifestyle, and goals — then match you
              with a plant from our encyclopedia.
            </p>

            <button
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-forest text-white hover:bg-forest-dark rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 shadow-lg shadow-forest/20 group"
            >
              <Leaf size={18} />
              Start the Quiz
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        )}

        {/* Question */}
        {!isIntro && !isResult && currentQuestion && (
          <div>
            <button
              onClick={handleBack}
              className="flex items-center gap-1.5 text-text-muted hover:text-forest transition-colors text-sm mb-8 group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
              Back
            </button>

            <h2 className="font-display text-2xl sm:text-3xl text-text-dark font-semibold mb-8 leading-tight">
              {currentQuestion.question}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option) => {
                const isSelected =
                  answers[currentQuestion.id] === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() =>
                      handleSelect(currentQuestion.id, option.value)
                    }
                    className={cn(
                      "w-full flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all duration-200 group",
                      isSelected
                        ? "border-forest bg-sage-pale shadow-md"
                        : "border-cream-border bg-white hover:border-sage hover:shadow-sm hover:-translate-y-0.5"
                    )}
                  >
                    <span className="text-2xl flex-shrink-0">{option.icon}</span>
                    <span
                      className={cn(
                        "font-medium text-sm flex-1",
                        isSelected ? "text-forest" : "text-text-dark"
                      )}
                    >
                      {option.label}
                    </span>
                    {isSelected && (
                      <CheckCircle size={18} className="text-forest flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Result */}
        {isResult && result && resultPlant && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-pale text-forest rounded-full text-sm font-semibold mb-6">
              <CheckCircle size={16} />
              Your perfect match!
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-cream-border max-w-md mx-auto">
              <div className="relative h-64">
                <Image
                  src={resultPlant.image}
                  alt={resultPlant.name}
                  fill
                  className="object-cover"
                  sizes="448px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="inline-block px-2.5 py-1 bg-white/90 text-forest rounded-full text-xs font-semibold mb-2">
                    {resultPlant.careLevel} care · {resultPlant.category}
                  </span>
                  <h2 className="font-display text-3xl text-white font-semibold">
                    {resultPlant.name}
                  </h2>
                  <p className="text-white/80 text-sm italic mt-0.5">
                    {resultPlant.scientificName}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3 p-4 bg-sage-pale rounded-xl mb-5">
                  <Leaf size={16} className="text-forest flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-text-body leading-relaxed">
                    <strong className="text-forest">Why this plant:</strong>{" "}
                    {result.reason}
                  </p>
                </div>

                <p className="text-sm text-text-body leading-relaxed">
                  {resultPlant.tagline}
                </p>

                {/* Care quick facts */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { label: "Light", value: resultPlant.light, icon: Sun },
                    { label: "Water", value: resultPlant.water, icon: Droplets },
                    {
                      label: "Pet Safe",
                      value: resultPlant.petSafe ? "Yes ✓" : "No",
                      icon: Shield,
                    },
                  ].map(({ label, value, icon: Icon }) => (
                    <div
                      key={label}
                      className="text-center p-2.5 bg-cream rounded-xl"
                    >
                      <Icon size={14} className="text-forest mx-auto mb-1" />
                      <p className="text-xs text-text-muted">{label}</p>
                      <p className="text-xs font-semibold text-text-dark mt-0.5">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <Link
                    href={`/encyclopedia/${resultPlant.slug}`}
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-forest text-white hover:bg-forest-dark rounded-xl font-semibold text-sm transition-all duration-300 group"
                  >
                    View Full Care Guide
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/shop"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-cream text-text-body hover:bg-cream-dark rounded-xl font-medium text-sm transition-all duration-300"
                  >
                    Shop Recommended Products
                  </Link>
                </div>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 inline-flex items-center gap-2 text-text-muted hover:text-forest transition-colors text-sm"
            >
              <RotateCcw size={14} />
              Take the quiz again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
