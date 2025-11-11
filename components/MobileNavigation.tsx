import { navData } from "@/data/navbar";
import Link from "next/link";

interface MobileNavigationProps {
    onClose: () => void
}
export const MobileNavigation = ({onClose} : MobileNavigationProps) => {
  return (
    <div className="bg-black/50 backdrop-blur-sm md:hidden fixed inset-0 h-screen z-50 w-full">
      <div className="h-full flex flex-col justify-center space-y-8">
        {navData.map((value) => {
            return <Link onClick={onClose} className="text-2xl font-mono border-b pb-1 text-gray-100 border-gray-100/20 text-center" key={value.id} href={value.url}>{value.label}</Link>
        })}
      </div>
    </div>
  );
};
