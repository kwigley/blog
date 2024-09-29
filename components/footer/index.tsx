import Link from "@/components/link";
import { AppThemeSwitcher } from "@/components/theme";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between border-border border-t pt-2">
      <div className="flex gap-2 px-[2px] text-muted text-small">
        <Link href="https://x.com/kylewigs" text="X" underline />
        <Link href="https://github.com/kwigley" text="GitHub" underline />
        <Link href="https://linkedin.com/in/kylewigley" text="LinkedIn" underline />
      </div>
      <div className="text-muted text-small">
        <AppThemeSwitcher />
      </div>
    </div>
  );
};

export { Footer };
