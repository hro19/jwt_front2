import { Container, Heading, Text } from "@yamada-ui/react";

export default function Home() {
  return (
<Container>
  <Heading size="xl" className="text-green-700">トップページです</Heading>
  <Text>
   Next.jsの最新14.2.0で作成されてます。
  </Text>
</Container>
  );
}
