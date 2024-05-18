import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "src/app/assets/logos/Cobuild_Logo.svg";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image src={logo} alt="Logo" width={150} className="ml-5" />
      </Link>
    </div>
  );
};

export default Logo;
