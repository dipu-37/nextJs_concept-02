"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const pathname = usePathname();
    const links = [
        {
            title: "poots",
            path: '/poots'
        },
        {
            title: "meals",
            path: '/meals'
        },
    ]
    return (
        <div>
            <nav className='bg-red-400 flex justify-between items-center px-6 py-4'>
                <h3>logo</h3>
                <ul className="flex gap-3 justify-between items-center">
                    {
                        links?.map((link) => <Link className={`${pathname === link.path && "text-cyan-100"}`} key={Link.path} href={link.path}>{link.title}</Link>)
                    }
                </ul>
            </nav>

        </div>
    );
};

export default Navbar;