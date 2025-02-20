import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface EmailProps {
  senderEmail: string;
  recieverEmail: string;
  subject: string;
}
const baseUrl = "https://outlook-lovat.vercel.app";
const currentDate = new Date().getFullYear();

export function ThankYouEmail({
  senderEmail,
  recieverEmail,
  subject,
}: EmailProps) {
  const previewText = `Thank you for contacting us, ${senderEmail}!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto py-5 px-5">
            <Section className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Heading className="text-2xl font-bold text-center p-5 bg-black text-white">
                Hello, {recieverEmail}
              </Heading>
              <Section className="px-4 py-4">
                <Text className="text-gray-600 mt-4">
                  You have a message on OutLook from {senderEmail} about{" "}
                  {subject}
                </Text>
                <Button
                  href={`${baseUrl}/email-list`}
                  className="bg-black cursor-pointer text-white font-bold py-2 px-4 rounded mt-4 hover:bg-black"
                >
                  View your message
                </Button>
              </Section>
              {/* <Section className="bg-purple-100 px-4 py-4 mt-4">
                <Text className="text-sm text-center text-purple-800">
                  We look forward to connecting with you soon. God bless!
                </Text>
              </Section> */}
            </Section>
            <Section className="mt-4 text-center text-xs text-gray-500">
              <Text>© {currentDate} OutLook. All rights reserved.</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
