import {FC} from "react";
import {SingleColumn} from "../../atoms/layouts/SingleColumn";
import {Header} from "../../organisms/common/Header";
import {Main} from "../../atoms/layouts/Main";
import {Footer} from "../../organisms/common/Footer";
import {TagName} from "../../organisms/tags/TagName";
import {Articles} from "../../organisms/home/Articles";

type Pages = {
  title: string
  slug: string
  tags: string[]
  thumbnail?: string
}[]

type Props = {
  tag: string
  similarTags: string[]
  pages: Pages
}

export const TagsShowTemplate: FC<Props> = ({ tag, similarTags, pages }) => (
  <SingleColumn>
    <Header />
    <Main>
      <TagName tag={tag} similarTags={similarTags} />
      <Articles pages={pages} />
    </Main>
    <Footer />
  </SingleColumn>
)
