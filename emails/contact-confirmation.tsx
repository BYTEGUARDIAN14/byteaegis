import * as React from "react"
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Hr,
  Link,
  Tailwind,
} from "@react-email/components"

interface ContactConfirmationEmailProps {
  name: string
  inquiry: string
}

export default function ContactConfirmationEmail({
  name,
  inquiry,
}: ContactConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>We received your inquiry at byteaegis</Preview>
      <Tailwind>
        <Body className="bg-[#050505] text-[#e8e2d8] font-sans m-0 p-0">
          <Container className="mx-auto my-[40px] max-w-[600px] border border-[#3b82f6]/20 bg-[#121113] rounded-xl overflow-hidden shadow-2xl">
            {/* Header / Logo Area */}
            <Section className="bg-black py-8 text-center border-b border-white/5">
              <Img
                src="https://byteaegis.online/android-chrome-192x192.png"
                width="64"
                height="64"
                alt="byteaegis logo"
                className="mx-auto"
              />
              <Heading className="text-white text-2xl font-bold mt-4 tracking-tight">byteaegis</Heading>
            </Section>

            {/* Content Area */}
            <Section className="p-8">
              <Heading className="text-[#3b82f6] text-xl font-bold mb-4 tracking-tight">
                Inquiry Received
              </Heading>
              
              <Text className="text-white/80 text-base leading-relaxed mb-6">
                Hi {name},
              </Text>
              
              <Text className="text-white/80 text-base leading-relaxed mb-6">
                Thank you for reaching out to **byteaegis**. We have securely received your inquiry and our team is reviewing it. We will get back to you shortly to discuss your project and security needs.
              </Text>

              <Section className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <Text className="text-white/50 text-xs font-mono uppercase tracking-wider mb-2">
                  Your Message:
                </Text>
                <Text className="text-white/90 text-sm italic">
                  "{inquiry}"
                </Text>
              </Section>

              <Text className="text-white/80 text-base leading-relaxed mb-6">
                In the meantime, feel free to explore our services at <Link href="https://byteaegis.online" className="text-[#3b82f6]">byteaegis.online</Link>.
              </Text>
            </Section>

            {/* Footer */}
            <Hr className="border-white/10 my-0 mx-8" />
            <Section className="p-8 bg-black/50 text-center">
              <Text className="text-white/40 text-xs mb-2">
                Secure Software Development & Auditing
              </Text>
              <Text className="text-white/40 text-xs">
                &copy; {new Date().getFullYear()} byteaegis. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
