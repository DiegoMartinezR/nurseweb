import { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import insnLogo from '../assets/insn-enfermeria-logo.png';
import nursesTeam from '../assets/enfermeras-medicina-b.png';
import bannerHero from '../assets/bannerhero.png';
import bannerHeroMobile from '../assets/bannerheromovil.png';
import flagPe from '../assets/flags/pe.svg';
import flagMx from '../assets/flags/mx.svg';
import flagAr from '../assets/flags/ar.svg';
import flagCl from '../assets/flags/cl.svg';
import flagPa from '../assets/flags/pa.svg';

const participatingCountries = [
  { name: 'Perú', src: flagPe },
  { name: 'México', src: flagMx },
  { name: 'Argentina', src: flagAr },
  { name: 'Chile', src: flagCl },
  { name: 'Panamá', src: flagPa },
];

type IconName =
  | 'arrow'
  | 'calendar'
  | 'clock'
  | 'location'
  | 'menu'
  | 'close'
  | 'heart'
  | 'research'
  | 'plus'
  | 'users'
  | 'check';

function Icon({ name, className = 'h-5 w-5' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    calendar: (
      <>
        <path d="M7 2v4m10-4v4M3 9h18" />
        <rect x="3" y="4" width="18" height="18" rx="3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    ),
    research: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="m15 15 6 6M10 7v6M7 10h6" />
      </>
    ),
    plus: <path d="M12 4v16M4 12h16" />,
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
  };
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

type ProgramItem =
  | { type: 'block'; name: string; moderator: string }
  | { type: 'session'; time: string; end: string; title: string; speaker: string }
  | { type: 'break'; time: string; end: string; label: string };

const program: Array<{
  short: string;
  date: string;
  eyebrow: string;
  title: string;
  color: string;
  sessions: ProgramItem[];
  workshop: { label: string; title: string; text: string; time: string };
}> = [
  {
    short: 'Mié 25',
    date: 'Miércoles 25 de noviembre',
    eyebrow: 'Día 01 · Gestión en enfermería',
    title: 'Gestión que visibiliza',
    color: 'cyan',
    sessions: [
      {
        type: 'session',
        time: '08:30',
        end: '09:00',
        title: 'Ceremonia de inauguración',
        speaker: 'Autoridades del INSN',
      },
      { type: 'block', name: 'Bloque I', moderator: 'Lic. Gloria Castillo Ocaña' },
      {
        type: 'session',
        time: '09:00',
        end: '10:00',
        title: 'Liderazgo estratégico en enfermería para fortalecer su imagen social',
        speaker: 'Mg. Rafael Chucos Ortiz · Perú',
      },
      { type: 'break', time: '10:00', end: '10:15', label: 'Receso' },
      {
        type: 'session',
        time: '10:15',
        end: '11:00',
        title: 'Indicadores de gestión que evidencian el aporte de enfermería',
        speaker: 'Mg. Ericka Peña Villareyes · INSN, Perú',
      },
      {
        type: 'session',
        time: '11:00',
        end: '11:45',
        title: 'Gestión del cuidado con enfoque en calidad y humanización',
        speaker: 'René Ramos Álvarez · Chile',
      },
      {
        type: 'session',
        time: '11:45',
        end: '12:30',
        title: 'Del cuidado invisible al cuidado reconocido: retos de la enfermería moderna',
        speaker: 'Mg. Carolina Cerna Silva · INSN, Perú',
      },
      { type: 'break', time: '12:30', end: '14:00', label: 'Receso' },
      { type: 'block', name: 'Bloque II', moderator: 'Lic. Karem Zegarra Almora' },
      {
        type: 'session',
        time: '14:00',
        end: '15:00',
        title: 'Estrategias para visibilizar el cuidado de enfermería en la práctica diaria',
        speaker: 'Mg. Elizabeth Gonzales Cárdenas · INCOR, Perú',
      },
      {
        type: 'session',
        time: '15:00',
        end: '16:00',
        title: 'Transformación digital en enfermería y su impacto en la visibilidad profesional',
        speaker: 'Dra. Elizabet Tiburcio Ampudia · Argentina',
      },
      { type: 'break', time: '16:00', end: '16:15', label: 'Receso' },
      {
        type: 'session',
        time: '16:15',
        end: '17:30',
        title: 'Retos de la gestión de enfermería en sistemas de salud actuales',
        speaker:
          'Mesa redonda internacional:\nDra. Elizabeth Tiburcio Ampudia\nMg. Miriam Anchante Saravia\nMg. Lourdes Castillo Gonzales',
      },
    ],
    workshop: {
      label: 'Moderadoras',
      title: 'Bloques I y II',
      text: 'Lic. Gloria Castillo Ocaña\nLic. Karem Zegarra Almora',
      time: '08:30 — 17:30',
    },
  },
  {
    short: 'Jue 26',
    date: 'Jueves 26 de noviembre',
    eyebrow: 'Día 02 · Cuidado asistencial',
    title: 'Cuidado visible',
    color: 'pink',
    sessions: [
      { type: 'block', name: 'Bloque III', moderator: 'Lic. Rosa Cruzado Bautista' },
      {
        type: 'session',
        time: '09:00',
        end: '10:00',
        title: 'El valor estratégico del cuidado enfermero en los resultados en salud',
        speaker: 'Lic. Dr. Ronal Aquino Aquino · SOCIPEP, Perú',
      },
      { type: 'break', time: '10:00', end: '10:15', label: 'Receso' },
      {
        type: 'session',
        time: '10:15',
        end: '11:00',
        title: 'Cuidado humanizado como eje de la imagen social de enfermería',
        speaker: 'Dra. Maribel Vera Vílchez · INSN, Perú',
      },
      {
        type: 'session',
        time: '11:00',
        end: '11:45',
        title: 'Seguridad del paciente y prevención de eventos adversos',
        speaker: 'Lic. Ruth Maldonado Noel · INSN, Perú',
      },
      {
        type: 'session',
        time: '11:45',
        end: '12:30',
        title: 'Inteligencia artificial en enfermería: ¿amenaza o revolución del cuidado?',
        speaker: 'Mg. Moisés Espitia Victoria · México',
      },
      { type: 'break', time: '12:30', end: '14:00', label: 'Receso' },
      { type: 'block', name: 'Bloque IV', moderator: 'Lic. Sarita Rayme Flores' },
      {
        type: 'session',
        time: '14:00',
        end: '15:00',
        title: 'Buenas prácticas en el manejo de accesos vasculares',
        speaker: 'Mg. Anabella Clouet · ATISPA, Argentina',
      },
      {
        type: 'session',
        time: '15:00',
        end: '16:00',
        title: 'Enfermería de práctica avanzada: ciencia, empatía y humanización en Latinoamérica',
        speaker: 'Mg. Ida Díaz · Panamá',
      },
      { type: 'break', time: '16:00', end: '16:15', label: 'Receso' },
      {
        type: 'session',
        time: '16:15',
        end: '17:30',
        title: 'Experiencias exitosas en el cuidado visible y reconocido',
        speaker:
          'Mesa redonda internacional:\nMg. Ida Díaz\nMg. Mireylle Alejos García\nMg. Mirtha Caballero Vela',
      },
    ],
    workshop: {
      label: 'Moderadoras',
      title: 'Bloques III y IV',
      text: 'Lic. Rosa Cruzado Bautista\nLic. Sarita Rayme Flores',
      time: '09:00 — 17:30',
    },
  },
  {
    short: 'Vie 27',
    date: 'Viernes 27 de noviembre',
    eyebrow: 'Día 03 · Investigación en enfermería',
    title: 'Evidencia que transforma',
    color: 'purple',
    sessions: [
      { type: 'block', name: 'Bloque V', moderator: 'Lic. Elizabeth Reques Robles' },
      {
        type: 'session',
        time: '09:00',
        end: '10:00',
        title: 'Del diagnóstico enfermero a los resultados en salud: el PAE como herramienta para investigar',
        speaker: 'Lic. Lilian Torres Ascurra · INSN, Perú',
      },
      {
        type: 'session',
        time: '10:00',
        end: '10:45',
        title: 'Publicación científica y posicionamiento profesional',
        speaker: 'Mg. Orfelina Arpasi · ACIPEIN, Perú',
      },
      { type: 'break', time: '10:45', end: '11:00', label: 'Receso' },
      {
        type: 'session',
        time: '11:00',
        end: '12:00',
        title: 'El poder de la evidencia: impacto de la investigación de enfermería en el paciente',
        speaker: 'Dra. Janet Arévalo Ipanaqué · ACIPEIN, Perú',
      },
      {
        type: 'session',
        time: '12:00',
        end: '12:45',
        title: 'Investigar sin vulnerar derechos: ética, dignidad humana y protección del paciente',
        speaker: 'Lic. Edith Sánchez Medina · INSN, Perú',
      },
      {
        type: 'session',
        time: '12:45',
        end: '13:30',
        title: 'Ciencia que protege vidas: investigación y cultura de seguridad del paciente',
        speaker: 'Mg. Yisela Acuache Quispe · UNMSM / INSN, Perú',
      },
      {
        type: 'session',
        time: '13:30',
        end: '14:15',
        title: 'Impacto del modelo SBAR en la seguridad del paciente pediátrico',
        speaker: 'Mg. Silvia Valverde Huamán · INSN, Perú',
      },
      {
        type: 'session',
        time: '14:00',
        end: '14:30',
        title: 'Clausura del V Curso Internacional',
        speaker: 'Comité organizador',
      },
    ],
    workshop: {
      label: 'Moderadora',
      title: 'Bloque V',
      text: 'Lic. Elizabeth Reques Robles',
      time: '09:00 — 14:30',
    },
  },
];

const pillars = [
  {
    icon: 'users' as IconName,
    title: 'Gestión en enfermería',
    subtitle: 'Liderazgo y gestión del cuidado',
    className: 'from-[#03aeb4] to-[#008fbd]',
  },
  {
    icon: 'research' as IconName,
    title: 'Investigación',
    subtitle: 'Evidencia y publicación científica',
    className: 'from-[#8a32b9] to-[#c3249a]',
  },
  {
    icon: 'plus' as IconName,
    title: 'Área asistencial',
    subtitle: 'Práctica clínica y humanización',
    className: 'from-[#e81a84] to-[#f13ca9]',
  },
];

const topics = [
  'Liderazgo estratégico',
  'Calidad y humanización',
  'Seguridad del paciente',
  'Transformación digital e IA',
  'Práctica avanzada',
  'Investigación y evidencia',
];

export default function Welcome({ auth }: PageProps) {
  const [activeDay, setActiveDay] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const eventDate = new Date('2026-11-25T08:30:00-05:00').getTime();
  const distance = Math.max(0, eventDate - now);
  const countdown = {
    días: Math.floor(distance / 86_400_000),
    horas: Math.floor((distance / 3_600_000) % 24),
    minutos: Math.floor((distance / 60_000) % 60),
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <Head title="V Curso Internacional de Enfermería Pediátrica | INSN-Breña" />

      <main className="min-h-screen overflow-hidden text-[#143f68]">
        {/* Cabecera / Navegación */}
        <header className="sticky top-0 z-50 border-b border-[#c9d8f0]/70 bg-white/90 backdrop-blur-xl">
          <div className="mx-auto flex h-[104px] w-full max-w-[1440px] items-center justify-between px-[5%]">
            <button
              onClick={() => scrollTo('inicio')}
              className="text-left"
              aria-label="Ir al inicio"
            >
              <img
                src={insnLogo}
                alt="Instituto Nacional de Salud del Niño, Departamento de Enfermería"
                className="h-16 w-auto max-w-[320px] object-contain object-left sm:h-20 sm:max-w-[520px]"
              />
            </button>
            <nav className="hidden items-center gap-1 lg:flex">
              {[
                ['Sobre el curso', 'presentacion'],
                ['Programa', 'programa'],
                ['Ejes temáticos', 'ejes'],
                ['Información', 'informacion'],
              ].map(([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)} className="nav-link">
                  {label}
                </button>
              ))}

              <button onClick={() => scrollTo('registro')} className="btn-primary ml-2 !px-5 !py-2.5">
                Inscríbete
              </button>
            </nav>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf9fc] text-[#078ca5] lg:hidden"
              aria-label="Abrir menú"
            >
              <Icon name={menuOpen ? 'close' : 'menu'} />
            </button>
          </div>
          {menuOpen && (
            <nav className="border-t border-[#dce5f2] bg-white px-[5%] py-4 lg:hidden">
              {[
                ['Sobre el curso', 'presentacion'],
                ['Programa', 'programa'],
                ['Ejes temáticos', 'ejes'],
                ['Información', 'informacion'],
                ['Inscríbete', 'registro'],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="block w-full rounded-lg px-3 py-3 text-left font-semibold hover:bg-[#eef9fc]"
                >
                  {label}
                </button>
              ))}

              <div className="mt-3 border-t border-[#edf2f7] pt-3">
                {auth.user ? (
                  <Link
                    href={route('dashboard')}
                    className="block w-full rounded-lg px-3 py-2 text-left font-semibold text-[#087bb8]"
                  >
                    Panel ({auth.user.name})
                  </Link>
                ) : (
                  <Link
                    href={route('login')}
                    className="block w-full rounded-lg px-3 py-2 text-left font-semibold text-[#087bb8]"
                  >
                    Iniciar sesión
                  </Link>
                )}
              </div>
            </nav>
          )}
        </header>

        {/* Sección Hero */}
        <section id="inicio" className="relative px-[5%] pb-10 pt-6 sm:pt-8">
          <div className="shape shape-one" />
          <div className="shape shape-two" />
          <div className="relative mx-auto w-full max-w-[1440px]">
            {/* Imagen del Banner (Responsive Desktop y Móvil) */}
            <div className="overflow-hidden rounded-2xl md:rounded-[2rem] border border-white/90 bg-white shadow-[0_20px_50px_rgba(58,70,133,0.12)]">
              <picture>
                <source media="(max-width: 767px)" srcSet={bannerHeroMobile} />
                <img
                  src={bannerHero}
                  alt="Banner V Curso Internacional de Enfermería Pediátrica"
                  className="w-full h-auto object-cover block"
                />
              </picture>
            </div>

            {/* Cards de Fecha, Modalidad y Organiza */}
            <div className="relative z-20 mx-auto -mt-5 sm:-mt-8 grid w-full max-w-[980px] gap-3 px-4 sm:grid-cols-3 sm:px-9">
              <InfoPill icon="calendar" label="Fecha" value="25, 26 y 27 de noviembre" />
              <InfoPill icon="location" label="Modalidad" value="Aula Virtual INSN-Breña" />
              <InfoPill icon="users" label="Organiza" value="Servicio de Medicina B" />
            </div>
          </div>
        </section>

        {/* Marquesina infinita con las banderas (Fondo transparente, Banderas: 45px alto) */}
        <section
          aria-label="Países participantes"
          className="relative w-full h-[120px] sm:h-[120px] overflow-hidden flex items-center bg-transparent"
        >
          <div className="marquee-container w-full h-full flex items-center">
            {/* Pista 1 */}
            <div className="marquee-content">
              {[...participatingCountries, ...participatingCountries].map((country, idx) => (
                <div
                  key={`track1-${country.name}-${idx}`}
                  className="flex items-center justify-center flex-shrink-0"
                >
                  <img
                    src={country.src}
                    alt={`Bandera de ${country.name}`}
                    title={country.name}
                    className="h-[45px] w-auto aspect-[3/2] object-cover shadow-sm border border-[#c9d8f0]/80 transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Pista 2 (duplicada para bucle infinito continuo) */}
            <div className="marquee-content" aria-hidden="true">
              {[...participatingCountries, ...participatingCountries].map((country, idx) => (
                <div
                  key={`track2-${country.name}-${idx}`}
                  className="flex items-center justify-center flex-shrink-0"
                >
                  <img
                    src={country.src}
                    alt={`Bandera de ${country.name}`}
                    title={country.name}
                    className="h-[45px] w-auto aspect-[3/2] object-cover shadow-sm border border-[#c9d8f0]/80 transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección Presentación */}
        <section id="presentacion" className="scroll-mt-24 px-[5%] py-16">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="section-heading">
              <span className="kicker">Una invitación a transformar</span>
              <h2>
                El cuidado pediátrico <span>merece ser visible.</span>
              </h2>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_.7fr]">
              <article className="soft-card p-7 sm:p-10">
                <p className="leading-7 text-[#58708d]">
                  El Servicio de Medicina B del Instituto Nacional de Salud del Niño–Breña los invita
                  a un espacio académico para compartir conocimientos, promover la investigación,
                  fortalecer las competencias profesionales y visibilizar el impacto del cuidado
                  enfermero en los resultados en salud.
                </p>
                <p className="mt-4 leading-7 text-[#58708d]">
                  Durante tres días integraremos gestión, investigación y práctica asistencial desde
                  una perspectiva humanizada, junto a destacados profesionales de Perú, Chile,
                  Argentina, México y Panamá.
                </p>
                <div className="mt-7 flex items-center gap-3 border-t border-[#dce8f4] pt-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#dff7f7] text-[#00a7aa]">
                    <Icon name="heart" />
                  </span>
                  <span>
                    <b className="block text-sm">
                      Servicio de Medicina B · Departamento de Enfermería
                    </b>
                    <small className="text-[#7288a0]">
                      Ciencia en nuestros cuidados, humanidad en nuestras acciones
                    </small>
                  </span>
                </div>
              </article>
              <aside className="stat-card">
                <span className="text-xs font-extrabold uppercase tracking-[.18em] text-white/75">
                  Nos reunimos para
                </span>
                <b className="mt-8 block text-[76px] leading-none">03</b>
                <span className="text-2xl font-bold">días que inspiran</span>
                <div className="my-7 h-px bg-white/25" />
                {['Aprender', 'Conectar', 'Transformar'].map((item) => (
                  <span key={item} className="mt-3 flex items-center gap-3 font-semibold">
                    <i className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </i>
                    {item}
                  </span>
                ))}
              </aside>
            </div>
          </div>
        </section>

        {/* Sección Ejes */}
        <section id="ejes" className="scroll-mt-20 px-[5%] py-20">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="section-heading">
              <span className="kicker">Tres miradas, un propósito</span>
              <h2>
                Ejes que mueven <span>la enfermería.</span>
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className={`pillar-card bg-gradient-to-br ${pillar.className}`}
                >
                  <div className="pillar-icon">
                    <Icon name={pillar.icon} className="h-7 w-7" />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.subtitle}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Sección Programa */}
        <section id="programa" className="scroll-mt-20 px-[5%] py-20">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="section-heading">
              <span className="kicker">Programa académico</span>
              <h2>
                Tres días para <span>abrir camino.</span>
              </h2>
              <p>Selecciona un día para explorar las actividades.</p>
            </div>
            <div className="mt-10 flex justify-center gap-2 overflow-x-auto pb-2 pt-2">
              {program.map((day, index) => (
                <button
                  key={day.short}
                  onClick={() => setActiveDay(index)}
                  className={`day-tab ${activeDay === index ? 'active' : ''}`}
                >
                  <small>Día 0{index + 1}</small>
                  <b>{day.short}</b>
                </button>
              ))}
            </div>

            <div className="program-shell mt-5">
              <div className="program-main">
                <div className="mb-5 border-b border-[#dfe8f3] pb-5">
                  <span className={`program-kicker ${program[activeDay].color}`}>
                    {program[activeDay].eyebrow}
                  </span>
                  <h3>{program[activeDay].title}</h3>
                  <p>{program[activeDay].date} · 2026</p>
                </div>
                <div>
                  {program[activeDay].sessions.map((item, index) => {
                    if (item.type === 'block') {
                      return (
                        <div key={`${item.name}-${index}`} className="block-divider">
                          <span>{item.name}</span>
                          <div>
                            <small>Moderador/a</small>
                            <b>{item.moderator}</b>
                          </div>
                        </div>
                      );
                    }

                    if (item.type === 'break') {
                      return (
                        <div key={`${item.time}-${index}`} className="break-row">
                          <Icon name="clock" className="h-4 w-4" />
                          <b>{item.label}</b>
                          <time>
                            {item.time} — {item.end}
                          </time>
                        </div>
                      );
                    }

                    return (
                      <div key={`${item.time}-${index}`} className="session-row">
                        <time>
                          {item.time}
                          <small>— {item.end}</small>
                        </time>
                        <div>
                          <b className="text-[16px] leading-snug text-[#174b75]">{item.title}</b>
                          <span className="text-[13px] font-semibold text-[#037c94] mt-1 block whitespace-pre-line leading-relaxed">
                            {item.speaker}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <aside className={`workshop-card ${program[activeDay].color}`}>
                <span>{program[activeDay].workshop.label}</span>
                <h3>{program[activeDay].workshop.title}</h3>
                <p className="whitespace-pre-line leading-relaxed font-semibold text-white/95">
                  {program[activeDay].workshop.text}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-8 font-bold">
                  <Icon name="clock" className="h-4 w-4" />
                  {program[activeDay].workshop.time}
                </div>
                <button onClick={() => scrollTo('registro')}>
                  Ver inscripción <Icon name="arrow" className="h-4 w-4" />
                </button>
              </aside>
            </div>
          </div>
        </section>

        {/* Sección Información y Temas */}
        <section id="informacion" className="scroll-mt-20 px-[5%] py-20">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="section-heading">
              <span className="kicker">Temas que nos conectan</span>
              <h2>
                Una agenda <span>integral.</span>
              </h2>
            </div>
            <div className="mx-auto mt-9 grid w-full max-w-[980px] gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic, index) => (
                <div key={topic} className="topic-chip">
                  <span>0{index + 1}</span>
                  {topic}
                </div>
              ))}
            </div>
            <div className="mx-auto mt-12 grid w-full max-w-[980px] gap-4 sm:grid-cols-3">
              <InfoCard icon="calendar" title="25—27 noviembre" text="Tres jornadas académicas" />
              <InfoCard
                icon="location"
                title="Aula Virtual"
                text="Instituto Nacional de Salud del Niño–Breña"
              />
              <InfoCard
                icon="users"
                title="5 países"
                text="Perú, Chile, Argentina, México y Panamá"
              />
            </div>
          </div>
        </section>

        {/* Sección Registro */}
        <section id="registro" className="scroll-mt-20 px-[5%] pb-12 pt-16">
          <div className="register-card mx-auto w-full max-w-[1440px]">
            <div className="relative z-10 max-w-[600px]">
              <span className="text-xs font-extrabold uppercase tracking-[.2em] text-white/75">
                La cuenta regresiva comenzó
              </span>
              <h2>Haz visible el cuidado que transforma.</h2>
              <p>
                Inscripciones en los servicios del INSN-Breña. Desarrollo del curso a través del Aula
                Virtual del INSN-Breña.
              </p>
              <div className="mt-8 grid w-full max-w-[340px] grid-cols-3 gap-3 rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
                {Object.entries(countdown).map(([label, number]) => (
                  <div key={label} className="text-center">
                    <b className="block text-3xl">{String(number).padStart(2, '0')}</b>
                    <small className="text-[9px] font-bold uppercase tracking-wider text-white/70">
                      {label}
                    </small>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setSent(true)}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#ffd94c] px-7 py-4 font-extrabold text-[#174b75] shadow-[0_6px_0_#dca817] transition hover:-translate-y-1"
              >
                {sent ? (
                  <>
                    <Icon name="check" className="h-5 w-5" /> Servicios del INSN-Breña
                  </>
                ) : (
                  <>
                    Cómo inscribirme <Icon name="arrow" className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
            <div className="register-heart">
              <Icon name="heart" className="h-32 w-32" />
            </div>
          </div>
        </section>

        {/* Sección Servicio y Equipo */}
        <section id="servicio" className="px-[5%] pb-24 pt-12">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="section-heading">
              <span className="kicker">Quiénes hacen posible este encuentro</span>
              <h2>
                Cuidamos con ciencia, <span>vocación y corazón.</span>
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
              <article className="service-story">
                <span className="service-label">Servicio de Medicina B · INSN-Breña</span>
                <h3>Un equipo comprometido con el cuidado integral pediátrico.</h3>
                <p>
                  El Servicio de Medicina B atiende a niños, niñas y adolescentes con diversas
                  patologías médicas. Somos un equipo multidisciplinario que trabaja de manera
                  articulada, con responsabilidad y compromiso, para contribuir a la recuperación y el
                  bienestar de nuestros pacientes y sus familias.
                </p>
                <p>
                  La vocación de servicio, el conocimiento científico y la sensibilidad humana se unen
                  para brindar una atención segura, oportuna y de calidad.
                </p>
              </article>

              <aside className="institutional-quote">
                <Icon name="heart" className="h-10 w-10" />
                <blockquote>
                  “Cuidar no solo significa atender una enfermedad, sino también acompañar, escuchar y
                  brindar esperanza.”
                </blockquote>
                <span>Equipo de Enfermería · Servicio de Medicina B</span>
              </aside>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-3">
              <article className="service-value-card">
                <span>
                  <Icon name="plus" className="h-6 w-6" />
                </span>
                <h3>Cuidado seguro y especializado</h3>
                <p>
                  Promovemos la seguridad del paciente, la mejora continua y una atención de calidad
                  que respeta siempre la dignidad humana.
                </p>
              </article>
              <article className="service-value-card">
                <span>
                  <Icon name="heart" className="h-6 w-6" />
                </span>
                <h3>Humanización en cada acción</h3>
                <p>
                  Acompañamos a cada paciente y su familia desde la empatía, la escucha activa y un
                  profundo compromiso con la vida.
                </p>
              </article>
              <article className="service-value-card">
                <span>
                  <Icon name="research" className="h-6 w-6" />
                </span>
                <h3>Educación que transforma</h3>
                <p>
                  Impulsamos la formación continua y el intercambio de experiencias para construir una
                  enfermería más sólida, reconocida e innovadora.
                </p>
              </article>
            </div>

            <figure className="team-photo-card">
              <img
                src={nursesTeam}
                alt="Equipo de enfermeras del Servicio de Medicina B del INSN-Breña"
              />
            </figure>

            <div className="welcome-strip">
              <div>
                <small>Comité organizador</small>
                <b>Servicio de Medicina B · Departamento de Enfermería del INSN</b>
              </div>
              <p>
                Ciencia en nuestros cuidados, humanidad en nuestras acciones y compromiso con el
                futuro de la Enfermería Pediátrica.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#c9d9ef] bg-white px-[5%] py-10">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-5 sm:flex-row">
            <img
              src={insnLogo}
              alt="Instituto Nacional de Salud del Niño, Departamento de Enfermería"
              className="h-16 w-auto max-w-[320px] object-contain sm:h-20 sm:max-w-[520px]"
            />
            <p className="text-center text-xs text-[#7088a1]">
              V Curso Internacional de Enfermería Pediátrica · INSN-Breña · Perú
            </p>
            <span className="text-sm font-bold text-[#dd2085]">Servicio de Medicina B</span>
          </div>
        </footer>
      </main>
    </>
  );
}

function InfoPill({ icon, label, value }: { icon: IconName; label: string; value: string }) {
  return (
    <div className="info-pill">
      <span>
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div>
        <small>{label}</small>
        <b>{value}</b>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, text }: { icon: IconName; title: string; text: string }) {
  return (
    <div className="info-card">
      <span>
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <b>{title}</b>
      <small>{text}</small>
    </div>
  );
}
