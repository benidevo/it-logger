import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';
import LogItem from './LogItem';
import Preloader from '../layouts/Preloader';


const Logs = ({ log: { loading, logs }, getLogs }) => {
    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);

    if (loading || logs === null) {
        return <Preloader />;
    };

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {
                !loading && logs.length === 0 ?
                (<p className="center">There are no logs available</p>)
                :
                (logs.map(log => <LogItem log={log} key={log.id} />))
            }
        </ul>
    );
};

const mapStateToProps = (state) => ({
    log: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);
