import Link from "next/link";
import { Home } from "lucide-react"; // example icon

export const HomeButton = () => {
  return (
    <Link href="/" className="p-2 ml-2">
      <Home />
    </Link>
  );
};
