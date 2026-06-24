"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { feature2, features, features1, steps } from "./data/features";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-size-[40px_40px]" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl" />

        <div className="container relative mx-auto max-w-6xl">
          <div className="text-center">
            <Badge className="mb-6 px-4 py-2 text-sm bg-liner-to-r from-blue-600 to-purple-600 text-white border-0 animate-pulse">
              ✨ Launch Special: Zero Commission for First 3 Months
            </Badge>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Book Top{" "}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Service Providers
              </span>{" "}
              Instantly
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground md:text-lg">
              Connect with trusted professionals for any service. From home
              repair to professional consulting - find, book, and pay all in one
              place.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="outline" className="h-11 px-8 text-sm">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              {/* <Button size="lg" variant="outline" className="h-11 px-8 text-sm">
                Watch Demo
              </Button> */}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No booking fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Verified providers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Secure payments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Choice Section */}
      <section className="px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              Join Our Community
            </h2>
            <p className="text-muted-foreground">
              Choose how you want to use our platform
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Client Card */}
            <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 hover:border-blue-200">
              <CardContent className="p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30">
                  <Users className="h-7 w-7 " />
                </div>
                <h3 className="mb-2 text-2xl font-bold">I&apos;m a Client</h3>
                <p className="mb-6 text-muted-foreground">
                  Find and book professional services with ease. Get quality
                  work done by verified experts.
                </p>
                <ul className="mb-8 space-y-2.5">
                  {feature2.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-900 group hover:scale-50">
                  Sign up as Client
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Provider Card */}
            <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 hover:border-purple-200">
              <div className="absolute -right-10 top-6 rotate-45 bg-linear-to-r from-amber-500 to-orange-500 px-10 py-1 text-xs font-semibold shadow-lg shadow-amber-500/30">
                POPULAR
              </div>
              <CardContent className="p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-r from-purple-500 to-purple-600 shadow-lg shadow-purple-500/30">
                  <Briefcase className="h-7 w-7 " />
                </div>
                <h3 className="mb-2 text-2xl font-bold">I&apos;m a Provider</h3>
                <p className="mb-6 text-muted-foreground">
                  Grow your business by offering your services to thousands of
                  potential clients.
                </p>
                <ul className="mb-8 space-y-2.5">
                  {features1.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <Sparkles className="h-4 w-4 text-purple-500 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={"/provider-request"}>
                  <Button
                    className="w-full border-2 hover:bg-purple-50 dark:hover:bg-purple-950/20 group"
                    variant="outline"
                  >
                    Become a Provider
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground">
              Everything you need for seamless service booking
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-blue-100 dark:hover:border-blue-900"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-xl bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-3 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 relative">
            {/* Connector Line - Desktop only */}
            <div className="absolute top-16 left-1/3 right-1/3 h-0.5 bg-linear-to-r from-blue-200 to-purple-200 hidden md:block" />

            {steps.map((item) => (
              <div key={item.step} className="text-center relative">
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-purple-600 text-2xl font-bold text-white shadow-lg shadow-blue-600/30">
                    {item.step}
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <Card className="relative overflow-hidden bg-linear-to-br from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-600/20">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-2xl translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 left-1/2 h-96 w-96 rounded-full bg-white/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />

            <CardContent className="relative z-10 p-10 md:p-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mb-8 text-base text-blue-100 max-w-2xl mx-auto">
                Join thousands of users already booking and providing services
                on our platform
              </p>

              <p className="mt-6 text-sm text-blue-100">
                No credit card required • Free forever for basic features
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
