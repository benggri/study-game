export default function FlowbiteLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="p-24 min-[320px]:p-0 min-[320px]:pt-24 items-center">
      {children}
    </div>
  );
}