import { footerlinks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer-shadow bg-background pt-8">
      <div className="max-w-7xl px-4 w-full mx-auto space-y-4">
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1">
          {footerlinks.map((item, index) => {
            const containLinks = item.type === "links";
            return (
              <div key={index} className="space-y-2">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-primary">
                  {item.head}
                </h4>
                <div className="flex gap-y-2 flex-col text-xs">
                  {item.items &&
                    (
                      item.items as {
                        label: string;
                        link: string;
                      }[]
                    ).map(({ label, link }, index) => (
                      <div key={index}>
                        {containLinks ? (
                          <Link href={link}>{label}</Link>
                        ) : (
                          <p>{label}</p>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center flex-col gap-4 items-center">
          <Image
            src="/images/footer-1.svg"
            alt="footer1"
            width={400}
            height={400}
          />
          <Image
            src="/images/footer-2.svg"
            alt="footer2"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="flex items-center mt-6 justify-center py-6 px-4 w-full bg-primary">
        <div className="flex flex-col gap-2 justify-center items-center">
          <Image
            src="/images/footer-3.svg"
            alt="footer3"
            width={150}
            height={150}
          />
          <p className="text-xs text-black">© 2022. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
