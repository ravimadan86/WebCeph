import {
  connect,
  MapStateToProps,
  MapDispatchToPropsFunction,
} from 'react-redux';
import CephaloDropzone from './index';
import {
  StateProps,
  DispatchProps,
  OwnProps,
} from './props';
import {
  importFileRequested,
  loadImageFromURL,
} from 'actions/workspace';
import {
  DEMO_IMAGE_URL,
} from 'utils/config';

import { isAppOffline } from 'store/reducers/env/offline';

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = (state) => ({
  isOffline: isAppOffline(state),
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, OwnProps> = (dispatch) => (
  {
    onFilesDropped: (files) => dispatch(importFileRequested(files[0])),
    onDemoButtonClick: () => dispatch(loadImageFromURL({ url: DEMO_IMAGE_URL })),
  }
);

const connected = connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps, mapDispatchToProps,
)(CephaloDropzone);


export default connected;