import React from 'react'
import Link from 'next/link'

const SocialTree = ({social}) => {
  const { facebook, twitter, instagram, youtube, linkedin, github } = social;
  return (
    <>
      <div className="social flex flex-row justify-center mt-16">
        <Link
          className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none"
          target="_blank"
          href={`https://facebook.com/${facebook}`}
        >
          <img className="w-6" src="/svg/facebook.svg" alt="facebook" />
        </Link>
        <Link
          className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none"
          target="_blank"
          href={`https://instagram.com/${instagram}`}
        >
          <img className="w-6" src="/svg/insta.svg" alt="insta" />
        </Link>
        <Link
          className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none"
          target="_blank"
          href={`https://youtube.com/${youtube}`}
        >
          <img className="w-6" src="/svg/youtube.svg" alt="youtube" />
        </Link>
        <Link
          className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none"
          target="_blank"
          href={`https://linkedin.com/${linkedin}`}
        >
          <img className="w-6" src="/svg/linkedin.svg" alt="linkedin" />
        </Link>
        <Link
          className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none"
          target="_blank"
          href={`https://github.com/${github}`}
        >
          <img className="w-6" src="/svg/git.svg" alt="github" />
        </Link>
        <Link
          className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none"
          target="_blank"
          href={`https://twitter.com/${twitter}`}
        >
          <img className="w-6" src="/svg/twitter.svg" alt="twitter" />
        </Link>
      </div>
    </>
  );
};
 
export default SocialTree