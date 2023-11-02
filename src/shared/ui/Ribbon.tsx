export function Ribbon(props: {
  varaint: "success" | "pending" | "";
  icon: React.ReactNode;
}) {
  return (
    <div
      className={`${
        props.varaint === "success"
          ? "bg-accent2 text-accent2-foreground"
          : props.varaint === "pending"
          ? "bg-accent3 rotate-180  text-accent3-foreground   fill-accent3-foreground"
          : ""
      } w-12 h-12 flex justify-center items-center rounded-full`}
    >
      {props.icon}
    </div>
  );
}
