import '../style';
import React from 'react';
import Swipeout from 'rc-swipeout';
import classNames from 'classnames';

//如果报错direction未定义是由于 react-hammerjs中的direction未前面没有加var
class SwipeAction extends React.Component{

  render() {
    debugger
    const {
      className, prefixCls, left = [], right = [], autoClose, disabled, onOpen, onClose, children,
    } = this.props;
    const wrapClass = classNames({
      [`${prefixCls}`]: 1,
      [className]: !!className,
    });

    return (left.length || right.length) ? (
      <div className={wrapClass}>
        <Swipeout
          prefixCls={prefixCls}
          left={left}
          right={right}
          autoClose={autoClose}
          disabled={disabled}
          onOpen={onOpen}
          onClose={onClose}
        >
          {children}
        </Swipeout>
      </div>
    ) : (
      <div className={wrapClass}>{children}</div>
    );
  }
}


SwipeAction.defaultProps = {
      prefixCls: 'am-swipe',
      title: '请确认操作',
      autoClose: false,
      disabled: false,
      left: [],
      right: [],
      onOpen() {},
      onClose() {},
};
SwipeAction.propTypes = {
  /** whether button is disabled*/
  autoClose:React.PropTypes.bool,
  disabled:React.PropTypes.bool,
  title: React.PropTypes.string,
  left: React.PropTypes.arrayOf(React.PropTypes.object),
  right: React.PropTypes.arrayOf(React.PropTypes.object),
  onOpen:React.PropTypes.func,
  style:React.PropTypes.object,
  /** web only */
  prefixCls: React.PropTypes.string,
  className: React.PropTypes.string,
  onClose:React.PropTypes.func,
  text: React.PropTypes.string,
  onPress:React.PropTypes.func,
};
SwipeAction.displayName = "SwipeAction";
module.exports=SwipeAction;
