import FloatingMenu from "./components/FloatingMenu";
import Header from "./components/Header";

function App() {
  return (
    <main className="relative">
      <section className=" bg-[url('/back.png')] bg-cover bg-top h-screen px-14 pt-10 pb-20 flex flex-col justify-between">
        <Header />
        <FloatingMenu />
        <div className="text-white flex flex-col gap-6">
          <h1 className="text-7xl">
            Music matched to your pace.
            <br />
            A run that stays in flow.
          </h1>
          <p>
            FlowBeat reads your stride and heart rate, then keeps the beat
            with you, <br />So you stay moving without dropping out of the rhythm.
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              className="bg-primary-1 w-fit text-black py-4 px-8 rounded-full mt-10"
            >
              Start a run
            </button>
            <button
              type="button"
              className="bg-secondary-1 w-fit text-white bg-black/50 backdrop-blur-md py-4 px-8 rounded-full mt-10"
            >
              How it works
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white h-[70vh] px-14 pt-10 pb-20 flex flex-col justify-center">
        <p className="text-3xl text-center max-w-2/3 mx-auto">
          Show up and run. FlowBeat holds the tempo - pace, breath, and music
          on the same beat, from the first step to the last.
        </p>
      </section>
    </main>
  );
}

export default App;
