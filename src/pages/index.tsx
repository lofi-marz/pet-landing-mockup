import { NavBar } from '@/components/NavBar';
import Head from 'next/head';
import clsx from 'clsx';
import { text, title } from '../fonts';
import pets from '../dogandcat.png';
import Image from 'next/image';
import { FaGlasses, FaHeart, FaShower } from 'react-icons/fa';
export default function Home() {
    return (
        <div
            className={clsx(
                'flex min-h-screen w-full flex-col items-center justify-center',
                text.className
            )}>
            <Head>
                <title>Hello World!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Intro />
            <Gallery />
        </div>
    );
}

function Intro() {
    return (
        <div className="flex h-[36rem] w-full flex-col items-center justify-center bg-[#f4a261] text-white md:h-[90vh]">
            <NavBar />
            <main className="relative flex w-full grow items-start justify-center py-12 px-4 md:items-center md:justify-start md:px-12">
                <header
                    className={clsx(
                        'z-10 flex flex-col gap-4 md:-mt-36',
                        title.className
                    )}>
                    <h1 className="text-center text-5xl md:text-start md:text-8xl">
                        The Best Pet <br /> Groomers <br /> in Town
                    </h1>
                    <p className={clsx('text-3xl font-light', text.className)}>
                        For a pawfect look and feel!
                    </p>
                </header>
                <div className="absolute right-0 -bottom-12 w-full sm:w-4/5 md:-bottom-36 md:w-[950px]">
                    <Image src={pets} alt="Cat and dog" />
                </div>
            </main>
        </div>
    );
}

function Gallery() {
    return (
        <div
            className={clsx(
                'flex h-screen w-full flex-col items-center justify-center gap-14 text-[#e76f51]',
                text.className
            )}>
            <h1
                className={clsx(
                    'text-center text-4xl text-[#e76f51] md:text-8xl',
                    title.className
                )}>
                Your pet deserves <br /> to be pampered!
            </h1>
            <div className="flex flex-col gap-12 text-3xl md:flex-row">
                <div className="flex flex-row items-center justify-center gap-5">
                    <FaShower className="text-4xl" />
                    Bath or Shower
                </div>
                <div className="flex flex-row items-center justify-center gap-5">
                    <FaGlasses className="text-4xl" />
                    Hands-On Assessment
                </div>
                <div className="flex flex-row items-center justify-center gap-5">
                    <FaHeart className="text-4xl" />
                    Safe Drying
                </div>
            </div>
            <button className="flex flex-row gap-12 rounded-full bg-[#e76f51] px-8 py-4 text-3xl text-white">
                Book an Appointment
            </button>
        </div>
    );
}
