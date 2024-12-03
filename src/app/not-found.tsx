import { Card, CardBody } from "@nextui-org/react";
import { FileQuestion } from "lucide-react";

const NotFound = () => {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody>
        <p className="flex items-center justify-center gap-2 text-xl">
          <FileQuestion /> This page cannot be found.
        </p>
      </CardBody>
    </Card>
  );
};

export default NotFound;
