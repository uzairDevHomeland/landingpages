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
  Bed,
} from "lucide-react";

import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

export default function Home() {
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
      e.target.reset(); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <Header />

      <div
        id="main"
        className=" intro-new-version__bg  xl:h-screen bg-[url('/main.jpg')] bg-cover bg-center flex items-center justify-center md:p-6"
      >
        <div className="container mx-auto px-4  xl:flex-row flex-col flex justify-between  gap-10 p-10 md:p-0   ">
          <div className="intro-new-version__left">
            <p className="intro-new-version__subtitle md:mt-0  mt-10">
              By Emaar
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

            <div className="   intro-new-version__items md:flex-row flex-col md:gap-16 gap-1">
              <div className="intro-new-version__item">
                <p className="intro-new-version__item-top desc2">
                  Available Units:
                </p>
                <p className="intro-new-version__item-bot">
                  Studios &amp; 1-Bedroom Apartments
                </p>
              </div>
              <div className="intro-new-version__item-line"></div>
              <div className="intro-new-version__item">
                <p className="intro-new-version__item-top desc2">
                  Starting Price:
                </p>
                <p className="intro-new-version__item-bot">From AED 985K</p>
              </div>
              <div className="intro-new-version__item-line"></div>
              <div className="intro-new-version__item">
                <p className="intro-new-version__item-top desc2">
                  Handover Q3 2026
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

      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                A New Standard of Waterfront Living in Dubai’s Greenest Enclave
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Step into a world where modern elegance meets natural beauty.
                Altan, located in the heart of the Green Gate District at Dubai
                Creek Harbour, offers a lifestyle of serenity, sophistication,
                and spectacular views — all just 10 minutes from Downtown Dubai
                and the international airport.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-emerald-100 p-2 rounded-full">
                    <Building className="h-5 w-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Modern Architecture
                    </h3>
                    <p className="text-gray-600">
                      Contemporary design with premium finishes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-emerald-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Prime Location
                    </h3>
                    <p className="text-gray-600">
                      10 minutes to Downtown Dubai
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-emerald-100 p-2 rounded-full">
                    <Trees className="h-5 w-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Green Spaces
                    </h3>
                    <p className="text-gray-600">Lush linear park access</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-emerald-100 p-2 rounded-full">
                    <Waves className="h-5 w-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
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

      {/* Property Types */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Discover Your Perfect Home
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Choose from a range of modern apartments and exclusive townhouses,
              each designed with spacious interiors and premium finishes.
            </p>
          </div>

          <Tabs defaultValue="1br" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="1br">1 Bedroom</TabsTrigger>
              <TabsTrigger value="2br">2 Bedroom</TabsTrigger>
              <TabsTrigger value="3br">3 Bedroom</TabsTrigger>
              <TabsTrigger value="townhouse">Townhouse</TabsTrigger>
            </TabsList>

            <TabsContent value="1br" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <div className="flex items-center justify-center gap-4 h-full w-full">
                    <Bed className="h-28 w-28 text-gray-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    1-Bedroom Apartment
                  </h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">Size: 754–776 sqft</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">
                        Starting from AED 1.81M
                      </span>
                    </li>
                  </ul>
                  <Button className="mt-4" onClick={handleDownload}>
                    View Floor Plans
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="2br" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <div className="flex items-center justify-center gap-4 h-full w-full">
                    <Bed className="h-28 w-28 text-gray-700" />
                    <Bed className="h-28 w-28 text-gray-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    2-Bedroom Apartment
                  </h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">
                        Size: 1,177–1,455 sqft
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">
                        Starting from AED 2.71M
                      </span>
                    </li>
                  </ul>
                  <Button className="mt-4" onClick={handleDownload}>
                    View Floor Plans
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="3br" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <div className="flex items-center justify-center gap-4 h-full w-full">
                    <Bed className="h-28 w-28 text-gray-700" />{" "}
                    <Bed className="h-28 w-28 text-gray-700" />{" "}
                    <Bed className="h-28 w-28 text-gray-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    3-Bedroom Apartment
                  </h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">Size: 1,848 sqft</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">
                        Starting from AED 4.11M
                      </span>
                    </li>
                  </ul>
                  <Button className="mt-4" onClick={handleDownload}>
                    View Floor Plans
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="townhouse" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <div className="flex items-center justify-center gap-4 h-full w-full">
                    <Bed className="h-28 w-28 text-gray-700" />{" "}
                    <Bed className="h-28 w-28 text-gray-700" />{" "}
                    <Bed className="h-28 w-28 text-gray-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    3-Bedroom Townhouse
                  </h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">
                        Size: 4,080–4,166 sqft
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">
                        Starting from AED 6.95M
                      </span>
                    </li>
                  </ul>
                  <Button className="mt-4" onClick={handleDownload}>
                    View Floor Plans
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Lifestyle Amenities
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Everything you need for leisure, wellness, and family life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                  <Waves className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Swimming Pools
                </h3>
                <p className="text-gray-700">
                  Multiple swimming pools including lap pools and children's
                  pools with temperature control.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                  <Mountain className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Yoga Zones
                </h3>
                <p className="text-gray-700">
                  Dedicated spaces for yoga and meditation with serene views of
                  the surroundings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                  <Trees className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  BBQ Areas
                </h3>
                <p className="text-gray-700">
                  Outdoor BBQ stations perfect for entertaining friends and
                  family.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                  <Building className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Co-working Spaces
                </h3>
                <p className="text-gray-700">
                  Modern co-working areas with high-speed internet and meeting
                  rooms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                  <MapPin className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Linear Park Access
                </h3>
                <p className="text-gray-700">
                  Direct access to lush green spaces and walking trails along
                  the waterfront.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                  <Clock className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  24/7 Security
                </h3>
                <p className="text-gray-700">
                  Round-the-clock security services and smart home technology
                  for peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Prime Location
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Located in Green Gate – Dubai Creek Harbour's most serene
                enclave, Altan offers the perfect balance of connectivity and
                tranquility.
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-emerald-700" />
                  </div>
                  <span className="text-gray-700">
                    10 minutes to Downtown Dubai
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-emerald-700" />
                  </div>
                  <span className="text-gray-700">
                    10 minutes to Dubai International Airport
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-emerald-700" />
                  </div>
                  <span className="text-gray-700">
                    Easy access to major highways
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-emerald-700" />
                  </div>
                  <span className="text-gray-700">
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
      <section id="payment" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Payment Plan
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Flexible 4-year payment plan designed to make your investment
              journey smooth.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-900">
                  80:20 Payment Plan
                </h3>
                <p className="text-gray-700">Handover in July 2029</p>
              </div>
              <div className="flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full">
                <CreditCard className="h-5 w-5 text-emerald-700" />
                <span className="font-medium text-emerald-700">
                  4-Year Plan
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between p-4 border-b border-gray-200">
                <div className="mb-2 md:mb-0">
                  <span className="font-semibold text-gray-900">
                    Down Payment
                  </span>
                </div>
                <div className="flex justify-between md:block">
                  <span className="text-gray-700">10%</span>
                  <span className="md:ml-16 text-gray-700">On Booking</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between p-4 border-b border-gray-200">
                <div className="mb-2 md:mb-0">
                  <span className="font-semibold text-gray-900">
                    During Construction
                  </span>
                </div>
                <div className="flex justify-between md:block">
                  <span className="text-gray-700">70%</span>
                  <span className="md:ml-16 text-gray-700">
                    in easy installments
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between p-4">
                <div className="mb-2 md:mb-0">
                  <span className="font-semibold text-gray-900">
                    On Handover
                  </span>
                </div>
                <div className="flex justify-between md:block">
                  <span className="text-gray-700">20%</span>
                  <span className="md:ml-16 text-gray-700">
                    On handover (July 2029)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-5 px-4">
          <Button
            onClick={handleDownloadPaymentPlan}
            size="lg"
            variant="outline"
            className="border-emerald-700 text-emerald-700 hover:bg-emerald-700/10 mx-4"
          >
            Download Payment Plan <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-black">
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
            <Button
              id="brochure"
              onClick={handleDownloadbrocher}
              size="lg"
              variant="outline"
              className="border-emerald-700 text-emerald-700 hover:bg-emerald-700/10"
            >
              Download Brochure <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
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
    </>
  );
}
