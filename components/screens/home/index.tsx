import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

import Link from "next/link";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>kyle wigley</h1>
            <h2>
              aka{" "}
              <Link href="https://github.com/kwigley" target="_blank" className="underline">
                @kwigley
              </Link>
              <br />
              aka{" "}
              <Link href="https://x.com/kylewigs" target="_blank" className="underline">
                @kylewigs
              </Link>
              <br />
              aka my grandma's personal IT specialist
            </h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>craft, refine, ship</p>
        <p>
          currently writing rust at{" "}
          <Link href="https://swishanalytics.com/business/" className="underline" target="_blank">
            swish analytics
          </Link>
        </p>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="posts" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="projects" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
