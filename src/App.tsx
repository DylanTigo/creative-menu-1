import { motion, useReducedMotion } from "motion/react";
import FloatingMenu from "./components/FloatingMenu";
import Header from "./components/Header";
import PerspectiveText from "./components/PerspectiveText";

const ease = [0.22, 1, 0.36, 1] as const;

const heroTextVariants = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateX: -40,
    translateY: "100%",
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateX: 0,
    translateY: "0%",
    transition: {
      delay: 0.3 + i * 0.08,
      duration: 0.8,
      ease,
      opacity: { duration: 0.3, delay: 0.3 + i * 0.08 },
    },
  }),
};

const ctas = [
  {
    label: "How it works",
    className:
      "bg-secondary-1 w-fit text-white bg-black/50 backdrop-blur-md py-4 px-8 rounded-full mt-10 cursor-pointer overflow-hidden group",
  },
  {
    label: "Start a run",
    className:
      "bg-primary-1 w-fit text-black py-4 px-8 rounded-full mt-10 cursor-pointer overflow-hidden group",
  },
];

function App() {
  const reduce = useReducedMotion();

  return (
    <main className="relative">
      <section className="relative h-screen px-14 pt-10 pb-20">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <motion.div
            className="absolute inset-0 origin-center bg-[url('/back.png')] bg-cover bg-top"
            initial={
              reduce ? { transform: "scale(1)" } : { transform: "scale(1.08)" }
            }
            animate={{ transform: "scale(1)" }}
            transition={{ duration: reduce ? 0 : 1.2, ease }}
          />
        </div>
        <div className="relative z-10 flex h-full flex-col justify-between">
          <Header />
          <FloatingMenu />
          <div className="flex flex-col gap-6 text-white perspective-distant">
            <motion.h1
              className="text-7xl"
              custom={0}
              variants={heroTextVariants}
              initial="initial"
              animate="enter"
            >
              Music matched to your pace.
              <br />A run that stays in flow.
            </motion.h1>
            <motion.p
              custom={1}
              variants={heroTextVariants}
              initial="initial"
              animate="enter"
            >
              FlowBeat reads your stride and heart rate, then keeps the beat
              with you, <br />
              So you stay moving without dropping out of the rhythm.
            </motion.p>
            <div className="flex gap-4">
              {ctas.map((cta, i) => (
                <motion.button
                  key={cta.label}
                  type="button"
                  className={cta.className}
                  initial={
                    reduce
                      ? { opacity: 0 }
                      : { opacity: 0, transform: "translateY(30px)" }
                  }
                  animate={{ opacity: 1, transform: "translateY(0px)" }}
                  transition={{
                    delay: reduce ? 0 : 0.6 + i * 0.04,
                    duration: reduce ? 0.2 : 0.5,
                    ease,
                  }}
                >
                  <PerspectiveText label={cta.label} />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white h-[70vh] px-14 pt-10 pb-20 flex flex-col justify-center">
        <p className="text-3xl text-center max-w-2/3 mx-auto">
          Show up and run. FlowBeat holds the tempo - pace, breath, and music on
          the same beat, from the first step to the last.
        </p>
      </section>
    </main>
  );
}

export default App;
