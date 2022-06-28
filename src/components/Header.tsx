import { HamburguerMenu } from "./HamburguerMenu";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-gray-700 border-b border-gray-600 lg:py-5 lg:px-0 lg:justify-center">
      <Logo />
      <HamburguerMenu />
    </header>
  );
}
