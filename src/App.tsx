import ThemeSwitcher from "./theme.switcher";

export default function App() {
  return (
    <main className="bg-zinc-100 dark:bg-zinc-950 h-screen w-full p-10 flex flex-col justify-center items-center gap-4 duration-500 transition-all">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2 items-center justify-center">
          <div className="w-[120px]">
            <img src="src/assets/images/logo.png" alt="in development" className="w-full" />
          </div>
          <span className="font-bold text-orange-500 text-4xl font-lexend uppercase">
            Em desenvolvimento...
          </span>
        </div>
        <div className="w-[750px]">
          <img src="src/assets/images/in-deveopment-animation.png" alt="in development" className="w-full" />
        </div>
 
      </div>

      <footer>
      <ThemeSwitcher />
        <span className="text-sm text-zinc-500 dark:text-zinc-400 absolute bottom-2 right-2">
          Site sendo desenvolvido por{' '}
          <a
            href="https://www.instagram.com/ogomesdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Igor Gomes (@ogomesdev)
          </a>
        </span>
      </footer>
    </main>
  );
}
