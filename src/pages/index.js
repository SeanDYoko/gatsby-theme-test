import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo/seo";
import Hero from "../components/hero/Hero";

const IndexPage = () => {
  const [data] = useStaticQuery(getHomePage).page.nodes;
  const { hero_banner } = data.elements;

  return (
    <Layout>
      <SEO title="Home" />
      <Hero banner={hero_banner.value[0].elements} />
      <section className="container">
        <h1>Main Page</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </section>
    </Layout>
  );
};

const getHomePage = graphql`
  query Home {
    page: allKontentItemPage(
      filter: {
        elements: {
          page_type_f9a68ec__page_type: {
            value: { elemMatch: { name: { eq: "Home Page" } } }
          }
        }
      }
    ) {
      nodes {
        elements {
          hero_banner {
            value {
              ... on kontent_item_banner {
                id
                elements {
                  title {
                    value
                  }
                  short_text {
                    value
                  }
                  cta_text {
                    value
                  }
                  background {
                    value {
                      fluid(maxWidth: 4096) {
                        ...KontentAssetFluid_withWebp
                      }
                    }
                  }
                }
              }
            }
          }
          metadata__title_tag {
            value
          }
          metadata__meta_description {
            value
          }
        }
      }
    }
  }
`;

export default IndexPage;
