"use client";
import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex bg-[#0C0C0C] border-r-[0.2px] border-b-[0.2px] rounded-br-[41px] overflow-hidden">
               
        <div className="container mx-auto px-4 my-48 relative z-10">
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
        <h2 className="text-3xl font-bold mb-4 text-left">Every Vessel, Every Move</h2>
        <p className="text-[#AAAAAA] mb-10 text-sm font-medium rounded-md inline-block w-full max-w-xs md:max-w-md min-h-[29px]">
          Tap into live ship data — names, types, routes, destinations, and full history at your fingertips.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="w-full max-w-md border-[0.2px] rounded-[32px] shadow-md flex flex-col overflow-hidden">
            <div className="w-full h-auto aspect-[307/140] bg-gray-200 rounded-t-[12px]">
              <img src="/feature.png" alt="Vessel" className="w-full h-full object-cover rounded-t-[12px]" />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-center text-left">
              <h3 className="text-lg font-semibold mb-2">Detailed vessel info</h3>
              <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
              </p>
            </div>
          </div>

          <div className="w-full max-w-md border-[0.2px] rounded-[32px] shadow-md flex flex-col-reverse overflow-hidden">
            <div className="w-full h-auto aspect-[307/140] bg-gray-200 rounded-b-[12px]">
              <img src="/feature.png" alt="Port" className="w-full h-full object-cover rounded-b-[12px]" />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-center text-left">
              <h3 className="text-lg font-semibold mb-2">Ports at a glance</h3>
              <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
              </p>
            </div>
          </div>

          <div className="w-full max-w-md border-[0.2px] rounded-[32px] shadow-md flex flex-col overflow-hidden">
            <div className="w-full h-auto aspect-[307/140] bg-gray-200 rounded-t-[12px]">
              <img src="feature.png" alt="Lighthouse" className="w-full h-full object-cover rounded-t-[12px]" />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-center text-left">
              <h3 className="text-lg font-semibold mb-2">Lighthouse insights</h3>
              <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-left">Smart plans for every voyage</h2>
          <p className="text-[#AAAAAA] mb-10 text-sm font-medium rounded-md inline-block w-full max-w-xs md:max-w-md min-h-[29px]">
            Hear from our marine enthusiasts about how Marine Radar has enhanced their navigation and delivered real-time insights at sea.
          </p>
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
      <section className="py-24 px-4 mb-10">
        <div className="text-left max-w-2xl">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-[#AAAAAA] mb-10 mt-2">
            Hear from our marine enthusiasts about how Marine Radar has enhanced their navigation and delivered real-time insights at sea.
          </p>
        </div>

        {/* FAQ Body */}
        <div className="max-w-5xl">
          <Accordion type="multiple" className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <FaqItem question="How cool is this app?" answer="Our app provides cutting-edge vessel tracking." />
              <FaqItem question="Is the design user-friendly?" answer="We've focused on creating a seamless UI." />
              <FaqItem question="Are the features easy to navigate?" answer="Every feature is designed with UX in mind." />
            </div>
            <div className="space-y-4">
              <FaqItem question="It offers seamless integration with other tools" answer="We use advanced satellite data for accuracy." />
              <FaqItem question="The performance is consistently reliable and fast" answer="Yes! It's compatible with web and mobile." />
              <FaqItem question="User feedback has been overwhelmingly positive" answer="Yes, we offer 24/7 customer support." />
            </div>
          </Accordion>

          <div className="text-left mt-10">
            <p className="text-[#AAAAAA]">
              Couldn’t find your answer?{" "}
              <a href="/contact" className="text-[#0A84FF] font-medium hover:underline">Talk to us</a>
            </p>
          </div>
        </div>
      </section>



      {/* Download Section */}
      <section className="py-12 container mx-auto px-4 mb-20">
        <div className="bg-[#0A84FF] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <h1 className="text-white font-semibold text-3xl md:text-4xl lg:text-[62px] leading-tight text-center md:text-left">
              Get the App <br />
              <span className="opacity-60">now</span>
            </h1>

            <div className="flex items-center gap-4 my-6">
              <div className="w-[50px] h-[40px] md:w-[60px] md:h-[48px] lg:w-[70px] lg:h-[56px] flex items-center justify-center bg-white rounded-3xl shadow-md">
                <img src="/android.png" alt="Play Store" className="w-6 h-6" />
              </div>
              <div className="w-[50px] h-[40px] md:w-[60px] md:h-[48px] lg:w-[70px] lg:h-[56px] flex items-center justify-center bg-white rounded-3xl shadow-md">
                <img src="/apple.png" alt="App Store" className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="relative pt-6 md:mt-0">
            <Image
              src="/name.png"
              alt="Extra"
              width={1300}
              height={1300}
              className="absolute -top-5 -left-6 md:-top-12 md:-left-10"
            />
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
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <span className="text-xl font-bold">Marine Radar</span>
            </Link>
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

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <AccordionItem value={question} className="border border-gray-800 rounded-lg">
      <AccordionTrigger className="px-4">{question}</AccordionTrigger>
      <AccordionContent className="px-4 text-gray-400">{answer}</AccordionContent>
    </AccordionItem>
  );
}