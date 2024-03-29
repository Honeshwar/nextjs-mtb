import Image from "next/image";

export default function Achievement({
  isMobile,
  src,
}: {
  isMobile: boolean;
  src: string;
}) {
  return (
    <Image
      priority={true}
      className="w-full h-fit max-h-[100vh] object-cover"
      width={isMobile ? 500 : 1920}
      height={isMobile ? 1080 : 700}
      src={src}
      alt="Achievement image"
      quality={10}
      // loading="lazy"
    />
  );
}
