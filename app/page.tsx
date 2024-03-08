import ActionButton from "@/components/action-button";
import Bullet from "@/components/bullet";
import Header from "@/components/header";
import ReviewsSlider from "@/components/reviews-slider";
import TabsWithFlexGrid from "@/components/tabs-with-flex-grid";
import TabsWithFlexGrid2 from "@/components/tabs-with-flex-grid2";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { labels, plans, qualities } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight as ArrowCircleRight } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="w-full bg-black-bg bg-no-repeat bg-cover py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-[1fr_2fr] max-lg:grid-cols-1 px-4 gap-x-16">
          <Card className="p-0 w-full">
            <CardContent className="p-6 space-y-3">
              <div className="flex gap-2 items-center">
                <ArrowCircleRight className="w-4 h-4" /> Cliento Co-Ordination
                And Support
              </div>
              <div className="flex gap-2 items-center">
                <ArrowCircleRight className="w-4 h-4" /> Customer Satisfaction
              </div>
              <div className="flex gap-2 items-center">
                <ArrowCircleRight className="w-4 h-4" /> Ownership Rights
              </div>
              <div className="flex gap-2 items-center">
                <ArrowCircleRight className="w-4 h-4" /> Experienced
                Professionals
              </div>
              <div className="flex gap-2 items-center">
                <ArrowCircleRight className="w-4 h-4" /> Money Back Guarantee
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-wrap max-sm:justify-center justify-around mt-7 px-4 gap-5 max-lg:py-4">
            <div className="flex justify-center items-center flex-col gap-4">
              <Image
                src="/images/logo-design.svg"
                className="max-lg:w-32 max-lg:h-32"
                width="80"
                height="80"
                alt="logo"
              />
              <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-center">
                5436+
              </h2>
              <p className="text-base text-center">
                Logo <br /> Designs
              </p>
            </div>
            <div className="flex justify-center items-center flex-col gap-y-2">
              <Image
                src="/images/web.svg"
                className="max-lg:w-32 max-lg:h-32"
                width="80"
                height="80"
                alt="logo"
              />
              <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-center">
                285+
              </h2>
              <p className="text-base text-center">
                Web Design <br /> & Development
              </p>
            </div>
            <div className="flex justify-center items-center flex-col gap-y-2">
              <Image
                src="/images/branding.svg"
                className="max-lg:w-32 max-lg:h-32"
                width="80"
                height="80"
                alt="logo"
              />
              <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-center">
                1119+
              </h2>
              <p className="text-base text-center">
                Branding <br /> Solutions Provided
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-three-bg bg-no-repeat bg-cover py-8">
        <div className="text-center max-w-4xl pb-8 mx-auto px-4">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            What do you need designed?
          </h3>
          <p>
            We cater to each and every design need that you may have. Good
            Design is known to create impact, evoke emotions and create a
            certain sense of loyalty. Design works in wondrous ways to boost the
            look and growth of your business and we are more than willing to
            provide you with design that serves the purpose.
          </p>
        </div>
        <div className="flex flex-wrap w-full justify-between max-md:justify-center max-md:gap-5 max-w-7xl mx-auto px-4 place-content-center">
          <div className="rounded-full border-primary border-2 h-40 w-40 max-md:h-52 max-md:w-52 text-center flex flex-col justify-center items-center bg-primary text-background">
            <Image
              src="/images/logo-design-2.svg"
              alt="Logo Design"
              className="px-4 pt-4 text-white max-md:p-0 max-md:w-[110px] max-md:h-[110px]"
              width="100"
              height="100"
            />
            <p className="px-4 pb-4 pt-2 max-md:p-0 text-xs max-md:text-base">
              Logo Design
            </p>
          </div>
          <div className="rounded-full border-primary border-2 h-40 w-40 max-md:h-52 max-md:w-52 text-center flex flex-col justify-center items-center bg-primary text-background">
            <Image
              src="/images/branding-2.svg"
              alt="Logo Design"
              className="px-4 pt-4 max-md:p-0 text-white max-md:w-[110px] max-md:h-[110px]"
              width="100"
              height="100"
            />
            <p className="px-4 pb-4 pt-2 max-md:p-0 text-xs max-md:text-base">
              Branding Services
            </p>
          </div>
          <div className="rounded-full border-primary border-2 h-40 w-40 max-md:h-52 max-md:w-52 text-center flex flex-col justify-center items-center bg-primary text-background gap-y-4">
            <Image
              src="/images/animation.svg"
              alt="Logo Design"
              className="px-4 pt-4 max-md:p-0 text-white max-md:w-[110px] max-md:h-[110px]"
              width="100"
              height="100"
            />
            <p className="px-4 pb-4 pt-2 max-md:p-0 text-xs max-md:text-base">
              Video Animation <br /> Services
            </p>
          </div>
          <div className="rounded-full border-primary border-2 h-40 w-40 max-md:h-52 max-md:w-52 text-center flex flex-col justify-center items-center bg-primary text-background ">
            <Image
              src="/images/web-2.svg"
              alt="Logo Design"
              className="px-4 pt-4 max-md:p-0 text-white max-md:w-[110px] max-md:h-[110px]"
              width="100"
              height="100"
            />
            <p className="px-4 pb-4 max-md:p-0 text-xs max-md:text-base">
              Website Design <br /> & Development
            </p>
          </div>
          <div className="rounded-full border-primary border-2 h-40 w-40 max-md:h-52 max-md:w-52 text-center flex flex-col justify-center items-center bg-primary text-background">
            <Image
              src="/images/mobile.svg"
              alt="Logo Design"
              className="px-4 pt-4 max-md:p-0 text-white max-md:w-[110px] max-md:h-[110px]"
              width="100"
              height="100"
            />
            <p className="px-4 pb-4 pt-2 max-md:p-0 text-xs max-md:text-base">
              Mobile App <br /> Development
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 max-[950px]:grid-cols-1 max-w-7xl mx-auto w-full">
          <div className="space-y-3 md:py-16 pt-8 pb-4 px-4">
            <h3 className="scroll-m-20 text-2xl text-primary font-semibold tracking-tight">
              Logo designing at its Absolute Best
            </h3>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Brand Logo’s create Brand Identity
            </h3>
            <p>
              We believe in creating brand identity through our brand logos.
              These logos are created by professionals with considerable
              experience, skill and qualification at rates that suit your
              pocket. These professionals ensure the logo settles with the brand
              theory and business idea and works only to enhance the purpose of
              branding.
            </p>
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <ArrowCircleRight className="w-4 h-4 text-primary" /> Monogram
                logos (or lettermarks)
              </div>
              <div className="flex gap-2 items-center">
                <ArrowCircleRight className="w-4 h-4 text-primary" /> Pictorial
                marks (or logo symbols)
              </div>
              <div className="flex gap-2 items-center">
                <ArrowCircleRight className="w-4 h-4 text-primary" /> Mascots
              </div>
              <div className="flex gap-2 items-center">
                <ArrowCircleRight className="w-4 h-4 text-primary" /> The emblem
              </div>
              <div className="flex gap-2 items-center">
                <ArrowCircleRight className="w-4 h-4 text-primary" /> Wordmarks
                (or logotypes)
              </div>
              <div className="flex gap-2 items-center">
                <ArrowCircleRight className="w-4 h-4 text-primary" /> Abstract
                logo marks
              </div>
            </div>
            <ActionButton label="VIEW LOGO PACKAGES" />
          </div>
          <Image
            src="/images/Component-11.gif"
            alt="Component 11"
            width="250"
            height="250"
            className="w-full h-full"
          />
        </div>
      </section>
      <section className="flex bg-previous-work bg-no-repeat bg-cover py-6 w-full">
        <div className="text-center max-w-4xl pb-8 mx-auto px-4">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            We have done a lot of work and we would <br />
            like for you to take a look!
          </h3>
          <p className="text-xs mt-3 mb-5">
            Here’s a portfolio made out of hard work, skill and passion
          </p>
          <TabsWithFlexGrid labels={labels} />
        </div>
      </section>
      <div className="bg-call-bg px-7 pt-10 pb-8">
        <div className="grid grid-cols-2 max-md:grid-cols-1 mx-auto max-w-7xl gap-5">
          <div className="max-w-[34rem] font-bold mx-auto">
            <p>
              Design4Them is determined to provide exceptional branding, website
              and digital marketing solutions to business and brands. We help
              you create your brand.{" "}
              <Link href="#" className="hover:underline">
                Let’s create brands that build businesses.
              </Link>
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <p>Give us a call:</p>
            <Link
              href="tel:(647) 495-6338"
              className="scroll-m-20 text-xl font-semibold tracking-tight"
            >
              (647) 495-6338
            </Link>
          </div>
        </div>
      </div>
      <div className="p-8 text-center space-y-6">
        <div className="bg-quality space-y-4">
          <div className="mx-auto max-w-[43rem] space-y-3">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
              Size of your business doesn’t matter at Design4Them. For us, it is
              the simple idea that lets us help you develop an identity through
              magnificent design and appropriate marketing.
            </h2>
            <p className="text-xs">
              Businesses worldwide have benefited from our services as we
              progressed with them, step by step, into creating the brand of
              their dreams.
            </p>
          </div>
          <div className="mx-auto grid lg:grid-cols-4 md:grid-cols-3 max-md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6 justify-center items-center w-full max-w-7xl">
            {qualities.map((quality, index) => {
              const size: {
                width: number | `${number}` | undefined;
                height: number | `${number}` | undefined;
              } = {
                width: index !== 2 ? "50" : "70",
                height: index !== 2 ? "50" : "70",
              };
              return (
                <div
                  key={index}
                  className="w-full h-[200px] border border-[#01B1AE] rounded-[1.5rem] div-gradient flex justify-center items-center flex-col space-y-1"
                >
                  <Image
                    src={`/images/qualities/${index}.svg`}
                    alt={quality.title}
                    {...size}
                  />
                  <div>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                      {quality.title}
                    </h3>
                    <p className="scroll-m-20 text-xl font-semibold tracking-tight">
                      {quality.helper}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <section className="flex bg-pricing bg-no-repeat bg-cover py-6 w-full">
        <div className="text-center max-w-6xl pb-8 mx-auto px-4">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
            What is going to be the Cost?
          </h3>
          <p className="text-xs font-semibold pt-2">
            We like to serve the industry with persuasive and conceptual designs
            that rock the market. <br />
            Creating an impact is what we do best and what we like to provide to
            every client with our pocket-friendly packages.
          </p>
          <TabsWithFlexGrid2 labels={plans} />
        </div>
      </section>
      <div className="w-full py-16 px-3 bg-complete bg-no-repeat bg-cover">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            $2,999. Yes. That’s all it takes for complete <br />
            branding at Design4Them.
          </h3>
          <p className="text-xs mt-3 mb-5">
            We have ample experience when it comes to transforming brands and
            their identities. Design4Them uses all that into creating a unique
            brand image for you in packages that are made to suit your needs and
            budget.
          </p>
        </div>
        <div className="rounded-[17px] bg-[#222222ad] border border-primary p-[30px_20px] backdrop-blur-[6px] mx-auto max-w-7xl mb-[60px] mt-[50px]">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary text-center">
            Complete Branding Solution
          </h2>
          <div className="grid grid-cols-[3fr_1fr] max-md:grid-cols-1 max-md:flex max-md:flex-col max-md:grid-rows-2 gap-4 h-auto">
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
              <div className="space-y-4">
                <div>
                  <h1 className="cbs-gradient rounded-[5px] p-[6px_20px] text-primary text-center font-semibold text-[13px] my-[10px]">
                    Logo Design
                  </h1>
                  <div className="space-y-3">
                    <Bullet label="Unlimited Logo Concepts" />
                    <Bullet label="Unlimited Revisions" />
                    <Bullet label="Icon Design" />
                    <Bullet label="All Final File Formats" />
                  </div>
                </div>
                <div>
                  <h1 className="cbs-gradient rounded-[5px] p-[6px_20px] text-primary text-center font-semibold text-[13px] my-[10px]">
                    Stationery
                  </h1>
                  <div className="space-y-3">
                    <Bullet label="Custom Stationery Designs" />
                    <Bullet label="Unlimited Revisions" />
                    <Bullet label="MS Word Letterhead (Letterhead, Envelope, Business Card, Invoice)" />
                  </div>
                </div>
                <div>
                  <h1 className="cbs-gradient rounded-[5px] p-[6px_20px] text-primary text-center font-semibold text-[13px] my-[10px]">
                    Social Media
                  </h1>
                  <div className="space-y-3">
                    <Bullet label="Facebook Page Design" />
                    <Bullet label="Twitter Page Design" />
                    <Bullet label="YouTube Page Design" />
                    <Bullet label="Google+ Page Design" />
                    <Bullet label="Instagram Page Design" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="cbs-gradient rounded-[5px] p-[6px_20px] text-primary text-center font-semibold text-[13px] my-[10px]">
                  Website
                </h1>
                <div className="space-y-3">
                  <Bullet label="Unlimited Pages Website" />
                  <Bullet label="Conceptual and Dynamic Liquid Website" />
                  <Bullet label="Content Management System (CMS)" />
                  <Bullet
                    label="Team of
                Expert Designers & Developers"
                  />
                  <Bullet label="Mobile Responsive (compatible with IOS, Android, Tablets etc)" />
                  <Bullet label="Custom Forms" />
                  <Bullet label="Lead Capturing Forms (Optional)" />
                  <Bullet label="Striking Hover Effects" />
                  <Bullet
                    label="Social Media
                Integration"
                  />{" "}
                  <Bullet label="Search Engine Submission" />
                  <Bullet
                    label="Unlimited Stock
                Images"
                  />{" "}
                  <Bullet label="Unlimited Stock Videos" />
                  <Bullet
                    label="Unlimited Banner
                Designs"
                  />{" "}
                  <Bullet label="JQuery Sliders" />
                </div>
              </div>
              <div className="space-y-3 mt-3 max-md:mt-0">
                <Bullet label="Free Google Friendly Sitemap" />
                <Bullet
                  label="Complete W3C
              Certified HTML"
                />{" "}
                <Bullet label=" WordPress (Add, delete Products, Pages, Pictures, Videos)" />{" "}
                <Bullet label="Testing And Deployment" />
                <Bullet label="Cross Browser Compatible" />
                <Bullet label="Unique Interface" />
                <Bullet label="SEO Friendly Design" />
                <div>
                  <h1 className="cbs-gradient rounded-[5px] p-[6px_20px] text-primary text-center font-semibold text-[13px] my-[10px]">
                    Value Added Services
                  </h1>
                  <div className="space-y-3">
                    <Bullet label="All Final File Formats" />
                    <Bullet label="Dedicated Account Manager" />
                    <Bullet label="100% Ownership Rights" />
                    <Bullet label="100% Satisfaction Guarantee" />
                    <Bullet label="100% Unique Design Guarantee" />
                    <Bullet label="100% Money Back Guarantee." />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-y-10 items-center justify-start flex-col w-full h-fit">
              <div className="flex flex-col w-full gap-y-6">
                <h2 className="scroll-m-20 text-4xl font-semibold text-center tracking-tight lg:text-5xl">
                  $2,999
                </h2>
                <div className="flex flex-col gap-y-5 w-full">
                  <Button className="text-white bg-[#00615f]">Order Now</Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border-primary hover:bg-primary"
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <Image
                src="/images/100.svg"
                alt="100% Money Back Guarantee"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-16 px-3 bg-center bg-outstretched bg-no-repeat bg-cover">
        <div className="md:pl-28 max-md:mx-auto max-md:pl-3 max-md:pr-3 max-md:max-w-7xl">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Outstreched Digital Exposure With <br />
            <span className="text-primary">Design4Them</span>
          </h2>
          <p className="text-[14px] max-w-[30rem]">
            Design4Them has a well-balanced set of technologies to create
            incredible digital solutions, with a goal to empower entrepreneurs,
            startups, and businesses through technology and innovation. We
            produce next-generation designs and deliver a digital experience for
            optimised business growth. <br />
            <br /> Our strategic plan is focused on creating custom logo
            designs, proposing result-driven marketing strategies, and
            developing robust websites. We house digital gypsies and creative
            junkies for logo designs in UK, customised designing, video
            animation, branding, website, and mobile app development. <br />
            <br /> We follow a dynamic approach with new and improved digital
            strategies that help businesses maintain the core of industry
            growth. Design4Them teams adept developers and designers, digital
            strategists, and industry analysts who are focused on increasing
            stability and relevancy of businesses. Our progressions and work
            strategies bring for us a dependable global clientele, improved
            results, and strong digital exposures. <br />
            <br /> We empower businesses to create digital stories, driven by
            purposeful strategies, with their unique logo designs. Your digital
            exposure is an opportunity for us to outdo our dynamic approach,
            with contemporary digital advances.
          </p>
        </div>
      </div>
      <div className="w-full py-16 px-3 pl-3 md:pr-16 bg-partner bg-no-repeat bg-cover flex justify-end items-end ">
        <div className="flex justify-end items-end max-md:items-start max-md:justify-start flex-col w-fit gap-y-3">
          <h2 className="scroll-m-20 text-2xl font-bold tracking-tight text-primary text-right max-md:text-left ">
            WE’RE PARTNERS IN CREATIVITY
          </h2>
          <h1 className="scroll-m-20 text-4xl text-right font-extrabold tracking-tight sm:text-[1.75rem] max-sm:text-[1.75rem] max-md:text-left  lg:text-3xl md:max-w-4xl">
            It is important to coordinate and communicate. As a result, we{" "}
            <br />
            ensure complete customer service as our representatives remain
            available 24/7 for your assistance
          </h1>
          <Button className="hover:green-linear bg-background text-primary w-fit hover:text-white hover:border-[#01b1ae] border-2">
            Call Us now to get started
          </Button>
        </div>
      </div>
      <div className="w-full py-16 px-3">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center mb-8">
          Our Esteemed Clients
        </h3>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          <Image src="/images/clients/1.png" width={170} height={170} alt="1" />
          <Image src="/images/clients/2.png" width={220} height={170} alt="1" />
          <Image src="/images/clients/3.png" width={170} height={170} alt="1" />
          <Image src="/images/clients/4.png" width={190} height={170} alt="1" />
        </div>
      </div>
      <div className="bg-blueline2 content-[''] absolute bottom-0 h-0.5 w-[90%] bg-no-repeat bg-contain" />
      <div className="w-full py-16 px-3 bg-center bg-business bg-no-repeat bg-cover flex flex-col justify-center items-center">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
          Businesses that leave a long lasting impact.
        </h3>
        <p className="text-xs mt-3 mb-5 text-center">
          Creating Brilliance Together.
        </p>
        <div className="mx-auto max-w-7xl">
          <ReviewsSlider />
        </div>
      </div>
      <div className="w-full py-16 px-3 bg-center bg-partner-up bg-no-repeat bg-cover flex flex-col justify-center items-center">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
          How Can we Partner Up?
        </h3>
        <p className="text-xs max-w-2xl mt-3 mb-5 text-center">
          From the very first day to the very last day, we make sure we provide
          you the best of our services with effective communication, skilled
          team members and a lot of passion for marketing. Contact Us Now.
          Constant Client Coordination Supreme Customer Satisfaction
        </p>
      </div>
    </div>
  );
}
