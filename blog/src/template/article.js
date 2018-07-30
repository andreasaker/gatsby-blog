import React from 'react';
import Link from 'gatsby-link';

const ArticleTemplate = ({data}) => (
    <div>
        <h1>{data.strapiArticle.Title}</h1>
        <p>{data.strapiArticle.Text}</p>
    </div>
)

export default ArticleTemplate

export const query = graphql`
    query ArticleTemplate($id: String!) {
        strapiArticle(id: {eq: $id}){
            Title
            Text
        }
    }
`