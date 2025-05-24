"use client";
import Image from "next/image";
import Header from "./components/header";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MapPin,
  Phone,
  Clock,
  CreditCard,
  Building,
  Trees,
  Waves,
  Mountain,
  Home,
  Bed,
} from "lucide-react";

import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
export default function Main() {
  // Handle form submission (mock implementation, adjust as needed)

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/ALTAN_DCH_FLOORPLANS.pdf"; // Path relative to `public`
    link.download = "ALTAN_DCH_FLOORPLANS.pdf"; // Optional: Custom filename
    link.click();
  };
  const handleDownloadbrocher = () => {
    const link = document.createElement("a");
    link.href = "/ALTAN_DCH_BROCHURE.pdf"; // Path relative to `public`
    link.download = "ALTAN_DCH_BROCHURE.pdf"; // Optional: Custom filename
    link.click();
  };
  const handleDownloadPaymentPlan = () => {
    const link = document.createElement("a");
    link.href = "/ALTAN_DCH_PAYMENT_PLAN.pdf"; // Path relative to `public`
    link.download = "ALTAN_DCH_PAYMENT_PLAN.pdf"; // Optional: Custom filename
    link.click();
  };

  const [submitting, setSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [open, setOpen] = useState(false); // <-- control dialog open state
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      username: formData.get("name"), // Changed 'name' to 'username' to match your original question

      email: formData.get("email"),
      phone: formData.get("phone"),
    };

    try {
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbyyGpvi3LHQ5Oa-mYMFgVbujaglYfSojsS0RqfcXhWtKUg5Ws75hQice97TjNR6T_Yq_A/exec";

      const response = await fetch(scriptUrl, {
        method: "POST", // Changed from GET to POST
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          ...data,
          gid: "0",
          website: "Altan",
        }).toString(), // Include gid in the body
        mode: "no-cors", // Required for Google Apps Script
      });

      // Since 'no-cors' prevents reading the response, assume success if no error
      setSubmissionStatus("success");

      setTimeout(() => {
        setSubmissionStatus("");
      }, 4000); // Reset after 4 seconds

      // set

      setOpen(false); // closes the dialog

      e.target.reset(); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");

      setTimeout(() => {
        setSubmissionStatus("");
      }, 4000); // Reset after 4 seconds
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <Header />

      <div
        id="main"
        className=" intro-new-version__bg  xl:h-max bg-[url('/main.jpg')] bg-fixed bg-cover bg-center flex items-center justify-center md:p-6"
      >
        <div className="container mx-auto px-4  xl:flex-row flex-col flex justify-between  gap-10 p-10 md:p-0   ">
          <div className="intro-new-version__left">
            <p className="intro-new-version__subtitle md:mt-0  mt-10 !mb-4">
              By EMAAR
            </p>
            <h2 className="intro-new-version__title">
              Altan at Dubai Creek Harbour
            </h2>
            <div className="intro-new-version__text-wrapper-desc">
              <p className="intro-new-version__text">
                Step into a world where modern elegance meets natural beauty.
                Altan, located in the heart of the Green Gate District at Dubai
                Creek Harbour, offers a lifestyle of serenity, sophistication,
                and spectacular views — all just 10 minutes from Downtown Dubai
                and the international airport.
              </p>
              <p className="intro-new-version__list-title"></p>
              <div className="intro-new-version__lists">
                <p className="intro-new-version__list-sub"></p>
                <p className="intro-new-version__list-sub"></p>
              </div>
            </div>

            <div className="   intro-new-version__items md:flex-row flex-col items-center justify-center md:gap-8 gap-1">
              <div className="intro-new-version__item">
                <p className="intro-new-version__item-top desc2">
                  Available Units:
                </p>
                <p className="intro-new-version__item-bot">
                  Modern 1, 2 & 3-Bedroom Apartments
                </p>
              </div>
              <div className="intro-new-version__item-line"></div>
              <div className="intro-new-version__item">
                <p className="intro-new-version__item-top desc2">
                  Starting Price:
                </p>
                <p className="intro-new-version__item-bot">From AED 1.81M</p>
              </div>
              <div className="intro-new-version__item-line"></div>
              <div className="intro-new-version__item">
                <p className="intro-new-version__item-top desc2">
                  On handover (July 2029)
                </p>
                <p className="intro-new-version__item-bot">20% Down</p>
              </div>
            </div>
          </div>

          <div className="intro-new-version__form h-max">
            <h2 className="intro-new-version__form-title">
              Secure Your Spot in Exclusive Luxury Property
            </h2>
            <p className="intro-new-version__form-sub">
              Top-notch Amenities, High-end Finishes, Premium Location
            </p>

            {submissionStatus === "success" && (
              <div className="success-message text-green-300">
                Thank you! Your submission has been received!
              </div>
            )}

            {submissionStatus === "error" && (
              <div className="error-message text-red-300">
                Something went wrong. Please try again.
              </div>
            )}

            <form
              className="intro-new-version__form-from form"
              onSubmit={handleSubmit}
              data-gtag-submit=""
            >
              {/* Name Input */}
              <div className="intro-new-version__form-input-wrapper">
                <input
                  className="intro-new-version__form-input"
                  type="text"
                  placeholder="Your name"
                  name="name"
                  required
                />
                <div className="intro-new-version__form-icon">
                  <img
                    src="https://d3b6muno9lbfvx.cloudfront.net/waterfront-template/s3fs-public/2024-11/input-name-icon.svg"
                    alt=""
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="intro-new-version__form-input-wrapper">
                <input
                  className="intro-new-version__form-input"
                  type="email"
                  placeholder="Your e-mail"
                  name="email"
                  required
                />
                <div className="intro-new-version__form-icon">
                  <img
                    src="https://d3b6muno9lbfvx.cloudfront.net/waterfront-template/s3fs-public/2024-11/input-mail-icon.svg"
                    alt=""
                  />
                </div>
              </div>

              {/* Phone Input - Fixed name attribute */}
              <div className="intro-new-version__form-input-wrapper intro-new-version__form-input-phone">
                <input
                  className="intro-new-version__form-input"
                  type="tel"
                  placeholder="Phone number"
                  name="phone" // Changed from 'name' to 'phone'
                  required
                />
                <div className="intro-new-version__form-icon">
                  <img
                    src="https://d3b6muno9lbfvx.cloudfront.net/waterfront-template/s3fs-public/2024-11/input-phone-icon.svg"
                    alt=""
                  />
                </div>
              </div>

              {/* Submit Button */}

              <div className="intro-new-version__form-btn"></div>
              <button
                className="btn @@btnClass"
                type="submit"
                fdprocessedid="jq4wj"
                disabled={submitting}
              >
                <p> {submitting ? "Submitting..." : "Submit"}</p>
                <span></span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <section id="about" className="py-16 md:pb-24 bg-[#151E34]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                A New Standard of Waterfront Living in Dubai’s Greenest Enclave
              </h2>
              <p className="text-lg text-white mb-6 leading-relaxed">
                Step into a world where modern elegance meets natural beauty.
                Altan, located in the heart of the Green Gate District at Dubai
                Creek Harbour, offers a lifestyle of serenity, sophistication,
                and spectacular views — all just 10 minutes from Downtown Dubai
                and the international airport.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-white p-2 rounded-full">
                    <Building className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Modern Architecture
                    </h3>
                    <p className="text-gray-600">
                      Contemporary design with premium finishes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-white p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Prime Location</h3>
                    <p className="text-gray-600">
                      10 minutes to Downtown Dubai
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-white p-2 rounded-full">
                    <Trees className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Green Spaces</h3>
                    <p className="text-gray-600">Lush linear park access</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-white p-2 rounded-full">
                    <Waves className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Waterfront Views
                    </h3>
                    <p className="text-gray-600">
                      Breathtaking creek and city views
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/main2.jpg"
                alt="Altan Exterior"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <div
        id="payment"
        className=" z-0  flex-col flex intro-new-version__bg xl:h-max bg-[url('/main.jpg')] bg-fixed bg-cover bg-center  items-center justify-center md:p-6  "
      >
        <h3 className="text-white container mx-auto md:text-8xl text-3xl z-0 !text-left w-full md:px-20 px-4 md:mt-0  mt-10">
          Payment Plan
        </h3>

        <div className="xl:flex-row container mx-auto flex-col flex gap-10 z-0 justify-between w-full md:px-20 px-4 ">
          <div className="plan">
            <p className="md:text-[200px] text-9xl text-white">80 %</p>

            <div className="md:text-5xl text-2xl text-white">
              During Construction
            </div>
          </div>
          <div className="plan">
            <p className="md:text-[200px] text-9xl text-white">20 %</p>

            <div className="md:text-5xl text-2xl text-white">on Handover</div>
          </div>
        </div>

        <button
          onClick={() => {
            setOpen(true);
          }}
          className="btn @@btnClass"
          type="submit"
          fdprocessedid="jq4wj"
        >
          <p> Download Payment Plan</p>
          <span></span>
        </button>
      </div>
      {/* Property Types */}
      <section className="py-16 md:py-24 bg-[#151E34]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Discover Your Perfect Home
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Modern apartments and exclusive townhouses designed with spacious
              interiors and premium finishes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* 1 Bedroom Card */}
            <div className="group relative glass border-2 rounded-2xl shadow-2xl p-8 transition-all hover:backdrop-blur-3xl hover:bg-white/40 hover:transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-4">1 Bedroom</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="h-5 w-5 text-white" />
                  <span>754–776 sqft</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="h-5 w-5 text-white" />
                  <span>From AED 1.81M</span>
                </li>
              </ul>
              <Button
                className="w-full text-white"
                onClick={() => {
                  setOpen(true);
                }}
              >
                View Plans
              </Button>
            </div>

            {/* 2 Bedroom Card */}
            <div className="group relative glass border-2 rounded-2xl shadow-2xl p-8 transition-all hover:backdrop-blur-3xl hover:bg-white/40 hover:transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-4">2 Bedroom</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="h-5 w-5 text-white" />
                  <span>1,177–1,455 sqft</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="h-5 w-5 text-white" />
                  <span>From AED 2.71M</span>
                </li>
              </ul>
              <Button
                className="w-full text-white"
                onClick={() => {
                  setOpen(true);
                }}
              >
                View Plans
              </Button>
            </div>

            {/* 3 Bedroom Card */}
            <div className="group relative glass border-2 rounded-2xl shadow-2xl p-8 transition-all hover:backdrop-blur-3xl hover:bg-white/40 hover:transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-4">3 Bedroom</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="h-5 w-5 text-white" />
                  <span>1,848 sqft</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="h-5 w-5 text-white" />
                  <span>From AED 4.11M</span>
                </li>
              </ul>
              <Button
                className="w-full text-white"
                onClick={() => {
                  setOpen(true);
                }}
              >
                View Plans
              </Button>
            </div>

            {/* Townhouse Card */}
            <div className="group relative glass border-2 rounded-2xl shadow-2xl p-8 transition-all hover:backdrop-blur-3xl hover:bg-white/40 hover:transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-4">Townhouse</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="h-5 w-5 text-white" />
                  <span>4,080–4,166 sqft</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="h-5 w-5 text-white" />
                  <span>From AED 6.95M</span>
                </li>
              </ul>
              <Button
                className="w-full text-white"
                onClick={() => {
                  setOpen(true);
                }}
              >
                View Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="pb-16 md:pb-24 bg-[#151E34]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Lifestyle Amenities
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Everything you need for leisure, wellness, and family life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-white p-3 rounded-full w-fit mb-4">
                  <Waves className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Swimming Pools
                </h3>
                <p className="text-white">
                  Multiple swimming pools including lap pools and children's
                  pools with temperature control.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-white p-3 rounded-full w-fit mb-4">
                  <Mountain className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Yoga Zones
                </h3>
                <p className="text-white">
                  Dedicated spaces for yoga and meditation with serene views of
                  the surroundings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-white p-3 rounded-full w-fit mb-4">
                  <Trees className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">BBQ Areas</h3>
                <p className="text-white">
                  Outdoor BBQ stations perfect for entertaining friends and
                  family.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-white p-3 rounded-full w-fit mb-4">
                  <Building className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Co-working Spaces
                </h3>
                <p className="text-white">
                  Modern co-working areas with high-speed internet and meeting
                  rooms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-white p-3 rounded-full w-fit mb-4">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Linear Park Access
                </h3>
                <p className="text-white">
                  Direct access to lush green spaces and walking trails along
                  the waterfront.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-white p-3 rounded-full w-fit mb-4">
                  <Clock className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  24/7 Security
                </h3>
                <p className="text-white">
                  Round-the-clock security services and smart home technology
                  for peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="pb-16 md:pb-24 bg-[#151E34]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Prime Location
              </h2>
              <p className="text-lg text-white mb-6 leading-relaxed">
                Located in Green Gate – Dubai Creek Harbour's most serene
                enclave, Altan offers the perfect balance of connectivity and
                tranquility.
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-full">
                    <Clock className="h-5 w-5 text-black" />
                  </div>
                  <span className="text-white">
                    10 minutes to Downtown Dubai
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-full">
                    <Clock className="h-5 w-5 text-black" />
                  </div>
                  <span className="text-white">
                    10 minutes to Dubai International Airport
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-black" />
                  </div>
                  <span className="text-white">
                    Easy access to major highways
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-black" />
                  </div>
                  <span className="text-white">
                    Proximity to retail and dining destinations
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1804.9717944010592!2d55.355379437424006!3d25.20512481662794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f670019ad4da5%3A0x2d33d01d3b6d12ee!2sALTAN%20by%20EMAAR!5e0!3m2!1sen!2sae!4v1748002140667!5m2!1sen!2sae"
                width="100%"
                height="100%  "
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <div
        id="developer"
        className=" z-0  flex-col flex  xl:h-max items-center justify-center md:p-6 bg-white  "
      >
        <div className="flex xl:flex-row flex-col gap-5 w-full  translate-y-28 z-[2]">
          <h3 className=" z-2   text-black  relative mx-auto md:text-8xl text-3xl !text-left w-full md:px-20 px-4 md:mt-0  mt-10">
            Trustworthy <br></br>
            <span className="pl-28 lg:text-white text-black ">Developer</span>
          </h3>

          <p className="bg-[#151E34] text-white text-3xl h-[100px] text-center p-4 ">
            Since 2002
          </p>
          <p className="bg-[#151E34] text-white text-3xl h-[100px] text-center p-4 ">
            Delivered approximatelt 118,400+ Units
          </p>
        </div>
        <div className="xl:flex-row  h-[80vh] mx-auto flex-col justify-center items-center flex gap-10 z-0 backdrop-brightness-50  w-full  bg-[url('/developers.jpg')] bg-fixed bg-cover bg-center  ">
          <div className="flex flex-col gap-4 p-6 md:p-0 items-center justify-center backdrop-brightness-[.2] h-full w-full">
            <h2 className="text-white text-7xl">EMAAR</h2>

            <h4 className="text-white text-3xl">
              EMAAR’S REVENUE FOR 2024 – AED 35.5 Bn
            </h4>
            <p className="text-white text-xl mt-4">
              With a proven track-record in delivery, Emaar has delivered{" "}
              <br></br>
              approximately 118,400+ residential units in Dubai and other global{" "}
              <br></br>
              markets since 2002, including notable landmarks such as Burj
              <br></br>
              Khalifa, a global icon, and Dubai Mall, the world’s most-visited
              <br></br>
              retail and lifestyle destination.
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setOpen(true);
          }}
          className="btn @@btnClass"
          type="submit"
          fdprocessedid="jq4wj"
        >
          <p> Download Payment Plan</p>
          <span></span>
        </button>
      </div>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#151E34]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Own Your Dream Home Today
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Own your home in Dubai's future of waterfront living — where every
            day feels like a peaceful escape and every corner is crafted for
            elevated living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="btn @@btnClass"
              type="submit"
              fdprocessedid="jq4wj"
            >
              <p> Download Brochure</p>
              <span></span>
            </button>
          </div>
        </div>
      </section>

      <div className="whatsapp-fixed">
        <a
          href="https://api.whatsapp.com/send/?phone=971556610000&text=Hello&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <Image
            src="/whatapplogo.svg"
            alt="WhatsApp"
            width={32}
            height={32}
            className="whatsapp-icon"
          />
        </a>
      </div>
      <section className="">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-md p-6 bg-[#151E34] border ">
            <div className="intro-new-version__form h-max bg-[#151E34]">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold mb-2">
                  <h2 className="intro-new-version__form-title">
                    Secure Your Spot in Exclusive Luxury Property
                  </h2>
                </DialogTitle>
              </DialogHeader>

              <p className="intro-new-version__form-sub">
                Top-notch Amenities, High-end Finishes, Premium Location
              </p>

              {submissionStatus === "success" && (
                <div className="success-message text-green-300">
                Thank you! We’ve received your submission and will call you shortly
                </div>
              )}

              {submissionStatus === "error" && (
                <div className="error-message text-red-300">
                  Something went wrong. Please try again.
                </div>
              )}

              <form
                className="intro-new-version__form-from form"
                onSubmit={handleSubmit}
                data-gtag-submit=""
              >
                {/* Name Input */}
                <div className="intro-new-version__form-input-wrapper">
                  <input
                    className="intro-new-version__form-input"
                    type="text"
                    placeholder="Your name"
                    name="name"
                    required
                  />
                  <div className="intro-new-version__form-icon">
                    <img
                      src="https://d3b6muno9lbfvx.cloudfront.net/waterfront-template/s3fs-public/2024-11/input-name-icon.svg"
                      alt=""
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="intro-new-version__form-input-wrapper">
                  <input
                    className="intro-new-version__form-input"
                    type="email"
                    placeholder="Your e-mail"
                    name="email"
                    required
                  />
                  <div className="intro-new-version__form-icon">
                    <img
                      src="https://d3b6muno9lbfvx.cloudfront.net/waterfront-template/s3fs-public/2024-11/input-mail-icon.svg"
                      alt=""
                    />
                  </div>
                </div>

                {/* Phone Input - Fixed name attribute */}
                <div className="intro-new-version__form-input-wrapper intro-new-version__form-input-phone">
                  <input
                    className="intro-new-version__form-input"
                    type="tel"
                    placeholder="Phone number"
                    name="phone" // Changed from 'name' to 'phone'
                    required
                  />
                  <div className="intro-new-version__form-icon">
                    <img
                      src="https://d3b6muno9lbfvx.cloudfront.net/waterfront-template/s3fs-public/2024-11/input-phone-icon.svg"
                      alt=""
                    />
                  </div>
                </div>

                {/* Submit Button */}

                <div className="intro-new-version__form-btn"></div>
                <button
                  className="btn @@btnClass"
                  type="submit"
                  fdprocessedid="jq4wj"
                  disabled={submitting}
                >
                  <p> {submitting ? "Submitting..." : "Submit"}</p>
                  <span></span>
                </button>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      <section className="footer  bg-[#151E34]">
        <div className="container mx-auto flex  flex-col md:flex-row gap-10  lg:p-0 p-6 justify-between">
          <div className="flex flex-col gap-10">
            <ul className="space-x-10 lg:flex lg:flex-row flex-col text-white">
              <li className="xl:text-xl text-base">
                <a
                  href="#main"
                  className="hover:text-blue-500 transition-colors"
                >
                  Main
                </a>
              </li>
              <li className="xl:text-xl text-base">
                <a
                  href="#about"
                  className="hover:text-blue-500 transition-colors"
                >
                  About
                </a>
              </li>

              <li className="xl:text-xl text-base">
                <a
                  href="#amenities"
                  className="hover:text-blue-500 transition-colors"
                >
                  Amenities
                </a>
              </li>
              <li className="xl:text-xl text-base">
                <a
                  href="#payment"
                  className="hover:text-blue-500 transition-colors"
                >
                  Payment Plan
                </a>
              </li>
              <li className="xl:text-xl text-base">
                <a
                  href="#brochure"
                  className="hover:text-blue-500 transition-colors"
                >
                  Brochure
                </a>
              </li>
              <li className="xl:text-xl text-base">
                <a
                  href="#location"
                  className="hover:text-blue-500 transition-colors"
                >
                  Location
                </a>
              </li>
            </ul>

            <div className="flex space-x-4 text-xl items-center text-white">
              <a href="tel:+971556610000"> +971 55 661 0000</a>

              <a
                href="https://api.whatsapp.com/send/?phone=971556610000&text=Hello&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                title="Contact us on WhatsApp"
                className="whatsapp-link"
                role="link"
                aria-label="Contact via WhatsApp"
              >
                <Image
                  src="/whatapplogo.svg"
                  alt="WhatsApp logo"
                  width={26}
                  height={26}
                  className="whatsapp-icon"
                />
              </a>
            </div>
            <Image
              className="h-[50px] w-[133px]"
              src="/altanlogo.png"
              alt="Vercel logomark"
              width={80}
              height={40}
            />
          </div>

          <div className="mb-10 h-max">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setOpen(true);
                }}
                className="btn @@btnClass"
                type="submit"
                fdprocessedid="jq4wj"
              >
                <p> Request a Call</p>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
