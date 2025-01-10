import { Container, Heading, Text } from "@yamada-ui/react";

export default function Home() {
  return (
<Container>
  <Heading size="xl" className="text-green-700">トップページです</Heading>
  <Text>
   Next.jsの最新15.1.4で作成されてます。reactは19.0.0です。
  </Text>
</Container>
  );
}
