
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    robots: {
        index: true,
        follow: true,
    },
};

export default function SuggestionLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-[#09090B]">
            <Navbar />
            <div className="grow">
                {children}
            </div>
            <Footer />
        </div>
    );
}
