export default function LayoutGradient() {
  return (
    <>
      <div className="absolute bg-gradient size-[500px] lg:size-[60vw] top-[-4%] -right-[40%] lg:-top-[5%] lg:right-[14%] -rotate-90 -z-10 pointer-events-none rounded-full opacity-70 blur-md" />
      <div className="absolute bg-gradient size-[500px] lg:size-[60vw]  top-[90vh] left-[-50%] lg:left-[-15%] -rotate-90 -z-10 pointer-events-none rounded-full opacity-70 blur-md" />
      <div className="absolute bg-gradient size-[500px] lg:size-[60vw]  top-[140vh] right-[-50%] lg:right-[-15%] -rotate-90 -z-10 pointer-events-none rounded-full opacity-70 blur-md" />
      <div className="absolute bg-gradient size-[500px] lg:size-[60vw]  top-[200vh] right-[-50%] lg:left-[30%] -translate-x-1/2 -rotate-90 -z-10 pointer-events-none rounded-full opacity-70 blur-md" />
    </>
  );
}
