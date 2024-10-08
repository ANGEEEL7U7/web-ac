import { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';
import './App.css';
import logo from './assets/icon.svg'
import { AcademicCapIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import person from './assets/person.png'
import utm from './assets/utm.png'
import cudi from './assets/cudi.jpg'
import cv from './assets/cv_angelcab.pdf'
const navigation = [
  { name: 'Perfil personal', href: '#Personal', sectionId: 'Personal' },
  { name: 'Educación', href: '#Educacion', sectionId: 'Educacion' },
  { name: 'Competencias & Habilidades', href: '#Competencias-habilidades', sectionId: 'Competencias-habilidades' },
  { name: 'Experiencia', href: '#Experiencia', sectionId: 'Experiencia' },
];

const educacion = [
  {
    color: 'green',
    period: 'Sep 2019 - Jun 2022',
    name: 'Universidad Tecnologica Metropolitana',
    image: utm,
    specialty: 'Desarrollo de Software Multiplataforma',
    link: 'https://www.utmerida.edu.mx/'
  },
  {
    color: 'orange',
    period: 'Ago 2024 - Sep 2024',
    name: 'Learning academy',
    image: cudi,
    specialty: 'Administracion de linux',
    link: 'https://academy.cudi.edu.mx/'
  }
]
const competencias = [
  'Comprometido en lo que se asigna',
  'Gran rendimiento bajo presión',
  'Buen compañero,mentalidad positiva',
  'Trabajo en equipo',
  'Desarrollo de proyectos'
];

const habilidades = {
  levels: [
    { title: 'Basico', color: 'green' },
    { title: 'Intermedio', color: 'orange' },
    { title: 'Avanzado', color: 'red' }
  ],
  program: {
    title: 'Lenguajes de programación',
    list: [
      { name: 'PHP', levels: [1, 2] },
      { name: 'Javascript', levels: [1, 2] },
      { name: 'Dart', levels: [1] },
      { name: 'TypeScript', levels: [0] }
    ]
  },
  frame: {
    title: 'Frameworks',
    list: [
      { title: 'Yii', levels: [1, 2] },
      { title: 'Slim', levels: [1] },
      { title: 'Codeigniter', levels: [1] },
      { title: 'Flutter', levels: [1] },
      { title: 'Angular', levels: [0] },
      { title: 'Node Js', levels: [0] },
    ]
  },
  tools: {
    title: 'Herramientas',
    list: [
      { title: 'Git', levels: [0, 1] },
      { title: 'Bootstrap', levels: [1,2] },
      { title: 'Jquery', levels: [1] },
      { title: 'Mysql', levels: [1] },
      { title: 'Postgres', levels: [1] },
      { title: 'MariaDb', levels: [1] },
      { title: 'Nignx', levels: [0, 1] },
      { title: 'Linux', levels: [0, 1] },
    ]
  }
}

const experiencia = [
  {
    name: 'Blazar networks',
    period: 'Mar 2022 - Dic 2022',
    position: 'Desarrollador full stack',
    list: [
      `Desarrollé y gestione plataformas web de facturación lo que optimizo el
      flujo de trabajo en la empresa, paginas para clientes y automatización de
      hospitales veterinarios utilizando PHP y Sql.`,

      `Implementación de Apis para el consumo de productos de Syscom,
      mejorando la integración con sistemas externos`,

      `Cree un bot para whatsapp con NodeJS. automatizando y mejorando el
      tiempo de atención al cliente en un 35%`
    ],
    tecnologies: 'PHP, CodeIgniter, NodeJS, SQL.'
  },
  {
    name: 'Aitelecom',
    period: 'Ene 2023 - Actualidad',
    position: 'Desarrollador full stack',
    list: [
      `Lidero el desarrollo de portales de tickets y Apis usando PHP (Slim,Yii) 
      para gestionar y controlar las instalaciones que se llevan 
      acabo en el proyecto CFE “Internet para todos”`,

      `Desarrollo del sitio web Starlink.apconet.mx utilizando Bootstrap y
      javascript aumentando significativamente la visibilidad de la
      empresa lo que dio como resultado la llegada de una gran cantidad de
      clientes expandiendo nuestra presencia desde el norte hasta el sur
      del pais incluso en partes fuera del pais`,

      `Realice reparaciones criticas en el sistema informativo legislativo
      del estado de yucatán (Siley) con un plazo de una semana para su
      entrega antes de las votaciones, solucione las múltiples fallas que
      presentaba el sistema para asegurar el correcto funcionamiento antes
      de su uso clave en el ámbito legislativo`,

      `Desarrollo aplicaciones multi plataforma en Flutter Automatizando
      servicios de instalación en zonas rurales, Incrementando la
      eficiencia operativa en un 40% y beneficiando a mas de 1000
      ubicaciones desde el sur hasta el norte del pais`
    ],
    tecnologies: 'PHP (Slim, Yii), Flutter, JavaScript, Angular'
  }
]

function App() {
  const [activeSection, setActiveSection] = useState('Personal');
  const [animation, setTransition] = useState(true);

  // Función para manejar el scroll y detectar qué sección está en vista
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        setActiveSection(section.id);
      }
    });
  };

  // Manejador para la animación suave del scroll
  const handleClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  // Agrega event listener para el scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='font-jetbrains'>

      {/* Navbar Estático */}
      <Disclosure as="nav" className="transition-all duration-300 backdrop-blur-sm border-b border-black bg-transparent p-5 sticky top-0 ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex  items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <DisclosureButton onClick={() => setTransition(!animation)} className="transition-all duration-300 group relative inline-flex items-center justify-center rounded-md p-2 text-white bg-black">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className={`${animation ? 'block' : 'hidden'} h-6 w-6`} />
                <XMarkIcon aria-hidden="true" className={`${!animation ? 'block' : 'hidden'} h-6 w-6 `} />
              </DisclosureButton>
            </div>

            <div className="flex flex-1 items-center justify-end sm:items-stretch md:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Your Company"
                  height={50}
                  width={50}
                  src={logo}
                  className="border-black border p-1 rounded-full"
                />
              </div>
              <div className="hidden md:block my-auto mx-auto">
                <div className="flex space-x-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleClick(e, item.sectionId)}
                      className={`transion-all 
                      duration-200 
                      hover:bg-black hover:text-white 
                      rounded-md px-3 py-2 text-sm 
                      font-medium ${activeSection === item.sectionId ? 'bg-black text-white' : 'text-black'}`}>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Transition show={!animation}
          enter=" transition-all duration-500 "
          enterFrom="opacity-0 max-h-0"
          enterTo="translate-y-0  opacity-100 max-h-80"
          leave=" transition-all duration-500 "
          leaveFrom="translate-y-0 opacity-100 max-h-80"
          leaveTo="opacity-0 max-h-0">
          <DisclosurePanel>
            <div className="space-y-1 px-2 pb-3 pt-5 md:hidden">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={(e) => handleClick(e, item.sectionId)}
                  className={`transition-all duration-200 block rounded-md px-3 py-2 text-base font-medium hover:bg-black hover:text-white ${activeSection === item.sectionId ? 'bg-black text-white' : ''
                    }`}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Transition>
      </Disclosure>

      {/* Secciones de contenido */}
      <main className='lg:px-0 px-5'>
        <section id="Personal" className="flex flex-col md:flex-row md:container mx-auto md:pt-3 pt-10">
          <div className='flex flex-col my-auto text-start lg:px-5'>
            <h1 className='font-bold text-5xl mb-3'>Angel Abraham Cab Gonzalez</h1>
            <p>
              Full stack con experiencia en la creación de sistemas web y
              móviles, Apasionado por la automaticacion de procesos con
              experiencia en la implementación de soluciones tecnológicas
              que han mejorado la eficiencia en proyectos anteriores y actuales.
            </p>
          </div>
          <img src={person} width={500} className='pl-10 mx-auto hidden lg:flex' />
        </section>
        <section id="Educacion" className="flex flex-col md:container mx-auto md:pt-3 pt-5">
          <div className='flex flex-row justify-between'>
            <h1 className="font-bold md:text-5xl text-3xl text-start lg:px-5 my-auto">Educación</h1>
            <div className='p-2 border border-black rounded hover:bg-lime-300 transition-all duration-300'>
              <AcademicCapIcon className='w-7 h-7' />
            </div>
          </div>
          <div className='flex flex-col lg:gap-10 gap-5 mt-10'>
            {educacion.map(v => (
              <div key={v.name} className='flex flex-col border border-black p-5 rounded rounded-xl'>
                <div className='flex flex-col lg:flex-row w-full'>
                  <img src={v.image} width={60} className='mr-4 p-1 rounded-full border border-black' />
                  <div className='w-full flex flex-col lg:flex-row lg:justify-between md:mt-0 mt-4'>
                    <div className='flex flex-col mr-auto my-auto'>
                      <h1 className='font-bold'>{v.name}</h1>
                      <p>{v.specialty}</p>
                    </div>
                    <div className={`my-auto p-3 bg-${v.color}-500 rounded-lg my-auto`}>
                      <span className='my-auto'>{v.period}</span>
                    </div>
                  </div>
                </div>
                <div className='flex justify-start mt-5 cursor-pointer'>
                  <span onClick={() => window.open(v.link)} className='md:w-auto md:text-start w-full text-center transition-all duration-300 border border-gray-400 hover:border-black py-3 px-4 rounded-full'>
                    Obtener más información {'->'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="Competencias-habilidades" className="flex flex-col md:container mx-auto md:pt-10 pt-5 md:pb-8">
          <div className='flex flex-col'>
            <h1 className="font-bold md:text-5xl text-3xl text-start lg:px-5">Competencias</h1>
            <div className='grid grid-cols-1 divide-y border border-black rounded rounded-lg my-8'>
              {
                competencias.map(i => (<span key={i} className='py-3 px-5'>{i}</span>))
              }
            </div>
            <h1 className="font-bold md:text-5xl text-3xl text-start lg:px-5">Habilidades</h1>
            <div className='flex flex-row gap-3 mt-5'>
              {
                habilidades.levels.map(i =>
                  <span key={i.color} className={`bg-${i.color}-400 border border-${i.color}-800 rounded rounded-full p-3`}>{i.title}</span>
                )
              }
            </div>
            <div className='mt-7 flex flex-col gap-3'>
              <h1 className=" md:text-3xl text-3xl text-start lg:px-5">{habilidades.program.title}</h1>
              <div className='flex flex-wrap gap-3'>
                {
                  habilidades.program.list.map(i =>
                    <div key={i.name} className='flex flex-row rounded border border-gray-700 overflow-hidden'>
                      <span className='p-3'>{i.name}</span>
                      <div className='flex flex-row '>
                        {
                          i.levels.map(l => {
                            const color = habilidades.levels[l].color;
                            return <span key={l} className={`h-full bg-${color}-500 w-5`}></span>
                          })
                        }
                      </div>
                    </div>
                  )
                }
              </div>
            </div>

            <div className='mt-7 flex flex-col gap-3'>
              <h1 className=" md:text-3xl text-3xl text-start lg:px-5">{habilidades.frame.title}</h1>
              <div className='flex flex-wrap gap-3'>
                {
                  habilidades.frame.list.map(i =>
                    <div key={i.title} className='flex flex-row rounded border border-gray-700 overflow-hidden'>
                      <span className='p-3'>{i.title}</span>
                      <div className='flex flex-row '>
                        {
                          i.levels.map(l => {
                            const color = habilidades.levels[l].color;
                            return <span key={l} className={`h-full bg-${color}-500 w-5`}></span>
                          })
                        }
                      </div>
                    </div>
                  )
                }
              </div>
            </div>


            <div className='mt-7 flex flex-col gap-3'>
              <h1 className=" md:text-3xl text-3xl text-start lg:px-5">{habilidades.tools.title}</h1>
              <div className='flex flex-wrap gap-3'>
                {
                  habilidades.tools.list.map(i =>
                    <div key={i.title} className='flex flex-row rounded border border-gray-700 overflow-hidden'>
                      <span className='p-3'>{i.title}</span>
                      <div className='flex flex-row '>
                        {
                          i.levels.map(l => {
                            const color = habilidades.levels[l].color;
                            return <span key={l} className={`h-full bg-${color}-500 w-5`}></span>
                          })
                        }
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </section>

        <section id="Experiencia" className="flex flex-col md:container mx-auto md:pt-10 pt-5 md:pb-8 pb-5">
          <h1 className="font-bold md:text-5xl text-3xl text-start lg:px-5">Experiencia</h1>

          <div className='flex flex-col gap-5 md:mt-10 mt-5'>
            {
              experiencia.map(i =>
                <div key={i.name} className='flex flex-col border border-black rounded rounded-xl p-5'>
                  <div className='flex flex-col lg:flex-row lg:justify-between  lg:gap-0 gap-2'>
                    <div className='flex flex-col my-auto'>
                      <span className='font-bold md:text-2xl text-md'>{i.name} / <span className='text-gray-600 font-normal'>{i.period}</span></span>
                      <span>{i.position}</span>
                    </div>
                    <div className='bg-lime-300 lg:py-3 p-2 lg:pr-0 lg:pl-6 lg:w-72 px-3 rounded rounded-lg'>
                      <span>{i.tecnologies}</span>
                    </div>
                  </div>
                  <ul className='grid grid-cols-1 gap-3 lg:mt-5 mt-8 list-disc px-4'>
                    {
                      i.list.map(l =>
                        <li key={l}>{l}</li>
                      )
                    }
                  </ul>
                </div>
              )
            }
          </div>
        </section>
      </main>


      <footer className="bg-gray-900">
        <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-white'>
          <div className='mt-5 grid grid-cols-1 gap-1'>
            <span>© {new Date().getFullYear()}</span>
            <span className='text-4xl'><span className='font-bold'>Gracias!!</span> por visitar mi página</span>
            <div className='flex flex-wrap gap-3 mt-2'>
              <div className='flex justify-start cursor-pointer'>
                <span onClick={() => window.open('https://www.linkedin.com/in/angel-yuc/')} className="transition-all duration-300 bg-gray-800 border border-gray-700 text-gray-500 py-2 px-5 hover:text-white hover:border-gray-500 hover:bg-gray-700 rounded-full">Linkedin</span>
              </div>
              <div className='flex justify-start cursor-pointer'>
                <span onClick={() => window.open('https://w.app/sc9Af5')} className="transition-all duration-300 bg-gray-800 border border-gray-700 text-gray-500 py-2 px-5 hover:text-white hover:border-gray-500 hover:bg-gray-700 rounded-full">Whatsapp</span>
              </div>
              <div className='flex justify-start cursor-pointer'>
                <span onClick={() => window.location.href = 'mailto:angelc.desarrollo@gmail.com'} className="transition-all duration-300 bg-gray-800 border border-gray-700 text-gray-500 py-2 px-5 hover:text-white hover:border-gray-500 hover:bg-gray-700 rounded-full">Correo</span>
              </div>
              <div className='flex justify-start cursor-pointer'>
                <span onClick={() => window.open(cv)} className="transition-all duration-300 bg-gray-800 border border-gray-700 text-gray-500 py-2 px-5 hover:text-white hover:border-gray-500 hover:bg-gray-700 rounded-full">Curriculum</span>
              </div>
            </div>
          </div>
          <span className='lg:block hidden'>angel cab</span>
        </div>
      </footer>

    </div>
  );
}

export default App;
