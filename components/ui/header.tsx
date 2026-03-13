'use client';
import { Button } from './button';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Sidebar } from 'lucide-react';
import Link from 'next/link';


import { useSidebar } from '@/Context/sidebarContext';

export default function Header() {
	const { toggleSidebar } = useSidebar();

	return (
		<header className="w-full flex justify-between pt-5 pb-3 px-5 border-b-2 md:pt-3 md:pb-3 md:justify-end md:border-b-0 md:hidden">
			<Button variant={'outline'} onClick={toggleSidebar} className='md:hidden'>
				<Sidebar />
			</Button>
			<Link href="/alerts">
				<FontAwesomeIcon icon={faBell} size="xl" />
			</Link>
		</header>
	);
}
