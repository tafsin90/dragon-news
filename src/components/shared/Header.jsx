import Image from "next/image";
import { format } from "date-fns";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <div className="text-center py-8 space-y-2">
      <Image
        src={logo}
        alt="Logo"
        width={500}
        height={200}
        className="mx-auto"
      />
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;
