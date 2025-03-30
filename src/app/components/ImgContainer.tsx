"use client"; // Add this directive at the top

import type { Photo } from "@/models/Images";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal"; // Adjust the import path

type Props = {
    photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
    const [isModalOpen, setModalOpen] = useState(false);
    const widthHeightRatio = photo.height / photo.width;
    const galleryHeight = Math.ceil(250 * widthHeightRatio);
    const photoSpans = Math.ceil(galleryHeight / 10) + 1;

    return (
        <div className="w-[250px] justify-self-center" style={{ gridRow: `span ${photoSpans}` }}>
            <div 
                className="rounded-xl overflow-hidden group grid place-content-center cursor-pointer"
                onClick={() => setModalOpen(true)} // Open the modal
            >
                <Image
                    src={photo.src.large}
                    alt={photo.alt || "Image"}
                    width={photo.width}
                    height={photo.height}
                    sizes="250px"
                    placeholder="blur"
                    blurDataURL={photo.blurredDataUrl}
                    loading="lazy" // Lazy load images
                    className="group-hover:opacity-75"
                />
            </div>

            {/* Use the new modal component */}
            {isModalOpen && (
                <ImageModal 
                    src={photo.src.large} 
                    alt={photo.alt || "Full Image"} 
                    onClose={() => setModalOpen(false)} 
                />
            )}
        </div>
    );
}