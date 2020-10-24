import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import IconGithub from '../assets/svgs/github.svg';
import IconTwitter from '../assets/svgs/twitter.svg';
import IconLinkedin from '../assets/svgs/linkedin.svg';

function SectionTitle({ children }) {
  return (
    <h2 className="text-7xl font-extrabold text-stroke leading-none text-center">
      {children}
    </h2>
  );
}

function SectionDoTitle({ children }) {
  return (
    <h3 className="text-5xl font-extrabold text-stroke leading-none mt-8 text-center">
      {children}
    </h3>
  );
}

function SectionDoParagraph({ children }) {
  return (
    <p className="mt-2 opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out text-2xl">
      {children}
    </p>
  );
}

export default function IndexPage() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            fullName
            twitter {
              username
            }
            github {
              username
            }
            linkedin {
              username
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <SEO title={site.siteMetadata.title} titleTemplate="%s" />
      <section className="container mx-auto flex flex-col justify-center px-6 py-32 min-h-screen">
        <h1 className="text-8xl font-hairline leading-tight">
          Hi, I&apos;m{' '}
          <b className="font-black">{site.siteMetadata.fullName}</b>
        </h1>
        <p className="text-5xl font-hairline leading-tight opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out">
          I am a <b className="font-black">curious learner</b>, a{' '}
          <b className="font-black">practical thinker</b>, a{' '}
          <b className="font-black">tech-savvy person</b>, and{' '}
          <b className="font-black">your good friend</b>.
        </p>
      </section>
      <section className="container mx-auto leading-relaxed px-6 py-16">
        <SectionTitle>I do quite lots of things</SectionTitle>
        <SectionDoParagraph>
          I am an average guy who does <b>Computer Programming</b>,{' '}
          <b>Graphic Design</b>, <b>Photography</b>, and a bunch of other wacky
          things.
        </SectionDoParagraph>
        <SectionDoParagraph>
          I have been bricking phones since 2010, tackling code since 2012,
          breaking the Web since 2015, shattering camera shutter since 2016, and
          being a good human being since forever.
        </SectionDoParagraph>
        <SectionDoTitle>The Web</SectionDoTitle>
        <SectionDoParagraph>
          I am a <b>Javascript</b> developer, comfortable with <b>React</b>{' '}
          frameworks such as <b>Gatsby.js</b> and <b>Next.js</b>. At the same
          time, I am building apps with <b>Node.js</b> and powering APIs with{' '}
          <b>GraphQL</b>.
        </SectionDoParagraph>
        <SectionDoParagraph>
          I am obsessed with the latest technologies such as <b>Serverless</b>{' '}
          and <b>Container</b>. I am serious about making the Web faster, one
          millisecond of latency at a time.
        </SectionDoParagraph>
        <SectionDoTitle>The Technology</SectionDoTitle>
        <SectionDoParagraph>
          I am interested in how we can improve human&apos;s behaviors and
          strengthen the integrity of the IoT.
        </SectionDoParagraph>
        <SectionDoParagraph>
          I advocate for better <b>privacy</b> in the digital ages. Companies
          need to step up in their efforts to tackle their users&apos; privacy
          issues while minimizing their own roles in such issues.
        </SectionDoParagraph>
        <SectionDoTitle>The Art</SectionDoTitle>
        <SectionDoParagraph>
          I am an enthusiastic photographer, loyal to the Sony ecosystem. I
          mostly do portrait and landscape, but I also play around with photo
          manipulation.
        </SectionDoParagraph>
        <SectionDoParagraph>
          Back in the day, I was a graphic designer for local organizations. I
          also do digital music composition from time to time using FL Studio.
        </SectionDoParagraph>
      </section>
      <section className="container mx-auto leading-relaxed px-6 py-16">
        <SectionTitle>Come find me</SectionTitle>
        <div className="flex flex-wrap justify-center mt-2">
          <a
            href={`https://twitter.com/${site.siteMetadata.twitter.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-full m-1 py-4 px-8 opacity-75 hover:opacity-100 shadow-md hover:shadow-lg transform hover:translate-y-1 transition-all ease-in-out duration-300"
          >
            <IconTwitter className="m-1" />
            Twitter
          </a>
          <a
            href={`https://github.com/${site.siteMetadata.github.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-full m-1 py-4 px-8 opacity-75 hover:opacity-100 shadow-md hover:shadow-lg transform hover:translate-y-1 transition-all ease-in-out duration-300"
          >
            <IconGithub className="m-1" />
            Github
          </a>
          <a
            href={`https://linkedin.com/in/${site.siteMetadata.linkedin.username}`}
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
}
