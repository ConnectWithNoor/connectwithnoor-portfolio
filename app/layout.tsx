import type { Metadata } from "next";

import "./globals.css";
import Modal from "./{components}/alert/Alert";
import ToasterProvider from "./{components}/alert/ToasterProvider";
import PopupWidgetWrapper from "./{components}/wrapper/popupWidgetWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div id="calendly-widget" />
        <div id="calendly-btn" />

        <ToasterProvider />
        <PopupWidgetWrapper />
        <Modal />
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "ConnectWithNoor | Developer Resume",
  description:
    "ConnectWithNoor developer resume is to showcase your skills, portfolio and testimonials to potential clients",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};
