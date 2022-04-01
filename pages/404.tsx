import { useRouter } from "next/router";
import { ArrowLeft } from "react-feather";

import { Button, ButtonLink } from "@/components/Button";
import { ActionGroup, Cta, Description, Greeting } from "@/components/Cta";
import Layout from "@/components/Layout";

const PageNotFound: React.FC = () => {
  const router = useRouter();

  return (
    <Layout title="Page Not Found">
      <Cta>
        <Greeting>We lost this page</Greeting>
        <Description>
          Sorry, the page you are looking for doesn&#39;t exist or has been
          moved.
          <br />
          Here are some helpful links:
        </Description>
        <ActionGroup>
          <Button onClick={() => router.back()}>
            <ArrowLeft size={14} />
            Go back
          </Button>
          <ButtonLink variant="primary" href="/">
            Take me home
          </ButtonLink>
        </ActionGroup>
      </Cta>
    </Layout>
  );
};

export default PageNotFound;
