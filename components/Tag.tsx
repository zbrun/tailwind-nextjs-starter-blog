import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mt-3 mr-3 text-sm font-medium text-cyan-400 uppercase hover:text-cyan-600"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
