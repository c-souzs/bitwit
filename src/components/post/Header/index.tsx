import classNames from "classnames"
import { Author, Maybe, Tag } from "graphql/generated/graphql"
import { roboto } from "pages/_app"

type HeaderPostProps = {
    title: string
    tags: Tag[]
    author: Maybe<Author> | undefined
    createdAt: string
}

const HeaderPost = ({ title, tags, author, createdAt }: HeaderPostProps) => {
    const isoDate = new Date(createdAt).toISOString();
    // Formata a string no padrão BR
    const formattedDate = new Intl.DateTimeFormat('pt-BR').format(new Date(isoDate));

    return (
        <div className='pt-14 mb-8'>
            <h1 className='text-4xl font-semibold text-emerald-500 mb-3'>{ title }</h1>
            <div className={classNames('flex flex-wrap gap-3 justify-between items-center ', roboto.className)}>
                <div className='flex flex-wrap gap-4'>
                    {
                        tags.map(({ name }) => <span key={`tag-${name}`} className='text-xs uppercase text-emerald-500 border border-emerald-500 rounded-full px-3 py-1'>{ name }</span>)
                    }
                </div>
                <div className='flex items-center gap-3'>
                    <img src={author?.picture?.url} alt={author?.name} title={`Autor: ${author?.name}`} className='w-10 h-10 rounded-full'/>
                    <div>
                        <p>{author?.name}</p>
                        <p className='text-sm text-black text-opacity-70'>Publicado em {formattedDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderPost