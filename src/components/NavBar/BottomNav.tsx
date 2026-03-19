'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type NavLink = {
    label: string;
    href: string;
    dropdwon?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Loja', href: '/' },
    { label: 'Blog', href: '/' },
    {
        label: 'Produtos',
        href: '/',
        dropdwon: [
            { label: 'Roupas', href: '/' },
            { label: 'Acessórios', href: '/' },
        ],
    },
    { label: 'Fale conosco', href: '/' },
];

export default function BottomNav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
        {},
    );
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDropdwon = (label: string) => {
        setOpenDropdowns((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };

    const closeMoblieMenu = () => {
        setMobileMenuOpen(false);
        setOpenDropdowns({});
    };

    return (
        <div
            className={`w-full bg-white py-5 shadow-sm transition-all duration-500 ${isFixed ? 'fixed-nav fixed left-0 top-0 z-50' : ''}`}
        >
            <div className='flex w-full items-center justify-between px-[8%]
            text-gray-700 lg:px-[16%]'>

                {/* Logo Mobile */}
                <Link
                    href='/'
                    className='Unbounded text-exl font-bold text-black lg-hidden'
                >
                    Nexus<span className='text-[var(--second)]'>Company</span>
                </Link>

                {/* Logo desktop quando fixar */}
                <Link
                    href='/'
                    className={`Unbounded text-4xl font-bold text-black ${isFixed ? 'hidden lg: block' : 'hidden'
                        }`}
                >
                    Nexus<span className='text-[var(--second)]'>Company</span>
                </Link>

                {/* Menu centralizado */}
                <div className='hidden justify-center lg:flex'>
                    <nav className='flex items-center gap-8'>
                        {navLinks.map((link) =>
                            link.dropdwon ? (
                                <div key={link.label} className='group relative'>
                                    <Link
                                        href={link.href}
                                        className='Unbounded flex items-center gap-1
                                    font-bold text-[var(--black)] transition-colors 
                                    hover: text-[var(--second)]'
                                    >
                                        {link.label}

                                        <Image
                                            src='/Menu-dot.svg'
                                            alt='icone do menu'
                                            width={10}
                                            height={10}
                                        />
                                    </Link>
                                    
                                </div>
                            )
                        )}
                    </nav>
                </div>

            </div>
        </div>
    )
}

