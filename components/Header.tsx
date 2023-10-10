import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://links.papareact.com/1m8"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>ZAPTECH</h1>
      </div>
      <div>
        <Link
          href="https://r.mtdv.me/Ldw3ffE2he"
          className="px-5 py-3 tetx-sm md:text-base bg-gray-900 text-gray-100 flex items-center rounded-full text-center"
        >
          Subscribe For Free
        </Link>
      </div>
    </header>
  );
};

export default Header;
