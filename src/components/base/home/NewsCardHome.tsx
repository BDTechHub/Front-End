import { News } from "@/api/types/news/type";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { useState } from 'react';

interface NewsCardProps {
	data: News;
}

export default function NewsCardHome({ data }: NewsCardProps) {
	const router = useRouter()
  const href = `/news/${data?.id}`
	const [img, setImg] = useState(data.imageUrl)
  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(href)
  }

	return (
		<Link className="relative h-[49%] w-full" href={href} onClick={handleClick}>
		<div
			id="componentNewsTest"
			className="relative h-full w-full cursor-pointer bg-center scale-100 transition-all duration-500 hover:scale-105"
		>
			<Image
          src={data.imageUrl}
          alt={data.title + " Image"}
          width={500}
          height={500}
					onError={() => setImg('/newsNotFound.png')}
          className="w-full h-full object-cover "
        />
			<div className="absolute bottom-0 flex text-left justify-end flex-col w-full h-1/2 p-6 gap-1 2xl:gap-2 z-20">
				<h1
					className={"text-2xl 2xl:text-3xl font-medium text-white"}
				>
					{data.title}
				</h1>
				<p
					className={"text-lg 2xl:text-xl text-white"}
				>
					{data.updateDate}
				</p>
			</div>
			<div className="absolute bottom-0 bg-gradient-to-t from-black/90 to-transparent to-80% z-10 w-full h-full"></div>
		</div>
		</Link>
	);
}
