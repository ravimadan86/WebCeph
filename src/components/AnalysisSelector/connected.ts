import {
  MapDispatchToPropsFunction,
  MapStateToProps,
  connect,
} from 'react-redux';

import AnalysisSelector from './index';
import { DispatchProps, OwnProps, StateProps } from './props';

import {
  setAnalysis,
} from 'actions/workspace';

import {
  getActiveAnalysisId,
  isAnalysisLoading,
} from 'store/reducers/workspace/analysis';

const analyses = [
  'downs',
  'basic',
  'common',
  'dental',
  'bjork',
  'softTissues',
];

const mapStateToProps: MapStateToProps<StateProps, OwnProps> =
  (state: FinalState): StateProps => {
    return {
      analyses,
      currentAnalysisId: getActiveAnalysisId(state),
      isLoading: isAnalysisLoading(state),
    };
  };

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, OwnProps> =
  (dispatch: DispatchFunction): DispatchProps => {
    return {
      onChange: (id) => dispatch(setAnalysis(id)),
    };
  };

export default connect(
  mapStateToProps, mapDispatchToProps
)(AnalysisSelector);