import { FC } from "react";
import Link from "next/link";

const NotFound: FC = () => {
  return (
    <div className="mx-auto my-auto text-center text-body">
      <p>Hey, this page doesn&apos;t exist!</p>
      <Link href="/" className="font-bold text-primary underline">
        Go back to the Home Page
      </Link>
    </div>
  );
};

export default NotFound;
