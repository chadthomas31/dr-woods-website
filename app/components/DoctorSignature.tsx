import Image from 'next/image'
import signatureImg from '../../public/images/robert-l-woods-signature.png'

type DoctorSignatureProps = {
  className?: string
  /** Light signature on dark overlays/footer (black ink → white; transparency preserved). */
  onDarkBackground?: boolean
}

/**
 * Keep max width bounded: this image is ~1024px wide; without max-w-full + a constrained
 * parent, flex `min-width: auto` uses intrinsic width and breaks the header layout.
 */
export default function DoctorSignature({ className = '', onDarkBackground = false }: DoctorSignatureProps) {
  return (
    <Image
      src={signatureImg}
      alt="Signature: Robert L. Woods, M.D."
      className={`h-14 w-auto max-w-full object-contain object-left sm:h-16 md:h-[4.25rem] ${onDarkBackground ? 'brightness-0 invert' : ''} ${className}`}
      sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 400px"
      priority={false}
    />
  )
}
