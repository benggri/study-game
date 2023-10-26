export default function FlowbiteLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="p-24 max-[500px]:p-0 max-[500px]:pt-24 items-center">
      {children}
    </div>
  );
}