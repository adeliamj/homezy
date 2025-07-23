import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import PhoneCall from "@/assets/icons/phone-call.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Facebook from "@/assets/icons/facebook.svg";
import Twitter from "@/assets/icons/twitter.svg";

const socialMedias = [
  { icon: <PhoneCall />, label: "Phone" },
  { icon: <Instagram />, label: "Instagram" },
  { icon: <Facebook className="w-8 h-16" />, label: "Facebook" },
  { icon: <Twitter />, label: "Twitter" },
];

const footerLinks = [
  {
    title: "Pages",
    links: [
      "Home V1",
      "Home V2",
      "Search Properties V1",
      "Search Properties V2",
      "Property Details V1",
      "Property Details V2",
      "Agent List V1",
      "Agent List V2",
      "Agent Details V1",
      "Agent Details V2",
      "About Us V1",
      "About Us V2",
      "Contact Us V1",
      "Contact Us V2",
      "FAQ",
    ],
  },
  {
    title: "Utility Pages",
    links: [
      "Sign In",
      "Sign Up",
      "Forgot Password",
      "Reset Password",
      "404 Error Page",
      "Style Guides",
      "Licenses",
      "Change Log",
    ],
  },
];

const Footer = () => {
  return (
    <div className="mt-64 mb-32 mx-20 md:mx-60 2lg:mx-140">
      <div className="flex flex-col lg:flex-row text-secondary-dark-100 justify-between">
        <div>
          <Image
            src={Logo}
            width={190}
            height={50}
            alt="Logo"
            className="w-167 h-50 lg:w-190 lg:h-50"
          />
          <p className=" w-full lg:max-w-358 text-normal-regular py-24">
            We are creative people who provide the best way to you who want to
            have a new confortable and suitable place to live
          </p>
          <div className="flex list-none gap-24 cursor-pointer">
            {socialMedias.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer flex items-center justify-center bg-secondary-dark-100 p-8 rounded-48 w-32 h-32 text-secondary-white"
                aria-label={item.label}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-104 mt-64 lg:mt-0 ">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <div className="pb-32 text-normal-regular text-secondary-dark-80">
                {section.title}
              </div>
              <div
                className={`${
                  section.title === "Pages"
                    ? "flex flex-row list-none gap-64 lg:gap-80 text-normal-medium whitespace-nowrap cursor-pointer"
                    : "list-none text-normal-medium cursor-pointer"
                }`}
              >
                {section.title === "Pages" ? (
                  <>
                    <div>
                      {section.links.slice(0, 8).map((link, i) => (
                        <li key={i} className="pb-16">
                          {link}
                        </li>
                      ))}
                    </div>
                    <div>
                      {section.links.slice(8).map((link, i) => (
                        <li key={i} className="pb-16">
                          {link}
                        </li>
                      ))}
                    </div>
                  </>
                ) : (
                  section.links.map((link, i) => (
                    <li key={i} className="pb-16">
                      {link}
                    </li>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center items-center justify-center mt-80 pt-32 border-t border-secondary-dark-20 text-secondary-dark-60">
        ©2023 Homezy. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
