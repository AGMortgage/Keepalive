'use client';
import { Button } from './button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { LayoutDashboard, List } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem } from './breadcrumb';
import { useSidebar } from '@/Context/sidebarContext';
import { useEffect, useRef } from 'react';

export default function Siderbarnav() {
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, );

  return (
    <aside
      ref={sidebarRef}
      className={`border w-64 h-screen fixed bg-white top-0 left-0
      transform transition-transform duration-300 ease-in-out z-100
      md:translate-x-0 md:z-0 md:static md:w-full md:border-0 md:h-full md:rounded-2xl  
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <nav>
        <h1 className="mt-8 text-center md:mt-0 md:border-b-3 md:py-4">KEEP ALIVE</h1>
        <Breadcrumb className="flex flex-col items-center mt-8 gap-4 px-4">
          <BreadcrumbItem>
            <Button variant="ghost">
              Dashboard <LayoutDashboard />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button variant="ghost">
              Services
              <FontAwesomeIcon icon={faChevronDown} className="size-3.5" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button variant="ghost">
              Ping History <List />
            </Button>
          </BreadcrumbItem>
        </Breadcrumb>
      </nav>
    </aside>
  );
}