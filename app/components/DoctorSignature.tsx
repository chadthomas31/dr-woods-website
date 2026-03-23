import Image from 'next/image'
import signatureImg from '../../public/images/robert-l-woods-signature.png'

type DoctorSignatureProps = {
  className?: string
  /** Renders as light signature on dark areas (footer, hero/banner overlays) via CSS filter. PNG stays transparent. */
  onDarkBackground?: boolean
}

export default function DoctorSignature({ className = '', onDarkBackground = false }: DoctorSignatureProps) {
  return (
    <Image
      src={signatureImg}
      alt="Signature: Robert L. Woods, M.D."
      className={`h-14 w-auto max-w-[min(100%,min(92vw,520px))] object-contain object-left sm:h-16 sm:max-w-[min(100%,560px)] md:h-[4.75rem] md:max-w-[min(100%,600px)] ${onDarkBackground ? 'brightness-0 invert' : ''} ${className}`}
      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 560px, 600px"
      priority={false}
    />
  )
}
