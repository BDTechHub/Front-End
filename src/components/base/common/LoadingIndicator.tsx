import Image from "next/image";
import { cn } from "@/lib/utils";

export default function LoadingIndicator({
	className,
}: {
	className?: string | undefined;
}) {
	return (
		<Image
			unoptimized
			alt="Loading"
			src="/loading-light.gif"
			width={100}
			height={100}
			className={cn(className)}
		/>
	);
}
