import { allPosts, Post } from "content-collections"
import { notFound } from "next/navigation"

interface PostPage {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: PostPage): Promise<Metadata> {
  const params = await props.params;
  const post = allPosts.find((post) => post._meta.path === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: {
      absolute: post.title,
    },
  }
}

export default async function PostPage(props: PostPage) {
  const params = await props.params;
  const post = allPosts.find((post) => post._meta.path === params.slug)

  if (!post) return notFound();

  return <>
    <h3>{post.title}</h3>
    <p>{post.summary}</p>
  </>
}
