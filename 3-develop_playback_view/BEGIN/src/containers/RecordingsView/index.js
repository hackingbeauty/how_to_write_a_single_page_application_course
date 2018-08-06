import React, { Component }   from 'react';

import { styles } from './styles.scss';

/* actions */
import * as uiActionCreators from 'core/actions/actions-ui';

class RecordingsView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles}>
        Recordings View
      </div>
    );
  }
}


export default RecordingsView;