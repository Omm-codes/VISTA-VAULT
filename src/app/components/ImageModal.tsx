"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
    src: string;
    alt: string;
    onClose: () => void;
};

export default function ImageModal({ src, alt, onClose }: Props) {
    const [shareMessage, setShareMessage] = useState("");

    const handleDownload = async (imageSrc: string) => {
        try {
            const response = await fetch(imageSrc, { mode: 'cors' });
            if (!response.ok) throw new Error('Image download failed');

            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = `image-${Date.now()}.jpg`; // Customize the filename
            document.body.appendChild(link);
            link.click();
            link.remove();
            URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error('Download failed:', error);
        }
    };
    
    const handleShare = async () => {
        try {
            if (navigator.share) {
                // Use Web Share API if available
                await navigator.share({
                    title: alt || 'Shared Image from VistaVault',
                    text: 'Check out this image from VistaVault',
                    url: src,
                });
                setShareMessage("Shared successfully!");
            } else {
                // Fallback to copying the URL
                await navigator.clipboard.writeText(src);
                setShareMessage("Link copied to clipboard!");
                setTimeout(() => setShareMessage(""), 2000);
            }
        } catch (error) {
            console.error('Share failed:', error);
            setShareMessage("Share failed. Try again later.");
            setTimeout(() => setShareMessage(""), 2000);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm p-4" onClick={onClose}>
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white/10 dark:bg-gray-900/90 p-2 rounded-xl max-w-5xl max-h-[90vh] w-full overflow-hidden shadow-2xl border border-white/10 backdrop-filter backdrop-blur relative"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-center w-full h-full max-h-[80vh]">
                    <Image
                        src={src}
                        alt={alt}
                        width={1200}
                        height={900}
                        className="object-contain w-auto h-auto max-h-[80vh] max-w-full"
                        priority
                        quality={100}
                    />
                </div>
                <div className="absolute top-4 right-4">
                    <button 
                        className="bg-white text-black px-4 py-2 rounded mr-2" 
                        onClick={onClose}
                    >
                        Close
                    </button>
                    
                    {/* Download button */}
                    <button 
                        onClick={() => handleDownload(src)} 
                        className="bg-white text-black px-4 py-2 rounded mr-2"
                    >
                        Download
                    </button>

                    {/* Share button */}
                    <button 
                        onClick={handleShare} 
                        className="bg-white text-black px-4 py-2 rounded mr-2"
                    >
                        Share
                    </button>

                    {/* View button */}
                    <a 
                        href={src} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-white text-black px-4 py-2 rounded"
                    >
                        View
                    </a>
                </div>
                
                {/* Share feedback message */}
                {shareMessage && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded">
                        {shareMessage}
                    </div>
                )}
            </motion.div>
        </div>
    );
}