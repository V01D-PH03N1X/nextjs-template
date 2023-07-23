import Head from "next/head";

export default function Home() {
	const metaDescription = "Default Description";
	const metaAuthor = "Default Author";
	const metaKeywords = "Default Keywords";

	return (
		<>
			<Head>
				<title>Next.js + Tailwind CSS</title>
				<meta name='description' content={metaDescription} />
				<meta name='author' content={metaAuthor} />
				<meta name='keywords' content={metaDescription} />
			</Head>
			<main>
				<h1 className='text-4xl font-bold text-center'>
					{metaDescription}
				</h1>
			</main>
		</>
	);
}
