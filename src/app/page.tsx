import { Card, CardBody } from "@nextui-org/react";

import { env } from "@/env/server";

export default function Home() {
  console.log(env.NODE_ENV);

  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="text-center">
        <h1 className="text-4xl">Next.js Starter</h1>
        <p className="text-xl">A simple Next.js Starter Template</p>
      </CardBody>
    </Card>
  );
}
