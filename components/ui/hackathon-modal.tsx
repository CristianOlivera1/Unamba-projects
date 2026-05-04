"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

export function HackathonPopover() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="hidden sm:block fixed bottom-6 right-6 z-[100] w-[360px] bg-black/50 border border-[#2e2e2e] rounded-lg shadow-2xl overflow-hidden"
                >
                    <div className="flex items-center justify-between px-5 py-4 border-b border-[#2e2e2e]">
                        <h3 className="text-base font-semibold text-white">
                            ¿Qué es una hackathon?
                        </h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-[#888] hover:text-white transition-colors"
                        >
                            <Icon icon="memory:close-outline" width="20" height="20"></Icon>
                        </button>
                    </div>

                    <div className="p-5">
                        <div className="space-y-4">
                            <p className="text-[14px] text-white/70 leading-relaxed">
                               Es una competencia de desarrollo donde personas con distintas habilidades se reúnen para crear, diseñar y programar una solución tecnológica (software) en un tiempo limitado.
                            </p>

                            <div className="py-3 px-4 bg-[#111] border border-[#2e2e2e] rounded-md">
                                <div className="flex items-center gap-2 mb-1">
                                    <Icon icon="cuida:calendar-outline" width="16" height="16"></Icon>
                                    <span className="text-[12px] font-mono text-white/90">3 Semanas</span>
                                </div>
                                <p className="text-[14px] text-white font-medium">
                                    Del 10 al 26 de Mayo
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-full mt-6 bg-white text-black hover:bg-[#ccc] text-[13px] font-bold py-2 rounded-md transition-all duration-200"
                        >
                            LEÍDO
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
