import * as React from "react"
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Tailwind,
} from "@react-email/components"

interface ContactNotificationEmailProps {
  name: string
  email: string
  company?: string
  services?: string[]
  budget?: string
  inquiry: string
}

export default function ContactNotificationEmail({
  name,
  email,
  company,
  services,
  budget,
  inquiry,
}: ContactNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Lead from byteaegis: {name}</Preview>
      <Tailwind>
        <Body className="bg-[#f5f5f5] text-[#121113] font-sans m-0 p-0">
          <Container className="mx-auto my-[40px] max-w-[600px] border border-gray-200 bg-white rounded-xl overflow-hidden shadow-sm">
            <Section className="bg-[#3b82f6] p-6">
              <Heading className="text-white text-xl font-bold m-0 tracking-tight">
                New Website Lead
              </Heading>
            </Section>

            <Section className="p-8">
              <Text className="text-gray-700 text-base mb-2">
                <strong>Name:</strong> {name}
              </Text>
              <Text className="text-gray-700 text-base mb-2">
                <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
              </Text>
              {company && (
                <Text className="text-gray-700 text-base mb-2">
                  <strong>Company:</strong> {company}
                </Text>
              )}
              {budget && (
                <Text className="text-gray-700 text-base mb-2">
                  <strong>Budget:</strong> {budget}
                </Text>
              )}
              {services && services.length > 0 && (
                <Text className="text-gray-700 text-base mb-6">
                  <strong>Interested In:</strong> {services.join(", ")}
                </Text>
              )}

              <Hr className="border-gray-200 my-6" />

              <Text className="text-gray-500 text-sm font-mono uppercase tracking-wider mb-2">
                Message:
              </Text>
              <Section className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                <Text className="text-gray-800 text-base m-0 whitespace-pre-wrap">
                  {inquiry}
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
