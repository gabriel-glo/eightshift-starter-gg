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
          link: postListItem.link,
          date: new Date(postListItem.date),
          title: postListItem.title.rendered,
          excerpt: postListItem.excerpt.rendered,
          categoryIds: postListItem.categories,
        };
      });
    }).then((itemsArray) => {
      return itemsArray.map((item) => {
        return {
          ...item,
          dateParsed: {
            day: item.date.getDate(),
            month: item.date.getMonth() + 1,
            year: item.date.getFullYear(),
            hour: item.date.getHours(),
            minute: item.date.getMinutes(),
          },
        };
      });
    }).then((postListArray) => {
      console.log(postListArray);
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
