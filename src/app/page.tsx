import { Hero } from "@/components/sections/hero";
// import { allPosts } from "content-collections";

export default function Home() {
  return (
    <div className="relative mx-auto w-full max-w-[620px] overflow-x-hidden px-2 py-12">
      <section className="items-center container mt-8 mb-24 space-y-12 leading-relaxed">
        <Hero />
        {/* <ul> */}
        {/*   {allPosts.map((post) => ( */}
        {/*     <li key={post._meta.path}> */}
        {/*       <a href={`/posts/${post._meta.path}`}> */}
        {/*         <h3>{post.title}</h3> */}
        {/*         <p>{post.summary}</p> */}
        {/*       </a> */}
        {/*     </li> */}
        {/*   ))} */}
        {/* </ul> */}
      </section>
    </div>
  );
}
