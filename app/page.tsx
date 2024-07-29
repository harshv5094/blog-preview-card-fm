import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-dvh grid place-items-center">
      <article className="bg-white w-[21em] md:w-[23em] h-[29rem] rounded-2xl shadow-[10px_8px_0px_black] border-[1.5px] border-black">
        <section className="w-full grid place-items-center">
          <Image
            className="rounded-lg pt-5"
            src="/illustration-article.svg"
            width={310}
            height={400}
            alt="illustration-article"
          />
        </section>

        <section className="m-4 md:m-6">
          <div className="p-1 text-md bg-cus-yellow w-[4.6em] rounded-md font-extrabold">
            Learning
          </div>

          <h3 className="text-md my-2 font-medium text-cus-gray-950 ">
            Published 21 Dec 2023
          </h3>

          <h2 className="text-xl font-extrabold hover:text-cus-yellow">
            HTML & CSS foundation
          </h2>

          <p className="text-cus-gray-500">
            These languages are the backbone of every website, defining
            structure, content and presentation.
          </p>

          <section className="flex justify-start gap-2 mt-2">
            <div>
              <Image
                src={'/image-avatar.webp'}
                width={35}
                height={35}
                alt="author-image"
              />
            </div>
            <h4 className="pt-1 pl-2 font-extrabold">Greg Hooper</h4>
          </section>
        </section>
      </article>
    </main>
  )
}
