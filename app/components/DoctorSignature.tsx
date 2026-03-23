import Image from 'next/image'
import signatureImg from '../../public/images/robert-l-woods-signature.jpg'

type DoctorSignatureProps = {
  className?: string
  /**
   * Renders the signature on a light panel — use on dark backgrounds (footer, hero banners)
   * when the artwork is dark ink (JPEG cannot preserve transparency like PNG).
   */
  onDarkBackground?: boolean
}

export default function DoctorSignature({ className = '', onDarkBackground = false }: DoctorSignatureProps) {
  const img = (
    <Image
      src={signatureImg}
      alt="Signature: Robert L. Woods, M.D."
      className={`h-8 w-auto max-w-[min(100%,320px)] object-contain object-left sm:h-10 ${className}`}
      sizes="(max-width: 640px) 240px, 320px"
    />
  )

  if (!onDarkBackground) return img

  return (
    <span className="inline-block rounded-lg bg-white/95 px-3 py-2 shadow-sm ring-1 ring-black/5">
      {img}
    </span>
  )
}
