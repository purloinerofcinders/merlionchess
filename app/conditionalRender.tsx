type ConditionalRenderProps = {
  children: React.ReactNode;
  showWhen: boolean;
};

export default function ConditionalRender(props: ConditionalRenderProps) {
  if (props.showWhen) {
    return <>{props.children}</>;
  }
  
  return <></>;
}
