import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hallo!!!! <GradientText>Andi</GradientText>, So einfach gehts auf einer speziellen Web-Addresse!. Ja wenn man die Lupe findet 👋👋👋
        </>
      }
      description={
        <>
          Ich schreibe hier den ersten Text, erste Zeile{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            malesuada
          </a>{' '}
          Ich schreibe hier den ersten Text, zweite Zeile,{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            folgende Zeile
          </a>{' '}
         und ende des Textes.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
