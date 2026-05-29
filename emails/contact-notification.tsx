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
  Img,
} from "@react-email/components"

interface ContactNotificationEmailProps {
  name: string
  email: string
  company?: string
  services?: string[]
  timeline?: string
  inquiry: string
}

export default function ContactNotificationEmail({
  name,
  email,
  company,
  services,
  timeline,
  inquiry,
}: ContactNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Lead from byteaegis: {name}</Preview>
      <Tailwind>
        <Body className="bg-[#f4f4f5] text-[#121113] font-sans m-0 p-0">
          <Container className="mx-auto my-[40px] max-w-[600px] border border-gray-200 bg-white rounded-xl overflow-hidden shadow-md">
            {/* Header */}
            <Section className="bg-[#09090b] px-8 py-6 text-center">
              <Img
                src="https://byteaegis.online/android-chrome-192x192.png"
                width="48"
                height="48"
                alt="byteaegis logo"
                className="mx-auto mb-4"
              />
              <Heading className="text-white text-2xl font-semibold m-0 tracking-tight">
                New Website Lead
              </Heading>
              <Text className="text-gray-400 text-sm mt-2 mb-0">
                A new inquiry has been submitted via the contact form.
              </Text>
            </Section>

            {/* Details Section */}
            <Section className="p-8">
              <Text className="text-gray-800 text-base font-semibold uppercase tracking-wider text-sm mb-4 border-b border-gray-100 pb-2">
                Lead Details
              </Text>

              <Section className="mb-6">
                <Text className="text-gray-900 text-base mb-2 m-0">
                  <span className="text-gray-500 font-medium w-24 inline-block">Name:</span> {name}
                </Text>
                <Text className="text-gray-900 text-base mb-2 m-0">
                  <span className="text-gray-500 font-medium w-24 inline-block">Email:</span> <a href={`mailto:${email}`} className="text-blue-600 no-underline">{email}</a>
                </Text>
                {company && (
                  <Text className="text-gray-900 text-base mb-2 m-0">
                    <span className="text-gray-500 font-medium w-24 inline-block">Company:</span> {company}
                  </Text>
                )}
                {timeline && (
                  <Text className="text-gray-900 text-base mb-2 m-0">
                    <span className="text-gray-500 font-medium w-24 inline-block">Timeline:</span> <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm font-medium">{timeline}</span>
                  </Text>
                )}
              </Section>

              {services && services.length > 0 && (
                <Section className="mb-6">
                  <Text className="text-gray-800 text-base font-semibold uppercase tracking-wider text-sm mb-3 border-b border-gray-100 pb-2">
                    Services Requested
                  </Text>
                  <Section>
                    {services.map((service, index) => (
                      <span key={index} className="inline-block bg-gray-100 text-gray-800 px-3 py-1.5 rounded-md text-sm font-medium mr-2 mb-2">
                        {service}
                      </span>
                    ))}
                  </Section>
                </Section>
              )}

              <Section className="mb-2">
                <Text className="text-gray-800 text-base font-semibold uppercase tracking-wider text-sm mb-3 border-b border-gray-100 pb-2">
                  Message
                </Text>
              </Section>
              
              <Section className="bg-gray-50 border border-gray-100 rounded-lg p-5">
                <Text className="text-gray-800 text-base m-0 whitespace-pre-wrap leading-relaxed">
                  {inquiry}
                </Text>
              </Section>
            </Section>
            
            {/* Footer */}
            <Section className="bg-gray-50 px-8 py-4 border-t border-gray-100 text-center">
              <Text className="text-gray-400 text-xs m-0">
                &copy; {new Date().getFullYear()} byteaegis. Securely generated from byteaegis.online
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
