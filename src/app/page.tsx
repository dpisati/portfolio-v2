import { Posts } from "@/components/blog/Posts";
import { ContactForm } from "@/components/ContactForm";
import { Projects } from "@/components/work/Projects";
import { about, baseURL, home, person, routes } from "@/resources";
import {
  Avatar,
  Badge,
  Button,
  Column,
  Heading,
  Icon,
  Line,
  Meta,
  RevealFx,
  Row,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="128" paddingY="0" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="48">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="32"
              paddingBottom="64"
              paddingLeft="24"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="32" paddingTop="128">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            horizontal="center"
            paddingTop="40"
            paddingBottom="64"
          >
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          {home.quickPitch && (
            <RevealFx translateY="8" delay={0.3} fillWidth horizontal="center" paddingBottom="48">
              <Text wrap="balance" onBackground="neutral-weak" variant="body-default-l">
                {home.quickPitch}
              </Text>
            </RevealFx>
          )}
          <RevealFx paddingTop="24" delay={0.5} horizontal="center" paddingLeft="24">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      {home.philosophy?.display && (
        <Column fillWidth gap="48" marginBottom="80">
          <Row fillWidth paddingRight="128">
            <Line maxWidth={48} />
          </Row>
          <Column fillWidth horizontal="center" gap="48" paddingTop="48">
            <RevealFx fillWidth horizontal="center">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                {home.philosophy.title}
              </Heading>
            </RevealFx>
            <Row fillWidth gap="48" wrap paddingTop="48" s={{ direction: "column" }}>
              {home.philosophy.items.map((item, index) => (
                <RevealFx
                  key={item.title}
                  translateY="16"
                  delay={0.1 * (index + 1)}
                  flex={1}
                  style={{ minWidth: "240px" }}
                >
                  <Column
                    fillWidth
                    gap="24"
                    padding="24"
                    radius="l"
                    border="neutral-alpha-weak"
                    background="surface"
                  >
                    <Icon name={item.icon} onBackground="brand-medium" size="l" />
                    <Text variant="heading-strong-m">{item.title}</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {item.description}
                    </Text>
                  </Column>
                </RevealFx>
              ))}
            </Row>
          </Column>
          <Row fillWidth paddingLeft="128" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      {home.toolkit?.display && (
        <Column fillWidth gap="48" marginBottom="80">
          <Column fillWidth horizontal="center" gap="48">
            <RevealFx fillWidth horizontal="center">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                {home.toolkit.title}
              </Heading>
            </RevealFx>
            <Row fillWidth gap="48" wrap paddingTop="48" s={{ direction: "column" }}>
              {home.toolkit.categories.map((category, index) => (
                <RevealFx
                  key={category.title}
                  translateY="16"
                  delay={0.1 * (index + 1)}
                  flex={1}
                  style={{ minWidth: "240px" }}
                >
                  <Column fillWidth gap="32" padding="24" radius="l" border="neutral-alpha-weak">
                    <Row gap="8" vertical="center">
                      <Icon name={category.icon} onBackground="brand-medium" />
                      <Text variant="heading-strong-m">{category.title}</Text>
                    </Row>
                    <Row wrap gap="8">
                      {category.items.map((item) => (
                        <Tag key={item} size="l">
                          {item}
                        </Tag>
                      ))}
                    </Row>
                  </Column>
                </RevealFx>
              ))}
            </Row>
          </Column>
          <Row fillWidth paddingRight="128" paddingTop="80">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      {home.collaboration?.display && (
        <Column fillWidth gap="48" marginBottom="0">
          <Column fillWidth horizontal="center" gap="48">
            <RevealFx fillWidth horizontal="center">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                {home.collaboration.title}
              </Heading>
            </RevealFx>
            <Column fillWidth maxWidth="s" gap="40" paddingTop="48">
              {home.collaboration.items.map((item, index) => (
                <RevealFx key={item.title} translateY="12" delay={0.1 * (index + 1)} fillWidth>
                  <Row fillWidth gap="32">
                    <Icon name={item.icon} onBackground="brand-medium" size="m" />
                    <Column gap="8">
                      <Text variant="heading-strong-m">{item.title}</Text>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {item.description}
                      </Text>
                    </Column>
                  </Row>
                </RevealFx>
              ))}
            </Column>
          </Column>
          <Row fillWidth paddingLeft="128" marginTop="80" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      {/* <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx> */}
     
      {/* <Projects range={[2]} /> */}
      {/* <Mailchimp /> */}
      <ContactForm />
    </Column>
  );
}
