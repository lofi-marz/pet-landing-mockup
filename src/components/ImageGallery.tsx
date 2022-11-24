import { motion, useAnimationControls, Variants } from 'framer-motion';
import grooming1 from 'images/grooming-1.jpg';
import grooming2 from 'images/grooming-2.jpg';
import grooming3 from 'images/grooming-3.jpg';
import grooming4 from 'images/grooming-4.jpg';
import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

export function ImageGallery() {
    return (
        <div className="flex h-48 flex-wrap items-center justify-center gap-4">
            <GalleryImage src={grooming1} alt="dog1" />
            <GalleryImage src={grooming2} alt="dog2" />
            <GalleryImage src={grooming3} alt="dog3" />
            <GalleryImage src={grooming4} alt="dog4" />
        </div>
    );
}

const imageVariants: Variants = {
    noHover: { scale: 1, transition: { duration: 1, ease: 'easeInOut' } },
    hover: { scale: 1.1, transition: { duration: 1, ease: 'easeInOut' } },
};

function GalleryImage({ src, alt }: ImageProps) {
    return (
        <div className="aspect-[4/3] h-full overflow-clip rounded">
            <motion.div
                variants={imageVariants}
                initial="nohover"
                whileHover="hover">
                <Image src={src} alt={alt} className="h-full object-cover" />
            </motion.div>
        </div>
    );
}
