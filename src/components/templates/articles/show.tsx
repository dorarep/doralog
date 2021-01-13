import {FC} from "react";
import {SingleColumn} from "../../atoms/layouts/SingleColumn";
import {Header} from "../../organisms/common/Header";
import {Main} from "../../atoms/layouts/Main";
import {Article} from "../../organisms/article/Article";
import {Footer} from "../../organisms/common/Footer";

type Props = {
  frontmatter: {
    description?: string
    title: string
    created: number
    tags?: string[]
    thumbnail?: string
  }
  html: string
}

export const ArticlesShowTemplate: FC<Props> = (props) => (
  <>
    <SingleColumn>
      <Header />
      <Main>
        <div className="wrapper">
          <article>
            <Article
              title={props.frontmatter.title}
              thumbnail={props.frontmatter.thumbnail}
              created={props.frontmatter.created}
              tags={props.frontmatter.tags || []}
            >
              <div dangerouslySetInnerHTML={{ __html: props.html }} />
            </Article>
          </article>
        </div>
      </Main>
      <Footer />
    </SingleColumn>
    <style jsx>{`
      .wrapper {
        display: flex;
      }
      article {
        max-width: var(--content-width);
        background-color: white;
        padding: 1rem;
      }
    `}</style>
  </>
)
