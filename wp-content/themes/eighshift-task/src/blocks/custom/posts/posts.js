import { Component } from 'react';

import apiFetch from '@wordpress/apiFetch';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';

import { getActions } from 'EighshiftBlocksGetActions';
import manifest from './manifest.json';

import { PostsEditor } from './components/posts-editor';
import { PostsOptions } from './components/posts-options';
import { HeadingOptions } from '../../components/heading/components/heading-options';

export class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postNumber: props.attributes.postNumber,
      posts: null,
    };
  }

  componentDidMount() {
    apiFetch({ path: `/wp/v2/posts?per_page=${this.state.postNumber}` }).then((postList) => {
      return postList.map((postListItem) => {
        return {
          id: postListItem.id,
          url: postListItem.link,
          date: postListItem.date_formated,
          title: postListItem.title.rendered,
          excerpt: postListItem.excerpt.rendered,
          categories: postListItem.category_names,
          featuredImageFull: postListItem.featured_image.full,
          featuredImageThumb: postListItem.featured_image.thumbnail,
        };
      });
    }).then((postListArray) => {
      this.setState(() => {
        return {
          posts: postListArray,
        };
      });
    });
  }

  render() {
    const {
      posts,
    } = this.state;

    const attributes = {
      ...this.props.attributes,
      posts,
    };

    const {
      headingStyleColor,
      headingStyleSize,
    } = attributes;

    const actions = getActions(this.props, manifest);

    return (
      <Fragment>
        <InspectorControls>
          <HeadingOptions
            styleColor={headingStyleColor}
            onChangeStyleColor={actions.onChangeHeadingStyleColor}
            styleSize={headingStyleSize}
            onChangeStyleSize={actions.onChangeHeadingStyleSize}
          />
          <PostsOptions
            attributes={attributes}
            actions={actions}
          />
        </InspectorControls>

        <PostsEditor
          attributes={attributes}
          actions={actions}
        />
      </Fragment>
    );
  }
}
