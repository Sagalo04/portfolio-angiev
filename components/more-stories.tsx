import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section className='flex items-center flex-col'>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-1 md:gap-x-16 lg:gap-x-28 gap-y-20 md:gap-y-28 mb-32 md:w-1/2">
        <h2 className="justify-self-start text-center text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          Projects
        </h2>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
