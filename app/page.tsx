import { Dock } from "@/components/dock";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <section className="flex flex-col justify-center items-center w-full h-screen py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] overflow-hidden">
      <div className="container flex flex-col items-center text-center text-primary-foreground px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Hello, I'm Ivyn</h1>
        <p className="mt-4 max-w-3xl text-lg md:text-xl">
          Year 3 Information Systems Student at SMU | Passionate about Software Engineering, Machine Learning and AI
        </p>
      </div>
      <Dock />
    </section>
  </div>

  );
}
