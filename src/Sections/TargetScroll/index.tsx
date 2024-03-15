type Props = {
  targetId: string;
}

const TargetScroll = (props: Props) => {
  return <div className="target_scroll" id={props.targetId}></div>
}

export { TargetScroll };