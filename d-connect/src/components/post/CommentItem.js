import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../redux/actions/postAction";
import Background from "../../img/bBg.jpg";

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { propsComment, postId, auth } = this.props;

    return (
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
        }}
        className="card card-body mb-3 text-white border border-info"
      >
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img
                className="rounded-circle d-none d-md-block"
                src={propsComment.avatar}
                alt=""
              />
            </a>
            <br />
            <p className="text-center">{propsComment.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{propsComment.text}</p>
            {propsComment.user === auth.user.id ? (
              <button
                type="button"
                onClick={this.onDeleteClick.bind(
                  this,
                  postId,
                  propsComment._id
                )}
                className="btn btn-danger mr-1"
              >
                <i className="fas fa-times" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  propsComment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
