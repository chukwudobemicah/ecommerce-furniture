// import { navLinks } from "@/utils/constants/navLinks.constant";
import { cn } from "@/utils/functions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../Button/button";
import { useEffect, useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import useSidebarStore from "@/utils/store/useSidebarStore";
import useStopScroll from "@/utils/hooks/useStopScroll";
import Icon from "../icon-selector/icon-selector";
import { Dropdown } from "../Dropdown/Dropdown";
// import SettingsModal from "../SettingsModal/SettingsModal";
import Image from "next/image";

type SubLink = {
  title: string;
  url: string;
};

type NavLink = {
  title: string;
  url: string;
  subLinks?: SubLink[];
};

const navLinks: NavLink[] = [
  {
    title: "Pages",
    url: "/explore",
    subLinks: [
      { title: "New Pairs", url: "/explore/new-pairs" },
      { title: "Degen Hunter", url: "/explore/degen-hunter" },
      { title: "Token Explore", url: "/explore/token-explore" },
    ],
  },
  {
    title: "Blogs",
    url: "/trade",
    subLinks: [
      { title: "Limit Order", url: "/trade/limit-order" },
      { title: "Copy Trading", url: "/trade/copy-trading" },
    ],
  },
  { title: "Posts", url: "/tools" },
  { title: "Shop", url: "/jaguar-token" },
  { title: "Contacts", url: "/tutorials" },
];

const Nav = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobileSidebarOpen, setIsMobileSidebarOpen } = useSidebarStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useStopScroll(isMobileSidebarOpen);
  const [settingsModalIsOpen, setSettingsModalIsOpen] = useState(false);
  console.log(settingsModalIsOpen, "settingsModalIsOpen");

  return (
    <>
      <main
        className={cn("w-full sticky z-[9999] top-0 left-0 flex-center", {
          "h-fit bg-container_gradient backdrop-blur-md": isScrolled,
        })}
      >
        {/* <div className="invisible h-0 w-0">
          <SettingsModal
            setIsOpen={setSettingsModalIsOpen}
            isOpen={settingsModalIsOpen}
          />
        </div> */}
        <nav
          className={cn(
            "pt-3 pb-5 lgxx:pt-6 lgxx:pb-7 max-sm:pl-4 max-sm:pr-3 sm:px-[3%] flex justify-between items-end mx-auto md:gap-12",
            {
              "pt-1.5 pb-5": isScrolled,
            }
          )}
        >
          <div className="flex items-end gap-8">
            <Link href={"/"} className="scale-up">
              <Icon iconType={"logo"} className=" w-24 sm:w-36" />
            </Link>
            {/* Desktop Menu */}

            <ul className="hidden items-center font-titan-one lgxx:flex gap-[1.1rem]">
              {navLinks.map((link, index) => {
                console.log(pathname, "pathname");
                // Helper function to check if the current pathname matches any sublink
                const isActiveLink = (link: NavLink) => {
                  if (pathname === link.url) return true;
                  if (link.subLinks) {
                    return link.subLinks.some(
                      (subLink) => pathname === subLink.url
                    );
                  }
                  return false;
                };
                return (
                  <li
                    key={index}
                    className={cn("relative", {
                      "active-nav-link": pathname === link.url,
                      "nav-link": pathname !== link.url,
                    })}
                  >
                    {link.subLinks ? (
                      <Dropdown.Root>
                        <Dropdown.Trigger
                          className={cn("text-[0.94rem] max-xl:text-xs", {
                            // "text-primary": isActiveLink(link),
                          })}
                        >
                          <div
                            className={cn("!flex items-center gap-2", {
                              "active-nav-link": isActiveLink(link),
                            })}
                          >
                            <p>{link.title}</p>
                            <div>
                              <Icon
                                iconType={"chevron"}
                                className="w-1.5 rotate-90"
                              />
                            </div>
                          </div>
                        </Dropdown.Trigger>
                        <Dropdown.Content className="bg-black text-white ">
                          {link.subLinks.map((subLink, subIndex) => (
                            <Dropdown.Item
                              isLastItem={
                                link?.subLinks &&
                                subIndex === link?.subLinks.length - 1
                              }
                              key={subIndex}
                              asChild
                              className={cn({
                                "text-primary bg-grey font-bold":
                                  pathname === subLink.url,
                              })}
                            >
                              <Link
                                href={subLink.url}
                                className={cn(
                                  "block px-4 py-2 text-[0.94rem] max-xl:text-xs",
                                  {
                                    "text-primary": pathname === subLink.url,
                                  }
                                )}
                              >
                                {subLink.title}
                              </Link>
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Content>
                      </Dropdown.Root>
                    ) : (
                      <Link
                        href={link.url}
                        className={cn(
                          " max-xl:text-xs hover:text-white transition-all duration-300 ease-in-out text-[0.94rem] cursor-pointer inline-block"
                        )}
                      >
                        {link.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="bg-black border hidden min-[1650px]:flex items-center p-2 text-white/50 border-border h-[37px] w-[250px] translate-y-[12%]">
              <div>
                <Icon iconType={"search"} className="w-4" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="p-2 bg-transparent outline-none w-full"
              />
            </div>
          </div>
          {/* Mobile Menu */}
          <div
            className={cn(
              "fixed top-[4.5rem] z-[999999999999] left-0 w-full h-[calc(100vh-4.5rem)] bg-background transition-transform duration-300 ease-in-out lgxx:hidden",
              {
                "translate-x-0": isMobileSidebarOpen,
                "-translate-x-full": !isMobileSidebarOpen,
              }
            )}
          >
            <ul className="flex flex-col items-center justify-center pt-8 gap-6">
              {navLinks.map((link, index) => {
                console.log(pathname, "pathname");
                // Helper function to check if the current pathname matches any sublink
                const isActiveLink = (link: NavLink) => {
                  if (pathname === link.url) return true;
                  if (link.subLinks) {
                    return link.subLinks.some(
                      (subLink) => pathname === subLink.url
                    );
                  }
                  return false;
                };
                return (
                  <li key={index} className="relative">
                    {link.subLinks ? (
                      <Dropdown.Root>
                        <Dropdown.Trigger
                          className={cn("", {
                            "text-primary": isActiveLink(link),
                          })}
                        >
                          <div
                            className={cn("flex items-center gap-2", {
                              "text-primary": isActiveLink(link),
                            })}
                          >
                            <p>{link.title}</p>
                            <div>
                              <Icon
                                iconType={"chevron"}
                                className="w-1.5 rotate-90"
                              />
                            </div>
                          </div>
                        </Dropdown.Trigger>
                        <Dropdown.Content className="bg-black text-white ">
                          {link.subLinks.map((subLink, subIndex) => (
                            <Dropdown.Item
                              isLastItem={
                                link?.subLinks &&
                                subIndex === link?.subLinks.length - 1
                              }
                              key={subIndex}
                              asChild
                              className={cn({
                                "text-primary bg-grey font-bold":
                                  pathname === subLink.url,
                              })}
                            >
                              <Link
                                onClick={() => {
                                  setIsMobileSidebarOpen(false);
                                }}
                                href={subLink.url}
                                className={cn(
                                  "block px-4 py-2 text-[0.94rem] max-xl:text-xs",
                                  {
                                    "text-primary": pathname === subLink.url,
                                  }
                                )}
                              >
                                {subLink.title}
                              </Link>
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Content>
                      </Dropdown.Root>
                    ) : (
                      <Link
                        href={link.url}
                        onClick={() => {
                          setIsMobileSidebarOpen(false);
                        }}
                        className={cn(
                          " hover:text-white transition-all duration-300 ease-in-out cursor-pointer",
                          { "text-primary": pathname === link.url }
                        )}
                      >
                        {link.title}
                      </Link>
                    )}
                  </li>
                );
              })}
              <div className="flex items-center gap-2 text-sm">
                <p>0.001500</p>
                <div>
                  <Icon iconType={"fuel"} className="w-4 text-[#BAB6B6]" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <p>0.001500</p>
                <div>
                  <Icon iconType={"hand"} className="w-5 text-[#BAB6B6]" />
                </div>
              </div>
              <Button
                variant="secondary"
                className="w-8 p-0 aspect-square flex justify-center items-center"
              >
                <Icon
                  iconType={"notification"}
                  className="w-3 text-[#BAB6B6]"
                />
              </Button>
              <Button
                variant="secondary"
                className="w-8 p-0 aspect-square flex justify-center items-center"
              >
                <Icon iconType={"star"} className="w-3.5 text-[#BAB6B6]" />
              </Button>

              <Button
                className="whitespace-nowrap text-sm pb-2 pt-1.5 px-5"
                variant="secondary"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Icon iconType={"chain"} className="w-5" />
                    <Image
                      alt="solana"
                      src={"/images/solana.svg"}
                      className="w-3 absolute -bottom-1 -right-1"
                      priority
                      width={12}
                      height={12}
                    />
                  </div>
                  Solana
                </div>
              </Button>
            </ul>
          </div>
          {/*  */}
          <div className="flex items-end gap-3 xs:gap-4">
            <div className="flex max-lgxx:hidden items-center gap-4 mr-">
              <div className="flex items-center gap-2">
                <p>0</p>
                <div>
                  <Image
                    alt="solana"
                    src={"/images/solana.svg"}
                    className="size-6 max-w-none"
                    priority
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              {/*  */}
              <div className="flex items-center gap-2 text-sm">
                <p>0.001500</p>
                <div>
                  <Icon iconType={"fuel"} className="w-4 text-[#BAB6B6]" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <p>0.001500</p>
                <div>
                  <Icon iconType={"hand"} className="w-5 text-[#BAB6B6]" />
                </div>
              </div>
              <Button
                variant="secondary"
                className="w-8 p-0 aspect-square flex justify-center items-center"
              >
                <Icon
                  iconType={"notification"}
                  className="w-3 text-[#BAB6B6]"
                />
              </Button>
              <Button
                variant="secondary"
                className="w-8 p-0 aspect-square flex justify-center items-center"
              >
                <Icon iconType={"star"} className="w-3.5 text-[#BAB6B6]" />
              </Button>
            </div>
            <Dropdown.Root>
              <Dropdown.Trigger>
                <div className="cursor-pointer">
                  <Button className="whitespace-nowrap px-8">
                    <div className="flex items-center gap-2">
                      <p>@user</p>
                      <div>
                        <Icon
                          iconType={"chevron"}
                          className="w-2 rotate-90 translate-y-0.5"
                        />
                      </div>
                    </div>
                  </Button>
                </div>
              </Dropdown.Trigger>

              <Dropdown.Content>
                <Dropdown.Item asChild className="h">
                  <Link href={"/portfolio"}>Portfolio </Link>
                </Dropdown.Item>
                <Dropdown.Item asChild className="h">
                  <Link href={"/wallet-management"}>Wallet Manager </Link>
                </Dropdown.Item>
                <Dropdown.Item asChild className="h">
                  <Link href={"/referrals"}>Referrals </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  asChild
                  onClick={() => {
                    setSettingsModalIsOpen(true);
                  }}
                >
                  <div>
                    <div>Settings</div>
                  </div>
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Root>
            <Button
              className="whitespace-nowrap max-sm:hidden text-sm pb-2 pt-1.5 px-5"
              variant="secondary"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Icon iconType={"chain"} className="w-5" />
                  <Image
                    alt="solana"
                    src={"/images/solana.svg"}
                    className="w-3 absolute -bottom-1 -right-1"
                    priority
                    width={24}
                    height={24}
                  />
                </div>
                Solana
              </div>
            </Button>

            <div
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              className="lgxx:hidden translate-y-2"
            >
              <Hamburger toggled={isMobileSidebarOpen} />
            </div>
          </div>
        </nav>
      </main>
      <div className=" max-sm:pl-4 max-sm:pr-3 sm:px-[3%] mb-8 min-[1650px]:hidden">
        <div className="bg-black border flex items-center p-2 text-white/50 border-border h-[37px] w-[250px]">
          <div>
            <Icon iconType={"search"} className="w-4" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="p-2 bg-transparent outline-none w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
