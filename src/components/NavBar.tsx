import { FaDog } from 'react-icons/fa';
import { WithChildrenProps } from '../types';
import clsx from 'clsx';
import { title } from '../fonts';

function Logo() {
    return (
        <div
            className={clsx(
                'flex items-center justify-center gap-2 text-2xl font-semibold text-primary',
                title.className
            )}>
            <div className="text-4xl">
                <FaDog />
            </div>
            Princess Paws
        </div>
    );
}

function NavItem({ children }: WithChildrenProps) {
    return (
        <button className="rounded-full px-8 py-1  transition-all hover:bg-primary">
            {children}
        </button>
    );
}

export function NavBar() {
    return (
        <div className="text-md flex h-24 w-full items-center justify-between px-12">
            <Logo />
            <nav className="hidden gap-8 md:flex">
                <NavItem>Home</NavItem>
                <NavItem>Services</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Contact</NavItem>
            </nav>
        </div>
    );
}
