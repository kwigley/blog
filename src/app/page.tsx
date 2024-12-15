import { Hero } from "@/components/sections/hero";
// import { allPosts } from "content-collections";

export default function Home() {
  return (
    <div className="relative mx-auto w-full max-w-[620px] overflow-x-hidden px-2 py-12">
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
    </div>
  );
}
