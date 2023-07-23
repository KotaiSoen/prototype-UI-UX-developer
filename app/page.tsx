import Image from "next/image";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineCopyright } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";

export default function Home() {
  const projectPictures = [
    { url: "/python_wallpaper.jpg", creator: "Adam Blake", title: "python url shortener" },
    { url: "/eat_code_wallpaper.jpg", creator: "Josey London", title: "basics of js" },
  ];

  return (
    <main className="min-h-screen">
      <div className="bg-[#1C2B36] px-14 py-2 flex justify-between">
        <div className="flex items-center text-white">
          <BsCodeSlash size={30} />
          <p className="ml-2 text-xl">SellSource</p>
        </div>
        <div className="w-80 flex items-center justify-between text-gray-300 text-xs">
          <p>Start Selling</p>
          <p>Become an affiliate</p>
          <p>Blog</p>
          <p>Forum</p>
        </div>
        <div className="flex items-center text-white text-xs">
          <p>Login</p>
          <div className="bg-green-500 ml-4 p-2 rounded">
            <p>Signup</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-14 py-2 text-xs">
        <div className="flex items-center justify-between w-1/4">
          <p>Scripts & Code</p>
          <p>App Templates</p>
          <p>Plugins</p>
        </div>
        <div className="bg-gray-300 w-52 flex justify-between items-center p-2 px-3 rounded">
          <p>Search...</p>
          <AiOutlineSearch size={20} color="gray" />
        </div>
      </div>
      <div className="bg-[url('/code_image.jpg')] bg-contain h-[500px] flex flex-col items-center justify-center text-white">
        <p className="text-3xl">Become a Seller/Buyer</p>
        <p className="mt-10">
          Start making money by selling your best projects!
        </p>
        <p>
          Are you interested in a certain project? It can be yours for a price
        </p>
        <div className="bg-green-500 p-3 mt-10 rounded text-sm">
          <p>Sign up now</p>
        </div>
      </div>
      <div className="bg-gray-200 px-14 pb-32 py-4 divide-y divide-gray-400">
        <p className="font-bold text-xl py-2">Top Picks</p>
        <div className="flex gap-6 flex-wrap py-2 pt-3">
          {projectPictures.map((project) => {
            return (
              <div className="border border-black rounded p-2" key={project.url}>
                <Image
                  src={project.url}
                  width={200}
                  height={600}
                  alt="picture"
                  className="w-[200px] h-[200px]"
                />
                <p className="mt-2 text-xs">{project.title}</p>
                <p className="text-sm mt-4">{project.creator}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-[#1C2B36] flex justify-between px-14 py-10 text-white">
        <div>
          <p>
            <span className="font-bold">Follow</span> us
          </p>
          <div className="flex mt-8">
            <div className="bg-blue-900 w-fit p-1 rounded-sm">
              <BiLogoFacebook size={20} />
            </div>
            <div className="bg-blue-500 w-fit p-1 ml-2 rounded-sm">
              <BiLogoTwitter size={20} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center text-gray-400 text-xs">
          <p>Contact</p>
          <p>Terms and Conditions</p>
          <p className="flex items-center">
            <span className="mr-1">
              <AiOutlineCopyright />
            </span>
            2023 SellSource
          </p>
        </div>
        <div className="flex flex-col justify-between items-center text-gray-400 text-xs">
          <p>Help Center</p>
          <p>Forum</p>
          <p>Blog</p>
        </div>
      </div>
    </main>
  );
}
