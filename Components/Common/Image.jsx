import React from 'react'
import Image from 'next/image'
function Images({ src, alt, w, h }) {
    return (
        <div className={`relative`}>
            <Image
                src={src}
                alt={alt}
                className="object-contain"
                width={w}
                height={h}
            />
        </div>
    )
}

export default Images