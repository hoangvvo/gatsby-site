import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import IconGithub from '../assets/svgs/github.svg';
import IconInstagram from '../assets/svgs/instagram.svg';
import IconTwitter from '../assets/svgs/twitter.svg';
import IconLinkedin from '../assets/svgs/linkedin.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Hoang Vo" titleTemplate="%s" />
    <section className="container mx-auto flex flex-col justify-center px-6 py-32 min-h-screen">
      <h1 className="text-8xl font-hairline">
        Hi, I&apos;m <b className="font-black">Hoang</b>
      </h1>
      <p className="text-5xl font-hairline leading-tight opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out">
        I am a <b className="font-black">curious learner</b>, a{' '}
        <b className="font-black">practical thinker</b>, a{' '}
        <b className="font-black">tech-savvy person</b>, and{' '}
        <b className="font-black">your good friend</b>.
      </p>
    </section>
    <section className="container mx-auto leading-relaxed px-6 py-16">
      <h2 className="text-7xl font-extrabold text-stroke text-center">
        I do quite lots of things
      </h2>
      <p className="opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out text-2xl">
        I am an average guy who does <b>Computer Programming</b>,{' '}
        <b>Graphic Design</b>, <b>Photography</b>, and a bunch of other wacky
        things.
      </p>
      <p className="mt-4 opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out text-2xl">
        I have been bricking phones since 2010, tackling code since 2012,
        breaking the Web since 2015, shattering shutter since 2016, toying with
        microcontrollers since 2017.
      </p>
      <h3 className="text-5xl font-extrabold text-stroke mt-8 text-center">
        The Web
      </h3>
      <p className="mt-2 opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out text-2xl">
        I am a <b>Javascript</b> developer, comfortable with <b>React</b>{' '}
        frameworks such as <b>Gatsby.js</b> and <b>Next.js</b>. At the same
        time, I am building apps with <b>Node.js</b> and powering APIs with{' '}
        <b>GraphQL</b>.
      </p>
      <p className="mt-4 opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out text-2xl">
        I am obsessed with the latest technologies such as <b>Serverless</b> and{' '}
        <b>Container</b>. I am serious about making the Web faster, one
        millisecond of latency at a time.
      </p>
      <h3 className="text-5xl font-extrabold text-stroke mt-8 text-center">
        The Technology
      </h3>
      <p className="mt-4 opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out text-2xl">
        I am a big admirer of <b>A.I</b> and <b>Blockchain</b> technology: I am
        interested in how we can improve human&apos;s behaviors and strengthen
        the integrity of the IoT.
      </p>
      <p className="mt-4 opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out text-2xl">
        I advocate for better <b>privacy</b> in the digital ages. Companies need
        to step up in their efforts to tackle their users&apos; privacy issues
        while minimizing their own roles in such issues.
      </p>
      <h3 className="text-5xl font-extrabold text-stroke mt-8 text-center">
        The Art
      </h3>
      <p className="mt-2 opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out text-2xl">
        I am an enthusiastic photographer, loyal to the Sony ecosystem. I mostly{' '}
        do portrait and landscap, but I also play around with photo
        manipulation.
      </p>
      <p className="mt-2 opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out text-2xl">
        Back in the day, I was a graphic designer for local organizations. I
        also do digital music composition from time to time using FL Studio.
      </p>
    </section>
    <section className="container mx-auto leading-relaxed px-6 py-16">
      <h2 className="text-6xl font-extrabold text-stroke text-center">
        Come find me
      </h2>
      <div className="flex flex-wrap justify-center mt-2">
        <a
          href="https://www.instagram.com/hoangvvo/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-full m-1 py-4 px-8 opacity-75 hover:opacity-100 text-accents-700 shadow-md hover:shadow-lg transform hover:translate-y-1 transition-all ease-in-out duration-300"
        >
          <IconInstagram className="m-1" />
          Instagram
        </a>
        <a
          href="https://twitter.com/hoangvvo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-full m-1 py-4 px-8 opacity-75 hover:opacity-100 shadow-md hover:shadow-lg transform hover:translate-y-1 transition-all ease-in-out duration-300"
        >
          <IconTwitter className="m-1" />
          Twitter
        </a>
        <a
          href="https://github.com/hoangvvo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-full m-1 py-4 px-8 opacity-75 hover:opacity-100 shadow-md hover:shadow-lg transform hover:translate-y-1 transition-all ease-in-out duration-300"
        >
          <IconGithub className="m-1" />
          Github
        </a>
        <a
          href="https://linkedin.com/in/hoangvvo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-full m-1 py-4 px-8 opacity-75 hover:opacity-100 shadow-md hover:shadow-lg transform hover:translate-y-1 transition-all ease-in-out duration-300"
        >
          <IconLinkedin className="m-1" />
          LinkedIn
        </a>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
