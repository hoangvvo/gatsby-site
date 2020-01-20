import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Hoang is a curious learner, a practical thinker, a tech-savvy person, and a good friend. He is willing to meet you!"
    />
    <section className="container mx-auto flex flex-col justify-center py-32 min-h-screen">
      <h1 className="text-8xl font-hairline">
        Hi, I&apos;m <b className="font-black">Hoang</b>
      </h1>
      <p className="text-5xl font-hairline leading-tight opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out">
        I am a{' '}
        <b className="font-black underline-bg theme-gradient">
          curious learner
        </b>
        , a{' '}
        <b className="font-black underline-bg theme-gradient">
          practical thinker
        </b>
        , a{' '}
        <b className="font-black underline-bg theme-gradient">
          tech-savvy person
        </b>
        , and{' '}
        <b className="font-black underline-bg theme-gradient">
          your good friend
        </b>
        .
      </p>
    </section>
    <section className="container mx-auto leading-relaxed py-32">
      <h2 className="text-7xl font-extrabold text-stroke text-center">
        I do quite lots of things
      </h2>
      <p className="opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out text-2xl">
        I am simply an average guy who does <b>Computer Programming</b>,{' '}
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
        I am a <b>Javascript</b> developer comfortable with <b>React</b>{' '}
        frameworks such as
        <b>Gatsby.js</b> and <b>Next.js</b>. At the same time, I am building
        apps with <b>Node.js</b> frameworks and powering APIs with{' '}
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
        I am an enthusiastic photographer, loyal to the Sony ecosystem. I do
        portrait and landscape and also play around with photo manipulation.
      </p>
      <p className="mt-2 opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out text-2xl">
        Back in the day, I was a graphic designer for local organizations. I
        also do digital music composition from time to time using FL Studio.
      </p>
    </section>
  </Layout>
);

export default IndexPage;
