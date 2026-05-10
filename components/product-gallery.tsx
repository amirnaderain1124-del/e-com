"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(images[0]);

  return (
    <div className="grid gap-3">
      <div className="relative aspect-square overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
        <Image src={active} alt={name} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-500 hover:scale-110" />
        <span className="absolute bottom-3 left-3 rounded bg-black/70 px-3 py-1 text-xs font-bold uppercase text-white backdrop-blur">Zoom enabled</span>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button key={image} type="button" onClick={() => setActive(image)} className={`relative aspect-square overflow-hidden rounded border ${active === image ? "border-red-500" : "border-white/10"}`}>
            <Image src={image} alt={`${name} view ${index + 1}`} fill sizes="120px" className="object-cover" />
          </button>
        ))}
      </div>
      <div className="rounded-lg border border-white/10 bg-black p-4 text-sm text-zinc-400">
        360-degree product view placeholder: connect Cloudinary spin assets or UploadThing image sets in production.
      </div>
    </div>
  );
}
