import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentItem from "./CommentItem";

class CommentFeed extends Component {
  render() {
    const { propsComments, postId } = this.props;

    return (
      <div>
        {propsComments.map((comment) => (
          <CommentItem
            key={comment._id}
            propsComment={comment}
            postId={postId}
          />
        ))}
      </div>
    );
  }
}

CommentFeed.propTypes = {
  propsComments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired,
};

export default CommentFeed;
