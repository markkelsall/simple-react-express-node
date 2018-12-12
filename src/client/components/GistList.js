import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getGists } from '../actions/gitGistsAction';

class GistList extends Component {

    static propTypes = {
        getGists: PropTypes.func,
        gists: PropTypes.array,
        loading: PropTypes.bool
    }

    componentDidMount = () => {
        this.props.getGists();
    }

    render = () => {
        return (
            <div>
                {this.props.gists.map((gist, key) => {
                    return (<p key={key}>{gist.url}</p>);
                })}
            </div>
        );
    }
};

export default connect(
    state => ({
        gists: state.gitGists.list,
        loading: state.gitGists.loading
    }),
    { getGists }
)(GistList);
