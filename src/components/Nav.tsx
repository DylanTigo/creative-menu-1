import { cubicBezier, motion } from "motion/react";

const Links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/" },
  { label: "Services", href: "/" },
  { label: "Careers", href: "/" },
  { label: "Contact", href: "/" },
];

const SocialLinks = [
  { label: "Facebook", href: "/" },
  { label: "Twitter", href: "/" },
  { label: "Instagram", href: "/" },
  { label: "LinkedIn", href: "/" },
];

export default function Nav() {
  const menuVariants = {
    initial: {
      opacity: 0,
      rotateX: 90,
      translateX: -20,
      translateY: 40,
      transition: {
        duration: 0.5,
        ease: cubicBezier(1, 0, 0, 1),
      },
    },
    enter: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as never,
        opacity: { duration: 0.3 },
      },
      rotateX: 0,
      translateX: 0,
      translateY: 0,
    }),
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: cubicBezier(1, 0, 0, 1),
      },
    },
  };

  const socialVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.75 + i * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as never,
      },
    }),
    exit: {
      opacity: 0,
    },
  };
  return (
    <div className="h-full px-8 pb-12 flex flex-col justify-between">
      <div className="flex flex-col gap-4 pt-22">
        {Links.map((link, i) => (
          <motion.div
            key={link.label}
            className="text-4xl"
            custom={i}
            variants={menuVariants}
            animate="enter"
            exit="exit"
            initial="initial"
          >
            <a href={link.href}>{link.label}</a>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {SocialLinks.map((link, i) => (
          <motion.div
            key={link.label}
            className="text-sm"
            custom={i}
            variants={socialVariants}
            animate="enter"
            exit="exit"
            initial="initial"
          >
            <a href={link.href}>{link.label}</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
