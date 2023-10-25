export default function FlowbiteLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="p-24 items-center">
      {children}
    </div>
  );
}