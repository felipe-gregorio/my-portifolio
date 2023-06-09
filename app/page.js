import Head from "next/head";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Felipe Gregorio Portifolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="font-bagel text-xl">Portifolio</h1>
            <ul className="flex items-center">
              <li></li>
              <li>
                <a className="bg-cyan-800  px-4 py-2 rounded-md ml-12" href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 font-medium">Felipe Gregorio</h2>
            <h3 className="text-2xl py-2">Computer Engineering Student </h3>
            <p className="text-justify py-5 leading-6">
              Felipe Gregorio é um estudante de Engenharia da Computação na
              Universidade Tecnológica Federal do Paraná (UTFPR). Sua jornada na
              computação começou desde cedo, mas foi no ensino médio que ele
              decidiu que seria sua carreira e confirmou isso durante a
              graduação. Embora ainda seja um estudante, Felipe possui uma
              sólida base de conhecimento e habilidades em diversas áreas. Como
              um dos fundadores da empresa júnior Therion, ele atualmente ocupa
              o cargo de diretor de projetos. Essa experiência lhe proporcionou
              o desenvolvimento de habilidades em gerenciamento de projetos e
              liderança de equipes. Ao longo da graduação, ele também adquiriu
              conhecimento em linguagens de programação como Java, C/C++,
              Python, JavaScript, HTML e CSS. Além disso, ele trabalhou com
              microcontroladores como Arduino, aplicando seus conhecimentos em
              projetos de extensão com impacto social. Felipe é conhecido por
              sua habilidade de se comunicar de forma eficaz e sua honestidade.
              Ele é um excelente colaborador em equipes, demonstrando tanto
              liderança quanto habilidades de seguir liderança. Sua
              determinação, respeito, comprometimento e organização são
              características valorizadas por ele, as quais ele mantém com
              perseverança. Com sua paixão pela tecnologia, habilidades técnicas
              e qualidades pessoais, Felipe se destaca como um
              profissional promissor no campo da Engenharia da Computação.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16">
           <a href="https://github.com/felipe-gregorio" target="_blank" rel="noopener noreferrer" className="text-5xl">
            <AiFillGithub />
            </a> 
            <a href="https://www.linkedin.com/in/felipeggregorio/" target="_blank" rel="noopener noreferrer" className="text-5xl">
              <AiFillLinkedin />
              </a>
            <a href="https://www.instagram.com/felpsgregorio/" target="_blank" rel="noopener noreferrer" className="text-5xl">
              <AiFillInstagram />
              </a>
          </div>
          <div className="relative w-48 h-48 mx-auto mt-8 rounded-full overflow-hidden">
            <img className="object-cover w-full h-full" src="/felps.png" alt="Felipe Gregorio"/>
          </div>
        </section>
      </main>
    </div>
  );
}
