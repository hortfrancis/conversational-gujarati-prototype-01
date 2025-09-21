interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <main className="flex flex-col gap-10 mt-4">
      {children}
    </main>
  );
}
