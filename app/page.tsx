"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Globe2, Ship, House as LightHouse, Map, PlayCircle, Apple } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#0C0C0C] p-[0.2px] border-r-[0.2px] border-b-[0.2px] rounded-br-[41px] overflow-hidden">
               
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              Track any<br />Vessel, Anywhere!
            </h1>
            <p className="text-xl mb-8 text-gray-300">Stay ahead of the waves!</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full">
              Try for free
            </Button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-[823.38px] h-[276px] md:w-[70vw] md:h-auto max-w-full"
          style={{ aspectRatio: "823.38 / 276" }}>
          <Image
            src="/Earth.png"
            alt="Earth from space"
            fill
            className="object-cover rounded-tl-3xl"
            priority
          />
        </div>
      </section>


      {/* Features Section */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Every Vessel, Every Move</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Detailed vessel info"
            description="Track real-time ship data — names, types, routes, destinations, and full history at your fingertips."
            icon={<Ship className="w-6 h-6" />}
          />
          <FeatureCard
            title="Ports at a glance"
            description="Comprehensive port information with real-time updates on vessel movements and port activities."
            icon={<Globe2 className="w-6 h-6" />}
          />
          <FeatureCard
            title="Light house insights"
            description="Access detailed lighthouse data and maritime navigation information for safer voyages."
            icon={<LightHouse className="w-6 h-6" />}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Smart plans for every voyage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Free"
              price="$0"
              features={["Up to 2 vessel tracking", "Port data", "Lighthouse data", "Area statistics", "Route planner"]}
            />
            <PricingCard
              title="Weekly"
              price="$399"
              features={["Up to 2 vessel tracking", "Port data", "Lighthouse data", "Area statistics", "Route planner"]}
              highlighted
            />
            <PricingCard
              title="Monthly"
              price="$3999"
              features={["Up to 2 vessel tracking", "Port data", "Lighthouse data", "Area statistics", "Route planner"]}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Frequently asked questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <FaqItem
              question="How cool is this app"
              answer="Our app provides cutting-edge vessel tracking technology with an intuitive interface."
            />
            <FaqItem
              question="Its design is incredibly user-friendly"
              answer="We've focused on creating a seamless and intuitive user experience."
            />
            <FaqItem
              question="The features are intuitive and easy to navigate"
              answer="Every feature is designed with user experience in mind, making navigation effortless."
            />
          </Accordion>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 container mx-auto px-4">
        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">

          <div className="flex flex-col items-center md:items-start gap-4">
            <h1 className="text-white text-2xl font-bold text-center md:text-left">
              Get the App <br /> Now
            </h1>

            <div className="flex items-center gap-4">
              <div className="w-[50px] h-[40px] md:w-[60px] md:h-[48px] lg:w-[70px] lg:h-[56px] flex items-center justify-center bg-white rounded-3xl shadow-md">
                <img src="/android.png" alt="Play Store" className="w-6 h-6" />
              </div>
              <div className="w-[50px] h-[40px] md:w-[60px] md:h-[48px] lg:w-[70px] lg:h-[56px] flex items-center justify-center bg-white rounded-3xl shadow-md">
                <img src="/apple.png" alt="App Store" className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <Image
              src="/ship.png"
              alt="Ship"
              width={200}
              height={100}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Ship className="w-6 h-6" />
              <span className="font-bold">Marine Radar</span>
            </div>
            <nav className="flex gap-6">
              <a href="#" className="hover:text-blue-500">Home</a>
              <a href="#" className="hover:text-blue-500">Experience</a>
              <a href="#" className="hover:text-blue-500">News</a>
              <a href="#" className="hover:text-blue-500">About us</a>
              <a href="#" className="hover:text-blue-500">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <Card className="p-6 bg-gray-900 border-gray-800">
      <div className="mb-4 text-blue-500">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  );
}

function PricingCard({ title, price, features, highlighted = false }: {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <Card className={`p-6 ${highlighted ? 'bg-blue-600' : 'bg-gray-800'} border-0`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-6">{price} / Month</div>
      <ul className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Map className="w-4 h-4 text-blue-400" />
            {feature}
          </li>
        ))}
      </ul>
      <Button className={`w-full ${highlighted ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}>
        Get started
      </Button>
    </Card>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <AccordionItem value={question} className="border border-gray-800 rounded-lg">
      <AccordionTrigger className="px-4">{question}</AccordionTrigger>
      <AccordionContent className="px-4 text-gray-400">{answer}</AccordionContent>
    </AccordionItem>
  );
}