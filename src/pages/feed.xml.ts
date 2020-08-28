import ssgConfig from "../../amdxg.config";
import * as xmljs from "xml-js";
import pages from "../../gen/pages.json";

const FeedPage = () => null;

FeedPage.getInitialProps = async ({ res }) => {
  const xml = xmljs.js2xml({
    _declaration: {
      _attributes: {
        version: '1.0',
        encoding: 'utf-8'
      }
    },
    feed: {
      _attributes: {
        xmlns: 'http://www.w3.org/2005/Atom'
      },
      id: {
        _text: ssgConfig.host
      },
      title: {
        _text: ssgConfig.siteName
      },
      updated: {
        _text: pages[0].created
      },
      link: {
        _attributes: {
          rel: 'self',
          href: ssgConfig.host + 'feed.xml'
        }
      },
      entry: pages.map(page => ({
        id: {
          _text: ssgConfig.host + 'articles/' + page.slug
        },
        title: {
          _text: page.title
        },
        updated: {
          _text: page.created
        },
        summary: {
          _text: page.description
        }
      }))
    }
  }, { compact: true });

  res.setHeader('content-type', 'application/xml');
  res.write(xml);
  res.end();
};

export default FeedPage;
